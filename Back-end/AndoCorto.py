
from flask import Flask, abort, request, jsonify
import requests
import json
import time

app = Flask(__name__)

BASE_API_URL_V1 = "https://www.reservamos.mx/api/v1/"
BASE_API_URL_V2 = "https://www.reservamos.mx/api/v2/"


@app.route("/", methods=["GET"])
def hello():
    return "Hello World!"


@app.route("/buscar", methods=["POST"])
def buscar():
    if not request.get_json(silent=True):
        abort(400)

    postdata = request.get_json(silent=True)
    search_ids = []
    searchs = []
    for destination in postdata["destination"]:
        data = {
            "origin": postdata["origin"],
            "destination": destination,
            "passengers": postdata["passengers"],
            "date": postdata["date"]
            }
        idrequest = requests.post(BASE_API_URL_V2 + "search", data=data)
        search = idrequest.json()
        search_ids.append(search["search"]["id"])

    for search_id in search_ids:
        bus = {"type": "bus"}
        plane = {"type": "plane"}
        sbus = requests.get(BASE_API_URL_V2 + "search" + "/" + str(search_id), params=bus)
        splane = requests.get(BASE_API_URL_V2 + "search" + "/" + str(search_id), params=plane)

        while True:
            time.sleep(.2)
            sbus = requests.get(BASE_API_URL_V2 + "search" + "/" + str(search_id), params=bus)
            splane = requests.get(BASE_API_URL_V2 + "search" + "/" + str(search_id), params=plane)
            searchs_not_none = splane is not None and sbus is not None
            if searchs_not_none: #and splane.json()["state"] is "finished" and sbus.json()["state"] is "finished":
                break
        # For the meantime, consider a pending search enough as it would take quite a bit of time to await for a finished one
        searchs.append(sbus.json())
        searchs.append(splane.json())
    trips = dict()
    for s in searchs:
        for trip in (s.get("trips", []) + s.get("flights", [])):
            tripd = dict()
            tripd["transport_type"] = trip["transport_type"]
            tripd["price"] = trip['pricing']['total']
            tripd["duration"] = trip["duration"]
            tripd["arrival"] = trip["arrival"]
            tripd["departure"] = trip["departure"]
            tripd["destination"] = trip["destination_id"]
            if trip["transport_type"] == "flight":
                tripd["stops"] = len(trip["legs"])
                tripd["rating"] = "no disponible"
                tripd["transport_name"] = s["carriers"][trip["legs"][0]["carrier_id"]]["name"]
            if trip["transport_type"] == "bus":
                tripd["stops"] = trip["stops"]
                tripd["rating"] = s["lines"][trip["line_id"]]["average_ratings"]
                tripd["transport_name"] = s["lines"][trip["line_id"]]["name"]
                tripd["destination"] = s["terminals"][trip["destination_id"]]["city_name"]
            trips[trip["id"]] = tripd
    sorted_trips = sorted(trips.items(), key=lambda x: x[1]['price'])
    return jsonify(sorted_trips[:postdata.get("limit", 50)])

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=False, threaded=True)