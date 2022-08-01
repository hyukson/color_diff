import { useState } from "react";

const useLevel = () => {
  const [level, setLevel] = useState<number>(2);
  
  // level Increase
  const increaseLevel = () => {
    setLevel(level => Math.min(level + 1, 35));
  }

  // leve Reset
  const resetLevel = () => {
    setLevel(2);
  }

  return {
    level, increaseLevel, resetLevel
  }
}

export default useLevel;