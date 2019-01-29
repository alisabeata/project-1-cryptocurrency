// lib: https://www.chartjs.org/docs/latest/
// demo: http://jerairrest.github.io/react-chartjs-2/

import React, {PureComponent} from 'react';
import {Line} from 'react-chartjs-2';
import {getDailyBTC} from './../../api';
import PropTypes from 'prop-types';

const options = {
  buyColor: '#ec932f',
  sellColor: '#beb1d7',
  chartlineTension: 0.1,
};

class Chart extends PureComponent {
  state = {
    data: {
      labels: [],
      datasets: [
        {
          label: 'buy',
          fill: false,
          lineTension: options.chartlineTension,
          borderColor: options.buyColor,
          backgroundColor: options.buyColor,
          pointBorderColor: options.buyColor,
          pointBackgroundColor: options.buyColor,
          pointHoverBackgroundColor: options.buyColor,
          pointHoverBorderColor: options.buyColor,
          data: [],
        },
        {
          label: 'sell',
          fill: false,
          lineTension: options.chartlineTension,
          borderColor: options.sellColor,
          backgroundColor: options.sellColor,
          pointBorderColor: options.sellColor,
          pointBackgroundColor: options.sellColor,
          pointHoverBackgroundColor: options.sellColor,
          pointHoverBorderColor: options.sellColor,
          data: [],
        },
      ],
    },
  };

  static propTypes = {
    data: PropTypes.shape({
      labels: PropTypes.array.isRequired,
      datasets: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        fill: PropTypes.bool,
        lineTension: PropTypes.string,
        borderColor: PropTypes.string,
        backgroundColor: PropTypes.string,
        pointBorderColor: PropTypes.string,
        pointBackgroundColor: PropTypes.string,
        pointHoverBackgroundColor: PropTypes.string,
        pointHoverBorderColor: PropTypes.string,
        data: PropTypes.array.isRequired,
      }))
    }),
  };

  setHoursDailyChart = () => {
    const now = new Date();
    const arr = Array.from({length: 23}, (_, ind) => {
      let hour = now.getHours() - ind;

      if (hour < 0) hour += 24;

      return `${hour.length < 2 ? '0' + hour : hour}:00`;
    }).reverse();

    return arr;
  };

  setDataDailyChart = () => {
    this.setState(state => ({
      data: {
        ...state.data,
        labels: this.setHoursDailyChart()
      }
    }));

    getDailyBTC().then(data => {
      const arrBuy = data.Data.map(item => item.low);
      const arrSell = data.Data.map(item => item.high);
      const nextState = {...this.state.data.datasets};

      nextState[0].data = arrBuy;
      nextState[1].data = arrSell;

      this.setState({nextState});
    });
  };

  componentDidMount() {
    this.setDataDailyChart();
  }

  render() {
    console.log('render');
    return <Line data={this.state.data} />;
  }
}

export default Chart;
