import React from 'react';
import {PopUpTitle} from './PopUpTitle';
import styles from "../App.module.css";
import { PopUpCommentDisplayArea } from './PopUpDisplayArea';

export default function AddCommentPopUp(props) {
    const {
        trigger,
        setTrigger
    } = props;
  return (
    <div>   
        <div>
            <PopUpTitle/>
            <PopUpCommentDisplayArea/>
        </div>
    </div>
  );
}
