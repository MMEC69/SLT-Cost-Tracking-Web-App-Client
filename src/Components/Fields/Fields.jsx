import React from 'react';
import styles from "../../App.module.css";

//======================================================
export function CreateNewProjectFormFields() {
  return (
    <div className={styles.createNewProjectFormField}>
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
//======================================================
// export function Field2() { //maybe login
//   return (
//     <div className={styles.field2}>
//         <label htmlFor="">Name</label>
//         <input 
//             type="text" 
//             style={{textAlign: "left"}}
//             placeholder=''
//             name='name'
//             value=""
//             onChange="onChange"
//             required = "Required"
//             pattern="pattern"
//             onBlur="onBlur"
//             onFocus="onFocus"
//             focused = "focused"
//         />
//         {/* <span>Error</span> */}
//     </div>
//   );
// }
//======================================================
export function AddNewSingleStakeHolderFormFields() {
  return (
    <div className={styles.addNewSingleStakeHolderFormFields}>
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
//======================================================
export function RegisterAndLoginFormField() {
  return (
    <div className={styles.registerAndLoginFromField}>
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
  );
}
//======================================================
export function AddCostFormFields() {
  return (
    <div className={styles.addCostFormField}>
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
//======================================================
export function ViewCostFormFields() {
  return (
    <div className={styles.viewCostFormField}>
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
//======================================================
export function ModifyCostFormFields() {
  return (
    <div className={styles.modifyCostFormField}>
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
//======================================================