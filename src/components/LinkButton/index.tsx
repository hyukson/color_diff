import { Link } from "react-router-dom";
import { LinkButtonStyled } from "./styled";

interface LinkButtonTypes {
  link: string;
  text: string;
  color?: string;
  onClick?: () => void;
}

const LinkButton = ({link, text, color, ...props}: LinkButtonTypes) => {
  return (
    <LinkButtonStyled {...props} color={color}>
      <Link to={link}>{text}</Link>
    </LinkButtonStyled>
  )
}

export default LinkButton;