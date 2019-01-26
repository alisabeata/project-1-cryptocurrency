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
          BTC
        </label>
        <label>
          <input type="text" value="0" onChange={this.handleCurrency} />
          USD
        </label>
        <label>
          <input type="text" value="0" onChange={this.handleCurrency} />
          EUR
        </label>
      </div>
    );
  }
}

export default Exchange;
