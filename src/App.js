import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.scss";
import { getAllDrivers } from "./actions/drivers";
import { routing } from "./configure-routing";
import { getAllConstructors } from "./actions/constructors";
import {
  getDriverStandings,
  getConstructorStandings
} from "./actions/standings";

const mapDispatchToProps = dispatch => {
  return {
    getAllDrivers: () => dispatch(getAllDrivers()),
    getAllConstructors: () => dispatch(getAllConstructors()),
    getDriverStandings: () => dispatch(getDriverStandings()),
    getConstructorStandings: () => dispatch(getConstructorStandings())
  };
};

class ConnectedApp extends Component {
  componentDidMount() {
    this.props.getAllDrivers();
    this.props.getAllConstructors();
    this.props.getDriverStandings();
    this.props.getConstructorStandings();
  }

  render() {
    return <div>{routing}</div>;
  }
}

const App = connect(
  null,
  mapDispatchToProps
)(ConnectedApp);

export default App;
