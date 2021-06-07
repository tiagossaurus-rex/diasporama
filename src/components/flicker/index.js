import React from "react";
import {
  Container,
  Item,
  Inner,
  Title,
  Pane,
  BoxBlack,
  BoxClear,
  ImageFit,
  Text,
  NoText,
  ArgonauteText,
  DiapoText,
} from "./styles/flicker";

export default function Flicker({
  children,
  direction = "column",
  ...restProps
}) {
  return (
    <Item {...restProps}>
      <Inner direction={children}>{children}</Inner>
    </Item>
  );
}

Flicker.Container = function FlickerContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Flicker.Title = function FlickerTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Flicker.Pane = function FlickerPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

Flicker.BoxBlack = function FlickerBoxBlack({ children, ...restProps }) {
  return <BoxBlack {...restProps}>{children}</BoxBlack>;
};

Flicker.BoxClear = function FlickerBoxClear({ children, ...restProps }) {
  return <BoxClear {...restProps}>{children}</BoxClear>;
};

Flicker.ImageFit = function FlickerImageFit({ children, ...restProps }) {
  return <ImageFit {...restProps}>{children}</ImageFit>;
};

Flicker.Text = function FlickerText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Flicker.NoText = function FlickerNoText({ children, ...restProps }) {
  return <NoText {...restProps}>{children}</NoText>;
};

Flicker.ArgonauteText = function FlickerArgonauteText({
  children,
  ...restProps
}) {
  return <ArgonauteText {...restProps}>{children}</ArgonauteText>;
};
Flicker.DiapoText = function FlickerDiapoText({ children, ...restProps }) {
  return <DiapoText {...restProps}>{children}</DiapoText>;
};
