import React, {Component} from 'react';

class Balance extends Component {
  state = {};
  render() {
    return (
      <div>
        <p>Balance</p>
        <span>0USD</span>
        <span>0EUR</span>
        <span>0BTC</span>
        <span>0ETH</span>
      </div>
    );
  }
}

export default Balance;
