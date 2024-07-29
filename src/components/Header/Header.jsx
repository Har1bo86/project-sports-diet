import React from "react";
import styles from './index.module.scss';
import icon from '../../items/icon.jpg';
import logo from '../../items/photo.png';
import { useSelector } from "react-redux";
import { setGender } from "../../redux/slices/counterSlice";

function Header() {

  const value = useSelector((state) => state.counter.value) 
  const gender = useSelector((state) => state.counter.gender)

  const moveTo = (id) => {
    const elem = document.getElementById(id);
    elem.scrollIntoView({ behavior: "smooth", block: "center" })
  }
  // const moveToTreining = (id) => {
  //   const elem = document.getElementById(id);
  //   elem.scrollIntoView({ behavior: "smooth", block: "center" })
  // }

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
                <button onClick={() => moveTo("BlockPlanNutrition")} className={styles.PlanNutrition}>Рацион питания</button>
               <button onClick={() => moveTo("Treining")} className={styles.PlanTreining}>План питания</button>
              </div>

          </div>

          <div className={styles.RightHeader}>
                  <div className={styles.pict}></div>
                  <div className={styles.krug}></div>                  
          </div>
      </div>
    );
  }
  
  export default Header;
  