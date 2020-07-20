import React from 'react';
import styles from './PersonalData.module.css';

const PersonalData = (props) => {
  return (
    <>
      <h6 className={styles.titleCustomStyle}>Особисті контактні дані користувача</h6>
      <div className="form-group col-md-12">
        <label htmlFor="inputNameDep">Назва організації / філії</label>
        <input type="text" value={props.firmName} onChange={(e) => props.updateFirmName(e.target.value)} className="form-control" id="input-name-dep" placeholder="Назва організації / філії" name="namedepartment" title="Використовується в підписі при відправці е-мейл листів клієнтам" />
      </div>

      <div className="form-group col-md-12">
        <label htmlFor="inputaddress">Адреса</label>
        <input type="text" value={props.street} onChange={(e) => props.updateStreet(e.target.value)} className="form-control" id="input-address" placeholder="м. Київ, вул. Промислова, буд. 16, оф. 4" name="useraddress" title="Використовується в підписі при відправці е-мейл листів клієнтам" />
      </div>

      <div className="form-group col-md-12">
        <label htmlFor="inputWeb">WEB-сайт</label>
        <input type="text" value={props.webSite} onChange={(e) => props.updateWebSite(e.target.value)} className="form-control" id="input-web" placeholder="www.yourfirm.com.ua" name="webaddress" title="Використовується в підписі при відправці е-мейл листів клієнтам" />
      </div>

      <div className="form-group col-md-6">
        <label htmlFor="inputSurname">Прізвище співробітника</label>
        <input type="text" value={props.firstName} onChange={(e) => props.updateFirstName(e.target.value)} className="form-control" id="inputSurname" placeholder="Прізвище" name="surname" />
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="inputName">Ім'я співробітника</label>
        <input type="text" value={props.secondName} onChange={(e) => props.updateSecondName(e.target.value)} className="form-control" id="inputName" placeholder="Ім'я" name="name" />
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="inputBirthday">Дата народження співробітника</label>
        <input type="date" value={props.dateBirthday} onChange={(e) => props.updateDateBirthday(e.target.value)} className="form-control" id="inputBirthday" name="birthday" />
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="inputPhone">Контактний номер телефону</label>
        <input type="text" value={props.telephoneNumber} onChange={(e) => props.updateTelephoneNumber(e.target.value)} className="form-control" id="inputPhone" placeholder="Номер мобільного телефону" name="phone" title="Використовується в підписі при відправці е-мейл листів клієнтам" />
      </div>
      
    </>
  );
}

export default PersonalData;
