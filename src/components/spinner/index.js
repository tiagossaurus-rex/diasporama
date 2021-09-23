import React from "react";
import styled from "styled-components";

const Spinner = styled.div`
  padding: 6px 12px;
  border-radius: 4px;
  display: inline-block;
  color: dodgerblue;
`;

export default () => <Spinner>Loading reviews ...</Spinner>;
