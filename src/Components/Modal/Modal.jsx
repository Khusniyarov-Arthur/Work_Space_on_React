import { useRef } from "react";
import style from "./Modal.module.css";
import ReactDOM from "react-dom";

const modal = document.getElementById("modal");

export const Modal = ({ children, closeModal }) => {
  const overlayRef = useRef(null);

  const handleClick = (e) => {
    if (e.target === overlayRef.current) {
      closeModal();
    }
  };
  return ReactDOM.createPortal(
    <div
      onClick={(e) => {
        handleClick(e);
      }}
      className={style.modal}
      ref={overlayRef}
    >
      <div className={style.main}>{children}</div>
    </div>,
    modal
  );
};
