(function() {
  const ls = localStorage;

  const Game = {
    level: 1,
    score: 0,

    init() {
      Game.nextLevel();
    },

    nextLevel() {
      Game.level = Math.min(Game.level + 1, 35);
      
      Timer.start(15);

      Card.setAnswer();
    },

    showScore(score) {
      Game.score = score;

      const $counter = document.querySelector(".score p");

      Game.counter($counter, Game.score, 10);
    },


    addRank() {
      const name = prompt("등록할 닉네임을 입력해주세요.").trim();
      
      if (!name) {
        alert("닉네임을 입력해주세요.");
        return Game.addRank();
      }

      const data = JSON.parse(ls['colorDiff'] || '[]');

      ls['colorDiff'] = JSON.stringify(
        [...data, {name, score: Game.score}]
      );

      location.href = 'rank.html';
    },
  }

  const Card = {
    // 카드 데이터 생성
    setAnswer() {
      const colors = new Array(3).fill()
        .map(_ => Math.floor(Math.random() * 200) + 55);

      const answerIdx = Math.floor(Math.random() * (Game.level ** 2));

      const range = Math.min(Math.sqrt(Game.level), 4) * 10;

      const answerColor = [...colors].map(v => v - range);
      const fakeColor = [...colors];

      Card.setList(answerIdx, answerColor, fakeColor);
    },

    // 카드 리스트 정렬
    setList(answerIdx, answerColor, fakeColor) {
      const boxSize = 100 / Game.level;

      const htmlDummy = new Array(Game.level ** 2).fill().map((_, i) => `
        <div 
          class="card" 
          style="
            background: rgb(${answerIdx == i ? answerColor : fakeColor});
            width: ${boxSize}%;
            height: ${boxSize}%;
          "></div>
        `
      );

      document.querySelector(".cardList").innerHTML = htmlDummy.join("");

      // 이벤트 추가
      Card.pick(answerIdx);
    },

    // 카드 선택 여부
    pick(answerIdx) {
      document.querySelectorAll(".cardList > div")
       .forEach((v, i) => {
          v.onclick = () => {
            if (answerIdx == i) {
              Game.showScore(Game.score + (Game.level * Timer.second));
              
              Game.nextLevel();
            } else { 
              Timer.penalty();
            }
          }
        }
      );
    },
  }

 
  window.onload = () => {
    Game.init();
  }
})();