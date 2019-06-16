import React, { Component } from "react";
import { connect } from "react-redux";
import { createChartConfig } from "./chart-config";
import { constructorColors } from "../../../constants/constructor-colors";
var Chart = require("chart.js");

const mapStateToProps = state => {
  return {
    standings: state.standings.standings.constructors
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

    this.props.standings.map(standing => {
      dataset.push(parseInt(standing.points));
      labelset.push(standing.Constructor.name);
      colorset.push(colors[standing.Constructor.constructorId].color);
      color2set.push(colors[standing.Constructor.constructorId].color2);
    });

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
      <div>
        <h4>Constructor Standings Chart</h4>

        <canvas
          ref={chart => (this.chartCanvas = chart)}
          width="300"
          height="100"
        />
      </div>
    );
  }
}

const ConstructorStandingsChart = connect(mapStateToProps)(
  ConnectedConstructorStandingsChart
);

export default ConstructorStandingsChart;
