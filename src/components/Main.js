import React from "react";
import Information from "./Information";
import Choose from "./Choose";

export default function Main() {
  return (
    <div className="main">
      <section className="product">
        <div className="main__img"></div>
        <div className="main__background-text">
          AIR JORDAN 1<br /> RETRO HIGH OG DUNK HIGH
        </div>
        <Information />
        <Choose />
      </section>
      <section className="labels">
        <p className="labels__red">FLASH &nbsp; FLASH &nbsp; FLASH &nbsp; FLASH</p>
        <p className="labels__black">FLASH &nbsp; FLASH &nbsp; FLASH &nbsp; FLASH</p>
      </section>
    </div>
  );
}
