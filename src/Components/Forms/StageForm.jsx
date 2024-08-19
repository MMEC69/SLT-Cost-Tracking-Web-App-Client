import React from 'react';
import { SingleStage_1 } from '../SingleView/SingleStage';
import { 
  SingleProjectViewFunctionButton, 
  SingleProjectViewRemoveButton 
} from '../Buttons/Buttons';
import styles from "../../App.module.css";

export function StageForm() {
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
          <SingleProjectViewFunctionButton
            buttonName = "View"
            onClick = {handleView}
          />
          <SingleProjectViewFunctionButton
              buttonName = "Modify"
              onClick = {handleModify}
          />
          <SingleProjectViewRemoveButton
              buttonName = "Remove"
              onClick = {handleRemove}
          />
        </div>
    </div>
  );
}
