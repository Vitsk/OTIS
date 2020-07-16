import React from 'react';
import TablePart from './TablePart/TablePart';

const Main = () => {
  return (
    <div className="container pt-2">


      <table className="table table-hover col-lg-8 col-md-12">
        <tbody className="user-info">

          <TablePart title='Користувач' colorClass='secondary' data='-' />
          <TablePart title='Дата реєстрації' colorClass='secondary' data='22.22.2222' />
          <TablePart title='Назва організації / фірми' colorClass='secondary' data='-' />
          <TablePart title='Адреса' colorClass='secondary' data='-' />
          <TablePart title='Номер телефону' colorClass='secondary' data='-' />
          <TablePart title='E-mail' colorClass='secondary' data='-' />
          <TablePart title='Організацій в системі' colorClass='info' data='-' />
          <TablePart title='Транспортних засобів в системі' colorClass='info' data='-' />
          <TablePart title='ТО у найближчі 30 днів' colorClass='warning' data='-' />
          <TablePart title='ТО у найближчі 7 днів' colorClass='warning' data='-' />
          <TablePart title='Сертифікати у найближчі 30 днів' colorClass='warning' data='-' />
          <TablePart title='Сертифікати у найближчі 7 днів' colorClass='warning' data='-' />
          <TablePart title='Пройдено ТО' colorClass='success' data='-' />
          <TablePart title='Видано сертифікатів' colorClass='success' data='-' />
          <TablePart title='Стан рахунку (сервіс AlphaSMS)' colorClass='danger' data='-' />

        </tbody>
      </table>
    </div>
  );
}

export default Main;
