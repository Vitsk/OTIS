import React from 'react';
import SelectOption from '../../Apark/SelectOption/SelectOption';

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
            <div className="modal-body edit-table">
              <div className="form-row">
                {/* <!-- <div className="form-group col-md-12">
                  <label for="selectFirm">Організація</label>
                  <select className="custom-select" id="selectFirm" name="id_firm" required>
                    <option defaultValue disabled>Виберіть організацію</option>
                  </select>
                </div> --> */}

                <div className="form-group col-12">
                  <div className="btn btn-success offset-md-3 col-md-3" id="select_exist">Вибрати існуючу марку/модель</div>
                  <div className="btn btn-outline-success col-md-3" id="insert_new">Додати нову марку/модель</div>
                </div>

                {/* <div id="insert" className="form-row col-md-12">
                  <div className="col-md-4">
                    <label htmlFor="insertBrandVehicle">Марка ТЗ</label>
                    <select className="custom-select" id="insertBrandVehicle" name="brand">
                    </select>
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="insertModelVehicle">Модель ТЗ</label>
                    <input className="form-control" id="insertModelVehicle" name="model" />
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="insertTypeVehicle">Тип ТЗ</label>
                    <select className="custom-select" id="insertTypeVehicle" name="type">
                      <option defaultValue disabled>Виберіть тип</option>
                      <option defaultValue="тягач">тягач</option>
                      <option defaultValue="причіп">причіп</option>
                      <option defaultValue="н/причіп">н/причіп</option>
                      <option defaultValue="фургон">фургон</option>
                      <option defaultValue="автобус">автобус</option>
                      <option defaultValue="легковий автомобіль">легковий автомобіль</option>
                      <option defaultValue="трактор">трактор</option>
                      <option defaultValue="комбайн">комбайн</option>
                      <option defaultValue="спецтехніка">спецтехніка</option>
                    </select>
                  </div>

                </div> */}

                <div id="select" className="form-row col-md-12">
                  <div className="col-md-4">
                    <label htmlFor="selectBrandVehicle">Марка ТЗ</label>
                    <select className="custom-select" value={props.choosenCar.brand} onChange={(e) => { props.updateBrandsId(e.target.value); props.setModelsName(e.target.value) }} id="selectBrandVehicle" name='brand'>
                      <option defaultValue>Виберіть марку</option>
                      {
                        props.choosenCar.brands.map((item, index) =>
                          <SelectOption key={index}
                            name={item.brand}
                            id={item.brand} />
                        )
                      }
                    </select>
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="selectBrandVehicle">Модель ТЗ</label>
                    <select className="custom-select" value={props.choosenCar.model} onChange={(e) => { props.updateState(e.target.name, e.target.value); props.setTypeName(e.target.value) }} id="selectModelVehicle" name="model">
                      <option defaultValue>Виберіть модель</option>
                      {
                        props.choosenCar.models.map((item, index) =>
                          <SelectOption key={index}
                            name={item.model}
                            id={item.idModel} />
                        )
                      }
                    </select>
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="selectBrandVehicle">Тип ТЗ</label>
                    <input className="form-control" value={props.choosenCar.carType} id="selectTypeVehicle" name='carType' disabled />
                  </div>

                </div>

                <div id="insert" className="form-row col-md-12 pt-2">
                  <div className="offset-md-2 col-md-4">
                    <label htmlFor="inputIDVehicle">VIN-код</label>
                    <input type="text" value={props.choosenCar.vinCode} onChange={(e) => props.updateState(e.target.name, e.target.value)} className="form-control" id="inputIDVehicle" placeholder="VIN-код" name="vinCode" required />
                    <small className="text-muted">* латинськими літерами без пропусків</small>
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="inputStateNumberVehicle">Державний номер</label>
                    <input type="text" value={props.choosenCar.nextStateNum} onChange={(e) => props.updateState(e.target.name, e.target.value)} className="form-control" id="inputStateNumberVehicle" placeholder="Державний номер" name="nextStateNum" required />
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
                  <label htmlFor="inputDateSert">Наступний сертифікат</label>
                  <input type="date" value={props.choosenCar.nextSertificationDate} onChange={(e) => props.updateState(e.target.name, e.target.value)} className="form-control" id="inputNextDateSert" name="nextSertificationDate" disabled={props.choosenCar.disabled} />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button onClick={() => props.editRequestHandler()} className="btn btn-success" data-dismiss="modal">Зберегти</button>
              <button type="button" id="close-note" className="btn btn-secondary" data-dismiss="modal">Закрити</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditModal;
