import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Drivers from "./components/Drivers/Drivers";
import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import Constructors from "./components/Constructors/Constructors";
import Standings from "./components/Dashboard/Standings/Standings";

export const routing = (
  <Router>
    <Navbar />
    <div className="content">
      <Route exact path="/" component={Dashboard} />
      <Route path="/standings" component={Standings} />
      <Route path="/drivers" component={Drivers} />
      <Route path="/teams" component={Constructors} />
    </div>
  </Router>
);
