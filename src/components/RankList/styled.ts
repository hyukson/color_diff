import styled from "styled-components";

export const RankListStyled = styled.table`

  /* 랭킹 */
  .ranking {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
  }

  td, th {
    padding: .6rem 1rem;
    border: 1px solid #eee;
    transition: .2s;
  }

  th {
    background-color: #febf00;
    border: 1px solid #fff;
    border-bottom: 2px solid #febf00;
  }

  tr:hover td {
    background: #eee;
    border: 1px solid #fff;
  }
`;