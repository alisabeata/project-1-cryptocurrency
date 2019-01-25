import React from 'react';
import './index.css';
import logo from './logo.svg';
import HeaderCurrency from './HeaderCurrency';

function Header() {
  return (
    <div className="header">
      <img src={logo} className="header__logo" alt="logo" />
      <HeaderCurrency />
    </div>
  );
}

export default Header;
