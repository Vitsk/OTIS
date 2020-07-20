import React from 'react';
import styles from './LoginPass.module.css';

const LoginPass = (props) => {
  return (
    <>
      <h6 className={styles.titleCustomStyle}>Логін та пароль для доступу до системи</h6>
      <div className="form-group col-md-12">
        <label htmlFor="inputEmail">E-mail / (логін)</label>
        <input type="email" value={props.email} onChange={(e) => props.updateEmail(e.target.value)} className="form-control" id="inputEmail" placeholder="E-mail / (логін)" name="email"  />
      </div>

      <div className="form-group col-md-12">
        <label htmlFor="inputOldPassword">Поточний пароль</label>
        <input type="password" className="form-control" id="inputOldPassword" placeholder="Поточний пароль" name="password" required />
      </div>
    </>
  );
}

export default LoginPass;
