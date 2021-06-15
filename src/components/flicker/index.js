import React from "react";
import {
  Container,
  Item,
  Pane,
  Inner,
  Section,
  Title,
  Paragraph,
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
  color = "color",
  direction = "row",
  ...restProps
}) {
  return (
    <Item>
      <Inner direction={direction} color={color}>
        {children}
      </Inner>
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

Flicker.Section = function FlickerSection({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>;
};
Flicker.Paragraph = function FlickerParagraph({ children, ...restProps }) {
  return <Paragraph {...restProps}>{children}</Paragraph>;
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
