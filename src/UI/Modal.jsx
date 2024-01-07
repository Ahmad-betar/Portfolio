import React from "react";
import classes from "./Modal.module.css";
import { createPortal } from "react-dom";
const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const backdrop = document.getElementById("backdrop");
const overlay = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <>
      {createPortal(<BackDrop onClose={props.onClose}></BackDrop>, backdrop)}
      {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, overlay)}
    </>
  );
};

export default Modal;
