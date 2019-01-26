import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Bill from './components/Bill';
import Exchange from './components/Exchange';
import ChartArea from './components/ChartArea';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Bill />
        <Exchange />
        <ChartArea />
      </div>
    );
  }
}

export default App;
