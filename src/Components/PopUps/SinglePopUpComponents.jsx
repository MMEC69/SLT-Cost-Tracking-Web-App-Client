import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import styles from "../../App.module.css";

export function SinglePopUpComment() {
  return (
    <div className={styles.singlePopUpComment}>
        <div className={styles.commentDescription}>
            <div className={styles.commentProfilePicture}>
                <FaUserCircle />
            </div>
            <div className={styles.commentDetails}>
                <span className={styles.addCommentUserName}>User Name</span>
                <span className={styles.addCommentComment}>The comment user has placed</span>
            </div>
        </div>
        <div className={styles.commentTime}>
            <span>time</span>
        </div>
    </div>
  )
}
