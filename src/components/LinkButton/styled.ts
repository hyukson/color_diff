import styled from "styled-components";

export const LinkButtonStyled = styled.div`
  width: 100%;
  height: 55px;
  margin: 1rem 0;
  
  background: ${props => props.color || "#febf00"};

  a {
    width: 100%;
    height: 100%;

    font-size: 1.2rem;
    font-weight: bold;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  cursor: pointer;
`