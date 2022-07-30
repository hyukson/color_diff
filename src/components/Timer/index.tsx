import { TimerStyled } from "./styled";

interface TimerTypes {
  second: number;
  isAnimate: boolean;
}

const Timer = ({second, isAnimate}: TimerTypes) => {
  const nowSecond = Math.max(second, 0);
  const width = {width: Math.max(100 * (second / 15), 0) + "%"};

  return <TimerStyled>
    <div className="timer">
      <h3>{nowSecond}</h3>
      <div className={"progress " + (isAnimate ? "vibration" : "")}style={width}></div>
    </div>
  </TimerStyled>
}

export default Timer;