import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import "./Drivers.scss";
import Driver from "./Driver/Driver";

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
              <Driver driver={driver} />
            ))}
          </Grid>
        </div>
      </div>
    );
  }
}

const Drivers = connect(mapStateToProps)(ConnectedDrivers);

export default Drivers;
