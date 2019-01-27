import React, {Component} from 'react';

// TODO: redux for balance

class Exchange extends Component {
  state = {
    balance: {
      BTC: 0,
    },
  };

  handleCurrency = event => {
    console.log(event);
  };

  render() {
    const {balance} = this.state;

    return (
      <div>
        <p>Exchange</p>
        <label>
          <input
            type="text"
            value={balance.BTC}
            onChange={this.handleCurrency}
          />
          <span>BTC</span>
        </label>
        <label>
          <input type="text" value="0" onChange={this.handleCurrency} />
          <span>USD</span>
        </label>
        <label>
          <input type="text" value="0" onChange={this.handleCurrency} />
          <span>EUR</span>
        </label>
      </div>
    );
  }
}

export default Exchange;
