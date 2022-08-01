import { useEffect, useRef } from "react";
import { ScoreStyled } from "./styld";

import counter from "../../utils/counter";

interface ScoreTypes {
  score: number;
}

const Score = ({ score }: ScoreTypes) => {
  const counterRef = useRef() as any;

  useEffect(() => {
    counter(counterRef.current, score);
  }, [score]);

  return <ScoreStyled>
    <h2 className="score">
      SCORE
      <p ref={counterRef}>0</p>
    </h2>
  </ScoreStyled>
}

export default Score;