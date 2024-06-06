import React from "react";
import styles from './index.module.scss';

function Calculation() {
    return (
        <div className={styles.calculation}>
            <div className={styles.header}>
                <p>Расчет текущих потребностей</p>
            </div>
            <div className={styles.CalorieCalc}>
                <div className={styles.GenderSelection}>
                    <button className={styles.MenButton}>Мужчина</button>
                    <button className={styles.WomanButton}>Женщина</button>
                </div>
                <div className={styles.Data}>
                    <div className={styles.DataLeft}>
                    <label for="age">возраст:</label>
                    <label for="height">рост:</label>
                    <label for="weight">вес:</label>
                    </div>
                    <div className={styles.DataRight}>
                    <input type="text" name="age"/>
                    <input type="text" name="height"/>
                    <input type="text" name="weight"/>
                    </div>
                
                </div>
                <div className={styles.Target}>
                <button className={styles.support}>Поддерживать вес</button>
                <button className={styles.lose}>Терять вес</button>
                <button className={styles.gain}>Набирать вес</button>
                </div>
                <button className={styles.ButtonCalculate}>Посчитать</button>
            </div>

            <div className={styles.result}>
                <p className={styles.text}>Ваш идеальный <span className={styles.text1}>рацион</span> должен содержать:</p>
                <div className={styles.tables}>
                    <div className={styles.calories}>
                        <div className={styles.p}>Калории в день:</div>
                    </div>
                    <div className={styles.proteins}>
                    <div className={styles.p}>Белки г/сутки:</div>
                    </div>
                    <div className={styles.fats}>
                    <div className={styles.p}>Жиры г/сутки:</div>
                    </div>
                    <div className={styles.carbs}>
                    <div className={styles.p}>Углеводы г/сутки:</div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Calculation;
  