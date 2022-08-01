import { useMemo } from "react";
import Card from "../Card";
import { CardListStyled } from "./styled";

export interface CardListTypes {
  level: number;
  pick: (answerIdx: number, i: number) => void;
}

const CardList = ({ level, pick }: CardListTypes) => {  
  const colorRange = Math.min(Math.sqrt(level), 4) * 10;
  const answerIdx = useMemo(() => Math.floor(Math.random() * (level ** 2)), [level]);

  // colors
  const colors = useMemo(() => [...new Array(3)]
    .map(_ => Math.floor(Math.random() * 200) + 55), [level]);

  const fakeColor = [...colors];
  const answerColor = [...colors].map(v => v - colorRange);

  // now level items
  const boxSize = 100 / level;
  const items = [...new Array(level ** 2)];
  
  return <CardListStyled>
    {items.map((_, i) => (
      <Card key={i} colors={answerIdx == i ? answerColor : fakeColor} boxSize={boxSize} onClick={() => pick(answerIdx, i)}></Card>
    ))}
  </CardListStyled>
}

export default CardList;