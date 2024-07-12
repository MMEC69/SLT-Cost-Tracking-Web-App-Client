import React from 'react';
import SingleUser from './SingleUser';
import styles from "../App.module.css";

export default function ViewUsers() {
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
