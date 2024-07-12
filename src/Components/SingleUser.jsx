import React from 'react';
import styles from "../App.module.css";
import Button7 from './Button7';

export default function SingleUser() {
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
