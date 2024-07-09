import React from 'react';
import NavBar from '../Components/NavBar';
import Content from '../Components/Content';
import styles from "../App.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
        <NavBar/>
        <Content/>
    </div>
  );
}
