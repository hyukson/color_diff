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

    counter($counter, max, ms = 40) {
      let now = max;
    
      const handle = setInterval(() => {
        $counter.innerHTML = Math.ceil(max - now).toLocaleString();
      
        if (now < 0 || Game.score != max) {
          clearInterval(handle);
        }
        
        const step = now / 10;
        
        now -= step;
      }, ms);
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
      $timer[1].style.width = Math.max(100 * (Timer.second / 15), 0) + "%";

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

      Modal.open("result");

      const $counter = document.querySelector(".count span");
      
      Game.counter($counter, Game.score);

      // 랭킹등록
      document.querySelector(".rank").onclick = Game.addRank;
    },
  }

  const Modal = {
    template: (name) => [...document.querySelector("template").content.children].find(v => v.classList.contains(name)).cloneNode(true),

    open(name) {
      const $popup = document.querySelector(".popupView");

      $popup.innerHTML = Modal.template(name).outerHTML;
      $popup.classList.add("open");
    },

    close() {
      const $popup = document.querySelector(".popupView");

      $popup.innerHTML = "";
      $popup.classList.remove("open");
    }
  }

  window.onload = () => {
    Game.init();
  }
})();