import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import NavLogo from '../../../assets/images/mainLogo.png' 

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" sticky-top='true'>

        <NavLink to="/about" id="/status" className="navbar-brand align-baseline" alt="OTIS logo">
          <img src={NavLogo} width="80" alt="OTIS" title="OTIS logo" />
        </NavLink>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to='/main' className='nav-link'>Головна</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/profile' className='nav-link'>Мій профіль</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/firms' className='nav-link'>Мої фірми</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/apark' className='nav-link'>Мій автопарк</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/view' className='nav-link'>ТО та сертифікати</NavLink>
            </li>
            <li className="nav-item">
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
            <button onClick={() => props.logoutUser()} className="btn btn-outline-success my-2 my-sm-0">Вийти</button>

        </div>
      </nav>
    </div>
  );
}

export default Navbar;
