import React, { Component } from "react";
import { connect } from "react-redux";
import DriverStandingsChart from "../../Charts/DriverStandingsChart/DriverStandingsChart";

class ConnectedDriverStandings extends Component {
  render() {
    return (
      <div>
        <h3>Driver Standings</h3>

        <DriverStandingsChart />
      </div>
    );
  }
}

const DriverStandings = connect()(ConnectedDriverStandings);

export default DriverStandings;
