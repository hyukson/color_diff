import { useEffect, useRef } from "react";
import { ScoreStyled } from "./styld";

interface ScoreTypes {
  score: number;
}

const Score = ({ score }: ScoreTypes) => {
  const counterRef = useRef() as any;

  useEffect(() => {
    const counter = (max: number) => {
      let now = max;
    
      const handle = setInterval(() => {
        counterRef.current.innerHTML = Math.ceil(max - now).toLocaleString();
      
        if (now < 1 || score != max) {
          clearInterval(handle);
        }
        
        const step = now / 10;
        
        now -= step;
      }, 10);
    }

    counter(score);
  }, [score]);

  return <ScoreStyled>
    <h2 className="score">
      SCORE
      <p ref={counterRef}>0</p>
    </h2>
  </ScoreStyled>
}

export default Score;