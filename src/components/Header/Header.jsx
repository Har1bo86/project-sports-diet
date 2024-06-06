import React from "react";
import styles from './index.module.scss';
import icon from '../../items/icon.jpg';
import logo from '../../items/photo.png'

function Header() {
    return (
      <div className={styles.Header}>
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
                <button className={styles.PlanNutrition}>Рацион питания</button>

                <button className={styles.PlanTreining}>План тренировок</button>
              </div>

          </div>

          <div className={styles.RightHeader}>
                  <img src={logo} alt="logo" className={styles.img}/>
                  <div className={styles.krug}></div>                  
          </div>
      </div>
    );
  }
  
  export default Header;
  