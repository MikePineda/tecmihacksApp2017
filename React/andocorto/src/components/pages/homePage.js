import React, { Component } from 'react';
import './homePage.css';


class HomePage extends Component {
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
        <div class="container-fluid">
            <div class="row">
          <div className="col-md-6 form-line">
            <div className="form-group">
              <label htmlFor="exampleInputUsername">Origen</label>
              <input type="text" className="form-control" id placeholder=" Origen " />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail">Destino/s</label>
              <input type="email" className="form-control" id="exampleInputEmail" placeholder=" escribe tus destinos aquí " />
            </div>

          </div>
          <div className="col-md-6 ">
            <div className="form-group">
              <label htmlFor="telephone">Pasajeros:</label>
              <input type="tel" className="form-control" id="passengers" placeholder=" Enter 10-digit mobile no." />
              </div>
            <div className="form-group">
              <label htmlFor="description">Día de salida:</label>
              <br />
            </div>
          <div>
            <button type="button" className="btn btn-default submit"><i className="fa fa-paper-plane" aria-hidden="true" />  ¡Buscar viajes!</button>
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
