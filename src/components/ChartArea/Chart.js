// lib: https://www.chartjs.org/docs/latest/
// demo: http://jerairrest.github.io/react-chartjs-2/

import React, {PureComponent} from 'react';
import {Line} from 'react-chartjs-2';
import {getDailyBTC} from './../../api';

const data = {
  labels: [],
  datasets: [
    {
      label: 'buy',
      fill: false,
      lineTension: 0.1,
      borderColor: '#EC932F',
      backgroundColor: '#EC932F',
      pointBorderColor: '#EC932F',
      pointBackgroundColor: '#EC932F',
      pointHoverBackgroundColor: '#EC932F',
      pointHoverBorderColor: '#EC932F',
      data: [],
    },
    {
      label: 'sell',
      fill: false,
      lineTension: 0.1,
      borderColor: '#beb1d7',
      backgroundColor: '#beb1d7',
      pointBorderColor: '#beb1d7',
      pointBackgroundColor: '#beb1d7',
      pointHoverBackgroundColor: '#beb1d7',
      pointHoverBorderColor: '#beb1d7',
      data: [],
    },
  ],
};

class Chart extends PureComponent {
  state = {
    time: [],
    buyPrices: [],
    sellPrices: [],
  };

  componentDidMount() {
    const now = new Date();
    const arr = Array.from({length: 23}, (_, ind) => {
      let hour = now.getHours() - ind;

      if (hour < 0) hour += 24;

      return `${hour.length < 2 ? '0' + hour : hour}:00`;
    }).reverse();

    this.setState({...this.state, time: arr});

    getDailyBTC().then(data => {
      const arrSell = data.Data.map(item => item.high);
      const arrBuy = data.Data.map(item => item.low);

      this.setState({
        ...this.state,
        buyPrices: arrBuy,
        sellPrices: arrSell,
      });
    });
  }

  render() {
    const {time, buyPrices, sellPrices} = this.state;

    data.labels = time;
    data.datasets[0].data = buyPrices;
    data.datasets[1].data = sellPrices;

    return (
      <div>
        <Line data={data} />
      </div>
    );
  }
}

export default Chart;
