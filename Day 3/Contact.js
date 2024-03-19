import React, { Component } from 'react';
import '../layout/Contact.css';
import { Link } from "react-router-dom";

class Contact extends Component {
  state = {};

  render() {
    return (
      <div className="background-image">
        <h2>
        <Link to="/Home" className="back-button">
        Back to Home
      </Link>
        </h2>
        <div className="content-column">
          <div style={{ textAlign: "center", marginTop: "50px" }}>
             <h2 style={{ color: 'white' }}>Website</h2>
            <p style={{ color: 'yellow' }}>www.e-job4all.com</p>
            <h2 style={{ color: 'white' }}>Email Address</h2>
            <p style={{ color: 'yellow' }}>e-job4all@gmail.com</p>
            
            <div className='ph'></div>
            <h2 style={{ color: 'white' }}>Phone Number</h2>
            <p style={{ color: 'yellow' }}>FOR ANY QUERIES, YOU MAY CALL US AT<br></br>1800-4546-8749</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
