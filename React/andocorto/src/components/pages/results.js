import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Results extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
         places: [],
         isLoading: true
      };
      this.componentDidMount = this.componentDidMount.bind(this);
    }



    componentDidMount() {
      this.setState ({isLoading: false});
      var passengersArray = [];
      var length = this.props.input.pasajeros; // user defined length

for(var i = 0; i < length; i++) {
    passengersArray.push("adult");
}
      console.log(passengersArray);
      console.log(this.props.input.tags);
      console.log("orpppp " +this.props.input.origen);
      axios.post('http://localhost:5000/buscar', {
    'origin': `${this.props.input.origen}`,
    'destination': this.props.input.tags,
    'passengers': passengersArray,
    'date': '19-11-2017',
    'limit': 50
    'maxprice' : this.props.input.presupuesto
    })
  .then((response) => {
    //const places = response.data.data.children.map(obj => obj.data);
  const places = response.data.map(obj => obj);
  this.setState({ places });
//  console.log(response.data);
    console.log(this.state.places);
  })
  .catch(function (error) {
    console.log(error);
  });
      /*
      axios.get(`http://www.reddit.com/r/${this.props.subreddit}.json`)
        .then(res => {
          const posts = res.data.data.children.map(obj => obj.data);
          this.setState({ posts });
        });


        <div>

        <ul>
          {this.state.places.map(place =>
            <li key={place[0]}>{place[1].price}</li>
          )}
        </ul>
    </div>
*/
    }
    render() {
        return (
          <div>
          <br />
<a href="http://localhost:3000" className="btn btn-primary btn-primary" >Realizar otra búsqueda</a>
<br />
<br />

      <div className="table-responsive">
  <table className="table">
    <thead>
      <tr>
        <th>Tu destino</th>
        <th>Autobús/Avión</th>
        <th>Empresa</th>
        <th>Rating</th>
        <th>Precio</th>
        <th> </th>
      </tr>
    </thead>
    <tbody>
      {this.state.places.map(place =>
        <tr key={place[0]}>
        <td key={place[1].destination}>{place[1].destination}</td>
        <td key={place[1].transport_type}>{place[1].transport_type}</td>
        <td key={place[1].transport_name}>{place[1].transport_name}</td>
        <td key={place[1].rating}>{place[1].rating} <span className="glyphicon glyphicon-star"></span>
        </td>
        <td key={place[0]}>{place[1].price * this.props.input.pasajeros}</td>
        <td><a href="#" className="btn btn-success"><span className="glyphicon glyphicon-usd"></span> Comprar</a></td>

        </tr>
      )}
    </tbody>
  </table>
  </div>
  </div>
        );
      }

}

export default Results;
