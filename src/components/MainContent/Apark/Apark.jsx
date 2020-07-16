import React from 'react';
import styles from './Apark.module.css';

const Apark = () => {
  return (
    <div className="container pt-2">
  <h4>Додавання / редагування даних по транспортним засобам:</h4>
  <br/>

  <form action="api/cars" method="POST">
    <h5 className="text-center">Додати транспорт</h5>
    <div className="form-row">
      <div className="form-group col-md-12">
        <label for="selectFirm">Виберіть організацію</label>
        <select className="custom-select" id="selectFirm" name="id_firm" required>
          <option selected disabled></option>
        </select>
      </div>

      <div className="form-group col-12">
        <div className="btn btn-success offset-md-3 col-md-3" id="select_exist">Вибрати існуючу марку/модель</div>
        <div className="btn btn-outline-success col-md-3" id="insert_new">Додати нову марку/модель</div>
      </div>


      <div id="insert" className="form-row col-md-12">
        <div className="col-md-4">
          <label for="insertBrandVehicle">Марка ТЗ</label>
          <select className="custom-select" id="insertBrandVehicle" name="brand">
          </select>
        </div>

        <div className="col-md-4">
          <label for="insertModelVehicle">Модель ТЗ</label>
          <input className="form-control" id="insertModelVehicle" name="model" />
        </div>

        <div className="col-md-4">
          <label for="insertTypeVehicle">Тип ТЗ</label>
          <select className="custom-select" id="insertTypeVehicle" name="type">
            <option selected disabled>Виберіть тип</option>
            <option value="тягач">тягач</option>
            <option value="причіп">причіп</option>
            <option value="н/причіп">н/причіп</option>
            <option value="фургон">фургон</option>
            <option value="автобус">автобус</option>
            <option value="легковий автомобіль">легковий автомобіль</option>
            <option value="трактор">трактор</option>
            <option value="комбайн">комбайн</option>
            <option value="спецтехніка">спецтехніка</option>
          </select>
        </div>

      </div>

      <div id="select" className="form-row col-md-12">
        <div className="col-md-4">
          <label for="selectBrandVehicle">Марка ТЗ</label>
          <select className="custom-select" id="selectBrandVehicle">
            <option selected disabled>Виберіть марку</option>
          </select>
        </div>

        <div className="col-md-4">
          <label for="selectBrandVehicle">Модель ТЗ</label>
          <select className="custom-select" id="selectModelVehicle" name="id_model">
            <option selected>Виберіть модель</option>
          </select>
        </div>

        <div className="col-md-4">
          <label for="selectBrandVehicle">Тип ТЗ</label>
          <input className="form-control" id="selectTypeVehicle" disabled />
        </div>

      </div>

      <div id="insert" className="form-row col-md-12 pt-2">
        <div className="offset-md-2 col-md-4">
          <label for="inputIDVehicle">VIN-код</label>
          <input type="text" className="form-control" id="inputIDVehicle" placeholder="VIN-код" name="vin_code" required />
          <small className="text-muted">* латинськими літерами без пропусків</small>
        </div>

        <div className="col-md-4">
          <label for="inputStateNumberVehicle">Державний номер</label>
          <input type="text" className="form-control" id="inputStateNumberVehicle" placeholder="Державний номер" name="registration_number" required />
          <small className="text-muted">* латинськими літерами у форматі - AC7777AC</small>
        </div>
      </div>

      <div className={`row col-md-12 ${styles.rowCustomStyle}`}></div>

      <div className="form-group col-lg-6 col-md-6">
        <label for="inputDateTO">ТО пройдено</label>
        <input type="date" className="form-control" id="inputDateTO" name="date_of_passing" required />
      </div>

      <div className="form-group col-lg-6 col-md-6">
        <label for="inputDateTO">наступний ТО</label>
        <input type="date" className="form-control" id="inputNextDateTO" name="next_passing_date" required />
      </div>

      <div className="form-group col-lg-12 col-md-12 mt-5">
        <div className="custom-control custom-checkbox text-center">
          <input type="checkbox" className="custom-control-input" id="CheckSertVehicle" name="availability_sertificate" />
          <label className="custom-control-label" for="CheckSertVehicle">Сертифікат видано</label>
        </div>
      </div>

      <div className="form-group col-lg-6 col-md-6">
        <label for="inputDateSert">сертифікат отримано</label>
        <input type="date" className="form-control" id="inputDateSert" name="date_of_receiving_sertificate" disabled />
      </div>

      <div className="form-group col-lg-6 col-md-6">
        <label for="inputDateSert">Наступний сертифікат</label>
        <input type="date" className="form-control" id="inputNextDateSert" name="next_sertification_date" disabled />
      </div>

      <div className="form-group offset-md-4 col-md-4">
        <input className="btn btn-outline-success btn-block" id="create-car" value="Додати новий ТЗ" />
      </div>
    </div>

  </form>
</div>
  );
}

export default Apark;
