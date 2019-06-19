import React, { Component } from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import DriverStandings from "./DriverStandings";
import ConstructorStandings from "./ConstructorStandings";
import "./Standings.scss";
import { Button } from "@material-ui/core";

class Standings extends Component {
  render() {
    return (
      <div>
        <h1>Standings</h1>

        <Router>
          <Button
            variant="outlined"
            className="btn"
            to="/standings/driver"
            component={Link}
          >
            Driver
          </Button>

          <Button
            variant="outlined"
            className="btn"
            to="/standings/constructor"
            component={Link}
          >
            Constructor
          </Button>
          <div>
            <Route path="/standings/driver" component={DriverStandings} />
            <Route
              path="/standings/constructor"
              component={ConstructorStandings}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default Standings;
