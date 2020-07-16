import React from 'react';
import styles from './LoginPass.module.css';

const LoginPass = () => {
  return (
    <>
      <h6 className={styles.titleCustomStyle}>Логін та пароль для доступу до системи</h6>
      <div className="form-group col-md-12">
        <label for="inputEmail">E-mail / (логін)</label>
        <input type="email" className="form-control" id="inputEmail" placeholder="E-mail / (логін)" name="email" />
      </div>

      <div className="form-group col-md-12">
        <label for="inputOldPassword">Поточний пароль</label>
        <input type="password" className="form-control" id="inputOldPassword" placeholder="Поточний пароль" name="password" required />
      </div>
    </>
  );
}

export default LoginPass;
