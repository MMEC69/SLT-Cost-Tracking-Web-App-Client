import React from 'react';
import styles from "../../App.module.css";
import {
  SingleUserRemoveButton,
  SingleUserTransferButton,
  SingleUserViewButton
} from '../Buttons/Buttons';

//==================================================
export function SingleUser() {
  return (
    <div className={styles.singleUser}>
        <h4>User Name</h4>
        <h4>Phone number</h4>
        <h4>Email</h4>
        <h4>User Type</h4>
        <SingleUserRemoveButton/>
    </div>
  );
}
//==================================================
export function SingleAdmin() {
  return (
    <div className={styles.singleUser}>
        <h4>User Name</h4>
        <h4>Phone number</h4>
        <h4>Email</h4>
        <h4>User Type</h4>
        <SingleUserTransferButton/>
    </div>
  );
}
//==================================================
export function SingleSuperAdmin() {
  return (
    <div className={styles.singleUser}>
        <h4>User Name</h4>
        <h4>Phone number</h4>
        <h4>Email</h4>
        <h4>User Type</h4>
        <SingleUserViewButton/>
    </div>
  );
}
//==================================================