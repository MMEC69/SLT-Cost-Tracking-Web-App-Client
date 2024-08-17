import React from 'react';
import NavBar from '../Components/NavBar/NavBar.jsx';
import Content from '../Components/Content/Content.jsx';
import styles from "../App.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
        <NavBar/>
        <Content/>
    </div>
  );
}
