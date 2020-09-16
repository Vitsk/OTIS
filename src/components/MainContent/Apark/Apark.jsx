import React from 'react';
import InputMask from 'react-input-mask';
import Select from 'react-select';
import styles from './Apark.module.css';
import InsertVehicle from './InsertVehicle/InsertVehicle';
import SelectVehicle from './SelectVehicle/SelectVehicle';
import Alert from '../../Alert/Alert';

const styleSelect = theme => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: 'lightgreen',
    primary: '#28a745',
  },
})

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
            <Select
              options={props.firms}
              value={props.idFirm}
              theme={styleSelect}
              onChange={(e) => props.updateState('idFirm', e)} />
          </div>

          <div className="form-group col-12">
            <div className={`btn ${props.selectType ? 'btn-success' : 'btn-outline-success'} offset-md-3 col-md-3`} onClick={() => props.selectTypeAC()} id="select_exist">Вибрати існуючу марку/модель</div>
            <div className={`btn ${props.selectType ? 'btn-outline-success' : 'btn-success'} col-md-3`} onClick={() => props.insertTypeAC()} id="insert_new">Додати нову марку/модель</div>
          </div>

          {
            props.selectType ? <SelectVehicle styleSelect={styleSelect}
              brands={props.brands}
              brand={props.brand}
              models={props.models}
              model={props.model}
              carType={props.carType}
              updateState={props.updateState}
              setModelsName={props.setModelsName}
              setTypeName={props.setTypeName} /> : 

              <InsertVehicle styleSelect={styleSelect}
              brands={props.brands}
              brand={props.brand}
              model={props.model}
              carType={props.carType}
              updateState={props.updateState} />
          }



          <div className="form-row col-md-12 pt-2">
            <div className="offset-md-2 col-md-4">
              <label htmlFor="inputIDVehicle">VIN-код</label>
              <InputMask mask="*****************" type="text" value={props.vinCode} onChange={(e) => props.updateState(e.target.name, e.target.value)} className="form-control" id="inputIDVehicle" placeholder="VIN-код" name="vinCode" required />
              <small className="text-muted">* латинськими літерами без пропусків</small>
            </div>

            <div className="col-md-4">
              <label htmlFor="inputStateNumberVehicle">Державний номер</label>
              <InputMask mask='aa9999aa' type="text" value={props.stateNum} onChange={(e) => props.updateState(e.target.name, e.target.value)} className="form-control" id="inputStateNumberVehicle" placeholder="Державний номер" name="stateNum" required />
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

          { props.showAlert ? <Alert alertText={props.alertText} isError={props.isError} /> : null }

          <div className="form-group offset-md-4 col-md-4">
            <button className="btn btn-outline-success btn-block" onClick={(e) => { props.createCar() }} id="create-car">Додати новий ТЗ</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Apark;
