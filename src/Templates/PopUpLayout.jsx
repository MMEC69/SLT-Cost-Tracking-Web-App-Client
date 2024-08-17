import React from 'react';
import styles from "../App.module.css";

//This is a template to be used, do not import
export function PopUpLayoutLarge(props) {
    const {
        trigger,
        setTrigger
    } = props;
  return (trigger) ? (
    <div className={styles.popUpLayout}>
        <div className={styles.popUpLayoutLargeInner}>
            
        </div>
    </div>
  ) : "";
}

export function PopUpLayoutMedium(props) {
    const {
        trigger,
        setTrigger
    } = props;
    return (trigger) ? (
      <div className={styles.popUpLayout}>
          <div className={styles.popUpLayoutMediumInner}>

          </div>
      </div>
    ) : "";
}

export function PopUpLayoutSmall(props) {
    const {
        trigger,
        setTrigger
    } = props;
    return (trigger) ? (
      <div className={styles.popUpLayout}>
          <div className={styles.popUpLayoutSmallInner}>

          </div>
      </div>
    ) : "";
}
