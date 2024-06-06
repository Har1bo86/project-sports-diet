import React from "react";
import styles from './index.module.scss';
import Calculation from './Calculation/Calculation';
import Diet from './Diet/Diet';

function BlockPlanNutrition() {
    return (
        <div className={styles.BlockPlanNutrition}>
            <div className={styles.Header}>
                <p className={styles.text}>Составление индивидуального <span className={styles.text1}>плана питания</span></p>
            </div>
            <Calculation/>
            <Diet/>
        </div>
    );
  }
  
  export default BlockPlanNutrition;
  