import React, { useContext } from 'react';
import {
    FilterBarButton,
    FilterBarApplyButton
} from '../Buttons/Buttons.jsx';

import styles from "../../App.module.css";
import { 
    activity1, 
    activity2, 
    activity3, 
    activity4, 
    activity5, 
    activity6, 
    activity7
} from '../../MetaData/Activities';

import { GlobalContext } from '../../Context/GlobalContext';
// ======================================================================
export function FilterBar() {
    const {activity, setActivity} = useContext(GlobalContext);
    const activity1Function = () => {
        console.log("> activity1Function initiated");
        console.log(`> Previous activity : ${activity}`);
        setActivity(activity1);
        console.log(`> Current activity : ${activity}`);
        console.log("> activity1Function ended");
    }
    const activity2Function = () => {
        console.log("> activity2Function initiated");
        console.log(`> Previous activity : ${activity}`);
        setActivity(activity2);
        console.log(`> Current activity : ${activity}`);
        console.log("> activity2Function ended");
    }
    const activity3Function = () => {
        console.log("> activity3Function initiated");
        console.log(`> Previous activity : ${activity}`);
        setActivity(activity3);
        console.log(`> Current activity : ${activity}`);
        console.log("> activity3Function ended");
    }
    const activity4Function = () => {
        console.log("> activity4Function initiated");
        console.log(`> Previous activity : ${activity}`);
        setActivity(activity4);
        console.log(`> Current activity : ${activity}`);
        console.log("> activity4Function ended");
    }
    const activity7Function = () => {
        console.log("> activity7Function initiated");
        console.log(`> Previous activity : ${activity}`);
        setActivity(activity7);
        console.log(`> Current activity : ${activity}`);
        console.log("> activity7Function ended");
    }
  return (
    <div className={styles.filterBarContainer}>
        <div className={styles.filterBar}>
            <FilterBarButton
                onClick = {activity1Function}
                buttonName = "Filter By Name"
            />
            <FilterBarButton
                onClick = {activity2Function}
                buttonName = "Filter By Date"
            />
            <FilterBarButton
                onClick = {activity3Function}
                buttonName = "Filter By State"
            />
            <FilterBarButton
                onClick = {activity4Function}
                buttonName = "Total Costs"
            />
            <FilterBarApplyButton
                onClick = {activity7Function}
                buttonName = "Apply Filters"
            />
            <FilterResult/>
        </div>
    </div>
  );
}
// =============================================================
export function FilterResult(props) {
    const {
        filterResult
    } = props;
  return (
    <div className={styles.filterResultContainer}>
        <span className={styles.filterResult}>ProjectName: Sample</span>
        {/* <span className={styles.filterResult}>-</span>  */}
        <span className={styles.filterResult}>Date: 01/01/2020</span>
        {/* <span className={styles.filterResult}>-</span>  */}
        <span className={styles.filterResult}>State: Gathering</span>
        {/* <span className={styles.filterResult}>-</span>  */}
        <span className={styles.filterResult}>TotalCosts: 10</span>
    </div>
  );
}
// =============================================================
