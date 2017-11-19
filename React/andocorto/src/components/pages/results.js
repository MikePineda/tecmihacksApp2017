import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Results extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
         places: []
      };
      this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount() {
      axios.post('http://localhost:5000/buscar', {
    'origin': 'ciudad-de-mexico',
    'destination': ['cancun', 'guadalajara','culiacan'],
    'passengers': ['adult'],
    'date': '26-11-2017',
    'limit': 20
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
      <tr>
        <td>Culiacan de ricos</td>
        <td>60</td>
        <td>Copixil</td>
        <td>5.0</td>
        <td>23342</td>
      </tr>
      {this.state.places.map(place =>
        <tr key={place[0]}>
        <td key={place[1].destination}>{place[1].destination}</td>
        <td key={place[1].transport_type}>{place[1].transport_type}</td>
        <td key={place[1].transport_name}>{place[1].transport_name}</td>
        <td key={place[1].rating}>{place[1].rating} <span className="glyphicon glyphicon-star"></span>
        </td>
        <td key={place[0]}>{place[1].price}</td>
        <td><a href="#" className="btn btn-success"><span className="glyphicon glyphicon-usd"></span> Comprar</a></td>

        </tr>
      )}
    </tbody>
  </table>
  </div>
        );
      }

}

export default Results;
