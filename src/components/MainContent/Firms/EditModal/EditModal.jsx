import React from 'react';
import InputMask from 'react-input-mask';

const EditModal = (props) => {
  return (
    <>
      <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Редагування</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body edit-table">
              <div className="form-group">
                <label htmlFor="firm-name">Організація / Фірма / ФОП</label>
                <input type="text" id="firm-name" value={props.editModal.firmName} onChange={(e) => props.updateModalState(e.target.name, e.target.value)} className="form-control" placeholder="Введіть назву" name="firmName" required />
                <small className="text-muted">* у форматі - ТОВ "Назва" або ФОП "ПІП"</small>
              </div>

              <div className="form-group">
                <label htmlFor="id-firm">ЄДРПОУ / іден. код</label>
                <InputMask mask='99999999' type="text" id="id-firm" value={props.editModal.nextIdFirm} onChange={(e) => props.updateModalState(e.target.name, e.target.value)} className="form-control" placeholder="12345678" name="nextIdFirm" required />
                <small className="text-muted">* лише цифри</small>
              </div>

              <div className="form-group">
                <label htmlFor="firm-contacts">Контактний номер тел.</label>
                <InputMask mask='+380999999999' type="text" id="firm-contacts" value={props.editModal.firmPhone} onChange={(e) => props.updateModalState(e.target.name, e.target.value)} className="form-control inputPhoneFirm" placeholder="+380771234567" name="firmPhone" />
              </div>

              <div className="form-group">
                <label htmlFor="firm-email">Контактний E-mail</label>
                <input type="email" id="firm-email" value={props.editModal.firmEmail} onChange={(e) => props.updateModalState(e.target.name, e.target.value)} className="form-control" placeholder="example@mail.com" name="firmEmail" />
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Закрити</button>
              <button id="put-request" onClick={() => {props.editFirmDataHandler(); props.setFirmsData()}} type="button" className="btn btn-success" data-dismiss="modal">Зберегти</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditModal;
