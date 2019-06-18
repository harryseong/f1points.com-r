import React, { Component } from "react";
import { connect } from "react-redux";
import "./Constructors.scss";
import Grid from "@material-ui/core/Grid";
import { nationCodes } from "../../constants/nation-codes";

const mapStateToProps = state => {
  return { constructors: state.constructors.constructors };
};

class ConnectedConstructors extends Component {
  render() {
    const constructors = this.props.constructors;

    return (
      <div>
        <h1>Constructors</h1>

        <div className="root">
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            spacing={2}
          >
            {constructors.map(constructor => (
              <Grid item xs={12} sm={6} md={4} key={constructor.constructorId}>
                <div
                  className={"constructor-card " + constructor.constructorId}
                >
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
                    <div className="constructor-more-info-link">
                      <a href={constructor.url}>More constructor info</a>
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

const Constructors = connect(mapStateToProps)(ConnectedConstructors);

export default Constructors;
