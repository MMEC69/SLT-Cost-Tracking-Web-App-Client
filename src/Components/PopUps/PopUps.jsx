import React from 'react';
import styles from "../../App.module.css";
import { PopUpTitle } from './PopUpTitle';
import { 
  AddCommentPopUpDisplayArea,
  AddCommentPopUpCommentInputArea,
  AddCostPopUpDisplayArea,
  ViewCostPopUpDisplayArea,
  ModifyCostPopUpDisplayArea,
  ConfirmPopUpDisplayArea
} from './PopUpDisplayArea';

// ==========================================================
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
          <AddCommentPopUpDisplayArea/>
          <AddCommentPopUpCommentInputArea/>
      </div>
    </div>
  ) : "";
}
// ==========================================================
export function AddCostPopUp(props) {
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
        <AddCostPopUpDisplayArea/>
    </div>
  </div>
) : "";
}
// ==========================================================
export function ViewCostPopUp(props) {
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
        <ViewCostPopUpDisplayArea/>
    </div>
  </div>
) : "";
}
// ==========================================================
export function ModifyCostPopUp(props) {
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
        <ModifyCostPopUpDisplayArea/>
    </div>
  </div>
) : "";
}
// ==========================================================
export function ConfirmPopUp(props) {
  const {
      trigger,
      setTrigger
  } = props;
return (trigger) ? ( 
  <div className={styles.popUpLayout}>
    <div className={styles.popUpLayoutSmallInner}>
        <PopUpTitle
          setTrigger = {setTrigger}
        />
        <ConfirmPopUpDisplayArea/>
    </div>
  </div>
) : "";
}
// ==========================================================