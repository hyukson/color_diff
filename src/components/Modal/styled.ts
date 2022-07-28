import styled from "styled-components";

export const ModalStyled = styled.div`
  /* 모달 */
  .popupView {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, .6);
    opacity: 0;
    pointer-events: none;
    transition: .4s;
  }

  .popupView.open {
    pointer-events: initial;
    opacity: 1;
  }

  .popupView > div {
    min-width: 350px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    padding: 1rem 2rem;
    text-align: center;
  }

  .count p {
    margin: 1rem 0;
    font-size: 1.8rem;
  }
`;