import React, {Component} from 'react';
import PropTypes from 'prop-types';

// TODO: redux for balance

class Exchange extends Component {
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

  handleCurrency = event => {
    console.log(event);
  };

  render() {
    return (
      <div>
        <p>Exchange</p>
        {Object.keys(this.state.balance).map(item => (
          <label>
            <input
              type="text"
              value={this.state.balance[item]}
              onChange={this.handleCurrency}
            />
            <span>{item}</span>
          </label>
        ))}
      </div>
    );
  }
}

export default Exchange;
