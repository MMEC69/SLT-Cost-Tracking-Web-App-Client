import React from 'react';
import {SinglePopUpComment} from "./SinglePopUpComponents";
import styles from "../../App.module.css";
import {
  AddCostForm,
  ViewCostForm,
  ModifyCostForm,
  ConfirmForm,
  ObjectForm
} from "../Forms/Forms";
import { SingleProject } from '../SingleView/SingleProject';
import { ObjectPopUpFormTitle } from './PopUpTitle';

// ====================================================
export function AddCommentPopUpDisplayArea() {
  return (
    <div className={styles.popUpDisplayArea}>
      <div className={styles.commentListWrapper}>
        <div className={styles.commentList}>
          <SinglePopUpComment/>
          <SinglePopUpComment/>
          <SinglePopUpComment/>
          <SinglePopUpComment/>
          <SinglePopUpComment/>
          <SinglePopUpComment/>
          <SinglePopUpComment/>
          <SinglePopUpComment/>
          <SinglePopUpComment/>
          <SinglePopUpComment/>
          <SinglePopUpComment/>
        </div>
      </div>
    </div>
  );
}
// ====================================================
export function AddCommentPopUpCommentInputArea() {
  return (
    <div className={styles.addCommentInputArea}>
        <input 
          type="text" 
          name="searchItem" 
          id="searchItem" 
        />
    </div>
  );
}
// ====================================================
export function AddCostPopUpDisplayArea() {
  return (
    <div className={styles.popUpDisplayArea}>
      <div className={styles.addCostFormWrapper}>
        <div className={styles.addCostForm}>
          <AddCostForm/>
        </div>
      </div>
    </div>
  );
}
// ====================================================
export function ViewCostPopUpDisplayArea() {
  return (
    <div className={styles.popUpDisplayArea}>
      <div className={styles.viewCostFormWrapper}>
        <div className={styles.viewCostForm}>
          <ViewCostForm/>
        </div>
      </div>
    </div>
  );
}
// ====================================================
export function ModifyCostPopUpDisplayArea() {
  return (
    <div className={styles.popUpDisplayArea}>
      <div className={styles.viewCostFormWrapper}>
        <div className={styles.viewCostForm}>
          <ModifyCostForm/>
        </div>
      </div>
    </div>
  );
}
// ====================================================
export function ConfirmPopUpDisplayArea() {
  return (
    <div className={styles.popUpDisplayArea}>
      <div className={styles.confirmPopUpWrapper}>
        <div className={styles.confirmPopUp}>
          <span>Are you sure to continue?</span>
          <ConfirmForm/>
        </div>
      </div>
    </div>
  );
}
// ====================================================
export function ObjectFormDisplayArea() {
  return (
    <div className={styles.popUpDisplayArea}>
        <div className={styles.objectPopUp}>
          <ObjectFormView/>
          <ObjectListView/>
        </div>
    </div>
  );
}
// ----------------------------------------------------
export function ObjectFormView() {
  return (
    <div className={styles.objectFormWrapper}>
        <ObjectPopUpFormTitle/>
        <ObjectForm/>
    </div>
  );
}
// ----------------------------------------------------
export function ObjectListView() {
  return (
    <div className={styles.objectListViewWrapper}>
        <div className={styles.objectListView}>
          <SingleProject/>
          <SingleProject/>
          <SingleProject/>
          <SingleProject/>
          <SingleProject/>
          <SingleProject/>
        </div>
    </div>
  );
}
// ====================================================