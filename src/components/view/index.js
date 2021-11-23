import React from "react";
import {
  Section,
  Wrapper,
  Figure,
  Text,
  TextDisplay,
  Header,
  Image,
  Figcaption,
  H2,
  Play,
  Close,
  CloseWrapper,
} from "./styles/view";

export default function View({
  children,
  color = "color",
  direction = "row",

  ...restProps
}) {
  return <Wrapper></Wrapper>;
}
View.Section = function ViewSection({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>;
};
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

View.Header = function ViewHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};
// View.ImageFit = function ViewImageFit({ children, ...restProps }) {
//   return <ImageFit {...restProps}>{children}</ImageFit>;
// };

View.Image = function ViewImage({ ...restProps }) {
  return <Image {...restProps} />;
};

View.Figcaption = function ViewFigcaption({ children, ...restProps }) {
  return <Figcaption {...restProps}>{children}</Figcaption>;
};

View.H2 = function ViewH2({ children, ...restProps }) {
  return <H2 {...restProps}>{children}</H2>;
};

View.Play = function ViewPlay({ children, ...restProps }) {
  return <Play {...restProps}>{children}</Play>;
};
View.Close = function ViewButton({ children, ...restProps }) {
  return <Close {...restProps}>{children}</Close>;
};

View.CloseWrapper = function ViewCloseWrapper({ children, ...restProps }) {
  return <CloseWrapper {...restProps}>{children}</CloseWrapper>;
};
