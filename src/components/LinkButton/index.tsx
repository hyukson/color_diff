import { Link } from "react-router-dom";
import { LinkButtonStyled } from "./styled";

interface LinkButtonTypes {
  link: string;
  text: string;
  color?: string;
}

const LinkButton = ({link, text, color, ...prop}: LinkButtonTypes) => {
  return (
    <LinkButtonStyled color={color}>
      <Link to={link}>{text}</Link>
    </LinkButtonStyled>
  )
}

export default LinkButton;