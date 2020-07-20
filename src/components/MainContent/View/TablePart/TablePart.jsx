import React from 'react';

const TablePart = (props) => {
  return (
    <>
      <tr className="table-data out-day sertNotAvailable">
        <td className="align-middle status-today">{props.name}</td>
        <td className="align-middle status-today">{props.brand}</td>
        <td className="align-middle status-today">{props.model}</td>
        <td className="align-middle status-today">{props.registrationNumber}</td>
        <td className="align-middle status-today">{props.vinCode}</td>
        <td className="align-middle status-today">{props.nextPassingDate}</td>
        <td className="align-middle status-today">{props.nextSertificationDate === '0000-00-00' ? 'немає' : 'є'}</td>
        <td className="align-middle status-today">{props.nextSertificationDate === '0000-00-00' ? '-' : props.nextSertificationDate}</td>
        <td className="edit-btn align-middle">
          <div title="Редагування" className="edit-button btn btn-outline-success align-middle btn-sm" data-toggle="modal" data-target=".bd-edit-modal-lg">
            <i className="fas fa-edit" aria-hidden="true"></i>
          </div>
          <div title="Відправка листа" className="edit-button btn btn-outline-success align-middle btn-sm" data-toggle="modal" data-target="#emailModal">
            <i className="fas fa-envelope" aria-hidden="true"></i>
          </div>
          <div title="Відправка SMS" className="edit-button btn btn-outline-success align-middle btn-sm" data-toggle="modal" data-target="#smsModal">
            <i className="fas fa-sms" aria-hidden="true"></i>
          </div>
          <div title="Видалення" className="edit-button btn btn-outline-danger align-middle btn-sm" data-toggle="modal" data-target="#deleteModal">
            <i className="fas fa-trash-alt" aria-hidden="true"></i>
          </div>
        </td>
      </tr>
    </>
  );
}

export default TablePart;
