import React from 'react';
import Field1 from './Field1';
import Heading1 from './Heading1';
import styles from "../App.module.css";
import Button1 from './Button1';
import HyperLink1 from './HyperLink1';

export default function Form1() {
  return (
    <div className={styles.form1}>
        <Heading1/>
        <Field1/>
        <Field1/>
        <Field1/>
        <Field1/>
        <Field1/>
        <Button1/>
        <div className={styles.hyperLinkLayout1}>
          <HyperLink1/>
        </div>
    </div>
  )
}
