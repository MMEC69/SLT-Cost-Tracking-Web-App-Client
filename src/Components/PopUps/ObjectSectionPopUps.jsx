import React from 'react';
import styles from "../../App.module.css";
import { PopUpTitle } from './PopUpTitle';
import {ObjectFormDisplayArea} from "./PopUpDisplayArea";

// ==========================================================
export function ObjectFormPopUp(props) {
    const {
        trigger,
        setTrigger
    } = props;
  return (trigger) ? ( 
    <div className={styles.popUpLayoutAdjusted}>
      <div className={styles.popUpLayoutExtraLargeInner}>
          <PopUpTitle
            setTrigger = {setTrigger}
          />
          <ObjectFormDisplayArea/>
      </div>
    </div>
  ) : "";
}
// ==========================================================