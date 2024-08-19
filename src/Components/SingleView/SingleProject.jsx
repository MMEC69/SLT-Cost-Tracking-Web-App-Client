import React, { useContext, useState } from 'react';
import styles from "../../App.module.css";
import { 
    SingleProjectViewFunctionButton, 
    SingleProjectViewSelectButton, 
    SingleProjectViewRemoveButton 
} from '../Buttons/Buttons.jsx';
import { GlobalContext } from '../../Context/GlobalContext.jsx';
import { activity8, activity9 } from '../../MetaData/Activities.jsx';
import {AddCommentPopUp} from '../PopUps/PopUps.jsx';

export function SingleProject() {
    const {
        activity, 
        setActivity,
    } = useContext(GlobalContext);

    const [trigger1, setTrigger1] = useState(false);

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
        console.log(trigger1)
        console.log("> addCommentHandleClick ended");
    }
    const popup2Function = () => {
        console.log("> popup2Function initiated");
        setPopup(popup2);
        console.log("> popup2Function ended");
    }
    const popup3Function = () => {
        console.log("> popup3Function initiated");
        setPopup(popup3);
        console.log("> popup3Function ended");
    }
    const popup4Function = () => {
        console.log("> popup4Function initiated");
        setPopup(popup4);
        console.log("> popup4Function ended");
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
                    onClick = {popup2Function}
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
                    onClick = {popup4Function}
                />
            </div>
            <AddCommentPopUp
            trigger = {trigger1}
            setTrigger = {setTrigger1}
            />
        </div>
    </div>
  );
}
