import React from 'react';
import styles from './View.module.css';
import TablePart from './TablePart/TablePart';
import EditModal from './EditModal/EditModal';
import EmailModal from './EmailModal/EmailModal';
import SmsModal from './SmsModal/SmsModal';
import DeleteModal from './DeleteModal/DeleteModal';

const View = (props) => {
  return (
    <>
      <div className={styles.main}>
        <h5 className="text-center">Зведений список проходження ТО транспортними засобами</h5>
        <div className={`row ${styles.rowCustomStyle}`}></div>
        <div className="row">
          <div className="col-md-4">
            <label className="text-center"><small>Пошук по таблиці</small></label>
            <input className="form-control table-filter" type="text" placeholder="Введіть ключові слова" />
          </div>

          <div className="col-md-4">
            <label><small>Технічний огляд</small></label>
            <select className="form-control" id="to-filter">
              <option defaultValue value="all-to">усі</option>
              <option defaultValue="month">у найближчий місяць</option>
              <option defaultValue="week">у найближчий тиждень</option>
              <option defaultValue="out-day">прострочений</option>
            </select>
          </div>

          <div className="col-md-4">
            <label><small>Наявність сертифікату</small></label>
            <select className="form-control" id="sert-filter">
              <option defaultValue value="all-sert">усі</option>
              <option defaultValue="available">є</option>
              <option defaultValue="not-available">немає</option>
            </select>
          </div>
        </div>

        <div className={`row ${styles.rowCustomStyle}`}></div>

        <div className="table-responsive">
          <table id="table-id" className="table table-sm table-hover table-bordered text-center">
            <thead>
              <tr className="bg-white text-success">
                <th className="align-middle header-cursor">Назва фірми</th>
                <th className="align-middle header-cursor">Марка авто</th>
                <th className="align-middle header-cursor">Модель авто</th>
                <th className="align-middle header-cursor">Державний<br />номер</th>
                <th className="align-middle header-cursor">VIN-код</th>
                <th className="align-middle header-cursor">Дата<br />наступного<br />ТО</th>
                <th className="align-middle header-cursor">Наявність<br />сертифікату</th>
                <th className="align-middle header-cursor">Дата<br />наступного<br />сертифікату</th>
                <th className="align-middle header-cursor">Керування<br />даними</th>
              </tr>
            </thead>
            <tbody id="filter-table" className="main-table">
              {
                props.cars.map((car, index) => {

                  let currentDate = new Date();
                  let nextPassingDate = new Date(car.next_passing_date);
                  let diffDays = Math.ceil((nextPassingDate - currentDate) / (1000 * 3600 * 24));

                  // Status for filter data
                  let status = '';
                  // let statusDay = '';
                  if (diffDays < 30) {
                    status = 'statusMonth';
                    // statusDay = 'month';
                  }
                  if (diffDays < 14) {
                    status = 'statusWeek';
                    // statusDay = 'week';
                  }
                  if (diffDays <= 0) {
                    status = 'statusToday';
                    // statusDay = 'out-day';
                  }
                  if (diffDays > 30) {
                    // statusDay = 'more-month';
                  }

                  return <TablePart key={index}
                    name={car.name}
                    brand={car.brand}
                    idModel={car.id_model}
                    model={car.model}
                    registrationNumber={car.registration_number}
                    vinCode={car.vin_code}
                    nextPassingDate={car.next_passing_date}
                    nextSertificationDate={car.next_sertification_date}
                    status={status}
                    getChoosenCar={props.getChoosenCar}
                    setFirmEmail={props.setFirmEmail}
                    setModelsName={props.setModelsName}
                    setTypeName={props.setTypeName}
                    setStateNum={props.setStateNum} />
                }

                )
              }
            </tbody>
          </table>
        </div>
      </div>

      <EditModal choosenCar={props.choosenCar}
        setModelsName={props.setModelsName}
        setTypeName={props.setTypeName}
        updateState={props.updateState}
        updateBrandsId={props.updateBrandsId}
        updateAvailabilitySertificate={props.updateAvailabilitySertificate}
        editRequestHandler={props.editRequestHandler} />

      <EmailModal choosenCar={props.choosenCar}
        emails={props.emails} />

      <SmsModal stateNum={props.choosenCar.prevStateNum}
      telephoneNum={props.choosenCar.telephoneNum} />

      <DeleteModal stateNum={props.choosenCar.prevStateNum} />
    </>
  );
}

export default View;
