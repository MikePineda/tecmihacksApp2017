import React, { Component } from 'react';
import './homePage.css';

class HomePage extends Component {
  render() {
    return (
<div className = "container-fluid">



    <section id="contact">
    <div className="section-content">
      <h1 className="section-header">Get in <span className="content-header wow fadeIn " data-wow-delay="0.2s" data-wow-duration="2s"> Touch with us</span></h1>
      <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h3>
    </div>
    <div className="contact-section">
      <div className="container">
        <form>
          <div className="col-md-6 form-line">
            <div className="form-group">
              <label htmlFor="exampleInputUsername">Your name</label>
              <input type="text" className="form-control" id placeholder=" Enter Name" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail">Email Address</label>
              <input type="email" className="form-control" id="exampleInputEmail" placeholder=" Enter Email id" />
            </div>
            <div className="form-group">
              <label htmlFor="telephone">Mobile No.</label>
              <input type="tel" className="form-control" id="telephone" placeholder=" Enter 10-digit mobile no." />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="description"> Message</label>
              <textarea className="form-control" id="description" placeholder="Enter Your Message" defaultValue={""} />
            </div>
            <div>
              <button type="button" className="btn btn-default submit"><i className="fa fa-paper-plane" aria-hidden="true" />  Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </div>
      </section>
  <br/><br/>
</div>
    );
  }
}

export default HomePage;
