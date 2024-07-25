import React from "react";
import styles from './index.module.scss';
import Calculation from './Calculation/Calculation';

function BlockPlanNutrition() {
    return (
        <div id={"BlockPlanNutrition"} className={styles.BlockPlanNutrition}>
            <div className={styles.Header}>
                
                <p className={styles.text}>Составление индивидуального <span className={styles.text1}>плана питания</span></p>
            </div>
            <Calculation/>
        </div>
    );
  }
  
  export default BlockPlanNutrition;
  