import React, {PureComponent} from 'react';
import {getCurrency} from './../../api';

class HeaderCurrency extends PureComponent {
  state = {
    currentRate: {
      BTC: {
        EUR: 0,
        USD: 0,
      },
      ETH: {
        EUR: 0,
        USD: 0,
      },
    },
  };

  componentDidMount() {
    getCurrency().then(data => {
      this.setState({currentRate: {...data}});
    });
  }

  render() {
    const {BTC, ETH} = this.state.currentRate;

    return (
      <div className="header__currency">
        <ul>
          <li>BTC/EUR: {BTC.EUR}</li>
          <li>BTC/USD: {BTC.USD}</li>
        </ul>
        <ul>
          <li>ETH/EUR: {ETH.EUR}</li>
          <li>ETH/USD: {ETH.USD}</li>
        </ul>
      </div>
    );
  }
}

export default HeaderCurrency;
