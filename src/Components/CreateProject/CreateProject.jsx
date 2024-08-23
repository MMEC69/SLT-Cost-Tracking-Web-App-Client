import React from 'react';
import {CreateNewProjectForm} from '../Forms/Forms';
import { CreateObjectBar } from '../CreateObjectBar/CreateObjectBar';
import styles from "../../App.module.css";

export function CreateProject() {
  return (
    <div className={styles.createProjectLayout}>
      <CreateObjectBar/>
      <CreateNewProjectForm/>
    </div>
  );
}
