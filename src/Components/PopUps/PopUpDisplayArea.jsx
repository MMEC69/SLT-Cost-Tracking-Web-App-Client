import React from 'react';
import {SinglePopUpComment} from "./SinglePopUpComponents";
import styles from "../../App.module.css";

export function PopUpDisplayArea() {
  return (
    <div className={styles.popUpDisplayArea}>
        <SinglePopUpComment/>
        <SinglePopUpComment/>
        <SinglePopUpComment/>
        <SinglePopUpComment/>
    </div>
  );
}

export function PopUpCommentInputArea() {
  return (
    <div className={styles.popUpDisplayArea}>
        <SinglePopUpComment/>
        <SinglePopUpComment/>
        <SinglePopUpComment/>
        <SinglePopUpComment/>
    </div>
  );
}

