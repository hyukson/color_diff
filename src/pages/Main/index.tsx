import { Link } from "react-router-dom";
import Rap from "../../components/Rap";

const Main = () => {
  return (
    <Rap>
      <h2>다른 색깔 찾기!</h2>

      <Link to="game" className="button" style={{background: "#febf00"}}>시작하기</Link>
      <Link to="rank" className="button" style={{background: "#3dc7f0"}}>랭킹보기</Link>
    </Rap>
  ) 
}

export default Main;