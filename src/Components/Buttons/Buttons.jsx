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
export function SingleUserRemoveButton() {
    return (
      <div className={styles.singleUserRemoveButton}>
          <button>
              Remove
          </button>
      </div>
    );
  }
//==========================================================
export function SingleUserTransferButton() {
    return (
      <div className={styles.singleUserTransferButton}>
          <button>
              Transfer
          </button>
      </div>
    );
  }
  
//==========================================================
export function SingleUserViewButton() {
    return (
      <div className={styles.singleUserViewButton}>
          <button>
              View
          </button>
      </div>
    );
  }
//==========================================================
export function SubmitButton(props) {
  return (
    <div className={styles.button1}>
        <button>
            Submit
        </button>
    </div>
  )
} 
//==========================================================
export function RemoveSubFormButton() {
  return (
    <div className={styles.button4}>
        <button>
            Remove
        </button>
    </div>
  );
}
//==========================================================
export function AddNewStakeHolderButton() {
  return (
    <div className={styles.addNewStakeHolderButton}>
        <button>
            + Add New Stakeholder
        </button>
    </div>
  );
}
//==========================================================
export function CreateProjectButton() {
  return (
    <div className={styles.createProjectButton}>
       <button>
            Create Project
        </button> 
    </div>
  );
}
//==========================================================
