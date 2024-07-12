import React, { useContext } from 'react';
import Button2 from './Button2';
import styles from "../App.module.css";
import SearchBar from './SearchBar';
import { activity1, activity2, activity3 , activity4, activity5, activity6, activity7} from '../MetaData/Activities';
import { GlobalContext } from '../Context/GlobalContext';

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
            <Button2
                onClick = {activity1Function}
                buttonName = "Dashboard"
            />
            <Button2
                onClick = {activity2Function}
                buttonName = "Create Project"
            />
            <Button2
                onClick = {activity3Function}
                buttonName = "Project List"
            />
            <Button2
                onClick = {activity4Function}
                buttonName = "View Graph"
            />
            <Button2
                onClick = {activity5Function}
                buttonName = "View Users"
            />
            <Button2
                onClick = {activity6Function}
                buttonName = "Super Admin"
            />
            <SearchBar/>
            <Button2
                onClick = {activity7Function}
                buttonName = "Profile"
            />
        </div>
    </div>
    
  );
}
