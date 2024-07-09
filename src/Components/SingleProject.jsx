import React from 'react';
import styles from "../App.module.css";
import { Button3_1, Button3_3, Button3_2 } from './Button3';

export default function SingleProject() {
  return (
    <div className={styles.singleProject}>
        <div className={styles.projectDetails}>
            <h3>Project Name</h3>
            <h4>06/06/2024</h4>
            <h4>Total Costs: 23</h4>
            <h5>State</h5>
        </div>
        <div className={styles.buttonLayout1}>
            <div className={styles.buttonColumn1}>
                <Button3_1/>
                <Button3_1/>
                <Button3_3/>
            </div>
            <div className={styles.buttonColumn2}>
                <Button3_1/>
                <Button3_1/>
                <Button3_2/>
            </div>
        </div>
    </div>
  );
}
