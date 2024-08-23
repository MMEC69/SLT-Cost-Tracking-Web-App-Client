import React from 'react';
import styles from "../../App.module.css";
import {PopUpBackButton, PopUpCloseButton} from "../Buttons/Buttons.jsx";

//=======================================================
export function PopUpTitle(props) {
  const {
    title,
    setTrigger
  } = props;
  return (
    <div className={styles.popUpTitle}>
        <span>This is the title</span>
        <PopUpCloseButton
          buttonName = "Close"
          onClick = {(e) => setTrigger(false)}
        />
    </div>
  )
}
//=======================================================
export function ObjectPopUpFormTitle(props) {
  const {
    title,
    setTrigger
  } = props;
  return (
    <div className={styles.objectPopUpTitle}>
        <span>This is the title</span>
        <PopUpBackButton
          buttonName = "Go Back"
          onClick = {(e) => setTrigger(false)}
        />
    </div>
  )
}
//=======================================================