import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updBalanceBTC} from './../../actionCreators';

class Balance extends Component {
  render() {
    const {balanceBTC, balanceEUR, balanceUSD, updBalanceBTC} = this.props;

    return (
      <div>
        <p>Balance</p>
        <p>
          <span>BTC</span>
          <span>{balanceBTC}</span>
        </p>
        <p>
          <span>EUR</span>
          <span>{balanceEUR}</span>
        </p>
        <p>
          <span>USD</span>
          <span>{balanceUSD}</span>
        </p>
        <button onClick={() => updBalanceBTC(balanceBTC + 1000)}>add</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  balanceBTC: state.balanceBTC,
  balanceEUR: state.balanceEUR,
  balanceUSD: state.balanceUSD,
});

const mapDispatchToProps = {
  updBalanceBTC,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Balance);
