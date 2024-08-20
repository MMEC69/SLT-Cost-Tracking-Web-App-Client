import React from 'react';
import {
  CreateNewProjectFormFields,
  AddNewSingleStakeHolderFormFields,
  RegisterAndLoginFormField,
  AddCostFormFields,
  ViewCostFormFields,
  ModifyCostFormFields
} from '../Fields/Fields';

import{
  CreateProjectButton,
  AddNewStakeHolderButton,
  RemoveSubFormButton,
  SubmitButton
} from "../Buttons/Buttons";

import {
  RegisterHyperLink
} from '../HyperLinks/HyperLinks';

import {
  RegisterLoginHeading,
  StakeholdersHeading,
  IndividualStakeHolderHeading
} from "../TextContent/Headings"; 

import styles from "../../App.module.css";

//==========================================================
export function CreateNewProjectForm() {
  return (
    <div className={styles.createNewProjectForm}>
        <CreateNewProjectFormFields/>
        <CreateNewProjectFormFields/>
        <CreateNewProjectFormFields/>
        <AddNewStakeHolderForm/>
        <CreateNewProjectFormFields/> 
        <CreateNewProjectFormFields/>
        <CreateNewProjectFormFields/>
        <CreateProjectButton/>
    </div>
  );
}
//==========================================================
export function AddNewStakeHolderForm() {
  return (
    <div className={styles.addNewStakeHolderForm}>
        <StakeholdersHeading/>
        <AddNewSingleStakeHolderForm/>
        <AddNewSingleStakeHolderForm/>
        <AddNewStakeHolderButton/>
    </div>
  );
}
//==========================================================
export function AddNewSingleStakeHolderForm() {
  return (
    <div className={styles.AddNewSingleStakeHolderForm}>
        <div className={styles.AddNewSingleStakeHolderFieldListForm}>
            <IndividualStakeHolderHeading/>
            <form onSubmit="">
                <AddNewSingleStakeHolderFormFields/>
                <AddNewSingleStakeHolderFormFields/>
                <AddNewSingleStakeHolderFormFields/>
                <AddNewSingleStakeHolderFormFields/>
            </form>
        </div>
        <RemoveSubFormButton/>
    </div>
  );
}
//==========================================================
export function RegisterForm() {
  return (
    <div className={styles.registerLoginForm}>
        <RegisterLoginHeading/>
        <RegisterAndLoginFormField/>
        <RegisterAndLoginFormField/>
        <RegisterAndLoginFormField/>
        <RegisterAndLoginFormField/>
        <RegisterAndLoginFormField/>
        <SubmitButton/>
        <div className={styles.hyperLinkLayout1}>
          <RegisterHyperLink/>
        </div>
    </div>
  )
}
//==========================================================
export function LoginForm() {
  return (
    <div className={styles.registerLoginForm}>
        <RegisterLoginHeading/>
        <RegisterAndLoginFormField/>
        <RegisterAndLoginFormField/>
        <SubmitButton/>
        <div className={styles.hyperLinkLayout1}>
          <RegisterHyperLink/>
          <RegisterHyperLink/>
        </div>
    </div>
  )
}
//==========================================================
export function AddCostForm() {
  return (
    <div className={styles.addCostForm}>
      <form onSubmit="">
          <AddCostFormFields/>
          <AddCostFormFields/>
          <AddCostFormFields/>
          <AddCostFormFields/>
      </form>
      <SubmitButton/>
  </div>
  );
}
//==========================================================
export function ViewCostForm() {
  return (
    <div className={styles.viewCostForm}>
      <form onSubmit="">
          <ViewCostFormFields/>
          <ViewCostFormFields/>
          <ViewCostFormFields/>
          <ViewCostFormFields/>
          <ViewCostFormFields/>
          <ViewCostFormFields/>
      </form>
  </div>
  );
}
//==========================================================
export function ModifyCostForm() {
  return (
    <div className={styles.modifyCostForm}>
      <form onSubmit="">
          <ModifyCostFormFields/>
          <ModifyCostFormFields/>
          <ModifyCostFormFields/>
          <ModifyCostFormFields/>
          <ModifyCostFormFields/>
          <ModifyCostFormFields/>
      </form>
      <SubmitButton/>
  </div>
  );
}
//==========================================================
export function ConfirmForm() {
  return (
    <div className={styles.confirmPopUpForm}>
      <SubmitButton/>
      <SubmitButton/>
  </div>
  );
}
//==========================================================
