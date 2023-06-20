import React from "react";
import arrow from "../images/BtnArrow.png";
import prodOne from "../images/Product 01.png";
import prodTwo from "../images/Product 02.png";
import prodThree from "../images/Product 03.png";

export default function Choose() {
  return (
    <div className="choose">
      <div className="chooseContainer">
        <button className="chooseContainer_btn">
          <img src={arrow} alt="arrow" className="choose__arrow_left" />
          Previous
        </button>
        <button className="chooseContainer_btn">
          Next <img src={arrow} alt="arrow" className="choose__arrow_right" />
        </button>
      </div>
      <div className="product__options">
        <div className="product__option">
          <img src={prodOne} alt="SNIKERS" className="choose__product" />
          <h2 className="choose__product-text">Nike Cosmic Unity 2</h2>
        </div>
        <div className="product__option">
          <img src={prodTwo} alt="SNIKERS" className="choose__product" />
          <h2 className="choose__product-text">NIKE SB Dunk High</h2>
        </div>
        <div className="product__option">
          <img src={prodThree} alt="SNIKERS" className="choose__product" />
          <h2 className="choose__product-text">Nike Dynamo GO SE</h2>
        </div>
      </div>
    </div>
  );
}
