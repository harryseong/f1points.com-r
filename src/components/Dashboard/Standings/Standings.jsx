import React, { Component } from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import DriverStandings from "./DriverStandings";
import ConstructorStandings from "./ConstructorStandings";

class Standings extends Component {
    render() {
        return (
            <div>
                <h2>Standings</h2>

                <Router>
                    <Link to="/standings/driver">Driver</Link>
                    <Link to="/standings/constructor">Constructor</Link>

                    <div>
                        <Route
                            path="/standings/driver"
                            component={DriverStandings}
                        />
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
