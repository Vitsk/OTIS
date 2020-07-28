import React from 'react';

const SmsModal = (props) => {
  return (
    <>
      <div className="createModal">
        <div className="modal fade" id="smsModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Відправка SMS</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body sendSms">
                <div className="sms-info">
                  <div className="sms-reg-number d-flex justify-content-between w-75 mb-5">
                    <div className="sms-title">Регістраційний номер машини: </div>
                    <div className="sms-reg-number">{props.stateNum}</div>
                  </div>
                  <div className="sms-phone d-flex justify-content-between w-75">
                    <div className="sms-title">Телефонний номер: </div>
                    <div className="sms-telephone">{props.telephoneNum}</div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" id="send-sms" data-dismiss="modal" className="btn btn-success">Відправити</button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Ні</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SmsModal;
