import React, {Component} from 'react';
import Button from './Button';

class ChartButtons extends Component {
  state = {
    buttons: ['15m', '1h', '6h', '1d', '30d'],
  };

  render() {
    const {buttons} = this.state;

    return (
      <div>
        {buttons.map(button => (
          <Button key={button}>{button}</Button>
        ))}
      </div>
    );
  }
}

export default ChartButtons;
