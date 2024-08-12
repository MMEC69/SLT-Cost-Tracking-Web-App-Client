import React from 'react';
import StageForm from './StageForm';
import Form3 from './Form3';
import styles from "../App.module.css";
import SingleCost from './SingleCost';

export default function ModifyProject() {
  return (
    <div className={styles.viewProject}>
        <div className={styles.projectStageFormDetails}>
          <StageForm/>
        </div>
        
        <div className={styles.projectInformation}>
          <div className={styles.projectFormDetailsWrapper}>
            <div className={styles.projectFormDetails}>
              <Form3/>
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
