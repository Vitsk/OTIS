import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" sticky-top='true'>

        <a href="about" id="/status" className="navbar-brand align-baseline" alt="OTIS logo">
          <img src="public/img/logo.png" width="80" alt="OTIS" title="OTIS logo" />
        </a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              {/* <a href="main" id="/main" className="nav-link">Головна</a> */}
              <NavLink to='/main' className='nav-link'>Головна</NavLink>
            </li>
            <li className="nav-item">
              {/* <a href="profile" id="/profile" className="nav-link">Мій профіль</a> */}
              <NavLink to='/profile' className='nav-link'>Мій профіль</NavLink>
            </li>
            <li className="nav-item">
              {/* <a href="firms" id="/firms" className="nav-link">Мої фірми</a> */}
              <NavLink to='/firms' className='nav-link'>Мої фірми</NavLink>
            </li>
            <li className="nav-item">
              {/* <a href="apark" id="/apark" className="nav-link">Мій автопарк</a> */}
              <NavLink to='/apark' className='nav-link'>Мій автопарк</NavLink>
            </li>
            <li className="nav-item">
              {/* <a href="view" id="/view" className="nav-link">ТО та сертифікати</a> */}
              <NavLink to='/view' className='nav-link'>ТО та сертифікати</NavLink>
            </li>
            <li className="nav-item">
              {/* <a href="settings" id="/settings" className="nav-link">Налаштування</a> */}
              <NavLink to='/settings' className='nav-link'>Налаштування</NavLink>
            </li>
            {/* <!--li className="nav-item"><a href="about" id="/status" className="nav-link">Про систему</a></li--> */}
          </ul>
          <div className="text-secondary divPaddingRight">
            {/* <?php
    while ($row = $user_data->fetch_assoc()) {
              echo $row['second_name'];
      echo ' ';
      echo $row['first_name'];
  echo '<br>';
      echo '<small>'.$row['user_type'].'.<span className="_package">'.$row['package_type'].'</span></small>';
    }
    ?> */}
          </div>
          <a href="vendor/auth/exit.php">
            <button className="btn btn-outline-success my-2 my-sm-0">Вийти</button>
          </a>

        </div>
      </nav>
    </div>
  );
}

export default Navbar;
