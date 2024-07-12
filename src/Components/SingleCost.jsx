import React, { useContext } from 'react';
import styles from "../App.module.css";
import { Button3_1, Button3_3, Button3_2 } from './Button3';
import { GlobalContext } from '../Context/GlobalContext';
import { activity8, activity9 } from '../MetaData/Activities';
import { popup3, popup4 } from '../MetaData/Popups';

export default function SingleCost() {
    const {
        activity, 
        setActivity,
        popup,
        setPopup
    } = useContext(GlobalContext);
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
    const popup3Function = () => {
        console.log("> popup3Function initiated");
        console.log(`> Previous popup : ${popup}`);
        setPopup(popup3);
        console.log(`> Current popup : ${popup}`);
        console.log("> popup3Function ended");
    }
    const popup4Function = () => {
        console.log("> popup4Function initiated");
        console.log(`> Previous popup : ${popup}`);
        setPopup(popup4);
        console.log(`> Current popup : ${popup}`);
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
                <Button3_3
                    buttonName = "Select State"
                    onClick = {popup3Function}
                />
            </div>
            <div className={styles.buttonColumn2}>
                <Button3_1
                    buttonName = "View"
                    onClick = {activity8Function}
                />
                <Button3_1
                    buttonName = "Modify"
                    onClick = {activity9Function}
                />
                <Button3_2
                    buttonName = "Remove"
                    onClick = {popup4Function}
                />
            </div>
        </div>
    </div>
  );
}
