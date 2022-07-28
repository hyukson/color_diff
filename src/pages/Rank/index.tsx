import RankList from "../../components/RankList";
import Rap from "../../components/Rap"

const Rank = () => {
  const ls = localStorage;

  const items = JSON.parse(ls['colorDiff'] || '[]');
  
  items.sort((a: any, b: any) => b.score - a.score);

  return (
    <Rap>
      <h2>랭킹보기</h2>
      <RankList data={items}></RankList>
    </Rap>
  )  
}

export default Rank;