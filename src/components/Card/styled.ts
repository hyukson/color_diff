import styled from "styled-components";

import { CardTypes } from ".";

export const CardStyled = styled.div<CardTypes>`
  background: rgba(${props => props.colors.join(",")});
  width: ${(props) => `${props.boxSize}%`};
  height: ${(props) => `${props.boxSize}%`};

  border: 1px solid #fff;
  cursor: pointer;
`;