import React, { Component } from "react";
import Standings from "./Standings/Standings";
import DriverStandingsChart from "../Charts/DriverStandingsChart/DriverStandingsChart";
import ConstructorStandingsChart from "../Charts/ConstructorStandingsChart/ConstructorStandingsChart";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <p>This is the dashboard.</p>

        <DriverStandingsChart />

        <ConstructorStandingsChart />

        <Standings />
      </div>
    );
  }
}

export default Dashboard;
