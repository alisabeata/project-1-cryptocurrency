import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updBalanceBtc} from './../../actions';

class Balance extends Component {
  render() {
    const {balanceBTC, balanceEUR, balanceUSD, updBalanceBtc} = this.props;

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
        <button onClick={() => updBalanceBtc(balanceBTC + 1000)}>add</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    balanceBTC: state.balanceBTC,
    balanceEUR: state.balanceEUR,
    balanceUSD: state.balanceUSD,
  };
};

const mapDispatchToProps = {
  updBalanceBtc,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Balance);
