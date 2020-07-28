import React from 'react';

const EmailModal = (props) => {
  return (
    <>
      <div className="modal fade" id='emailModal' tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Відправка листа</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body">
                <div className="d-flex justify-content-between w-75 mb-2">
                  <div>Дата наступного ТО: </div>
                  <div>{props.choosenCar.nextPassingDate}</div>
                </div>

                <div className="d-flex justify-content-between w-75 mb-2">
                  <div>Дата наступного сертифікату: </div>
                  <div>{props.choosenCar.nextSertificationDate === '0000-00-00' ? '-' : props.choosenCar.nextSertificationDate}</div>
                </div>

                <div className="d-flex justify-content-between w-75 mb-2">
                  <div>Фірма: </div>
                  <div>{props.choosenCar.firmName}</div>
                </div>

                <div className="d-flex justify-content-between w-75 mb-2">
                  <div>Ваш Email: </div>
                  <div>{props.emails.userEmail}</div>
                </div>

                <div className="d-flex justify-content-between w-75 mb-4">
                  <div>Email отримувача: </div>
                  <div>{props.emails.firmEmail}</div>
                </div>

                Ви дійсно хочете відправити лист з попередженням?
              </div>
            <div className="modal-footer">
              <button type="button" data-dismiss="modal" className="btn btn-success">Відправити</button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Ні</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmailModal;
