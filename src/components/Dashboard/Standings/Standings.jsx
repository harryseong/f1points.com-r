import React, { Component } from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import DriverStandings from "./DriverStandings";
import ConstructorStandings from "./ConstructorStandings";
import "./Standings.scss";

class Standings extends Component {
  render() {
    return (
      <div>
        <h2>Standings</h2>

        <Router>
          <Link to="/standings/driver">
            <button>Driver</button>
          </Link>
          <Link to="/standings/constructor">
            <button>Constructor</button>
          </Link>

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
