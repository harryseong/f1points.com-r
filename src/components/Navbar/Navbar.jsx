import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const mapStateToProps = state => {
    return {
        drivers: state.drivers
    };
};

class ConnectedNavbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <div>F1 Points</div>

                <div>
                    <Link to="/">Dashboard</Link>
                    <Link to="/drivers">Drivers</Link>
                    <Link to="/constructors">Constructors</Link>
                </div>
            </nav>
        );
    }
}

const Navbar = connect(mapStateToProps)(ConnectedNavbar);

export default Navbar;
