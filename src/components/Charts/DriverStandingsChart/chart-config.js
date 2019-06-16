import { constructorColors } from "../../../constants/constructor-colors";

export const createChartConfig = (dataset, labelset, colorset, color2set) => {
  return {
    type: "horizontalBar",
    data: {
      labels: labelset,
      datasets: [
        {
          label: "Points",
          data: dataset,
          backgroundColor: color2set,
          borderColor: colorset,
          borderWidth: 1
        }
      ],
      xAxisID: "Driver",
      yAxisID: "Points"
    },
    options: {
      title: {
        display: true,
        text: "Driver Standings",
        fontSize: 14
      },
      legend: {
        display: false
      },
      elements: {
        line: {
          tension: 0
        }
      },
      scales: {
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Driver"
            }
          }
        ],
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Points"
            },
            ticks: {
              beginAtZero: true
            }
          }
        ]
      },
      tooltips: {
        enabled: true,
        mode: "nearest",
        intersect: false
      }
    }
  };
};
