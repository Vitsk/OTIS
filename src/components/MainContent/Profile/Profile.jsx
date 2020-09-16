import React from 'react';
import styles from './Profile.module.css'
import LoginPass from './LoginPass/LoginPass';
import ChangePass from './ChangePass/ChangePass';
import PersonalData from './PersonalData/PersonalData';
import Alert from '../../Alert/Alert';

const Profile = (props) => {
  return (
    <div className="p-5">
      <div className="row">
        <div className="col-xl-6 col-md-6">
          <form>

            <div className={`form-row ${styles.formRowCustomStyle}`} >
              <LoginPass email={props.email}
              updateState={props.updateState} />
              <ChangePass updateState={props.updateState}
              newPassword={props.newPassword}
              repeatPassword={props.repeatPassword}
              changePassHandler={props.changePassHandler} />

              
            </div>
          </form>
        </div>

        {props.showAlert ? <Alert alertText={props.alertText} isError={props.isError} /> : null}

        <div className="col-xl-6 col-md-6">
          <form>

            <div className={`form-row ${styles.formRowCustomStyle}`}>
              <PersonalData {...props} />
              
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
