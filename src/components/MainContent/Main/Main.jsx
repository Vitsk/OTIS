import React from 'react';
import TablePart from './TablePart/TablePart';

const Main = (props) => {
  return (
    <div className="container pt-2">


      <table className="table table-hover col-lg-8 col-md-12">
        <tbody className="user-info">

          <TablePart title='Користувач' colorClass='secondary' data={props.userName} />
          <TablePart title='Дата реєстрації' colorClass='secondary' data={props.dateOfReg} />
          <TablePart title='Назва організації / фірми' colorClass='secondary' data={props.firmName} />
          <TablePart title='Адреса' colorClass='secondary' data={props.street} />
          <TablePart title='Номер телефону' colorClass='secondary' data={props.telephoneNum} />
          <TablePart title='E-mail' colorClass='secondary' data={props.email} />
          <TablePart title='Організацій в системі' colorClass='info' data={props.firmsCount} />
          <TablePart title='Транспортних засобів в системі' colorClass='info' data={props.carsCount} />
          <TablePart title='ТО у найближчі 30 днів' colorClass='warning' data={props.sumThirtyTO} />
          <TablePart title='ТО у найближчі 14 днів' colorClass='warning' data={props.sumFourteenTO} />
          <TablePart title='Сертифікати у найближчі 30 днів' colorClass='warning' data={props.sumThirtySert} />
          <TablePart title='Сертифікати у найближчі 14 днів' colorClass='warning' data={props.sumFourteenSert} />
          <TablePart title='Пройдено ТО' colorClass='success' data={props.allTOCount} />
          <TablePart title='Видано сертифікатів' colorClass='success' data={props.sertCount} />
          <TablePart title='Стан рахунку (сервіс AlphaSMS)' colorClass='danger' data={props.balance} />

        </tbody>
      </table>
    </div>
  );
}

export default Main;
