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
} from "./styles/feature";

export default function Feature({
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

Feature.Container = function FeatureContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Feature.Title = function FeatureTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Feature.Pane = function FeaturePane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

Feature.Section = function FeatureSection({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>;
};
Feature.Paragraph = function FeatureParagraph({ children, ...restProps }) {
  return <Paragraph {...restProps}>{children}</Paragraph>;
};
Feature.Figure = function FeatureFigure({ children, ...restProps }) {
  return <Figure {...restProps}>{children}</Figure>;
};

Feature.FigCaption = function FeatureFigCaption({ children, ...restProps }) {
  return <FigCaption {...restProps}>{children}</FigCaption>;
};
Feature.TextFit = function FeatureTextFit({ children, ...restProps }) {
  return <TextFit {...restProps}>{children}</TextFit>;
};
Feature.Image = function FeatureImage({ ...restProps }) {
  return <Image {...restProps} />;
};
Feature.ImageFit = function FeatureImageFit({ children, ...restProps }) {
  return <ImageFit {...restProps}>{children}</ImageFit>;
};
Feature.NoTextFit = function FeatureNoTextFit({ children, ...restProps }) {
  return <NoTextFit {...restProps}>{children}</NoTextFit>;
};
Feature.InnerTitle = function FeatureInnerTitle({ children, ...restProps }) {
  return <InnerTitle {...restProps}>{children}</InnerTitle>;
};
