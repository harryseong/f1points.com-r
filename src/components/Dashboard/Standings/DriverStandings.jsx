import React, { Component } from "react";
import { connect } from "react-redux";
import { getDriverStandings } from "../../../actions/standings";
import uuidv1 from "uuid";

const mapStateToProps = state => {
    return { standings: state.standings };
};

const mapDispatchToProps = dispatch => {
    return { getDriverStandings: () => dispatch(getDriverStandings()) };
};

class ConnectedDriverStandings extends Component {
    componentDidMount() {
        this.props.getDriverStandings();
    }

    render() {
        const standings = this.props.standings.standings;
        return (
            <div>
                <h3>Driver Standings</h3>

                {standings.drivers.map(standing => (
                    <div key={uuidv1()}>
                        <h4>
                            {standing.Driver.givenName}{" "}
                            {standing.Driver.familyName}
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

const DriverStandings = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConnectedDriverStandings);

export default DriverStandings;
