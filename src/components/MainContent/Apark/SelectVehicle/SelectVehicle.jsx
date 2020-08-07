import React from 'react';
import Select from 'react-select';

const SelectVehicle = (props) => {
  return (
    <>
      <div id="select" className="form-row col-md-12">
        <div className="col-md-4">
          <label>Марка ТЗ</label>
          <Select 
            options={props.brands}
            value={props.brand}
            theme={props.styleSelect}
            onChange={(e) => { props.updateState('brand', e); props.setModelsName(e.value) }} />
        </div>

        <div className="col-md-4">
          <label htmlFor="selectModelVehicle">Модель ТЗ</label>
          <Select
            options={props.models}
            value={props.model}
            theme={props.styleSelect}
            onChange={(e) => { props.updateState('model', e); props.setTypeName(e.value) }} />
        </div>

        <div className="col-md-4">
          <label htmlFor="selectTypeVehicle">Тип ТЗ</label>
          <input className="form-control" value={props.carType} id="selectTypeVehicle" disabled />
        </div>
      </div>
    </>
  );
}

export default SelectVehicle;
