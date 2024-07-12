import React from 'react';
import StageForm from './StageForm';
import Form3 from './Form3';
import styles from "../App.module.css";
import SingleCost from './SingleCost';

export default function ViewProject() {
  return (
    <div className={styles.viewProject}>
        <div className={styles.projectFormDetails}>
            <StageForm/>
            <Form3/>
        </div>
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
  );
}
