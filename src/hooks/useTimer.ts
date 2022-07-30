import { useCallback, useRef, useState } from "react";

interface useTimerTypes {
  startS: number;
  speed?: number;
}

const useTimer = ({startS, speed}: useTimerTypes) => {
  const [second, setSecond] = useState<number>(startS);
  const [isAnimate, setIsAnimate] = useState<boolean>(false);

  const handleRef: { current: NodeJS.Timer | number } = useRef(0);

  const startTimer = () => {
    clearInterval(handleRef.current);

    handleRef.current = setInterval(loop, speed);
  }

  const loop = useCallback(() => {
    if (second <= 0) {
      return endTimer();
    }
    
    setSecond(second => second - 1);
  }, [second]);

  const resetTimer = () => {
    endTimer();
    setSecond(startS);
    startTimer();
  }

  const endTimer = () => {
    clearInterval(handleRef.current);
  }

  // 카드 찾기 실패로
  const penaltyTimer = () => {
    setIsAnimate(true);

    setTimeout(() => {
      setIsAnimate(false);
    }, 200);

    setSecond(second => second - 3);

    startTimer();
  }

  return {
    second, isAnimate, startTimer, endTimer, resetTimer, penaltyTimer
  }
}

export default useTimer;