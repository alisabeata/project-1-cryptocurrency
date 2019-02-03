import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import Exchange from './components/Exchange';
import ChartArea from './components/ChartArea';
import {connect} from 'react-redux';
import {updBalanceBTC} from './actionCreators';

class App extends Component {
  render() {
    const {updBalanceBTC} = this.props;
    //console.log(this.props)
    return (
      <div className="App">
        <Header />
        <button onClick={() => updBalanceBTC(1000)}>test action creators</button>
        <Balance />
        <Exchange />
        <ChartArea />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  balanceBTC: 0,
  balanceUSD: 0,
  balanceEUR: 0,
});

const mapDispatchToProps = {
  updBalanceBTC
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
