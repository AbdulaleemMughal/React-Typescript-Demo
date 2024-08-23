import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Box = () => {

    const theme = useContext(ThemeContext);

  return (
    <div>
      <p style={{ backgroundColor: theme.primary.main, color: theme.primary.text}}>This is a box</p>
    </div>
  );
};

export default Box;
