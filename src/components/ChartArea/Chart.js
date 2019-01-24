// lib: https://www.chartjs.org/docs/latest/
// demo: http://jerairrest.github.io/react-chartjs-2/

import React, { PureComponent } from "react";
import { Line } from "react-chartjs-2";
import { getDailyBTC } from "./../../api";

let data = {
  labels: [...new Array(24).keys()],
  datasets: [
    {
      label: "BTC",
      fill: false,
      lineTension: 0.1,
      borderColor: "#EC932F",
      backgroundColor: "#EC932F",
      pointBorderColor: "#EC932F",
      pointBackgroundColor: "#EC932F",
      pointHoverBackgroundColor: "#EC932F",
      pointHoverBorderColor: "#EC932F",
      data: []
    }
  ]
};

class Chart extends PureComponent {
  state = {
    time: [],
    points: []
  };

  componentDidMount() {
    getDailyBTC().then(data => {
      const time = data.Data.map(item => {
        const date = new Date(item.time);
        const hours = date.getHours().toString();
        const minutes = date.getMinutes().toString();
        return `${hours.length < 2 ? "0" + hours : hours}:${minutes.length < 2 ? minutes + "0" : minutes}`;
      });
      const res = data.Data.map(item => item.high);

      this.setState({ time: [...time], points: [...res] });
    });
  }

  render() {
    const { time, points } = this.state;
    data.labels = time;
    data.datasets[0].data = points;
    //console.log(data)
    return (
      <div>
        <Line data={data} />
      </div>
    );
  }
}

export default Chart;
