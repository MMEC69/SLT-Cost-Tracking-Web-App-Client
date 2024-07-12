import React from 'react';
import { SingleStage_1, SingleStage_2 } from './SingleStage';
import styles from "../App.module.css";

export default function StageForm() {
  return (
    <div className={styles.stageForm}>
        <div className={styles.stageFormRow}>
            <SingleStage_1/>
            <SingleStage_1/>
            <SingleStage_1/>
            <SingleStage_1/>
            <SingleStage_1/>
            <SingleStage_1/>
        </div>
        <div className={styles.stageFormRow}>
            <SingleStage_1/>
            <SingleStage_1/>
            <SingleStage_1/>
            <SingleStage_1/>
            <SingleStage_1/>
            <SingleStage_1/>
        </div>
        <div className={styles.stageFormRow}>
            <SingleStage_2/>
        </div>
    </div>
  );
}
