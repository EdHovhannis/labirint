import React, { useContext, useEffect, useState } from "react";
import { DirectionsBox } from "./../styles/DirectionsBox";
import { Context } from "./../context/Context";
import { Arrows } from "./Arrows";

export default function Directions() {
  const [x, setX] = useState(0);
  const { directions } = useContext(Context);

  useEffect(() => {
    if (directions) {
      const timer =
        x < 10 &&
        setInterval(() => {
          setX(x + 1);
        }, 500);
      return () => clearInterval(timer);
    }
  }, [directions, x]);
  return (
    <DirectionsBox>
      {directions
        ?.map((item, i) => <Arrows key={i} dir={item} i={i} />)
        .splice(0, x)}
    </DirectionsBox>
  );
}
