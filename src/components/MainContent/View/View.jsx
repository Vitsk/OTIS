import React from 'react';
import styles from './View.module.css';

const View = () => {
  return (
    <div class={styles.main}>
      <h5 class="text-center">Зведений список проходження ТО транспортними засобами</h5>
      <div class={`row ${styles.rowCustomStyle}`}></div>
      <div class="row">
        <div class="col-md-4">
          <label class="text-center"><small>Пошук по таблиці</small></label>
          <input class="form-control table-filter" type="text" placeholder="Введіть ключові слова" />
        </div>

        <div class="col-md-4">
          <label><small>Технічний огляд</small></label>
          <select class="form-control" id="to-filter">
            <option selected value="all-to">усі</option>
            <option value="month">у найближчий місяць</option>
            <option value="week">у найближчий тиждень</option>
            <option value="out-day">прострочений</option>
          </select>
        </div>

        <div class="col-md-4">
          <label><small>Наявність сертифікату</small></label>
          <select class="form-control" id="sert-filter">
            <option selected value="all-sert">усі</option>
            <option value="available">є</option>
            <option value="not-available">немає</option>
          </select>
        </div>
      </div>

      <div class={`row ${styles.rowCustomStyle}`}></div>

      <div class="table-responsive">
        <table id="table-id" class="table table-sm table-hover table-bordered text-center">
          <thead>
            <tr class="bg-white text-success">
              <th class="align-middle header-cursor">Назва фірми</th>
              <th class="align-middle header-cursor">Марка авто</th>
              <th class="align-middle header-cursor">Модель авто</th>
              <th class="align-middle header-cursor">Державний<br />номер</th>
              <th class="align-middle header-cursor">VIN-код</th>
              <th class="align-middle header-cursor">Дата<br />наступного<br />ТО</th>
              <th class="align-middle header-cursor">Наявність<br />сертифікату</th>
              <th class="align-middle header-cursor">Дата<br />наступного<br />сертифікату</th>
              <th class="align-middle header-cursor">Керування<br />даними</th>
            </tr>
          </thead>
          <tbody id="filter-table" class="main-table">

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default View;
