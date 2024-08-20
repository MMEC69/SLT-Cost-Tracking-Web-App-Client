import React, { useContext, useState } from 'react';
import styles from "../../App.module.css";
import { 
    SingleProjectViewFunctionButton, 
    SingleProjectViewSelectButton, 
    SingleProjectViewRemoveButton 
} from '../Buttons/Buttons.jsx';

import { GlobalContext } from '../../Context/GlobalContext.jsx';
import { activity8, activity9 } from '../../MetaData/Activities.jsx';
import {AddCommentPopUp, AddCostPopUp} from '../PopUps/PopUps.jsx';

import { ConfirmPopUp } from '../PopUps/PopUps';
// ===============================================================
export function SingleProject() {
    const {
        activity, 
        setActivity,
    } = useContext(GlobalContext);

    const [trigger1, setTrigger1] = useState(false);
    const [trigger2, setTrigger2] = useState(false);
    const [trigger3, setTrigger3] = useState(false);

    const activity8Function = () => {
        console.log("> activity8Function initiated");
        console.log(`> Previous activity : ${activity}`);
        setActivity(activity8);
        console.log(`> Current activity : ${activity}`);
        console.log("> activity8Function ended");
    }
    const activity9Function = () => {
        console.log("> activity9Function initiated");
        console.log(`> Previous activity : ${activity}`);
        setActivity(activity9);
        console.log(`> Current activity : ${activity}`);
        console.log("> activity9Function ended");
    }
    const addCommentHandleClick = () => {
        console.log("> addCommentHandleClick initiated");
        setTrigger1(true);
        console.log("> addCommentHandleClick ended");
    }
    const addCostHandleClick = () => {
        console.log("> addCostHandleClick initiated");
        setTrigger2(true);
        console.log("> addCostHandleClick ended");
    }
    const popup3Function = () => {
        console.log("> popup3Function initiated");
        setPopup(popup3);
        console.log("> popup3Function ended");
    }
    const removeProjectHandleClick = () => {
        console.log("> removeProjectHandleClick initiated");
        setTrigger3(true);
        console.log("> removeProjectHandleClick ended");
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
                <SingleProjectViewFunctionButton
                    buttonName = "Add Comment"
                    onClick = {addCommentHandleClick}
                />
                <SingleProjectViewFunctionButton
                    buttonName = "Add Cost"
                    onClick = {addCostHandleClick}
                />
                <SingleProjectViewSelectButton
                    buttonName = "Select State"
                    onClick = {popup3Function}
                />
            </div>
            <div className={styles.buttonColumn2}>
                <SingleProjectViewFunctionButton
                    buttonName = "View"
                    onClick = {activity8Function}
                />
                <SingleProjectViewFunctionButton
                    buttonName = "Modify"
                    onClick = {activity9Function}
                />
                <SingleProjectViewRemoveButton
                    buttonName = "Remove"
                    onClick = {removeProjectHandleClick}
                />
            </div>
            <AddCommentPopUp
                trigger = {trigger1}
                setTrigger = {setTrigger1}
            />
            <AddCostPopUp
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
