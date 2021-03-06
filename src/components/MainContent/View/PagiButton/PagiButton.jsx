import React from 'react';

const PagiButton = (props) => {
  return (
    <>
      <li className={`page-item ${props.currentPage === props.page && 'active'}`} style={{zIndex: 0}}>
        <button className='page-link' onClick={() => props.setCars(props.page)}>{props.page}</button>
      </li>
    </>
  );
}

export default PagiButton;
