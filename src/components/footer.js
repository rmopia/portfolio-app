import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="ftr">
        <div className="foot">
          <small className="mx-auto">
            Copyright &copy; {new Date().getFullYear()} robertmopia | All rights
            reserved
          </small>
        </div>
      </footer>
    );
  }
}

export default Footer;
