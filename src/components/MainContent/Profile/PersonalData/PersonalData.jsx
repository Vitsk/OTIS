import React from 'react';
import styles from './PersonalData.module.css';

const PersonalData = () => {
  return (
    <>
      <h6 className={styles.titleCustomStyle}>Особисті контактні дані користувача</h6>

      <div className="form-group col-md-12">
        <label for="inputNameDep">Назва організації / філії</label>
        <input type="text" className="form-control" id="input-name-dep" placeholder="Назва організації / філії" name="namedepartment" title="Використовується в підписі при відправці е-мейл листів клієнтам" />
      </div>

      <div className="form-group col-md-12">
        <label for="inputaddress">Адреса</label>
        <input type="text" className="form-control" id="input-address" placeholder="м. Київ, вул. Промислова, буд. 16, оф. 4" name="useraddress" title="Використовується в підписі при відправці е-мейл листів клієнтам" />
      </div>

      <div className="form-group col-md-12">
        <label for="inputWeb">WEB-сайт</label>
        <input type="text" className="form-control" id="input-web" placeholder="www.yourfirm.com.ua" name="webaddress" title="Використовується в підписі при відправці е-мейл листів клієнтам" />
      </div>

      <div className="form-group col-md-6">
        <label for="inputSurname">Прізвище співробітника</label>
        <input type="text" className="form-control" id="inputSurname" placeholder="Прізвище" name="surname" />
      </div>
      <div className="form-group col-md-6">
        <label for="inputName">Ім'я співробітника</label>
        <input type="text" className="form-control" id="inputName" placeholder="Ім'я" name="name" />
      </div>
      <div className="form-group col-md-6">
        <label for="inputBirthday">Дата народження співробітника</label>
        <input type="date" className="form-control" id="inputBirthday" name="birthday" />
      </div>
      <div className="form-group col-md-6">
        <label for="inputPhone">Контактний номер телефону</label>
        <input type="text" className="form-control" id="inputPhone" placeholder="Номер мобільного телефону" name="phone" title="Використовується в підписі при відправці е-мейл листів клієнтам" />
      </div>
      
    </>
  );
}

export default PersonalData;
