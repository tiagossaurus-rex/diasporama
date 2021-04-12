import React from "react";
import { Container, Item, Inner } from "./styles/flicker";

export default function Flicker({ children, ...restProps }) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Flicker.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};
