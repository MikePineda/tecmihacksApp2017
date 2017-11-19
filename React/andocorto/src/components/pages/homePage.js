import React, { Component } from 'react';
import './homePage.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class HomePage extends Component {
  constructor (props) {
     super(props)
     this.state = {
       startDate: moment(),
       origen : null

     };
     this.publish = this.publish.bind(this);
     console.log("pro" + this);
     this.handleChange = this.handleChange.bind(this);
   }



   publish() {
     console.log( this.state.topicBox, this.state.payloadBox );
   }

   handleChange(target) {
     this.setState({
       [target.name]: target.value
     });
     console.log(target.name);
     console.log(target.value);
   }

   handleSubmit() {
//    console.log("Origen: " + this.state.origen);
    console.log( this.state.startDate, this.state.Origen );
}

  render() {
    return (
<div className = "mainForm">
    <section id="contact">
    <div className="section-content">
      <h1 className="section-header">Encuentra un viaje a la medida con<span className="content-header wow fadeIn " data-wow-delay="0.2s" data-wow-duration="2s"> Ando corto</span></h1>
      <h3>Encontrar algo en base a tu presupuesto nunca fue tan fácil</h3>
    </div>
    <div className="contact-section">
      <div className="container">
        <form>
        <div className="container-fluid">
            <div className="row">
          <div className="col-md-6 form-line">
            <div className="form-group">
              <label htmlFor="exampleInputUsername">Origen</label>
              <input type="text" name="origen"  className="form-control"  placeholder=" Origen " value={this.state.origen}   onChange={ this.handleChange }   />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail">Destino/s</label>
              <input type="email" className="form-control" id="exampleInputEmail" placeholder=" escribe tus destinos aquí " />
            </div>

          </div>
          <div className="col-md-6 ">
            <div className="form-group">
              <label htmlFor="telephone">Pasajeros:</label>
              <input type="number" className="form-control" id="passengers" placeholder=" Ingresar numero de pasajeros" />
              </div>
            <div className="form-group">
              <label htmlFor="description">Día de salida:</label>
              <DatePicker
                      name="startDate"
                      className="form-control"
                      selected={this.state.startDate}
                      onChange={this.handleChange}
                  />
              <br />
            </div>
          <div>
            <button onClick={this.handleSubmit} type="button" className="btn btn-default submit"><i className="fa fa-paper-plane" aria-hidden="true" />  ¡Buscar viajes!</button>
          </div>
          </div>
          </div>
          </div>
        </form>
      </div>
    </div>
      </section>
</div>
    );
  }
}//end of class

export default HomePage;
