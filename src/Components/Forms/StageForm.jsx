import React, { useContext } from 'react';
import { SingleStage_1 } from '../SingleView/SingleStage';
import { 
  SingleProjectViewFunctionButton, 
  SingleProjectViewRemoveButton 
} from '../Buttons/Buttons';
import styles from "../../App.module.css";
import { GlobalContext } from '../../Context/GlobalContext';

export function StageForm() {
  const {
    activity,
    setActivity
  } = useContext(GlobalContext);
  // ===============================================
  const handleView = () => {
    console.log("> handleView initiated");
    setActivity("view-stage");
    console.log("> handleView ended");
  }
  // ===============================================
  const handleModify = () => {
    console.log("> handleModify initiated");
    setActivity("modify-stage");
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
