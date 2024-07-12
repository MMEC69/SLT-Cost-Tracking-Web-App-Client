import React from 'react';
import {useNavigate} from "react-router-dom";
import { welcomeButton } from '../MetaData/ButtonNames';
import styles from "../App.module.css";

export default function Welcome() {
  const navigate = useNavigate();
    return (
    <div>
        <button 
          className={styles.welcomeButton}
          onClick={() => {navigate("/login")}}
        >
          <b>{welcomeButton}</b>
        </button>
    </div>
  );
}
