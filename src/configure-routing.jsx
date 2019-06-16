import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Drivers from "./components/Drivers/Drivers";
import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import Constructors from "./components/Constructors/Constructors";

export const routing = (
  <Router>
    <Navbar />
    <div className="content">
      <Route exact path="/" component={Dashboard} />
      <Route path="/drivers" component={Drivers} />
      <Route path="/constructors" component={Constructors} />
    </div>
  </Router>
);
