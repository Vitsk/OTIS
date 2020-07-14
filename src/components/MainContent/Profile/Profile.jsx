import React from 'react';
import styles from './Profile.module.css'

const Profile = () => {
  return (
    <div className="p-5">
      <div className="row">
        <div className="col-xl-6 col-md-6">
          <form id="password_change">
            <input type="text" value="password" name="type" hidden />

            <div className={`form-row ${styles.formRowCustomStyle}`} >
              <h6 className={styles.titleCustomStyle}>Логін та пароль для доступу до системи</h6>
              <div className="form-group col-md-12">
                <label for="inputEmail">E-mail / (логін)</label>
                <input type="email" className="form-control" id="inputEmail" placeholder="E-mail / (логін)" name="email" />
              </div>

              <div className="form-group col-md-12">
                <label for="inputOldPassword">Поточний пароль</label>
                <input type="password" className="form-control" id="inputOldPassword" placeholder="Поточний пароль" name="password" required />
              </div>

              <h6 className={styles.titlePassCustomStyle}>Змінити пароль</h6>

              <div className="form-group col-md-12">
                <label for="inputNewPassword">Новий пароль</label>
                <input type="password" className="form-control" id="inputNewPassword" placeholder="Новий пароль" name="new" required />
              </div>
              <div className="form-group col-md-12">
                <label for="confirmNewPassword">Новий пароль ще раз</label>
                <input type="password" className="form-control" id="confirmNewPassword" placeholder="Новий пароль ще раз" name="repeat" required />
              </div>
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
