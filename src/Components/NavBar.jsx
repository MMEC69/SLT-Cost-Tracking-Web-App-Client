import React, { useContext } from 'react';
import Button2 from './Button2';
import styles from "../App.module.css";
import SearchBar from './SearchBar';
import { activity1, activity2 } from '../MetaData/Activities';
import { GlobalContext } from '../Context/GlobalContext';

export default function NavBar() {
    const {activity, setActivity} = useContext(GlobalContext);
    const activity2Function = () => {
        console.log("> activity2Function initiated");
        console.log(`> Previous activity : ${activity}`);
        setActivity(activity2);
        console.log(`> Current activity : ${activity}`);
        console.log("> activity2Function ended");
    }
  return (
    <div className={styles.navbarContainer}>
        <div className={styles.navbar}>
            <Button2/>
            <Button2
                onClick = {activity2Function}
                buttonName = "Project List"
            />
            <Button2/>
            <Button2/>
            <Button2/>
            <Button2/>
            <SearchBar/>
            <Button2/>
        </div>
    </div>
    
  );
}
