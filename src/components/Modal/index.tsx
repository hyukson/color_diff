import React, { useState } from "react";
import { ModalStyled } from "./styled";

interface ModalTypes {
  children: React.ReactNode
}

const Modal = ({ children }: ModalTypes) => {
  const [openModal, setOpenModal ] = useState<React.ReactNode>();
  
  // open("result");

  // const $counter = document.querySelector(".count span");
  
  // Game.counter($counter, Game.score);
  return (
    <ModalStyled>
      <div className="popupView">{openModal}</div>  
    </ModalStyled>
  )
}

export default Modal;