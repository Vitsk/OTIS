import React from 'react';
import styles from './Profile.module.css'
import LoginPass from './LoginPass/LoginPass';
import ChangePass from './ChangePass/ChangePass';
import PersonalData from './PersonalData/PersonalData';

const Profile = () => {
  return (
    <div className="p-5">
      <div className="row">
        <div className="col-xl-6 col-md-6">
          <form id="password_change">

            <div className={`form-row ${styles.formRowCustomStyle}`} >
              <LoginPass />
              <ChangePass />

              <div>
                <div className={`row ${styles.customStyleForRow}`}></div>
                <div className="btn btn-outline-success btn-block" onclick="changePassword();">Зберегти зміни</div>
              </div>
            </div>
          </form>
        </div>

        <div className="col-xl-6 col-md-6">
          <form id="change-user-info" action="api/users" method="PUT">

            <div className={`form-row ${styles.formRowCustomStyle}`}>
              <PersonalData />
              <div>
                <div className="row customStyleForRow"></div>
                <div className="btn btn-outline-success btn-block" onclick="changeData();">Зберегти зміни</div>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
