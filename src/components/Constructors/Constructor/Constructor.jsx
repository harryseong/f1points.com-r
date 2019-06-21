import React, { Component } from "react";
import "./Constructor.scss";
import { nationCodes } from "../../../constants/nation-codes";
import { Grid, Button } from "@material-ui/core";

class Constructor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      constructor: props.constructor
    };
  }

  render() {
    const constructor = this.state.constructor;

    return (
      <Grid item xs={12} sm={6} md={4} key={constructor.constructorId}>
        <div className={"constructor-card " + constructor.constructorId}>
          <img
            className="constructor-img"
            src={
              process.env.PUBLIC_URL +
              "/assets/images/constructors/" +
              constructor.constructorId +
              ".jpg"
            }
            alt="constructor-img"
          />
          <div className="constructor-details">
            <div className="constructor-name">{constructor.name}</div>
            <div className="driver-nationality-div">
              <img
                className="nation-flag"
                src={
                  "https://www.countryflags.io/" +
                  nationCodes[constructor.nationality] +
                  "/flat/64.png"
                }
                alt={constructor.nationality}
              />{" "}
              <div className="constructor-nationality">
                {constructor.nationality}
              </div>
            </div>
          </div>

          <Button
            href={constructor.url}
            target="_blank_"
            className="constructor-more-info-btn"
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

export default Constructor;
