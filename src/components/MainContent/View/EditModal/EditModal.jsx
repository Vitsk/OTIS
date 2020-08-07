import React from 'react';
import SelectVehicle from './SelectVehicle/SelectVehicle';
import InsertVehicle from './InsertVehicle/InsertVehicle';
import InputMask from 'react-input-mask';

const styleSelect = theme => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: 'lightgreen',
    primary: '#28a745',
  },
})

const EditModal = (props) => {
  return (
    <>
      {/* <!----------------------------------- Edit Modal -------------------------------------------> */}
      <div className="modal fade bd-edit-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Редагування</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-row">

                <div className="form-group col-12">
                  <div className={`btn ${props.selectType ? 'btn-success' : 'btn-outline-success'} offset-md-3 col-md-3`} onClick={() => props.selectTypeAC()} id="select_exist">Вибрати існуючу марку/модель</div>
                  <div className={`btn ${props.selectType ? 'btn-outline-success' : 'btn-success'} col-md-3`} onClick={() => props.insertTypeAC()} id="insert_new">Додати нову марку/модель</div>
                </div>


                {
                  props.selectType ? <SelectVehicle styleSelect={styleSelect}
                    brands={props.choosenCar.brands}
                    brand={props.choosenCar.brand}
                    models={props.choosenCar.models}
                    model={props.choosenCar.model}
                    carType={props.choosenCar.carType}
                    updateState={props.updateState}
                    setModelsName={props.setModelsName}
                    setTypeName={props.setTypeName}
                    updateBrandsId={props.updateBrandsId} /> :
                    <InsertVehicle brands={props.choosenCar.brands}
                      brand={props.choosenCar.brand}
                      model={props.choosenCar.model}
                      carType={props.choosenCar.carType}
                      updateState={props.updateState} />
                }
                <div className="form-row col-md-12 pt-2">
                  <div className="offset-md-2 col-md-4">
                    <label htmlFor="inputIDVehicle">VIN-код</label>
                    <InputMask mask='*****************' type="text" value={props.choosenCar.vinCode} onChange={(e) => props.updateState(e.target.name, e.target.value)} className="form-control" id="inputIDVehicle" placeholder="VIN-код" name="vinCode" required />
                    <small className="text-muted">* латинськими літерами без пропусків</small>
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="inputStateNumberVehicle">Державний номер</label>
                    <InputMask mask='aa9999aa' type="text" value={props.choosenCar.nextStateNum} onChange={(e) => props.updateState(e.target.name, e.target.value)} className="form-control" id="inputStateNumberVehicle" placeholder="Державний номер" name="nextStateNum" required />
                    <small className="text-muted">* латинськими літерами у форматі - AC7777AC</small>
                  </div>
                </div>

                <div className="form-group col-lg-6 col-md-6">
                  <label htmlFor="inputDateTO">ТО пройдено</label>
                  <input type="date" value={props.choosenCar.dateOfPassing} onChange={(e) => props.updateState(e.target.name, e.target.value)} className="form-control" id="inputDateTO" name="dateOfPassing" required />
                </div>

                <div className="form-group col-lg-6 col-md-6">
                  <label htmlFor="inputDateTO">наступний ТО</label>
                  <input type="date" value={props.choosenCar.nextPassingDate} onChange={(e) => props.updateState(e.target.name, e.target.value)} className="form-control" id="inputNextDateTO" name="nextPassingDate" required />
                </div>

                <div className="form-group col-lg-12 col-md-12">
                  <div className="custom-control custom-checkbox text-center">
                    <input type="checkbox"
                      onChange={() => props.updateAvailabilitySertificate()} className="custom-control-input" id="CheckSertVehicle" name="availabilitySertificate" checked={props.choosenCar.availabilitySertificate} />
                    <label className="custom-control-label" htmlFor="CheckSertVehicle">Сертифікат видано</label>
                  </div>
                </div>

                <div className="form-group col-lg-6 col-md-6">
                  <label htmlFor="inputDateSert">сертифікат отримано</label>
                  <input type="date" value={props.choosenCar.dateOfReceivingSertificate} onChange={(e) => props.updateState(e.target.name, e.target.value)} className="form-control" id="inputDateSert" name="dateOfReceivingSertificate" disabled={props.choosenCar.disabled} />
                </div>

                <div className="form-group col-lg-6 col-md-6">
                  <label htmlFor="inputNextDateSert">Наступний сертифікат</label>
                  <input type="date" value={props.choosenCar.nextSertificationDate} onChange={(e) => props.updateState(e.target.name, e.target.value)} className="form-control" id="inputNextDateSert" name="nextSertificationDate" disabled={props.choosenCar.disabled} />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type='button' onClick={() => {props.editRequestHandler(); props.setCars()}} className="btn btn-success" data-dismiss="modal">Зберегти</button>
              <button type="button" id="close-note" className="btn btn-secondary" data-dismiss="modal">Закрити</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditModal;
