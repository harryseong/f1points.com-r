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
        <img
          className="logo"
          src={
            process.env.PUBLIC_URL + "/assets/images/f1points_logo_full_2.png"
          }
          alt="f1points_logo"
        />

        <ul>
          <li>
            <Link to="/">Standings</Link>
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
