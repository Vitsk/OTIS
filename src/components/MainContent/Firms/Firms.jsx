import React from 'react';
import styles from './Firms.module.css';
import TablePart from './TablePart/TablePart';

const Firms = (props) => {
  return (
    <>
      <div className="container pt-2">
        <form>
          <h5 className="text-center">Додати організацію</h5>

          <div className="form-row">
            <div className="form-group col-lg-3 col-md-6">
              <label htmlFor="inputFirm">Назва організації / ФОП</label>
              <input type="text" id="inputFirm" className="form-control" placeholder="Назва організації чи ФОП" name="name" required />
              <small className="text-muted">* вводити у форматі - ТОВ "Назва компанії" або ФОП "ПІП"</small>
            </div>

            <div className="form-group col-lg-3 col-md-6">
              <label htmlFor="inputIDNumberFirm">ЄДРПОУ / іден. код</label>
              <input type="text" id="inputIDNumberFirm" className="form-control" placeholder="ЄДРПОУ або іден. код" name="id_firm" required />
            </div>

            <div className="form-group col-lg-3 col-md-6">
              <label htmlFor="inputPhoneFirm">Телефон організації</label>
              <input type="text" id="inputPhoneFirm" className="form-control" placeholder="Номер контактного телефону" name="telephone" />
            </div>

            <div className="form-group col-lg-3 col-md-6">
              <label htmlFor="inputEmailFirm">Електронна адреса організації</label>
              <input type="email" id="inputEmailFirm" className="form-control" placeholder="example@mail.com" name="email" />
            </div>

            <div>
              <div className={`row ${styles.rowCustomStyle}`}></div>
            </div>
          </div>
          <div className="form-group offset-md-4 col-md-4">
            <input className="btn btn-outline-success btn-block" defaultValue="Додати нову організацію" />
          </div>
        </form>
      </div>



      <div className={styles.tableCustomStyle}>
        <h5 className="text-center">Зведений список фірм</h5>
        <div className={`row ${styles.rowDivCustomStyle}`}></div>
        <div className="row">
          <div className="col-md-4 offset-md-4 text-center">
            <label className="text-center"><small>Пошук по таблиці</small></label>
            <input className="form-control table-filter " type="text" />
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
                    email={firm.email} />
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Firms;