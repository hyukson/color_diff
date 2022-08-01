import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import CardList from "../../components/CardList";
import LinkButton from "../../components/LinkButton";
import Modal from "../../components/Modal";
import Wrap from "../../components/Rap";
import Score from "../../components/Score";
import Timer from "../../components/Timer";
import useLevel from "../../hooks/useLevel";
import useScore from "../../hooks/useScore";

import useTimer from "../../hooks/useTimer";
import counter from "../../utils/counter";

const Game = () => {
  const { score, increaseScore, resetScore } = useScore();
  const { level, increaseLevel, resetLevel } = useLevel();

  // Modal Open state
  const [openModal, setOpenModal] = useState<boolean>(false);

  // GameOver counter Ref
  const GameOverRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  // timer
  const { 
    second, 
    isAnimate, 
    startTimer, 
    endTimer, 
    resetTimer, 
    penaltyTimer 
  } = useTimer({startS: 15, speed: 1000});

  // router 
  const navigate = useNavigate();

  // Card Select
  const pick = (answerIdx: number, i: number) => {
    if (answerIdx === i) {
      increaseScore(level, second);
      increaseLevel();

      resetTimer();
    } else { 
      penaltyTimer();
    }
  }

  // Rank Insert
  const addRank = () => {
    const name = prompt("등록할 닉네임을 입력해주세요.")?.trim();

    if (name === null) {
      return;
    }

    if (name === "") {
      alert("닉네임을 입력해주세요.");
      addRank();
      return;
    }

    const data = JSON.parse(localStorage['colorDiff'] || '[]');

    localStorage['colorDiff'] = JSON.stringify(
      [...data, {name, score: score}]
    );

    navigate("/rank");
  }

  const restGame = () => {
    resetLevel();
    resetScore();

    setOpenModal(false);
    resetTimer();
  }
  
  useEffect(() => {
    if (second <= 0) {
      endTimer();
      counter(GameOverRef.current, score);

      setOpenModal(true);
    }
  }, [second]);

  useEffect(() => {
    startTimer();
  }, []);

  return (
    <Wrap>
      <Score score={score} />

      <Timer second={second} isAnimate={isAnimate} />

      <CardList level={level} pick={pick} />

      <Modal isOpen={openModal}>
        <div className="result">
          <h2>결과</h2>

          <div className="count">
            <p><span ref={GameOverRef}>0</span>점</p>
          </div>

          {/* 점수가 존재할 때만 랭킹등록 */}
          {score ? <LinkButton link="/game" text="랭킹등록" onClick={addRank} /> : ""}
          <LinkButton link="/game" text="다시하기" color="#3dc7f0" onClick={restGame} />
          <LinkButton link="/rank" text="랭킹보기" color="#f03d3d" />
        </div>
      </Modal>
   </Wrap>
  );
}

export default Game;
