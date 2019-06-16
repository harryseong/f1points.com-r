import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const mapStateToProps = state => {
  return {
    drivers: state.drivers
  };
};

class ConnectedNavbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="logo">F1 Points</div>

        <ul className="navLinks">
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/drivers">Drivers</Link>
          </li>
          <li>
            <Link to="/constructors">Constructors</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

const Navbar = connect(mapStateToProps)(ConnectedNavbar);

export default Navbar;
