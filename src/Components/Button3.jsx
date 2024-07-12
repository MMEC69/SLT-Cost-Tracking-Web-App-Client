import React from 'react';
import styles from "../App.module.css";
import PropTypes from "prop-types";

export function Button3_1(props) {
  const {
    buttonName,
    onClick
  } = props;

  return (
    <div className={styles.button3_1}>
        <button onClick={onClick}>
            {buttonName}
        </button>
    </div>
  );
}

export function Button3_2(props) {
  const {
    buttonName,
    onClick
  } = props;
    return (
      <div className={styles.button3_2}>
          <button>
            {buttonName}
          </button>
      </div>
    );
}

export function Button3_3(props) {
  const {
    buttonName,
    onClick
  } = props;
    return (
      <div className={styles.button3_3}>
          <button>
            {buttonName}
          </button>
      </div>
    );
}

Button3_1.propTypes = {
  // onClick : PropTypes.string,
  buttonName : PropTypes.string
}
Button3_1.defaultProps = {
  // onClick : PropTypes.string,
  buttonName : "Click"
}

