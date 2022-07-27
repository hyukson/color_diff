import { Link } from "react-router-dom";
import LinkButton from "../../components/LinkButton";
import Rap from "../../components/Rap";

const Main = () => {
  return (
    <Rap>
      <h2>다른 색깔 찾기!</h2>

      <LinkButton text={"시작하기"} link="game" />
      <LinkButton text={"랭킹보기"} link="rank" color="#3dc7f0" />
    </Rap>
  ) 
}

export default Main;