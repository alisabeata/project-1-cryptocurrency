import React from "react";
import './index.css';
import HeaderCurrency from "./HeaderCurrency";

function Header() {
  return (
    <div className="header">
      <span>Logo</span>
      <HeaderCurrency />
    </div>
  );
}

export default Header;
