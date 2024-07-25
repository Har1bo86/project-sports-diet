import React from "react";
import styles from './index.module.scss';
import { useState } from 'react';
import cn from 'classnames';
import MenTreining from "./MenTreining/MenTreining";
import WomanTreining from "./WomanTreining/WomanTreining";
function Treining() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <div className={styles.Treining}>
            <div id={"Treining"} className={styles.Header}>
            <p  className={styles.text}>Программы <span className={styles.text1}>тренировок</span></p>
            </div>
            <div className={styles.BlockTreining}>
                <div className={styles.Banner}>
                    <div className={cn([styles.step, toggleState === 1 && styles['step-active']])} onClick={() => toggleTab(1)}>Для мужчин</div>
                    <div className={cn([styles.step, toggleState === 2 && styles['step-active']])} onClick={() => toggleTab(2)}>Для девушек</div>
        </div>
        
        <div className={styles.content}>
            <div className={cn([styles.element, toggleState === 1 && styles['element-active']])}>
                <MenTreining/>
            </div>
            <div className={cn([styles.element, toggleState === 2 && styles['element-active']])}>
            <WomanTreining/>
            </div>
        </div>
            </div>
        </div>
    );
  }
  
  export default Treining;
  