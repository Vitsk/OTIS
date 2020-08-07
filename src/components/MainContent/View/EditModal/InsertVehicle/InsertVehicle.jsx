import React from 'react';
import {EditableSelect} from 'react-editable-select';

const InsertVehicle = (props) => {
  return (
    <>
      <div className="form-row col-md-12">
        <div className="col-md-4">
          <label htmlFor="insertBrandVehicle">Марка ТЗ</label>
          <EditableSelect 
            options={props.brands.map(i => i.value)}
            value={props.brand}
            onChange={(e) => { props.updateState('brand', e.target.value) }} />
        </div>

        <div className="col-md-4">
          <label htmlFor="insertModelVehicle">Модель ТЗ</label>
          <input className="form-control" value={props.model} onChange={(e) => { props.updateState(e.target.name, e.target.value) }} id="insertModelVehicle" name="model" />
        </div>

        <div className="col-md-4">
          <label htmlFor="insertTypeVehicle">Тип ТЗ</label>
          <select className="custom-select" value={props.carType} onChange={(e) => { props.updateState(e.target.name, e.target.value) }} id="insertTypeVehicle" name="carType">
            <option defaultValue>Виберіть тип</option>
            <option value="тягач">тягач</option>
            <option value="причіп">причіп</option>
            <option value="н/причіп">н/причіп</option>
            <option value="фургон">фургон</option>
            <option value="автобус">автобус</option>
            <option value="легковий автомобіль">легковий автомобіль</option>
            <option value="трактор">трактор</option>
            <option value="комбайн">комбайн</option>
            <option value="спецтехніка">спецтехніка</option>
          </select>
        </div>

      </div>
    </>
  );
}

export default InsertVehicle;
