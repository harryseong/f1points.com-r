import React, { Component } from "react";
import { Grid, Button } from "@material-ui/core";
import { nationCodes } from "../../../constants/nation-codes";
import "./Driver.scss";
var moment = require("moment");

class Driver extends Component {
  constructor(props) {
    super(props);
    this.state = {
      driver: props.driver
    };
  }

  render() {
    const driver = this.state.driver;

    return (
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
              <div className="driver-nationality">{driver.nationality}</div>
            </div>
            <div className="driver-dob">
              {moment(driver.dateOfBirth, "YYYY-MM-DD").format("M/D/YYYY")} (
              {Math.floor(
                moment
                  .duration(
                    moment().diff(moment(driver.dateOfBirth, "YYYY-MM-DD"))
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
    );
  }
}

export default Driver;
