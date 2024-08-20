import React, { useContext, useState } from 'react';
import styles from "../../App.module.css";
import {   
    SingleProjectViewFunctionButton, 
    SingleProjectViewRemoveButton, 
    SingleProjectViewSelectButton 
} from '../Buttons/Buttons';
import { GlobalContext } from '../../Context/GlobalContext';
import { 
    activity8, 
    activity9 
} from '../../MetaData/Activities';
import { 
    popup3, 
    popup4 
} from '../../MetaData/Popups';

import { ConfirmPopUp, ModifyCostPopUp, ViewCostPopUp } from '../PopUps/PopUps';
// =====================================================================
export function SingleCost() {
    const {
        activity, 
        setActivity,
        popup,
        setPopup
    } = useContext(GlobalContext);

    const [trigger1, setTrigger1] = useState(false);
    const [trigger2, setTrigger2] = useState(false);
    const [trigger3, setTrigger3] = useState(false);

    const viewCostHandleClick = () => {
        console.log("> viewCostHandleClick initiated");
        setTrigger1(true);
        console.log("> viewCostHandleClick ended");
    }
    const modifyCostHandleClick = () => {
        console.log("> modifyCostHandleClick initiated");
        setTrigger2(true);
        console.log("> modifyCostHandleClick ended");
    }
    const popup3Function = () => {
        console.log("> popup3Function initiated");
        console.log(`> Previous popup : ${popup}`);
        setPopup(popup3);
        console.log(`> Current popup : ${popup}`);
        console.log("> popup3Function ended");
    }
    const removeCostHandleClick = () => {
        console.log("> removeCostHandleClick initiated");
        setTrigger3(true);
        console.log("> removeCostHandleClick ended");
    }
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
                <SingleProjectViewSelectButton
                    buttonName = "Select State"
                    onClick = {popup3Function}
                />
            </div>
            <div className={styles.buttonColumn2}>
                <SingleProjectViewFunctionButton
                    buttonName = "View"
                    onClick = {viewCostHandleClick}
                />
                <SingleProjectViewFunctionButton
                    buttonName = "Modify"
                    onClick = {modifyCostHandleClick}
                />
                <SingleProjectViewRemoveButton
                    buttonName = "Remove"
                    onClick = {removeCostHandleClick}
                />
            </div>
            <ViewCostPopUp
                trigger = {trigger1}
                setTrigger = {setTrigger1}
            />
            <ModifyCostPopUp
                trigger = {trigger2}
                setTrigger = {setTrigger2}
            />
            <ConfirmPopUp
                trigger = {trigger3}
                setTrigger = {setTrigger3}
            />
        </div>
    </div>
  );
}
