import React from "react";
import ArrowLeft from "../icons/ArrowLeft.svg";
import ArrowUp from "../icons/ArrowUp.svg";
import ArrowRight from "../icons/ArrowRight.svg";
import ArrowDown from "../icons/ArrowDown.svg";
import { ArrowBox } from "../styles/ArrowBox";

export const Arrows = ({ dir, i }) => {
  switch (dir) {
    case "left":
      return (
        <ArrowBox ind={i}>
          <img src={ArrowLeft} alt={ArrowLeft} />
        </ArrowBox>
      );

    case "up":
      return (
        <ArrowBox ind={i}>
          <img src={ArrowUp} alt={ArrowUp} />
        </ArrowBox>
      );
    case "down":
      return (
        <ArrowBox ind={i}>
          <img src={ArrowDown} alt={ArrowDown} />{" "}
        </ArrowBox>
      );

    default:
      return (
        <ArrowBox ind={i}>
          <img src={ArrowRight} alt={ArrowRight} />
        </ArrowBox>
      );
  }
};
