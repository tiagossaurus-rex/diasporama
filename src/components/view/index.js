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
  Textwrapper,
  H1,
  P,
  H2,
  // Columnwrapper,
  // Columnlayout,
  // Columnleft,
  // Columnright,
  Play,
  Pause,
  Close,
  ButtonWrapper,
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

View.Image = function ViewImage({ ...restProps }) {
  return <Image {...restProps} />;
};

View.Figcaption = function ViewFigcaption({ children, ...restProps }) {
  return <Figcaption {...restProps}>{children}</Figcaption>;
};
View.H2 = function ViewH2({ children, ...restProps }) {
  return <H2 {...restProps}>{children}</H2>;
};

View.H1 = function ViewH1({ children, ...restProps }) {
  return <H1 {...restProps}>{children}</H1>;
};

View.Textwrapper = function ViewTextwrapper({ children, ...restProps }) {
  return <Textwrapper {...restProps}>{children}</Textwrapper>;
};

View.P = function ViewP({ children, ...restProps }) {
  return <P {...restProps}>{children}</P>;
};

//Columns layout here

// View.Columnwrapper = function Viewcolumnwrapper({ children, ...restProps }) {
//   return <Columnwrapper {...restProps}>{children}</Columnwrapper>;
// };

// View.Columnlayout = function Viewcolumnlayout({ children, ...restProps }) {
//   return <Columnlayout {...restProps}>{children}</Columnlayout>;
// };

// View.Columnleft = function Viewcolumnleft({ children, ...restProps }) {
//   return <Columnleft {...restProps}>{children}</Columnleft>;
// };

// View.Columnright = function Viewcolumnright({ children, ...restProps }) {
//   return <Columnright {...restProps}>{children}</Columnright>;
// };

View.Play = function ViewPlay({ children, ...restProps }) {
  return <Play {...restProps}>{children}</Play>;
};
View.Pause = function ViewPause({ children, ...restProps }) {
  return <Pause {...restProps}>{children}</Pause>;
};
View.Close = function ViewClose({ children, ...restProps }) {
  return <Close {...restProps}>{children}</Close>;
};

View.CloseWrapper = function ViewCloseWrapper({ children, ...restProps }) {
  return <CloseWrapper {...restProps}>{children}</CloseWrapper>;
};

View.ButtonWrapper = function ViewButtonWrapper({ children, ...restProps }) {
  return <ButtonWrapper {...restProps}>{children}</ButtonWrapper>;
};
