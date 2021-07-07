import React from "react";
import { Wrapper, Figure, Text, TextDisplay } from "./styles/view";

export default function View({
  children,
  color = "color",
  direction = "row",

  ...restProps
}) {
  return <Wrapper></Wrapper>;
}

View.Wrapper = function ViewWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

View.Figure = function ViewFigure({ children, ...restProps }) {
  return <Figure {...restProps}>{children}</Figure>;
};

View.Text = function ViewText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

View.TextDisplay = function ViewTexrDisplay({ children, ...restProps }) {
  return <TextDisplay {...restProps}>{children}</TextDisplay>;
};

// View.NoText = function ViewNoText({ children, ...restProps }) {
//   return <NoText {...restProps}>{children}</NoText>;
// };
