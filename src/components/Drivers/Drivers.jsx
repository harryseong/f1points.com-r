import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import "./Drivers.scss";
import { nationCodes } from "../../constants/nation-codes";
import { Button } from "@material-ui/core";
var moment = require("moment");

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
            justify="flex-start"
            alignItems="center"
            spacing={2}
          >
            {drivers.map(driver => (
              <Grid item xs={12} sm={6} md={4} key={driver.driverId}>
                <div className="driver-card">
                  <img
                    className="driver-img"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/drivers/" +
                      driver.driverId +
                      ".jpg"
                    }
                    alt="driver-img"
                  />
                  <div className="driver-details">
                    <div className="driver-name-number-div">
                      <div className="driver-name">
                        {driver.givenName} {driver.familyName}
                      </div>
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
                    <div className="driver-dob">
                      {moment(driver.dateOfBirth, "YYYY-MM-DD").format(
                        "M/D/YYYY"
                      )}{" "}
                      (
                      {Math.floor(
                        moment
                          .duration(
                            moment().diff(
                              moment(driver.dateOfBirth, "YYYY-MM-DD")
                            )
                          )
                          .as("years")
                      )}
                      )
                    </div>
                  </div>
                  <div className="driver-number">#{driver.permanentNumber}</div>
                  <Button
                    href={driver.url}
                    target="_blank_"
                    className="driver-more-info-btn"
                  >
                    <span>
                      <i className="fas fa-external-link-alt" /> More Info
                    </span>
                  </Button>
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
