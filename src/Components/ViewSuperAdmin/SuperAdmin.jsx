import React from 'react';
import {SingleUser} from '../SingleView/SingleUser';
import styles from "../../App.module.css";

export function SuperAdmin() {
  return (
    <div className={styles.userList}>
        <SingleUser/>
        <SingleUser/>
        <SingleUser/>
        <SingleUser/>
        <SingleUser/>
        <SingleUser/>
        <SingleUser/>
        <SingleUser/>
        <SingleUser/>
        <SingleUser/>
        <SingleUser/>
        <SingleUser/>
    </div>
  );
}
