import React, { useContext } from 'react';
import {NavBarButton} from '../Buttons/Buttons.jsx';
import styles from "../../App.module.css";
import {NavBarSearchBar} from '../SearchBar/SearchBar.jsx';
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

export default function NavBar() {
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
    const activity5Function = () => {
        console.log("> activity5Function initiated");
        console.log(`> Previous activity : ${activity}`);
        setActivity(activity5);
        console.log(`> Current activity : ${activity}`);
        console.log("> activity5Function ended");
    }
    const activity6Function = () => {
        console.log("> activity6Function initiated");
        console.log(`> Previous activity : ${activity}`);
        setActivity(activity6);
        console.log(`> Current activity : ${activity}`);
        console.log("> activity6Function ended");
    }
    const activity7Function = () => {
        console.log("> activity7Function initiated");
        console.log(`> Previous activity : ${activity}`);
        setActivity(activity7);
        console.log(`> Current activity : ${activity}`);
        console.log("> activity7Function ended");
    }
  return (
    <div className={styles.navbarContainer}>
        <div className={styles.navbar}>
            <NavBarButton
                onClick = {activity1Function}
                buttonName = "Dashboard"
            />
            <NavBarButton
                onClick = {activity2Function}
                buttonName = "Create Project"
            />
            <NavBarButton
                onClick = {activity3Function}
                buttonName = "Project List"
            />
            <NavBarButton
                onClick = {activity4Function}
                buttonName = "View Graph"
            />
            <NavBarButton
                onClick = {activity5Function}
                buttonName = "View Users"
            />
            <NavBarButton
                onClick = {activity6Function}
                buttonName = "Super Admin"
            />
            <NavBarSearchBar/>
            <NavBarButton
                onClick = {activity7Function}
                buttonName = "Profile"
            />
        </div>
    </div>
    
  );
}
