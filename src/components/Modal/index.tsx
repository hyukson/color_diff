import { ModalStyled } from "./styled";

interface ModalTypes {
  isOpen: boolean;
  children: React.ReactNode
}

const Modal = ({ isOpen, children }: ModalTypes) => {
  return (
    <ModalStyled className={isOpen ? "show" : ""}>
      {children}
    </ModalStyled>
  )
}

export default Modal;