import React from "react";
import styles from './index.module.scss';
import icon from '../../../items/icon.jpg';
import { Link } from "react-router-dom";


function HeaderReadyMadeRacions() {


    return (
      <div id={"Header"} className={styles.Header}>
          <div className={styles.LeftHeader}>
              <div className={styles.BlockLogo}>
                <img src={icon} alt="icon" className={styles.icon} />
                <p className={styles.p}>Спорт как образ жизни</p>
              </div>
              
              <div className={styles.BlockText}>
                <p className={styles.Text}>Стань атлетом</p>
                <p className={styles.Text1}>с Haribo</p>
                
              </div>

              <div className={styles.BlockPlan}>
              <button className={styles.ButtonCalculate}>
                    <Link className={styles.link} to='/'>Вернуться на главную страницу</Link>
                </button>
              </div>

          </div>

          <div className={styles.RightHeader}>
                  <div className={styles.pict}></div>
                  <div className={styles.krug}></div>                  
          </div>
      </div>
    );
  }
  
  export default HeaderReadyMadeRacions;
  