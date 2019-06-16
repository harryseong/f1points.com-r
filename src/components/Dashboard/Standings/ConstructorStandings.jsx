import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { standings: state.standings.standings };
};

class ConnectedConstructorStandings extends Component {
  render() {
    const standings = this.props.standings;
    return (
      <div>
        <h3>Constructor Standings</h3>

        {standings.constructors.map(standing => (
          <div key={standing.Constructor.constructorId}>
            <h4>{standing.Constructor.name}</h4>
            <div>Position: {standing.position}</div>
            <div>Points: {standing.points}</div>
            <div>Wins: {standing.wins}</div>
          </div>
        ))}
      </div>
    );
  }
}

const ConstructorStandings = connect(mapStateToProps)(
  ConnectedConstructorStandings
);

export default ConstructorStandings;
