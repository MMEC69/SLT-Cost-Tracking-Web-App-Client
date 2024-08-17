import React from 'react';
import styles from "../../App.module.css";
import { PopUpTitle } from './PopUpTitle';
import { PopUpDisplayArea } from './PopUpDisplayArea';

export function AddCommentPopUp(props) {
    const {
        trigger,
        setTrigger
    } = props;
  return (trigger) ? ( 
    <div className={styles.popUpLayout}>
      <div className={styles.popUpLayoutLargeInner}>
          <PopUpTitle
            setTrigger = {setTrigger}
          />
          <PopUpDisplayArea/>
      </div>
    </div>
  ) : "";
}
