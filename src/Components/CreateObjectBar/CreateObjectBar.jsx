import React, { useContext, useState } from 'react';
import {
    FilterBarButton
} from '../Buttons/Buttons.jsx';

import styles from "../../App.module.css";
import { ObjectFormPopUp } from '../PopUps/ObjectSectionPopUps.jsx';

// ======================================================================
export function CreateObjectBar() {
    const [trigger1, setTrigger1] = useState(false);
    // ------------------------------------------------------------ 
    const createObjectHandleClick = () => {
        console.log("> createObjectHandleClick initiated");
        setTrigger1(true);
        console.log("> createObjectHandleClick ended");
    }
    // ------------------------------------------------------------
  return (
    <div className={styles.filterBarContainer}>
        <div className={styles.filterBar}>
            <FilterBarButton
                onClick = {createObjectHandleClick}
                buttonName = "Create Object"
            />
        </div>
        <ObjectFormPopUp
            trigger = {trigger1}
            setTrigger = {setTrigger1}
        />
    </div>
  );
}
// =============================================================
