import React from "react";
import rectangleone from "../images/Rectangle 1.png";
import rectangletwo from "../images/Rectangle 2.png";
import CircleBtn from "./CircleBtn";

export default function Essense() {
  return (
    <section className="essense">
      <h3 className="essense__header">
        THE ESSENCE
        <img src={rectangleone} alt="girl in nike" className="rectangle" />
      </h3>
      <h3 className="essense__header usiversal__text_background">HANDCRAFTED</h3>
      <h3 className="essense__header">
        <img src={rectangletwo} alt="girl in nike" className="rectangle" />
        OF FOOTWEAR.&nbsp;
      </h3>
      <p className="essense__about">
        In terms of footwear, we are the first in Canada to have opened not simple "shops" but real company outlets that
        offer the same service as the artisan
        <br /> shops of yesteryear: this to make you go without fail every time you want to buy a pair of handmade
        genuine leather shoes. Without fear of making
        <br /> mistakes and with the certainty that you will be able to wear them comfortably from the beginning.
        <br /> Are you also curious to find out why hundreds of people choose us every day?
      </p>
      <CircleBtn textBtn={"Find Out More"} />
    </section>
  );
}
