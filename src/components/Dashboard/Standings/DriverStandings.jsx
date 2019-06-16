import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { standings: state.standings.standings };
};

class ConnectedDriverStandings extends Component {
  render() {
    const standings = this.props.standings;
    return (
      <div>
        <h3>Driver Standings</h3>

        {standings.drivers.map(standing => (
          <div key={standing.Driver.driverId}>
            <h4>
              {standing.Driver.givenName} {standing.Driver.familyName}
            </h4>
            <h5>{standing.Constructors[0].name}</h5>
            <div>Position: {standing.position}</div>
            <div>Point: {standing.points}</div>
          </div>
        ))}
      </div>
    );
  }
}

const DriverStandings = connect(mapStateToProps)(ConnectedDriverStandings);

export default DriverStandings;
