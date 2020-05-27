import React, { Component } from "react";

class ContactForm extends Component {
  state = {};
  render() {
    return (
      <div className="card" style={{ width: "20rem" }}>
        <div className="card-body">
          <h5 className="card-title">Contact</h5>
          <p className="card-text">Message me something</p>
        </div>
      </div>
    );
  }
}

export default ContactForm;
