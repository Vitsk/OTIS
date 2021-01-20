import React from 'react';
import Alert from '../../Alert/Alert';
import styles from './Settings.module.css';

const Settings = (props) => {

  // const counterHandler = () => {
  //   setCounter(counterRef.current.value.length);
  // }

  return (
    <div className="p-5">
      <h5 className="text-center">Налаштування даних для СМС-розсилання:</h5>
      <br />
      <div className="row">
        <div className="col-md-6">
          <form>
            {/* <!--input type="text" value="password" name="type" hidden--> */}
            <h6>Введіть відповідні дані з системи ALPHASMS</h6>
            <div className={`form-row ${styles.formRowCustomStyle}`}>

              <div className="form-group col-lg-6 col-md-12 col-sm-6">
                <label htmlFor="input_sms_login">Логін</label>
                <input type="text" value={props.smsLogin} onChange={(e) => props.updateState(e.target.name, e.target.value)} className="form-control" placeholder="Логін AlphaSMS" name="smsLogin" required />
              </div>

              <div className="form-group col-lg-6 col-md-12 col-sm-6">
                <label htmlFor="input_sms_pass">Пароль</label>
                <input type="password" value={props.smsPass} onChange={(e) => props.updateState(e.target.name, e.target.value)} className="form-control" placeholder="Пароль AlphaSMS" name="smsPass" required />
              </div>

              <div className="form-group col-md-12">
                <label htmlFor="input_sms_api_key">API ключ</label>
                <input type="text" value={props.smsApiKey} onChange={(e) => props.updateState(e.target.name, e.target.value)} className="form-control" placeholder="API ключ AlphaSMS" name="smsApiKey" required />
              </div>
              <div className="form-group col-md-12">
                <label htmlFor="input_sms_alpha_name">ALPHA ім'я</label>
                <input type="text" value={props.smsAlphaName} onChange={(e) => props.updateState(e.target.name, e.target.value)} className="form-control" id="smsalphaname" placeholder="Alpha-ім'я" name="smsAlphaName" required />
              </div>
              <div className="form-group col-md-12">
                <label htmlFor="input_sms_text">Шаблон повідомлень</label>
                <textarea
                  className="form-control"
                  value={props.smsTextTemplate}
                  onChange={ (e) => props.updateState(e.target.name, e.target.value) }
                  rows="4"
                  placeholder="Введіть текст повідомлення"
                  name="smsTextTemplate"
                  required
                ></textarea>
                <span id="counter">{props.smsTextTemplate.length} символів - {Math.floor(props.smsTextTemplate.length / 70 + 1)} смс</span>
              </div>

              <div className="form-group col-md-12">
                <div className={`row ${styles.rowCustomStyle}`}></div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-6 text-justify">
          <p><b>AльфаSMS</b> - провідна компанія на українському ринку SMS-послуг для корпоративних та приватних замовників. Компанія займається розвитком телекомунікаційних рішень для бізнесу, котрі дозволяють в короткий період з невисокими затратами досягнути нових вершин в управлінні бізнесом, випереджаючи своїх конкурентів.</p>
          <p>Надсилайте SMS в будні дні з 9:00 до 20:00, у вихідні та святкові дні з 11:00 до 18:00. Поважайте своїх клієнтів.</p>
          <p><b>ВАЖЛИВО!</b> Усі альфа-імена проходять попередню перевірку на стороні операторів. Перевірка імен відбувається ДВА рази в місяць. Усі неперевірені імена будуть ЗАМІНЕНІ при відправці</p>
          <p>Пишіть текст повідомлення кирилицею - одержувачу буде приємно читати.</p>
          <p>При відправці повідомлення зверніть увагу на кількість частин SMS. Кирилицею - <b>70</b> символів в одному SMS.</p>
        </div>
      </div>

      <div className="row text-center">
        <div className="col-3"></div>
        <div className="col-sm-6">
          <div className="btn btn-outline-success btn-block" onClick={() => props.changeSettingsSmsHandler()}>Зберегти дані</div>
        </div>

        {/* <div className="col-sm-3">
          <div className="btn btn-outline-danger btn-block">Очистити дані</div>
        </div> */}
        <div className="col-sm-3"></div>
      </div>
      { props.showAlert ? <Alert alertText={props.alertText} isError={props.isError} /> : null}
    </div>
  );
}

export default Settings;
