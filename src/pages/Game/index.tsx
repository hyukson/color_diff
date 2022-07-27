import Wrap from "../../components/Rap";

const Game = () => {
  return (
    <Wrap>
      <div>
        <h2 className="score">
          SCORE
          <p>0</p>
        </h2>
      </div>

      <div className="timer">
        <h3>15</h3>
        <div className="progress"></div>
      </div>

      <div className="cardList"></div>
   </Wrap>
  );
}

export default Game;


{/* 
<div class="popupView"></div>  

<template>
<div class="result">
  <h2>결과</h2>

  <div class="count">
    <p><span>0</span>점</p>
  </div>

  <button class="button rank">랭킹등록</button>
  <a href="game.html" class="button" style="background-color: #3dc7f0;">다시하기</a>
  <a href="rank.html" class="button" style="background-color: #f03d3d;">랭킹보기</a>
</div>
</template> */}
