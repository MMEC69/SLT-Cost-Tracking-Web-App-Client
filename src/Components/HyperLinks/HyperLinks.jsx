import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../../App.module.css";

//=============================================
export function RegisterHyperLink(props) {
  return (
    <div className={styles.hyperLink1}>   
        <Link to = "/register" style = {{textDecoration: 'none'}}>
            <h3>Display Message</h3>
        </Link>
    </div>
  );
}
//==============================================