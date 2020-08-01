import React from 'react';
import styles from './ChangePass.module.css';

const ChangePass = (props) => {
  return (
    <>
      <h6 className={styles.titlePassCustomStyle}>Змінити пароль</h6>

      <div className="form-group col-md-12">
        <label htmlFor="inputNewPassword">Новий пароль</label>
        <input type="password" className="form-control" value={props.newPassword} onChange={(e) => props.updateState(e.target.name, e.target.value)} id="inputNewPassword" placeholder="Новий пароль" name="newPassword" required />
      </div>
      <div className="form-group col-md-12">
        <label htmlFor="confirmNewPassword">Новий пароль ще раз</label>
        <input type="password" className="form-control" value={props.repeatPassword} onChange={(e) => props.updateState(e.target.name, e.target.value)} id="confirmNewPassword" placeholder="Новий пароль ще раз" name="repeatPassword" required />
      </div>
      <div className="mt-4">
        <div className={`row ${styles.customStyleForRow}`}></div>
        <div className="btn btn-outline-success btn-block" onClick={() => props.changePassHandler()}>Зберегти зміни</div>
      </div>
    </>
  );
}

export default ChangePass;
