import { useRef, useState } from "react";

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

    handleRef.current = setInterval(() => { 
      setSecond(second => second - 1);
    }, speed);
  }
  
  const endTimer = () => {
    clearInterval(handleRef.current);
  }

  const resetTimer = () => {
    endTimer();
    setSecond(second => Math.min(second + 3, startS));
    startTimer();
  }

  // 카드 찾기 실패로
  const penaltyTimer = () => {
    setIsAnimate(true);
    setSecond(second => second - 3);

    startTimer();

    setTimeout(() => {
      setIsAnimate(false);
    }, 200);
  }

  return {
    second, isAnimate, startTimer, endTimer, resetTimer, penaltyTimer
  }
}

export default useTimer;