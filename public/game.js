(function() {
  const Game = {
    level: 1,
    score: 0,

    init() {
      Game.level = 1;
      Game.score = 0;

      Game.nextLevel();
    },

    nextLevel() {
      Game.level++;
      console.log(Game.level)
      
      Timer.start(15);

      Card.setAnswer();
    },
  }

  const Card = {
    // 카드 데이터 생성
    setAnswer() {
      const colors = new Array(3).fill()
        .map(_ => Math.floor(Math.random() * 200) + 55);

      const answerIdx = Math.floor(Math.random() * (Game.level ** 2));

      const range = Math.min(Game.level, 4) * 10;

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
            answerIdx == i ? Game.nextLevel() : Timer.penalty();
          }
        }
      );
    },
  }

  const Timer = {
    handle: 0,
    second: 15,

    start(second = 15) {
      Timer.second = second;

      clearInterval(Timer.handle);

      Timer.handle = setInterval(Timer.loop, 1000);
      Timer.loop();
    },

    loop() {
      const $timer = [...document.querySelectorAll(".timer *")];

      $timer[0].innerHTML = Math.max(Timer.second, 0);
      $timer[2].style.width = Math.max(100 * (Timer.second / 15), 0) + "%";

      if (Timer.second <= 0) {
        return Timer.end();
      }

      Timer.second--;
    },

    // 카드 찾기 실패로
    penalty() {
      const $progress = document.querySelector(".progress");

      $progress.classList.add("vibration");

      setTimeout(() => {
        $progress.classList.remove("vibration");
      }, 200);

      Timer.second -= 3;

      Timer.start(Timer.second);
    },

    end() {
      clearInterval(Timer.handle);
    },
  }

  window.onload = () => {
    Game.init();
  }
})();