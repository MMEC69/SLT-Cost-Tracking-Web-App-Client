import React from 'react';
import Field3 from './Field3';
import styles from "../App.module.css";
import Heading3 from './Heading3';
import Button4 from './Button4';

export default function Form5() {
  return (
    <div className={styles.form5}>
        <div className={styles.form4}>
            <Heading3/>
            <form onSubmit="">
                <Field3/>
                <Field3/>
                <Field3/>
                <Field3/>
            </form>
        </div>
        <Button4/>
    </div>
  );
}
