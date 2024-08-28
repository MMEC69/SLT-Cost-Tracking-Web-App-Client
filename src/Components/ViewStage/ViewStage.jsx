import React, { useContext } from 'react';
import styles from "../../App.module.css";
import { PopUpBackButton } from '../Buttons/Buttons';
import { SingleObject } from '../SingleView/SingleObject';
import { ObjectForm } from '../Forms/Forms';
import { GlobalContext } from '../../Context/GlobalContext';

export function ViewStage() {
    const {
        activity,
        setActivity
    } = useContext(GlobalContext)

    const handleBackButton = () => {
        console.log("> handleBackButton initiated");
        setActivity("view-project");
        console.log("> handleBackButton ended");
    }
  return (
    <div className={styles.viewStage}>
        <div className={styles.viewStageLeftView}>
            <div className={styles.viewStageLeftViewPanel}>
                <PopUpBackButton
                    buttonName = "Go Back"
                    onClick = {handleBackButton}
                />
                <span>
                    Main Objectives
                </span>
            </div>
            <div className={styles.viewStageLeftViewListWrapper}>
                <div className={styles.viewStageLeftViewList}>
                    <SingleObject/>
                    <SingleObject/>
                    <SingleObject/>
                </div>
            </div>
        </div>
        <div className={styles.viewStageMiddleView}>
            <ObjectForm/>
        </div>
        <div className={styles.viewStageRightView}>
            <div className={styles.viewStageRightViewPanel}>
                <span>
                    Sub Objectives of Main Object
                </span>
            </div>
            <div className={styles.viewStageRightViewListWrapper}>
                <div className={styles.viewStageRightViewList}>
                    <SingleObject/>
                    <SingleObject/>
                    <SingleObject/>
                </div>
            </div>
        </div>
    </div>
  );
}
