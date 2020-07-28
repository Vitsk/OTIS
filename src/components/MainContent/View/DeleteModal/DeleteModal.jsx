import React from 'react';

const DeleteModal = (props) => {
  return (
    <>
      <div className="modal fade" id="deleteModal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Видалення машини</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body delete-vehicle" id="AC2342UY">
              <div className="reg-number__delete">
                <div className="delete-info d-flex justify-content-between w-75 mb-5">
                  <div className="delete-text">Регістраційний номер машини: </div>
                  <div className="delete-reg-number">{props.stateNum}</div>
                </div>
              </div>
              <p>Ви дійсно хочете видалити дану машину?</p>
            </div>
            <div className="modal-footer">
              <button type="button" id="delete-request" data-dismiss="modal" className="btn btn-danger">Видалити</button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Ні</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeleteModal;
