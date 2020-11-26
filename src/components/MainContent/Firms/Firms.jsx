import React from 'react';
import styles from './Firms.module.css';
import TablePart from './TablePart/TablePart';
import EditModal from './EditModal/EditModal';
import InputMask from 'react-input-mask';
import Alert from '../../Alert/Alert';
import Loader from '../../Loader/Loader';

const Firms = (props) => {
  return (
    <>
      <div className="container pt-2">
        <form>
          <h5 className="text-center">Додати організацію</h5>

          <div className="form-row">
            <div className="form-group col-lg-3 col-md-6">
              <label htmlFor="inputFirm">Назва організації / ФОП</label>
              <input type="text" id="inputFirm" value={props.firmName} onChange={(e) => props.updateState(e.target.name, e.target.value)} className="form-control" placeholder="Назва організації чи ФОП" name="firmName" required />
              <small className="text-muted">* вводити у форматі - ТОВ "Назва компанії" або ФОП "ПІП"</small>
            </div>

            <div className="form-group col-lg-3 col-md-6">
              <label htmlFor="inputIDNumberFirm">ЄДРПОУ / іден. код</label>
              <InputMask mask='99999999' type="text" id="inputIDNumberFirm" value={props.idFirm} onChange={(e) => props.updateState(e.target.name, e.target.value)} className="form-control" placeholder="ЄДРПОУ або іден. код" name="idFirm" required />
            </div>

            <div className="form-group col-lg-3 col-md-6">
              <label htmlFor="inputPhoneFirm">Телефон організації</label>
              <InputMask mask='+380999999999' type="text" id="inputPhoneFirm" value={props.firmPhone} onChange={(e) => props.updateState(e.target.name, e.target.value)} className="form-control" placeholder="Номер контактного телефону" name="firmPhone" />
            </div>

            <div className="form-group col-lg-3 col-md-6">
              <label htmlFor="inputEmailFirm">Електронна адреса організації</label>
              <input type="email" id="inputEmailFirm" value={props.firmEmail} onChange={(e) => props.updateState(e.target.name, e.target.value)} className="form-control" placeholder="example@mail.com" name="firmEmail" />
            </div>

            <div>
              <div className={`row ${styles.rowCustomStyle}`}></div>
            </div>
          </div>

          <div className="form-group offset-md-4 col-md-4">
            <input className="btn btn-outline-success btn-block" onClick={() => { props.createFirmHandler(); props.setFirmsData() }} defaultValue="Додати нову організацію" />
          </div>
        </form>
      </div>

      {props.showAlert ? <Alert alertText={props.alertText} isError={props.isError} /> : null}

      <div className={styles.tableCustomStyle}>
        <h5 className="text-center">Зведений список фірм</h5>
        <div className={`row ${styles.rowDivCustomStyle}`}></div>
        <div className="row">
          <div className="col-md-4 offset-md-3 text-center">
            <label className="text-center"><small>Пошук по таблиці</small></label>
            <input className="form-control table-filter" value={props.searchInput} onChange={(e) => props.searchInputAC(e.target.value)} type="text" />
          </div>
          <div className="col-md-2" style={{"marginTop": "31px"}}>
            <button className="btn btn-outline-success btn-block" onClick={() => {props.searchFirms(props.searchInput); props.isSearchingBtnFetchingAC()}}> {props.isSearchBtnFetching ? <Loader /> : 'Пошук по системі'}</button>
          </div>
          <div className="col-md-2" style={{"marginTop": "31px"}}>
            <button className="btn btn-outline-secondary btn-block" onClick={() => props.setFirmsData()}>Очистити пошук</button>
          </div>
        </div>

        <div className={`row ${styles.rowDivCustomStyle}`}></div>

        <div className="table-responsive">
          <table className="table table-sm table-hover table-bordered text-center">
            <thead>
              <tr className="bg-white text-success">
                <th className="align-middle header-cursor">Назва фірми</th>
                <th className="align-middle header-cursor">ЄДРПОУ / <br /> іден. код</th>
                <th className="align-middle header-cursor">Контактний <br /> номер тел.</th>
                <th className="align-middle header-cursor">Контактний <br /> E-mail</th>
                <th className="align-middle header-cursor">Редагування <br /> даних</th>
              </tr>
            </thead>
            <tbody>
              {
                props.firms.map((firm, index) =>
                  <TablePart key={index}
                    nameFirm={firm.name}
                    idFirm={firm.id_firm}
                    telephoneNum={firm.telephone}
                    email={firm.email}
                    setChoosenFirmData={props.setChoosenFirmData} />
                )
              }
            </tbody>
          </table>
        </div>

        <EditModal updateModalState={props.updateModalState}
          setFirmsData={props.setFirmsData}
          editFirmDataHandler={props.editFirmDataHandler}
          editModal={props.editModal} />
      </div>
    </>
  );
}

export default Firms;