import React from 'react';
import styles from "../../App.module.css";
import {SingleProject} from '../SingleView/SingleProject';
import { FilterBar } from '../FilterBar/FilterBar';

export function ProjectList() {
  return (
    <div className={styles.projectList}>
        <FilterBar/>
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
