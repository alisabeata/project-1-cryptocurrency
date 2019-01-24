import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import ChartArea from './components/ChartArea';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ChartArea />
      </div>
    );
  }
}

export default App;
