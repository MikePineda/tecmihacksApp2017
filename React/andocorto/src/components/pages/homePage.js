import React, { Component } from 'react';
import './homePage.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import Results  from './results';

class HomePage extends Component {
  constructor (props) {
     super(props)
     /*
     this.state = {
       startDate: moment(),
       origen : ""

     };
     */
     this.state = {

       input: {
               origen: "",
               destino: "",
               pasajeros: 1,
               startDate: moment(),
              showComponent: false,
           }


     };
     console.log(1);
     this.handleSubmit = this.handleSubmit.bind(this);
     this.handleInputChange = this.handleInputChange.bind(this);

   }




   handleInputChange(newPartialInput) {
     console.log(newPartialInput);

          this.setState(state => ({
              ...state,
              input: {
                  ...state.input,
                  ...newPartialInput
              }
          }))

          console.log(newPartialInput);
      }




   handleSubmit(newPartialInput) {

     this.setState({showComponent: true });


//    console.log("Origen: " + this.state.origen);
//    console.log(this.state.startDate);
    console.log(this.state.input.origen);
    console.log(this.state.input.destino);
    console.log(this.state.input.pasajeros);
    console.log(this.state.input.startDate);
    console.log(this.state.input.showComponent);

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
              <input type="text" name="origen"  className="form-control"  placeholder=" Origen " value={this.state.input.origen}   onChange={e => this.handleInputChange({origen: e.target.value})}/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail">Destino/s</label>
              <input type="email" className="form-control" id="exampleInputEmail" placeholder=" escribe tus destinos aquí " value={this.state.input.destino}   onChange={e => this.handleInputChange({destino: e.target.value})} />
            </div>

          </div>
          <div className="col-md-6 ">
            <div className="form-group">
              <label htmlFor="telephone">Pasajeros:</label>
              <input type="number" className="form-control" id="passengers" placeholder=" Ingresar numero de pasajeros" value={this.state.input.pasajeros}   onChange={e => this.handleInputChange({pasajeros: e.target.value})} />
              </div>
            <div className="form-group">
              <label htmlFor="description">Día de salida:</label>
              <DatePicker
                      name="startDate"
                      className="form-control"
                      onChange ={e => this.handleInputChange({startDate: e.target})}
                      selected={this.state.input.startDate}
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

      {this.state.showComponent ?
                 <Results input={this.state.input}/> :
                 <p>boom</p>
              }

</div>
    );
  }
}//end of class

export default HomePage;
