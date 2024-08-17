import React from 'react';
import {
  SingleUser,
  SingleUserAdmin,
  SingleUserSuperAdmin
} from '../SingleView/SingleUser.jsx';
import styles from "../../App.module.css";

export function ViewUsers() {
  return (
    <div className={styles.userList}>
        <SingleUserSuperAdmin/>
        <SingleUserAdmin/>
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
