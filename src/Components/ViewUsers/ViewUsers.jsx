import React from 'react';
import {
  SingleUser,
  SingleAdmin,
  SingleSuperAdmin
} from '../SingleView/SingleUser.jsx';
import styles from "../../App.module.css";

export function ViewUsers() {
  return (
    <div className={styles.userList}>
        <SingleSuperAdmin/>
        <SingleAdmin/>
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
