import React, { useContext, useState } from 'react';
import { GlobalContext } from '../Context/GlobalContext';
import { activity1, activity2, activity3 } from '../MetaData/Activities';
import ProjectList from './ProjectList';
import DashBoard from './DashBoard';
import CreateProject from './CreateProject';
import styles from "../App.module.css";

export default function () {
    const {activity, setActivity} = useContext(GlobalContext);
  return (
    <div className={styles.content}>
        {activity === activity1 && 
            <DashBoard/>
        }
        {activity === activity2 && 
            <CreateProject/>
        }
        {activity === activity3 && 
            <ProjectList/>
        }
    </div>
  );
}
