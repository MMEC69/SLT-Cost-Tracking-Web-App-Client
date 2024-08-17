import React from 'react';
import styles from "../../App.module.css";
import SingleProject from '../SingleView/SingleProject';

export function ProjectList() {
  return (
    <div className={styles.projectList}>
        <SingleProject/>
        <SingleProject/>
        <SingleProject/>
        <SingleProject/>
        <SingleProject/>
        <SingleProject/>
        <SingleProject/>
        <SingleProject/>
        <SingleProject/>
        <SingleProject/>
    </div>
  );
}
