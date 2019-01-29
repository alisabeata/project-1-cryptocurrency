import React, {Component} from 'react';

class Balance extends Component {
  state = {
    balance: {
      BTC: 0,
      USD: 0,
      EUR: 0,
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
