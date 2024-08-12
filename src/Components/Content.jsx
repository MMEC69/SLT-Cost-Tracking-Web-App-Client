import React, { useContext, useState } from 'react';
import { GlobalContext } from '../Context/GlobalContext';
import { 
    activity1, 
    activity2, 
    activity3, 
    activity4, 
    activity5, 
    activity6, 
    activity7, 
    activity8,
    activity9
 } from '../MetaData/Activities';
import ProjectList from './ProjectList';
import DashBoard from './DashBoard';
import CreateProject from './CreateProject';
import ViewGraph from './ViewGraph';
import ViewUsers from './ViewUsers';
import SuperAdmin from './SuperAdmin';
import Profile from './Profile';
import styles from "../App.module.css";
import ViewProject from './ViewProject';
import ModifyProject from './ModifyProject';

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
        {activity === activity4 && 
            <ViewGraph/>
        }
        {activity === activity5 && 
            <ViewUsers/>
        }
        {activity === activity6 && 
            <SuperAdmin/>
        }
        {activity === activity7 && 
            <Profile/>
        }
        {activity === activity8 && 
            <ViewProject/>
        }
        {activity === activity9 && 
            <ModifyProject/>
        }
    </div>
  );
}
