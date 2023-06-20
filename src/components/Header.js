import React from "react";
import logo from "../images/Logo.png";
import Icons from "./Icons";

export default function Header() {
  return (
    <div className="header">
      <Icons />
      <img src={logo} className="header__logo" alt="Nike-Logo" />
    </div>
  );
}
