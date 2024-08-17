import React from 'react';
import styles from "../../App.module.css";

export function NavBarSearchBar() {
  return (
    <div className={styles.navBarSearchBar}>
        <input 
            type="text" 
            placeholder='Search'
        />
    </div>
  );
}
