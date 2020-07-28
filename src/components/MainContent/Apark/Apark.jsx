import React from 'react';
import styles from './Apark.module.css';
import SelectOption from './SelectOption/SelectOption';

const Apark = (props) => {
  return (
    <div className="container pt-2">
      <h4>Додавання / редагування даних по транспортним засобам:</h4>
      <br />

      <div>
        <h5 className="text-center">Додати транспорт</h5>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="selectFirm">Виберіть організацію</label>
            <select className="custom-select" onChange={(e) => props.updateState(e.target.name, e.target.value)} id="selectFirm" name="idFirm" required>
              <option defaultValue>Виберіть фірму</option>
              {
                props.firms.map((item, index) =>
                  <SelectOption key={index}
                    name={item.nameFirm}
                    id={item.idFirm} />
                )
              }
            </select>
          </div>

          <div className="form-group col-12">
            <div className="btn btn-success offset-md-3 col-md-3" id="select_exist">Вибрати існуючу марку/модель</div>
            <div className="btn btn-outline-success col-md-3" id="insert_new">Додати нову марку/модель</div>
          </div>


          {/* <div id="insert" className="form-row col-md-12">
            <div className="col-md-4">
              <label htmlFor="insertBrandVehicle">Марка ТЗ</label>
              <select className="custom-select" id="insertBrandVehicle" name="brand">
              </select>
            </div>

            <div className="col-md-4">
              <label htmlFor="insertModelVehicle">Модель ТЗ</label>
              <input className="form-control" id="insertModelVehicle" name="model" />
            </div>

            <div className="col-md-4">
              <label htmlFor="insertTypeVehicle">Тип ТЗ</label>
              <select className="custom-select" id="insertTypeVehicle" name="type">
                <option defaultValue disabled>Виберіть тип</option>
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

          </div> */}

          <div id="select" className="form-row col-md-12">
            <div className="col-md-4">
              <label htmlFor="selectBrandVehicle">Марка ТЗ</label>
              <select className="custom-select" onChange={(e) => {props.updateState(e.target.name, e.target.value); props.setModelsName(e.target.value)}} id="selectBrandVehicle" name='brand'>
                <option defaultValue>Виберіть марку</option>
                {
                  props.brands.map((item, index) => 
                    <SelectOption key={index}
                    name={item.brand}
                    id={item.brand} />
                  )
                }
              </select>
            </div>

            <div className="col-md-4">
              <label htmlFor="selectModelVehicle">Модель ТЗ</label>
              <select className="custom-select" value={props.model} onChange={(e) => {props.updateState(e.target.name, e.target.value); props.setTypeName(e.target.value)}} id="selectModelVehicle" name="model">
                <option defaultValue>Виберіть модель</option>
                {
                  props.models.map((item, index) => 
                    <SelectOption key={index}
                    name={item.model}
                    id={item.idModel} />
                  )
                }
              </select>
            </div>

            <div className="col-md-4">
              <label htmlFor="selectTypeVehicle">Тип ТЗ</label>
              <input className="form-control" value={props.carType} id="selectTypeVehicle" disabled />
            </div>

          </div>

          <div className="form-row col-md-12 pt-2">
            <div className="offset-md-2 col-md-4">
              <label htmlFor="inputIDVehicle">VIN-код</label>
              <input type="text" value={props.vinCode} onChange={(e) => props.updateState(e.target.name, e.target.value)} className="form-control" id="inputIDVehicle" placeholder="VIN-код" name="vinCode" required />
              <small className="text-muted">* латинськими літерами без пропусків</small>
            </div>

            <div className="col-md-4">
              <label htmlFor="inputStateNumberVehicle">Державний номер</label>
              <input type="text" value={props.stateNum} onChange={(e) => props.updateState(e.target.name, e.target.value)} className="form-control" id="inputStateNumberVehicle" placeholder="Державний номер" name="stateNum" required />
              <small className="text-muted">* латинськими літерами у форматі - AC7777AC</small>
            </div>
          </div>

          <div className={`row col-md-12 ${styles.rowCustomStyle}`}></div>

          <div className="form-group col-lg-6 col-md-6">
            <label htmlFor="inputDateTO">ТО пройдено</label>
            <input type="date" value={props.dateOfPassing} onChange={(e) => props.updateState(e.target.name, e.target.value)} className="form-control" id="inputDateTO" name="dateOfPassing" required />
          </div>

          <div className="form-group col-lg-6 col-md-6">
            <label htmlFor="nextPassingDate">наступний ТО</label>
            <input type="date" value={props.nextPassingDate} onChange={(e) => props.updateState(e.target.name, e.target.value)} className="form-control" id="nextPassingDate" name="nextPassingDate" required />
          </div>

          <div className="form-group col-lg-12 col-md-12 mt-5">
            <div className="custom-control custom-checkbox text-center">
              <input type="checkbox" onChange={() => props.updateAvailabilitySertificate()} className="custom-control-input" id="CheckSertVehicle" name="availability_sertificate" checked={props.availabilitySertificate} />
              <label className="custom-control-label" htmlFor="CheckSertVehicle">Сертифікат видано</label>
            </div>
          </div>

          <div className="form-group col-lg-6 col-md-6">
            <label htmlFor="inputDateSert">сертифікат отримано</label>
            <input type="date" value={props.dateOfReceivingSertificate} onChange={(e) => props.updateState(e.target.name, e.target.value)} className="form-control" id="inputDateSert" name="dateOfReceivingSertificate" disabled={props.disabled} />
          </div>

          <div className="form-group col-lg-6 col-md-6">
            <label htmlFor="inputNextDateSert">Наступний сертифікат</label>
            <input type="date" value={props.nextSertificationDate} onChange={(e) => props.updateState(e.target.name, e.target.value)} className="form-control" id="inputNextDateSert" name="nextSertificationDate" disabled={props.disabled} />
          </div>

          <div className="form-group offset-md-4 col-md-4">
            <button className="btn btn-outline-success btn-block" onClick={(e) => {e.preventDefault(); props.createCar()}} id="create-car">Додати новий ТЗ</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Apark;
