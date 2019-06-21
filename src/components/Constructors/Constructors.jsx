import React, { Component } from "react";
import { connect } from "react-redux";
import "./Constructors.scss";
import Grid from "@material-ui/core/Grid";
import Constructor from "./Constructor/Constructor";

const mapStateToProps = state => {
  return { constructors: state.constructors.constructors };
};

class ConnectedConstructors extends Component {
  render() {
    const constructors = this.props.constructors;

    return (
      <div>
        <h1>Teams</h1>

        <div className="root">
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            spacing={2}
          >
            {constructors.map(constructor => (
              <Constructor constructor={constructor} />
            ))}
          </Grid>
        </div>
      </div>
    );
  }
}

const Constructors = connect(mapStateToProps)(ConnectedConstructors);

export default Constructors;
