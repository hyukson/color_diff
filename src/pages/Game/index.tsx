import { constants } from "buffer";
import { useState } from "react";
import CardList from "../../components/CardList";
import LinkButton from "../../components/LinkButton";
import Modal from "../../components/Modal";
import Wrap from "../../components/Rap";
import Score from "../../components/Score";
import Timer from "../../components/Timer";
import useTimer from "../../hooks/useTimer";

const Game = () => {
  const [level, setLevel] = useState<number>(2);
  const [score, setScore] = useState<number>(0);

  // timer
  const { second, isAnimate, startTimer, endTimer, resetTimer } = useTimer({startS: 15, speed: 1000});

  const scoreUP = (level: number, second: number) => {
    setScore(score => score + (level * second))
  }
  
  const levelUP = () => {
    setLevel(level => Math.min(level + 1, 35));
  }

  return (
    <Wrap>
      <Score score={score} />

      <Timer second={second} isAnimate={isAnimate} />

      <CardList level={level} />

      <Modal>
        <div className="result">
          <h2>결과</h2>

          <div className="count">
            <p><span>0</span>점</p>
          </div>

          <LinkButton link="rank" text="랭킹등록" />
          <LinkButton link="game" text="다시하기" color="#3dc7f0" />
          <LinkButton link="rank" text="랭킹보기" color="#f03d3d" />
        </div>
      </Modal>
   </Wrap>
  );
}

export default Game;
