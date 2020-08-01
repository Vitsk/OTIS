import React from 'react';
import styles from './PersonalData.module.css';

const PersonalData = (props) => {
  return (
    <>
      <h6 className={styles.titleCustomStyle}>Особисті контактні дані користувача</h6>
      <div className="form-group col-md-12">
        <label htmlFor="inputNameDep">Назва організації / філії</label>
        <input type="text" value={props.firmName} onChange={(e) => props.updateState(e.target.name, e.target.value)} className="form-control" placeholder="Назва організації / філії" id='inputNameDep' name="firmName" title="Використовується в підписі при відправці е-мейл листів клієнтам" />
      </div>

      <div className="form-group col-md-12">
        <label htmlFor="inputaddress">Адреса</label>
        <input type="text" value={props.street} onChange={(e) => props.updateState(e.target.name, e.target.value)} className="form-control" placeholder="м. Київ, вул. Промислова, буд. 16, оф. 4" id='inputaddress' name="street" title="Використовується в підписі при відправці е-мейл листів клієнтам" />
      </div>

      <div className="form-group col-md-12">
        <label htmlFor="inputWeb">WEB-сайт</label>
        <input type="text" value={props.webSite} onChange={(e) => props.updateState(e.target.name, e.target.value)} className="form-control" placeholder="www.yourfirm.com.ua" id='inputWeb' name="webSite" title="Використовується в підписі при відправці е-мейл листів клієнтам" />
      </div>

      <div className="form-group col-md-6">
        <label htmlFor="inputSurname">Прізвище співробітника</label>
        <input type="text" value={props.secondName} onChange={(e) => props.updateState(e.target.name, e.target.value)} className="form-control" id="inputSurname" placeholder="Прізвище" name="secondName" />
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="inputName">Ім'я співробітника</label>
        <input type="text" value={props.firstName} onChange={(e) => props.updateState(e.target.name, e.target.value)} className="form-control" id="inputName" placeholder="Ім'я" name="firstName" />
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="inputBirthday">Дата народження співробітника</label>
        <input type="date" value={props.dateBirthday} onChange={(e) => props.updateState(e.target.name, e.target.value)} className="form-control" id="inputBirthday" name="dateBirthday" />
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="inputPhone">Контактний номер телефону</label>
        <input type="text" value={props.telephoneNumber} onChange={(e) => props.updateState(e.target.name, e.target.value)} className="form-control" placeholder="Номер мобільного телефону" id='inputPhone' name="telephoneNumber" title="Використовується в підписі при відправці е-мейл листів клієнтам" />
      </div>
      <div className="mt-4">
        <div className={`row ${styles.customStyleForRow}`}></div>
        <div className="btn btn-outline-success btn-block" onClick={() => props.changeUserDataHandler()}>Зберегти зміни</div>
      </div>
    </>
  );
}

export default PersonalData;
