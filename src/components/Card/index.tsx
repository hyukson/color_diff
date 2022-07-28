import { CardStyled } from "./styled";

export interface CardTypes {
  colors: number[];
  boxSize: number;
}

const Card = ({colors, boxSize}: CardTypes) => {
  return <CardStyled colors={colors} boxSize={boxSize} />
};

export default Card;