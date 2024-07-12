import React from 'react';
import styles from "../App.module.css";
import Heading2 from './Heading2';
import Form5 from './Form5';
import Button5 from './Button5';

export default function Form4() {
  return (
    <div className={styles.form3}>
        <Heading2/>
        <Form5/>
        <Form5/>
        <Button5/>
    </div>
  );
}
