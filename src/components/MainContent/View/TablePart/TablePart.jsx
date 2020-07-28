import React from 'react';
import './TablePart.css';

const TablePart = (props) => {
  return (
    <>
      <tr className="table-data">
        <td className={`align-middle ${props.status}`}>{props.name}</td>
        <td className={`align-middle ${props.status}`}>{props.brand}</td>
        <td className={`align-middle ${props.status}`}>{props.model}</td>
        <td className={`align-middle ${props.status}`}>{props.registrationNumber}</td>
        <td className={`align-middle ${props.status}`}>{props.vinCode}</td>
        <td className={`align-middle ${props.status}`}>{props.nextPassingDate}</td>
        <td className={`align-middle ${props.status}`}>{props.nextSertificationDate === '0000-00-00' ? 'немає' : 'є'}</td>
        <td className={`align-middle ${props.status}`}>{props.nextSertificationDate === '0000-00-00' ? '-' : props.nextSertificationDate}</td>
        <td className="edit-btn align-middle">
          <div title="Редагування" onClick={ () => {props.getChoosenCar(props.registrationNumber); props.setModelsName(props.brand); props.setTypeName(props.idModel) }} className="edit-button btn btn-outline-success align-middle btn-sm" data-toggle="modal" data-target=".bd-edit-modal-lg">
            <i className="fas fa-edit" aria-hidden="true"></i>
          </div>

          <div title="Відправка листа" onClick={() => {props.getChoosenCar(props.registrationNumber); props.setFirmEmail(props.name) }} className="edit-button btn btn-outline-success align-middle btn-sm" data-toggle="modal" data-target="#emailModal">
            <i className="fas fa-envelope" aria-hidden="true"></i>
          </div>

          <div title="Відправка SMS" onClick={() => {props.getChoosenCar(props.registrationNumber)}} className="edit-button btn btn-outline-success align-middle btn-sm" data-toggle="modal" data-target="#smsModal">
            <i className="fas fa-sms" aria-hidden="true"></i>
          </div>

          <div title="Видалення" onClick={() => props.getChoosenCar(props.registrationNumber)} className="edit-button btn btn-outline-danger align-middle btn-sm" data-toggle="modal" data-target="#deleteModal">
            <i className="fas fa-trash-alt" aria-hidden="true"></i>
          </div>
        </td>
      </tr>
    </>
  );
}

export default TablePart;
