import { RankListStyled } from "./styled";

interface RankListTypes {
  data: any;
}

const RankList = ({data}: RankListTypes) => {
  return <RankListStyled>
    <table>
      <thead>
        <th>순위</th>
        <th>닉네임</th>
        <th>점수</th>
      </thead>
      <tbody>
        {data.map((v: any, i: number) => (
            <tr key={i}>
              <td>{i+1}등</td>
              <td>{v.name}</td>
              <td>{v.score.toLocaleString()}점</td>
            </tr>
          ))}
      </tbody>
    </table>
  </RankListStyled>
}

export default RankList;