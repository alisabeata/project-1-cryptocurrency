import React from 'react';

// обработка клика кнопок с передачей значений в componentDidUpdate

function ChartButtons() {
  return (
    <div>
      <button>15m</button>
      <button>1h</button>
      <button>6h</button>
      <button>1d</button>
      <button>30d</button>
    </div>
  );
}

export default ChartButtons;
