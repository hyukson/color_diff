import styled from "styled-components";

export const TimerStyled = styled.div`
  /* 타이머 */
  .timer {
    width: 100%;
    height: 28px;
    background: #ebebeb;
    margin: 1rem 0; 
    position: relative;
  }

  .timer h3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #febf00;
    z-index: 1;
  }

  .progress {
    width: 100%;
    height: 100%;
    background: #111;
    transition: width .2s;
  }

  .progress.vibration {
    animation: vibration .1s infinite;
  }

  @keyframes vibration {
    0% {transform: rotate(1deg);}
    100% {transform: rotate(-1deg);}
  }
`;