import React from 'react';
import Chart from './Chart';
import ChartButtons from './ChartButtons';

function ChartArea() {
  return (
    <div>
      <span>Chart: BTC</span>
      <ChartButtons />
      <Chart />
    </div>
  );
}

export default ChartArea;
