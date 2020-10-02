import React from 'react';

const Loader = () => {
  return (
    <>
      <div className='d-flex justify-content-center'>
        <div className="spinner-border text-success" style={{width: "1.5rem", height: "1.5rem"}}  id='loader' role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );
}

export default Loader;
