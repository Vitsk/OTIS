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
import Select from 'react-select';

const styleSelect = theme => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: 'lightgreen',
    primary: '#28a745',
  },
})

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
          <div className="col-md-2">
            <label className="text-center"><small>Пошук по назві</small></label>
            <Select
              options={props.nameFirms}
              value={props.selectedFirm}
              theme={styleSelect}
              onChange={(e) => props.selectedFirmAC(e)} />
          </div>

          <div className="col-md-2">
            <label className="text-center"><small>Пошук по держ. номеру</small></label>
            <Select
              options={props.stateNums}
              value={props.selectedStateNum}
              theme={styleSelect}
              onChange={(e) => props.updateSelectedStateNumAC(e)} />
          </div>

          <div className="col-md-2">
            <label><small>Технічний огляд</small></label>
            <select className="form-control" value={props.filterTO} onChange={(e) => props.setFilterToAC(e.target.value)}>
              <option defaultValue value="all">усі</option>
              <option value="30">у найближчих 30 днів</option>
              <option value="21">у найближчих 21 днів</option>
              <option value="14">у найближчих 14 днів</option>
              <option value="0">прострочений</option>
            </select>
          </div>

          <div className="col-md-2">
            <label><small>Сертифікат</small></label>
            <select className="form-control" value={props.filterSert} onChange={(e) => props.setfilterSertAC(e.target.value)}>
              <option defaultValue value="all">усі</option>
              <option value="1">є</option>
              <option value="0">немає</option>
            </select>
          </div>

          <div className="col-md-2" style={{"marginTop": "31px"}}>
            <button className="btn btn-outline-success btn-block" onClick={() => {props.searchCars(props.selectedFirm.value, props.selectedStateNum.value, props.filterTO, props.filterSert); props.isSearchingBtnFetchingAC()}}> {props.isSearchBtnFetching ? <Loader /> : 'Пошук'}</button>
          </div>
          <div className="col-md-2" style={{"marginTop": "31px"}}>
            <button className="btn btn-outline-secondary btn-block" onClick={() => props.setCars()}>Відміна</button>
          </div>
        </div>

        <div className={`row ${styles.rowCustomStyle}`}></div>

        <div className="table-responsive">
          {props.showAlert ? <Alert alertText={props.alertText} isError={props.isError} /> : null}
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
                  if (diffDays < 30) status = 'statusMonth';
                  if (diffDays < 21) status = 'statusTwenty';
                  if (diffDays < 14) status = 'statusWeek';
                  if (diffDays <= 0) status = 'statusToday';

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
          {props.isFetching ? <Loader /> : null}
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
