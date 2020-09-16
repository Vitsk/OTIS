import React from 'react';
import styles from './View.module.css';
import Loader from '../../Loader/Loader';
import TablePart from './TablePart/TablePart';
import EditModal from './EditModal/EditModal';
import EmailModal from './EmailModal/EmailModal';
import SmsModal from './SmsModal/SmsModal';
import DeleteModal from './DeleteModal/DeleteModal';
import PagiButton from './PagiButton/PagiButton';
import Alert from '../../Alert/Alert';


const View = (props) => {
  let pagesCount = Math.ceil(props.totalCarsCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <>
      <div className={styles.main}>
        <h5 className="text-center">Зведений список проходження ТО транспортними засобами</h5>
        <div className={`row ${styles.rowCustomStyle}`}></div>
        <div className="row">
          <div className="col-md-4">
            <label className="text-center"><small>Пошук по таблиці</small></label>
            <input className="form-control" type="text" placeholder="Введіть ключові слова" />
          </div>

          <div className="col-md-4">
            <label><small>Технічний огляд</small></label>
            <select className="form-control">
              <option defaultValue value="all-to">усі</option>
              <option defaultValue="month">у найближчий місяць</option>
              <option defaultValue="week">у найближчий тиждень</option>
              <option defaultValue="out-day">прострочений</option>
            </select>
          </div>

          <div className="col-md-4">
            <label><small>Наявність сертифікату</small></label>
            <select className="form-control">
              <option defaultValue value="all-sert">усі</option>
              <option defaultValue="available">є</option>
              <option defaultValue="not-available">немає</option>
            </select>
          </div>
        </div>

        <div className={`row ${styles.rowCustomStyle}`}></div>

        <div className="table-responsive">
        { props.showAlert ? <Alert alertText={props.alertText} isError={props.isError} /> : null }
          <table className="table table-sm table-hover table-bordered text-center">
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
            <tbody>
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
                    setStateNum={props.setStateNum}
                    setFirmPhone={props.setFirmPhone} />
                }
                )
              }
            </tbody>
          </table>
          <nav aria-label="Page navigation" className='text-center pagination_buttons'>
            <ul className="pagination d-flex flex-wrap justify-content-center" id="pagination-buttons">
              {
                pages.map((page) => <PagiButton key={page} page={page}
                  currentPage={props.currentPage} setCars={props.setCars} />)
              }
            </ul>

            {/* Prev-Next PAGE */}
            <ul className="pagination justify-content-center">
              <li className={`page-item ${props.currentPage === 1 ? 'disabled' : null}`}>
                <button className='page-link' onClick={() => props.setCars(props.currentPage - 1)} tabIndex="-1">Попередня</button>
              </li>
              <li className={`page-item ${props.currentPage === pages.length ? 'disabled' : null}`}>
                <button className="page-link" onClick={() => props.setCars(props.currentPage + 1)} >Наступна</button>
              </li>
            </ul>
          </nav>
          {props.isFetching ? <Loader /> : null}
        </div>
      </div>

      <EditModal selectType={props.selectType}
        selectTypeAC={props.selectTypeAC}
        insertTypeAC={props.insertTypeAC}
        choosenCar={props.choosenCar}
        setModelsName={props.setModelsName}
        setTypeName={props.setTypeName}
        updateState={props.updateState}
        updateBrandsId={props.updateBrandsId}
        updateAvailabilitySertificate={props.updateAvailabilitySertificate}
        editRequestHandler={props.editRequestHandler}
        currentPage={props.currentPage}
        setCars={props.setCars} />

      <EmailModal choosenCar={props.choosenCar}
        emailData={props.emailData}
        emailRequestHandler={props.emailRequestHandler} />

      <SmsModal stateNum={props.choosenCar.prevStateNum}
        telephoneNum={props.choosenCar.telephoneNum}
        smsRequestHandler={props.smsRequestHandler} />

      <DeleteModal stateNum={props.choosenCar.prevStateNum}
        deleteRequest={props.deleteRequest} />
    </>
  );
}

export default View;
