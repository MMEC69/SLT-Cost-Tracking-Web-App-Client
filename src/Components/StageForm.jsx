import React from 'react';
import { SingleStage_1 } from './SingleStage';
import { Button3_1, Button3_2 } from './Button3';
import styles from "../App.module.css";

export default function StageForm() {
  // ===============================================
  const handleView = () => {
    console.log("> handleView initiated");
    console.log("> handleView ended");
  }
  // ===============================================
  const handleModify = () => {
    console.log("> handleModify initiated");
    console.log("> handleModify ended");
  }
  // ===============================================
  const handleRemove = () => {
    console.log("> handleRemove initiated");
    console.log("> handleRemove ended");
  }
  // ===============================================
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
        <div className={`${styles.stageFormRow} ${styles.stageFormButtonLayout}`}>
          <Button3_1
            buttonName = "View"
            onClick = {handleView}
          />
          <Button3_1
              buttonName = "Modify"
              onClick = {handleModify}
          />
          <Button3_2
              buttonName = "Remove"
              onClick = {handleRemove}
          />
        </div>
    </div>
  );
}
