import React from 'react';
import StageForm from '../StageForm';
import {CreateNewProjectForm} from '../Forms/Forms';
import styles from "../../App.module.css";
import {SingleCost} from '../SingleView/SingleCost';

export function ViewProject() {
  return (
    <div className={styles.viewProject}>
        <div className={styles.projectStageFormDetails}>
          <StageForm/>
        </div>
        
        <div className={styles.projectInformation}>
          <div className={styles.projectFormDetailsWrapper}>
            <div className={styles.projectFormDetails}>
              <CreateNewProjectForm/>
            </div>
          </div>
          <div className={styles.projectCostListWrapper}>
            <div className={styles.projectCostList}>
              <SingleCost/>
              <SingleCost/>
              <SingleCost/>
              <SingleCost/>
              <SingleCost/>
              <SingleCost/>
              <SingleCost/>
              <SingleCost/>
              <SingleCost/>
              <SingleCost/>
              <SingleCost/>
              <SingleCost/>
            </div>
          </div>
        </div>
    </div>
  );
}
