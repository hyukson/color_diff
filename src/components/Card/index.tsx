import { CardStyled } from "./styled";

export interface CardTypes {
  colors: number[];
  boxSize: number;
  onClick?: () => void; 
}

const Card = ({colors, boxSize, onClick}: CardTypes) => {
  return <CardStyled colors={colors} boxSize={boxSize} onClick={onClick} />
};

export default Card;