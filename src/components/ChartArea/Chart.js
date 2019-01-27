// lib: https://www.chartjs.org/docs/latest/
// demo: http://jerairrest.github.io/react-chartjs-2/

import React, {PureComponent} from 'react';
import {Line} from 'react-chartjs-2';
import {getDailyBTC} from './../../api';

const buyColor = '#ec932f';
const sellColor = '#beb1d7';
const chartlineTension = 0.1;
const data = {
  labels: [],
  datasets: [
    {
      label: 'buy',
      fill: false,
      lineTension: chartlineTension,
      borderColor: buyColor,
      backgroundColor: buyColor,
      pointBorderColor: buyColor,
      pointBackgroundColor: buyColor,
      pointHoverBackgroundColor: buyColor,
      pointHoverBorderColor: buyColor,
      data: [],
    },
    {
      label: 'sell',
      fill: false,
      lineTension: chartlineTension,
      borderColor: sellColor,
      backgroundColor: sellColor,
      pointBorderColor: sellColor,
      pointBackgroundColor: sellColor,
      pointHoverBackgroundColor: sellColor,
      pointHoverBorderColor: sellColor,
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

    this.setState(state => ({...state, time: arr}));

    getDailyBTC().then(data => {
      const arrSell = data.Data.map(item => item.high);
      const arrBuy = data.Data.map(item => item.low);

      this.setState(state => ({
        ...state,
        buyPrices: arrBuy,
        sellPrices: arrSell,
      }));
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
