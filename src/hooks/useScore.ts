import { useState } from "react";

const useScore = () => {
  const [score, setScore] = useState<number>(0);

  // Point Increase
  const increaseScore = (level: number, second: number) => {
    setScore(score => score + (level * second))
  }

  // Point Reset
  const resetScore = () => {
    setScore(0);
  }

  return {
    score, increaseScore, resetScore
  }
}

export default useScore;