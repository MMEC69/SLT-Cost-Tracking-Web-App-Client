import React from 'react';
import Field2 from './Field2';
import styles from "../App.module.css";
import Form4 from './Form4';
import Button6 from './Button6';


export default function Form3() {
  return (
    <div className={styles.form2}>
        <Field2/>
        <Field2/>
        <Field2/>
        <Form4/>
        <Field2/> 
        <Field2/>
        <Field2/>
        <Button6/>
    </div>
  );
}
