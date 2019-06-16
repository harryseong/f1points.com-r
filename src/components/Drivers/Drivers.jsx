import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { drivers: state.drivers.drivers };
};

class ConnectedDrivers extends Component {
    render() {
        const drivers = this.props.drivers;

        return (
            <div>
                <h1>Drivers</h1>

                {drivers.map(driver => (
                    <div key={driver.driverId}>
                        <h4>
                            {driver.givenName} {driver.familyName}
                        </h4>
                        <div>Nationality: {driver.nationality}</div>
                        <div>Date of Birth: {driver.dateOfBirth}</div>
                        <div>
                            <a
                                href={driver.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Driver Info
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

const Drivers = connect(mapStateToProps)(ConnectedDrivers);

export default Drivers;
