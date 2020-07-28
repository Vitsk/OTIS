import React from 'react';

const EmailModal = (props) => {
  return (
    <>
      <div className="createModal">
        <div className="modal fade" id="emailModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Відправка листа</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-body sendEmail">
                <div className="date-info">
                  <div className="date d-flex justify-content-between w-75 mb-2">
                    <div className="date-text">Дата наступного ТО: </div>
                    <div className="date-nx-passing">{props.choosenCar.nextPassingDate}</div>
                  </div>

                  <div className="date d-flex justify-content-between w-75 mb-2">
                    <div className="date-text">Дата наступного сертифікату: </div>
                    <div className="date-nx-sertificate">{props.choosenCar.nextSertificationDate === '0000-00-00' ? '-' : props.choosenCar.nextSertificationDate}</div>
                  </div>
                </div>

                <div className="firm-info">
                  <div className="firm d-flex justify-content-between w-75 mb-2">
                    <div className="firm-text">Фірма: </div>
                    <div className="firm-sender">{props.choosenCar.firmName}</div>
                  </div>
                </div>

                <div className="email-info">
                  <div className="email d-flex justify-content-between w-75 mb-2">
                    <div className="email-text">Ваш Email: </div>
                    <div className="email-sender">{props.emails.userEmail}</div>
                  </div>

                  <div className="email d-flex justify-content-between w-75 mb-4">
                    <div className="email-text">Email отримувача: </div>
                    <div className="email-recipient">{props.emails.firmEmail}</div>
                  </div>
                </div>

                Ви дійсно хочете відправити лист з попередженням?
              </div>
              <div className="modal-footer">
                <button type="button" id="send-email" data-dismiss="modal" className="btn btn-success">Відправити</button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Ні</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmailModal;
