import React from 'react';
import scsiJpg from '../../../assets/images/scsi.jpg';
import scsiSvg from '../../../assets/images/scsi.svg';
import frstshmnJpg from '../../../assets/images/frstshmn.jpg';
import frstshmnSvg from '../../../assets/images/frstshmn1.svg';
import vitskJpg from '../../../assets/images/v1tsk.jpg';
import vitskSvg from '../../../assets/images/v1tsk.svg';
import styles from './About.module.css';

const About = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 text-justify text-dark">
            <p><b>OTIS</b> - онлайн-система обліку технічних оглядів та видачі сертифікатів для транспортних засобів. Система призначена для обліку та контролю за термінами закінчення дії відповідних документів.</p>
            <p>Також сервіс дозволяє додатково інформувати клієнтів про потребу проходження ТО або отримання сертифікатів за допомогою E-mail листів та СМС повідомлень.</p>
            <p>Система стане незамінним помічником для усіх підприємств та організацій, які надають послуги з проходження технічних оглядів та видачі сертифікатів відповідності.</p>
            <p>Якщо у Вас є запитання, пропозиції чи побажання стосовно системи OTIS - відправляйте листа на нашу електронну адресу <a href="mailto:info@otis.co.ua">info@otis.co.ua</a> і ми із задоволенням розглянемо їх.</p>
            <p>----------------<br />З повагою,<br /><b>OTIS Dev Team</b></p>
          </div>

        </div>
        <div className="row mt-3 justify-content-sm-center">
          <div className="col-md-3 col-xs-12">
            <div className="card bg-transparent border-0">
              <div className={styles.flipBox}>
                <div className={styles.flipBoxInner}>
                  <div className={styles.flipBoxFront}>
                    <img className="card-img-top bg-light rounded-circle w-50 mx-auto d-block shadow" src={scsiSvg} alt="Card cap" />
                  </div>
                  <div className={styles.flipBoxBack}>
                    <img className="card-img-top bg-light rounded-circle w-50 mx-auto d-block shadow" src={scsiJpg} alt="Card cap" />
                  </div>
                </div>
              </div>

              <div className="card-body text-center text-dark">
                <h5 className="card-title">Oleksandr Khorunzhiy</h5>
                <p className="card-text text-muted"></p>
                <p className="card-text text-muted">Layout/Front-end development</p>
                <a href="https://www.facebook.com/oleksandr.khorunzhyi" className="btn btn-outline-dark" rel="noopener noreferrer" target="_blank">More...</a>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-xs-12">
            <div className="card bg-transparent border-0">
              <div className={styles.flipBox}>
                <div className={styles.flipBoxInner}>
                  <div className={styles.flipBoxFront}>
                    <img className="card-img-top bg-light rounded-circle w-50 mx-auto d-block shadow" src={vitskSvg} alt="Card cap" />
                  </div>
                  <div className={styles.flipBoxBack}>
                    <img className="card-img-top bg-light rounded-circle w-50 mx-auto d-block shadow" src={vitskJpg} alt="Card cap" />
                  </div>
                </div>
              </div>

              <div className="card-body text-center text-dark flip-box-text">
                <h5 className="card-title">Viktor Kovalchuck</h5>
                <p className="card-text text-muted">Front-end/Database design</p>
                <a href="https://t.me/V1tsk" className="btn btn-outline-dark" rel="noopener noreferrer" target="_blank">More...</a>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-xs-12">
            <div className="card bg-transparent border-0">
              <div className={styles.flipBox}>
                <div className={styles.flipBoxInner}>
                  <div className={styles.flipBoxFront}>
                    <img className="card-img-top bg-light rounded-circle w-50 mx-auto d-block shadow" src={frstshmnSvg} alt="Card cap" />
                  </div>
                  <div className={styles.flipBoxBack}>
                    <img className="card-img-top bg-light rounded-circle w-50 mx-auto d-block shadow" src={frstshmnJpg} alt="Card cap" />
                  </div>
                </div>
              </div>

              <div className="card-body text-center text-dark">
                <h5 className="card-title">Volodymir Korenha</h5>
                <p className={`card-text ${styles.textMuted}`}>API/Back-end development</p>
                <a href="http://spacedesign.in.ua" className="btn btn-outline-dark" rel="noopener noreferrer" target="_blank">More...</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
