import React, { useContext } from "react";
import { ContentBox } from "./../styles/ContentBox";
import { Block } from "./../styles/Block";
import { blocks } from "./../context/Blocks";
import { Context } from "./../context/Context";
import { useBlockenv } from "./../hooks/useBlockenv";
import StartIcon from "../icons/StartIcon.svg";
import Win from "../icons/Win.svg";
import Lose from "../icons/Lose.svg";
import Star from "../icons/Star.svg";

export const Content = () => {
  const {
    setDirections,
    start,
    setStart,
    current,
    setCurrent,
    finish,
    setFinish,
    result,
    setResult,
    iconPos,
    setLoseIconPos,
    correctPos,
    setCorrectPos,
  } = useContext(Context);
  const { blockenvironment } = useBlockenv();
  const GetInfoHandler = (e) => {
    const index = +e.target.getAttribute("data-index");
    const { directions, lastpoint } = blockenvironment(blocks, index);
    if (start) {
      if (index === +finish) {
        setResult("win");
        setTimeout(() => window.location.reload(), 3000);
      } else {
        setLoseIconPos(index);
        setResult("lose");
        setTimeout(() => setCorrectPos(finish), 500);
        setTimeout(() => window.location.reload(), 3000);
      }
      return false;
    } else {
      setDirections(directions);
      setFinish(lastpoint);
      setStart(true);
      setCurrent(index);
    }
  };

  return (
    <ContentBox>
      {blocks
        .flatMap((item) => item)
        .map((block) => (
          <Block key={block} ind={block}>
            <div onClick={GetInfoHandler} data-index={block}>
              {block === current && <img src={StartIcon} alt={StartIcon} />}
              {block === finish && result === "win" && (
                <img src={Win} alt={Win} />
              )}
              {block === iconPos && result === "lose" && (
                <img src={Lose} alt={Lose} />
              )}
              {block === correctPos && result === "lose" && (
                <img src={Star} alt={Star} />
              )}
            </div>
          </Block>
        ))}
    </ContentBox>
  );
};
