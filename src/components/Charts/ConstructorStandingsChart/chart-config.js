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
      xAxisID: "points",
      yAxisID: "constructors"
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        datalabels: {
          color: "#ffffff",
          font: {
            weight: "700"
          }
        }
      },
      title: {
        display: true,
        text: "Constructor Standings",
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
              labelString: "Points"
            },
            gridLines: {
              color: "#ffffff20"
            }
          }
        ],
        yAxes: [
          {
            scaleLabel: {
              display: false
            },
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              color: "#ffffff20"
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
