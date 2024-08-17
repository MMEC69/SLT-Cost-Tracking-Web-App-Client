import React from 'react';
import styles from "../../App.module.css";
import {PopUpCloseButton} from "../Buttons/Buttons.jsx";

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
