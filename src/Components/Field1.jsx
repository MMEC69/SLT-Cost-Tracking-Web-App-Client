import React from 'react';
import styles from "../App.module.css";

export default function Field1() {
  return (
    <div className={styles.field1}>
      <input 
        type="text" 
        style={{textAlign: "center"}}
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
      <label htmlFor="">Name</label>
      {/* <span>Error</span> */}
    </div>
  )
}
