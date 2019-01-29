import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Balance extends Component {
  state = {
    balance: {
      BTC: 0,
      USD: 0,
      EUR: 0,
    },
  };

  static propTypes = {
    balance: {
      BTC: PropTypes.number,
      USD: PropTypes.number,
      EUR: PropTypes.number,
    },
  };

  render() {
    return (
      <div>
        <p>Balance</p>
        {Object.keys(this.state.balance).map(item => (
          <p>
            <span>{this.state.balance[item]}</span>
            <span>{item}</span>
          </p>
        ))}
      </div>
    );
  }
}

export default Balance;
