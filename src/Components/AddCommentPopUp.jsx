import React from 'react';
import {PopUpTitle} from './PopUpTitle';
import styles from "../App.module.css";

export default function AddCommentPopUp(props) {
    const {
        trigger,
        setTrigger
    } = props;
  return (
    <div>   
        <div>
            <PopUpTitle/>
        </div>
    </div>
  );
}
