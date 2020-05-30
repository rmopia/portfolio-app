import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer id="sticky-footer">
        <div className="navbar fixed-bottom ftr">
          <small className="mx-auto">Copyright &copy; robertmopia</small>
        </div>
      </footer>
    );
  }
}

export default Footer;
