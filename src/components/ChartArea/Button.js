import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  state = {};

  static propTypes = {
    children: PropTypes.string,
  };

  handleClick = event => {
    console.log(event.target);
  };

  render() {
    const {children} = this.props;

    return <button onClick={this.handleClick}>{children}</button>;
  }
}

export default Button;
