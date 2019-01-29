import React from 'react';
import Button from './Button';

function ChartButtons() {
  return (
    <div>
      <Button>15m</Button>
      <Button>1h</Button>
      <Button>6h</Button>
      <Button>1d</Button>
      <Button>30d</Button>
    </div>
  );
}

export default ChartButtons;
