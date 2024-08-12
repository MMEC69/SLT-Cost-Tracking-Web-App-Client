import React from 'react';
import { SinglePopUpComment } from './SinglePopUpComponents';

export function PopUpCommentDisplayArea() {
  return (
    <div className={styles.popUpCommentDisplayArea}>
        <SinglePopUpComment/>
        <SinglePopUpComment/>
        <SinglePopUpComment/>
        <SinglePopUpComment/>
    </div>
  );
}
