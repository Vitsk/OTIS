import React from 'react';
import styles from './ChangePass.module.css';

const ChangePass = (props) => {
  return (
    <>
      <h6 className={styles.titlePassCustomStyle}>Змінити пароль</h6>

      <div className="form-group col-md-12">
        <label htmlFor="inputNewPassword">Новий пароль</label>
        <input type="password" className="form-control" id="inputNewPassword" placeholder="Новий пароль" name="new" required />
      </div>
      <div className="form-group col-md-12">
        <label htmlFor="confirmNewPassword">Новий пароль ще раз</label>
        <input type="password" className="form-control" id="confirmNewPassword" placeholder="Новий пароль ще раз" name="repeat" required />
      </div>
    </>
  );
}

export default ChangePass;