import React from 'react';
import styles from "../App.module.css";

export default function Field2() {
  return (
    <div className={styles.field2}>
        <label htmlFor="">Name</label>
        <input 
            type="text" 
            style={{textAlign: "left"}}
            placeholder=''
            name='name'
            value=""
            onChange="onChange"
            required = "Required"
            pattern="pattern"
            onBlur="onBlur"
            onFocus="onFocus"
            focused = "focused"
        />
        {/* <span>Error</span> */}
    </div>
  );
}