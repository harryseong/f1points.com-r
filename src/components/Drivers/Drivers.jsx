import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import "./Drivers.scss";
import { nationCodes } from "../../constants/nation-codes";

const mapStateToProps = state => {
  return { drivers: state.drivers.drivers };
};

class ConnectedDrivers extends Component {
  render() {
    const drivers = this.props.drivers;

    return (
      <div>
        <h1>Drivers</h1>

        <div className="root">
          <Grid
            container
            direction="row"
            justify="start"
            alignItems="center"
            spacing={1}
          >
            {drivers.map(driver => (
              <Grid item xs={12} sm={6} md={4} key={driver.driverId}>
                <div className="driver-card">
                  <img
                    className="driver-img"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvg0JBkqIduSMKCqEHjI-c2-wXggBXE-Rs6MGrYBB0bwoAMXLe"
                    alt=""
                  />
                  <div className="driver-details">
                    <div className="driver-name">
                      {driver.givenName} {driver.familyName}
                    </div>
                    <div className="driver-nationality-div">
                      <img
                        className="nation-flag"
                        src={
                          "https://www.countryflags.io/" +
                          nationCodes[driver.nationality] +
                          "/flat/64.png"
                        }
                        alt={driver.nationality}
                      />{" "}
                      <div className="driver-nationality">
                        {driver.nationality}
                      </div>
                    </div>
                    <div className="driver-dob">{driver.dateOfBirth}</div>
                    <div className="driver-more-info-link">
                      <a href={driver.url}>More driver info</a>
                    </div>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    );
  }
}

const Drivers = connect(mapStateToProps)(ConnectedDrivers);

export default Drivers;
