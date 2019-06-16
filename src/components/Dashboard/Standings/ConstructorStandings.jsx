import React, { Component } from "react";
import { connect } from "react-redux";

class ConnectedConstructorStandings extends Component {
    render() {
        return (
            <div>
                <h3>Constructor Standings</h3>
            </div>
        );
    }
}

const ConstructorStandings = connect()(ConnectedConstructorStandings);

export default ConstructorStandings;
