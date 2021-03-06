import React, { Component } from "react";
import { connect } from "react-redux";
import { createChartConfig } from "./chart-config";
import { constructorColors } from "../../../constants/constructor-colors";
var Chart = require("chart.js");

const mapStateToProps = state => {
  return {
    standings: state.standings.drivers
  };
};

class ConnectedDriverStandingsChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chart: null
    };
  }

  componentDidMount() {
    const chartCanvas = this.chartCanvas;

    const colors = constructorColors;
    let dataset = [];
    let labelset = [];
    let colorset = [];
    let color2set = [];

    for (const standing of this.props.standings) {
      dataset.push(parseInt(standing.points));
      labelset.push(
        standing.position +
          ". " +
          standing.Driver.givenName +
          " " +
          standing.Driver.familyName
      );
      colorset.push(colors[standing.Constructors[0].constructorId].color);
      color2set.push(colors[standing.Constructors[0].constructorId].color2);
    }

    const chartConfig = createChartConfig(
      dataset,
      labelset,
      colorset,
      color2set
    );
    this.setState = {
      chart: new Chart(chartCanvas, chartConfig)
    };
  }

  render() {
    return (
      <div className="chart-div">
        <canvas height="600" ref={chart => (this.chartCanvas = chart)} />
      </div>
    );
  }
}

const DriverStandingsChart = connect(mapStateToProps)(
  ConnectedDriverStandingsChart
);

export default DriverStandingsChart;
