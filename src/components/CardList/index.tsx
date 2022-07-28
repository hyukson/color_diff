import Card from "../Card";
import { CardListStyled } from "./styled";

interface CardListTypes {
  level: number;
}

const CardList = ({ level }: CardListTypes) => {  
  const colorRange = Math.min(Math.sqrt(level), 4) * 10;
  const answerIdx = Math.floor(Math.random() * (level ** 2));

  // colors
  const colors = [...new Array(3)]
    .map(_ => Math.floor(Math.random() * 200) + 55);

  const fakeColor = [...colors];
  const answerColor = [...colors].map(v => v - colorRange);

  // now level items
  const boxSize = 100 / level;
  const items = [...new Array(level ** 2)];

  return <CardListStyled>
    {items.map((_, i) => (
      <Card key={i} colors={answerIdx == i ? answerColor : fakeColor} boxSize={boxSize}></Card>
    ))}
  </CardListStyled>
}

export default CardList;