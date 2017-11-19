
from flask import Flask, abort, request, jsonify
import requests
import json
import time
from pprint import pprint

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
            time.sleep(.4)
            sbus = requests.get(BASE_API_URL_V2 + "search" + "/" + str(search_id), params=bus)
            splane = requests.get(BASE_API_URL_V2 + "search" + "/" + str(search_id), params=plane)
            searchs_not_none = splane is not None and sbus is not None
            if searchs_not_none: #and splane.json()["state"] is "finished" and sbus.json()["state"] is "finished":
                break
        
        searchs.append(sbus.json())
        searchs.append(splane.json())

    return jsonify(searchs)

if __name__ == '__main__':
    app.run(host='10.76.29.84', port=5000, debug=False, threaded=True)