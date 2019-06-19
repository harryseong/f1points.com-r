import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { AppBar, Toolbar, IconButton, Button } from "@material-ui/core";

const mapStateToProps = state => {
  return {
    drivers: state.drivers
  };
};

class ConnectedNavbar extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar className="navbar">
          <IconButton edge="start" color="inherit" aria-label="Open drawer">
            <i className="fas fa-bars" />
          </IconButton>

          <Link to="/">
            <img
              className="logo"
              src={
                process.env.PUBLIC_URL +
                "/assets/images/f1points_logo_full_basic_shadow.png"
              }
              alt="f1points_logo"
            />
          </Link>

          <Button color="inherit" to="/standings" component={Link}>
            Standings
          </Button>

          <Button color="inherit" to="/drivers" component={Link}>
            Drivers
          </Button>

          <Button color="inherit" to="/teams" component={Link}>
            Teams
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

const Navbar = connect(mapStateToProps)(ConnectedNavbar);

export default Navbar;
