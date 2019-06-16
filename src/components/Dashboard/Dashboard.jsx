import React, { Component } from "react";
import Standings from "./Standings/Standings";

class Dashboard extends Component {
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <p>This is the dashboard.</p>

                <Standings />
            </div>
        );
    }
}

export default Dashboard;
