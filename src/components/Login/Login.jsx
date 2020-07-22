import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import mainLogo from '../../assets/images/mainLogo.png';
import './Login.css';

const Login = (props) => {
  return (
    <>
      <div className="customDivStyles16"></div>
      <div className="container w-50">
        <div className="col-md-12 col-sm-8 border border-success rounded-lg">
          <div className="row customDivStyles1"></div>
          <div className="text-center">
            <img src={mainLogo} width="40%" alt="OTIS - Онлайн-система обліку ТО та сертифікатів транспортних засобів" title="OTIS - Онлайн-система обліку ТО та сертифікатів транспортних засобів" />
            <span className="customFontSizeSpan">OFFICE</span>
          </div>
          <div className="row customDivStyles1"></div>
          <h3 className="text-center">Авторизація</h3>


          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="font-weight-bolder">Логін</label>
            <input name="email" type="email" onChange={(e) => props.updateEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введіть електронну пошту" />
            <small id="emailHelp" className="form-text text-muted">В якості логіну використовується E-mail адреса</small>
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1" className="font-weight-bolder">Пароль</label>
            <input name="password" type="password" onChange={(e) => props.updatePass(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Введіть пароль" />
            <small id="passHelp" className="form-text text-muted">Нікому не поширюйте власний пароль!</small>
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Запам'ятати мене</label>
          </div>
          <div className="text-center">
            <button onClick={() => props.login()} className="btn btn-outline-success btn-block">Увійти в систему</button>
            {/* <button type="submit" className="btn btn-outline-success btn-block">Увійти в систему</button> */}
          </div>


          <div className="customDivStyles16"></div>
          <div className="row text-center">
            <div className="col-lg-6 col-md-12">
              <a href="#s" className="badge badge-light">Не пам'ятаю пароль</a>
            </div>
          </div>
          <div className="row customDivStyles16"></div>
          <div className="text-bottom text-center">
            <small>&copy; All right reserved, <a href="authors.html">OTIS 2020</a></small>
          </div>

          <div className="row customDivStyles1"></div>
        </div>
      </div>
    </>
  );
}

export default Login;
