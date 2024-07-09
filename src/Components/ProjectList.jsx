import React from 'react';
import styles from "../App.module.css";
import SingleProject from './SingleProject';

export default function ProjectList() {
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
