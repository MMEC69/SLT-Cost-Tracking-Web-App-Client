import React from 'react'
import styles from "../App.module.css";
import PropTypes from "prop-types";

export default function Button2(props) {
    const {
        onClick,
        buttonName
    } = props;
  return (
    <div className={styles.button2}>
        <button onClick={onClick}>
            {buttonName}
        </button>
    </div>
  );
}
Button2.propTypes = {
    // onClick : PropTypes.string,
    ButtonName : PropTypes.string
}
Button2.defaultProps = {
    // onClick : PropTypes.string,
    buttonName : "Click"
}
