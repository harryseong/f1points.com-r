import React, { Component } from "react";
import { connect } from "react-redux";
import ConstructorStandingsChart from "../../Charts/ConstructorStandingsChart/ConstructorStandingsChart";

class ConnectedConstructorStandings extends Component {
  render() {
    return (
      <div>
        <h3>Constructor Standings</h3>

        <ConstructorStandingsChart />
      </div>
    );
  }
}

const ConstructorStandings = connect()(ConnectedConstructorStandings);

export default ConstructorStandings;
