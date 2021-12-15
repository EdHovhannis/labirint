import React, { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [directions, setDirections] = useState(null);
  const [start, setStart] = useState(false);
  const [current, setCurrent] = useState("");
  const [finish, setFinish] = useState("");
  const [result, setResult] = useState("");
  const [iconPos, setLoseIconPos] = useState("");
  const [correctPos, setCorrectPos] = useState("");

  return (
    <Context.Provider
      value={{
        directions,
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
      }}
    >
      {children}
    </Context.Provider>
  );
};
