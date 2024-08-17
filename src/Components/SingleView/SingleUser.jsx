import React from 'react';
import styles from "../../App.module.css";
import {
  Button7,
  Button8,
  Button9
} from '../Buttons/Buttons';

//==================================================
export function SingleUser() {
  return (
    <div className={styles.singleUser}>
        <h4>User Name</h4>
        <h4>Phone number</h4>
        <h4>Email</h4>
        <h4>User Type</h4>
        <Button7/>
    </div>
  );
}
//==================================================
export function SingleUserAdmin() {
  return (
    <div className={styles.singleUser}>
        <h4>User Name</h4>
        <h4>Phone number</h4>
        <h4>Email</h4>
        <h4>User Type</h4>
        <Button8/>
    </div>
  );
}
//==================================================
export function SingleUserSuperAdmin() {
  return (
    <div className={styles.singleUser}>
        <h4>User Name</h4>
        <h4>Phone number</h4>
        <h4>Email</h4>
        <h4>User Type</h4>
        <Button9/>
    </div>
  );
}
//==================================================