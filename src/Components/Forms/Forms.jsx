import React from 'react';
import Field2 from '../Field2';
import styles from "../../App.module.css";
import Button6 from '../Button6';
import Heading2 from '../Heading2';
import Button5 from '../Button5';
import Heading3 from '../Heading3';
import Button4 from '../Button4';
import Field3 from '../Field3';

//==========================================================
export function CreateNewProjectForm() {
  return (
    <div className={styles.createNewProjectForm}>
        <Field2/>
        <Field2/>
        <Field2/>
        <AddNewStakeHolderForm/>
        <Field2/> 
        <Field2/>
        <Field2/>
        <Button6/>
    </div>
  );
}
//==========================================================
export function AddNewStakeHolderForm() {
  return (
    <div className={styles.addNewStakeHolderForm}>
        <Heading2/>
        <AddNewSingleStakeHolderForm/>
        <AddNewSingleStakeHolderForm/>
        <Button5/>
    </div>
  );
}
//==========================================================
export function AddNewSingleStakeHolderForm() {
  return (
    <div className={styles.AddNewSingleStakeHolderForm}>
        <div className={styles.AddNewSingleStakeHolderFieldListForm}>
            <Heading3/>
            <form onSubmit="">
                <Field3/>
                <Field3/>
                <Field3/>
                <Field3/>
            </form>
        </div>
        <Button4/>
    </div>
  );
}
//==========================================================