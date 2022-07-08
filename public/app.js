(function() {
  const ls = localStorage;

  const Rank = {
    items: [],

    init() {
      Rank.items = JSON.parse(ls['colorDiff'] || '[]');
      
      console.log(Rank.items);

      Rank.items.sort((a, b) => b.score - a.score);
    },

    setList() {
      const $el = document.querySelector(".ranking tbody");

      $el.innerHTML += Rank.items.map((v, i) => `
        <tr>
          <td>${i+1}등</td>
          <td>${v.name}</td>
          <td>${v.score.toLocaleString()}점</td>
        </tr>
      `).join('');
    },
  }

  window.onload = () => {
    Rank.init();

    Rank.setList();
  }
})();