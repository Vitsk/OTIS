import React from 'react';

const TablePart = (props) => {
  return (
    <tr className={`table-${props.colorClass}`}>
      <td>{props.title}:</td>
      <th className="text-center">{props.data}</th>
    </tr>
  );
}

export default TablePart;
