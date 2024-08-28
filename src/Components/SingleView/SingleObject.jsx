import React from 'react';
import styles from "../../App.module.css";

export function SingleObject() {
    const handleClick = () => {
        console.log("Clicked!");
    }
  return (
    <div className={styles.singleObject}>
        <span onClick={handleClick}>Object Name</span>
        <select>
            <option>Option1</option>
            <option>Option2</option>
            <option>Option3</option>
        </select>
    </div>
  )
}
