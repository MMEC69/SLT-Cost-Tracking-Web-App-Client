import React, { Component } from 'react';
import styles from "../../App.module.css";

// Modify the components accordingly
// ==========================================================
export function ObjectMainSectionFormPopUp(props) {
    const {
        trigger,
        setTrigger
    } = props;
  return (trigger) ? ( 
    <div className={styles.popUpLayout}>
      <div className={styles.popUpLayoutLargeInner}>
          <AddCommentPopUpDisplayArea/>
          <AddCommentPopUpCommentInputArea/>
      </div>
    </div>
  ) : "";
}
// ==========================================================
export function ObjectSubSectionFormPopUp(props) {
    const {
        trigger,
        setTrigger
    } = props;
  return (trigger) ? ( 
    <div className={styles.popUpLayout}>
      <div className={styles.popUpLayoutLargeInner}>
          <AddCommentPopUpDisplayArea/>
          <AddCommentPopUpCommentInputArea/>
      </div>
    </div>
  ) : "";
}
// ==========================================================
export function ObjectMainSectionListPopUp(props) {
    const {
        trigger,
        setTrigger
    } = props;
  return (trigger) ? ( 
    <div className={styles.popUpLayout}>
      <div className={styles.popUpLayoutLargeInner}>
          <AddCommentPopUpDisplayArea/>
          <AddCommentPopUpCommentInputArea/>
      </div>
    </div>
  ) : "";
}
// ==========================================================
export function ObjectSubSectionListPopUp(props) {
    const {
        trigger,
        setTrigger
    } = props;
  return (trigger) ? ( 
    <div className={styles.popUpLayout}>
      <div className={styles.popUpLayoutLargeInner}>
          <AddCommentPopUpDisplayArea/>
          <AddCommentPopUpCommentInputArea/>
      </div>
    </div>
  ) : "";
}
// ==========================================================