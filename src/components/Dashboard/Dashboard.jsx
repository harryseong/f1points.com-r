import React, { Component } from "react";
import Standings from "./Standings/Standings";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>

        <Standings />
      </div>
    );
  }
}

export default Dashboard;
