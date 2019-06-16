import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.scss";
import { getAllDrivers } from "./actions/drivers";
import { routing } from "./configure-routing";
import { getAllConstructors } from "./actions/constructors";

const mapDispatchToProps = dispatch => {
    return {
        getAllDrivers: () => dispatch(getAllDrivers()),
        getAllConstructors: () => dispatch(getAllConstructors())
    };
};

class ConnectedApp extends Component {
    componentDidMount() {
        this.props.getAllDrivers();
        this.props.getAllConstructors();
    }

    render() {
        return (
            <div>
                <div>{routing}</div>
            </div>
        );
    }
}

const App = connect(
    null,
    mapDispatchToProps
)(ConnectedApp);

export default App;
