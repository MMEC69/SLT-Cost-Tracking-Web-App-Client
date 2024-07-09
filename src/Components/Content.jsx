import React, { useContext, useState } from 'react';
import { GlobalContext } from '../Context/GlobalContext';
import { activity1, activity2 } from '../MetaData/Activities';
import ProjectList from './ProjectList';
import DashBoard from './DashBoard';
import styles from "../App.module.css";

export default function () {
    const {activity, setActivity} = useContext(GlobalContext);
  return (
    <div className={styles.content}>
        {activity === activity1 && 
            <DashBoard/>
        }
        {activity === activity2 && 
            <ProjectList/>
        }
    </div>
  );
}
