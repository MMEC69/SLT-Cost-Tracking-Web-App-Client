import React from 'react';
import styles from "../../App.module.css";

export function RegisterLoginHeading(props) {
  return (
    <div className={styles.registerHeading}>
        <h2>
            Register
        </h2>
    </div>
  );
}
//================================================
export function StakeholdersHeading() {
  return (
    <div className={styles.stakeholderHeading}>
        <h3>
            Stakeholders
        </h3>
    </div>
  );
}
//=================================================
export function IndividualStakeHolderHeading() {
  return (
    <div>
        <h3 className={styles.individualStakeHolderHeading}>
            Stakeholder 1
        </h3>
    </div>
  );
}
//=================================================