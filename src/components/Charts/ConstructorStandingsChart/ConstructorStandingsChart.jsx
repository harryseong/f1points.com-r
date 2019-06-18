import React, { Component } from "react";
import { connect } from "react-redux";
import { createChartConfig } from "./chart-config";
import { constructorColors } from "../../../constants/constructor-colors";
var Chart = require("chart.js");

const mapStateToProps = state => {
  return {
    standings: state.standings.constructors
  };
};

class ConnectedConstructorStandingsChart extends Component {
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
      labelset.push(standing.position + ". " + standing.Constructor.name);
      colorset.push(colors[standing.Constructor.constructorId].color);
      color2set.push(colors[standing.Constructor.constructorId].color2);
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
        <canvas height="500" ref={chart => (this.chartCanvas = chart)} />
      </div>
    );
  }
}

const ConstructorStandingsChart = connect(mapStateToProps)(
  ConnectedConstructorStandingsChart
);

export default ConstructorStandingsChart;
