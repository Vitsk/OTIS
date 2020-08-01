import React from 'react';

const TablePart = (props) => {
  return (
    <>
      <tr className="table-data">
        <td className="align-middle">{props.nameFirm}</td>
        <td className="align-middle">{props.idFirm}</td>
        <td className="align-middle">{props.telephoneNum}</td>
        <td className="align-middle">{props.email}</td>
        <td className="edit-btn align-middle">
          <div className="edit-button btn btn-outline-success btn-block align-middle btn-sm" onClick={() => props.setChoosenFirmData(props.idFirm)} data-toggle="modal" data-target=".bd-example-modal-lg">
            Редагувати
          </div>
        </td>
      </tr>
    </>
  );
}

export default TablePart;
