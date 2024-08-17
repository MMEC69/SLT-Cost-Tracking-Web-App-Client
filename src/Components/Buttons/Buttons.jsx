import React from 'react';
import styles from "../../App.module.css";

//==========================================================
export function PopUpCloseButton(props) {
    const {
        buttonName,
        onClick
      } = props;
      return (
        <div className = {styles.popUpCloseButton}>
            <button onClick={onClick}>{buttonName}</button>
        </div>
      );
}
//==========================================================
export function NavBarButton(props) {
    const {
        onClick,
        buttonName
    } = props;
  return (
    <div className={styles.button2}>
        <button onClick={onClick}>
            {buttonName}
        </button>
    </div>
  );
}
//==========================================================
export function SingleProjectViewFunctionButton(props) {
    const {
      buttonName,
      onClick
    } = props;
  
    return (
      <div className={`${styles.singleProjectViewButton} ${styles.singleProjectViewFunctionButton}`}>
          <button onClick={onClick}>
              {buttonName}
          </button>
      </div>
    );
  }
//==========================================================
  export function SingleProjectViewRemoveButton(props) {
    const {
      buttonName,
      onClick
    } = props;
      return (
        <div className={`${styles.singleProjectViewButton} ${styles.singleProjectViewRemoveButton}`}>
            <button>
              {buttonName}
            </button>
        </div>
      );
  }
//==========================================================
  export function SingleProjectViewSelectButton(props) {
    const {
      buttonName,
      onClick
    } = props;
      return (
        <div className={`${styles.singleProjectViewButton} ${styles.singleProjectViewSelectButton}`}>
            <button>
              {buttonName}
            </button>
        </div>
      );
  }
//==========================================================
export function Button7() {
    return (
      <div className={styles.button7}>
          <button>
              Remove
          </button>
      </div>
    );
  }
//==========================================================
export function Button8() {
    return (
      <div className={styles.button8}>
          <button>
              Transfer
          </button>
      </div>
    );
  }
  
//==========================================================
export function Button9() {
    return (
      <div className={styles.button9}>
          <button>
              View
          </button>
      </div>
    );
  }
//==========================================================
  

