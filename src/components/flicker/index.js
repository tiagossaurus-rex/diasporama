import React from "react";
import {
  Container,
  Item,
  Inner,
  Section,
  Title,
  Para,
  Figure,
  FigCaption,
  TextFit,
  ImageFit,
  Image,
  NoTextFit,
  InnerTitle,
} from "./styles/flicker";

export default function Flicker({
  children,
  direction = "column",
  ...restProps
}) {
  return (
    <Item {...restProps}>
      <Inner {...restProps}>{children}</Inner>
    </Item>
  );
}

Flicker.Container = function FlickerContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Flicker.Title = function FlickerTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Flicker.Section = function FlickerSection({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>;
};
Flicker.Para = function FlickerPara({ children, ...restProps }) {
  return <Para {...restProps}>{children}</Para>;
};
Flicker.Figure = function FlickerFigure({ children, ...restProps }) {
  return <Figure {...restProps}>{children}</Figure>;
};

Flicker.FigCaption = function FlickerFigCaption({ children, ...restProps }) {
  return <FigCaption {...restProps}>{children}</FigCaption>;
};
Flicker.TextFit = function FlickerTextFit({ children, ...restProps }) {
  return <TextFit {...restProps}>{children}</TextFit>;
};
Flicker.Image = function FlickerImage({ ...restProps }) {
  return <Image {...restProps} />;
};
Flicker.ImageFit = function FlickerImageFit({ children, ...restProps }) {
  return <ImageFit {...restProps}>{children}</ImageFit>;
};
Flicker.NoTextFit = function FlickerNoTextFit({ children, ...restProps }) {
  return <NoTextFit {...restProps}>{children}</NoTextFit>;
};
Flicker.InnerTitle = function InnerTitle({ children, ...restProps }) {
  return <InnerTitle {...restProps}>{children}</InnerTitle>;
};
