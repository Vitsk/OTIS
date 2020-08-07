import React from 'react';
import styles from './Alert.module.css';

const Alert = (props) => {
  return (
    <>
      <div className={styles.myAlertTop}>
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          {props.alertText}
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Alert;
