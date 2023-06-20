import React from "react";
import shoppingBag from "../images/ShoppingBag.png";

export default function Information() {
  return (
    <div className="productInfo">
      <h1 className="productInfo__header">AIR JORDAN 1 RETRO HIGH OG</h1>
      <div className="productInfo__size-block">
        <p className="productInfo__price">$275</p>
        <div className="productInfo__size-right-block">
          <p className="productInfo__size-text">Size</p>
          <select className="productInfo__select">
            <option value="39">39</option>
            <option value="40">40</option>
            <option selected value="41">
              41
            </option>
            <option value="42">42</option>
          </select>
          <img src={shoppingBag} alt="ShoppingBag-Icon" className="productInfo__card-btn" />
        </div>
      </div>
      <button className="productInfo__details-Btn">More details</button>
    </div>
  );
}
