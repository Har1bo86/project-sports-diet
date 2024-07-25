import React from "react";
import styles from './index.module.scss';
import { useSelector, useDispatch } from "react-redux";
import { setAge, setHeight, setWeight, setGender, setTarget, setResult, } from "../../../redux/slices/counterSlice";
import { useState } from 'react';
import cn from 'classnames';
import { Link } from "react-router-dom";

function Calculation() {
    const dispatch = useDispatch()

    const { target, age, height, weight, result, gender } = useSelector((state) => state.counter);

    const CalculateButtonDisabled = !(age && height && weight && gender && target);

    const calculate = () => {
        let result = {}

        if (gender === 'male') {
            if (target === 'support') {
                result = {
                    cCalories: Math.ceil((10 * weight + 6.25 * height - 5 * age) * 1.1),
                    protein: weight * 2,
                    fat: weight * 1,
                    carb: Math.ceil(((10 * weight + 6.25 * height - 5 * age) * 1.1 - weight * 9 - weight * 4 - weight * 4) / 4)
                }
            } else if (target === 'lose') {
                result = {
                    cCalories: Math.ceil((10 * weight + 6.25 * height - 5 * age) / 1.1),
                    protein: weight * 2,
                    fat: weight * 1,
                    carb: Math.round(((10 * weight + 6.25 * height - 5 * age) / 1.1 - weight * 9 - weight * 4 - weight * 4) / 4)
                }
            } else {
                result = {
                    cCalories: Math.ceil((10 * weight + 6.25 * height - 5 * age) * 1.3),
                    protein: weight * 2,
                    fat: weight * 1,
                    carb: Math.round(((10 * weight + 6.25 * height - 5 * age) * 1.3 - weight * 9 - weight * 4 - weight * 4) / 4)
                }
            }
        } else if (gender === 'female') {
            if (target === 'support') {
                result = {
                    cCalories: Math.ceil(10 * weight + 6.25 * height - 5 * age),
                    protein: weight * 2,
                    fat: weight * 1,
                    carb: Math.ceil(((10 * weight + 6.25 * height - 5 * age) - weight * 9 - weight * 4 - weight * 4) / 4)
                }
            } else if (target === 'lose') {
                result = {
                    cCalories: Math.ceil((10 * weight + 6.25 * height - 5 * age) / 1.2),
                    protein: weight * 2,
                    fat: weight * 1,
                    carb: Math.round(((10 * weight + 6.25 * height - 5 * age) / 1.2 - weight * 9 - weight * 4 - weight * 4) / 4)
                }
            } else {
                result = {
                    cCalories: Math.ceil((10 * weight + 6.25 * height - 5 * age) * 1.2),
                    protein: weight * 2,
                    fat: weight * 1,
                    carb: Math.round(((10 * weight + 6.25 * height - 5 * age) * 1.2 - weight * 9 - weight * 4 - weight * 4) / 4)
                }
            }
        }

        dispatch(setResult(result));
    }


    return (
        <div className={styles.calculation}>
            <div className={styles.header}>
                <p>Расчет текущих потребностей</p>
            </div>
            <div className={styles.CalorieCalc}>
                <div className={styles.GenderSelection}>
                    <button className={cn([styles.step, gender === 'male' && styles['step-active']])} onClick={() => dispatch(setGender('male'))}>Мужчина</button>
                    <button className={cn([styles.step, gender === 'female' && styles['step-active']])} onClick={() => dispatch(setGender('female'))}>Женщина</button>
                </div>
                <div className={styles.Data}>
                    <div className={styles.DataLeft}>
                        <label for="age">возраст:</label>
                        <label for="height">рост:</label>
                        <label for="weight">вес:</label>
                    </div>
                    <div className={styles.DataRight}>
                        <input type="text" name="age" onChange={(e) => { dispatch(setAge(e.target.value)) }}
                        />
                        <input type="text" name="height" onChange={(e) => { dispatch(setHeight(e.target.value)) }} />
                        <input type="text" name="weight" onChange={(e) => { dispatch(setWeight(e.target.value)) }} />
                    </div>

                </div>
                <div className={styles.Target}>
                    <button className={cn([styles.stepTarget, target === 'support' && styles['stepTarget-active']])} onClick={() => dispatch(setTarget('support'))}>Поддерживать вес</button>
                    <button className={cn([styles.stepTarget, target === 'lose' && styles['stepTarget-active']])} onClick={() => dispatch(setTarget('lose'))}>Терять вес</button>
                    <button className={cn([styles.stepTarget, target === 'gain' && styles['stepTarget-active']])} onClick={() => dispatch(setTarget('gain'))}>Набирать вес</button>
                </div>
                <button onClick={() => calculate()} className={styles.ButtonCalculate} disabled={CalculateButtonDisabled}>Посчитать</button>
            </div>

            <div className={styles.result}>
                <p className={styles.text}>Ваш идеальный <span className={styles.text1}>рацион</span> должен содержать:</p>
                <div className={styles.tables}>
                    <div className={styles.calories}>
                        <div className={styles.p}>Калории в день:</div>
                        <div className={styles.caloriesText}>{result.cCalories}</div>
                    </div>
                    <div className={styles.proteins}>
                        <div className={styles.p}>Белки г/сутки:</div>
                        <div className={styles.caloriesText}>{result.protein}</div>
                    </div>
                    <div className={styles.fats}>
                        <div className={styles.p}>Жиры г/сутки:</div>
                        <div className={styles.caloriesText}>{result.fat}</div>
                    </div>
                    <div className={styles.carbs}>
                        <div className={styles.p}>Углеводы г/сутки:</div>
                        <div className={styles.caloriesText}>{result.carb}</div>
                    </div>
                </div>

            </div>
            <button className={styles.ButtonPages}>
                <Link className={styles.link} to='/ReadyMadeRacions'>Как составить меню правильного питания</Link>
            </button>
        </div>
    );
}

export default Calculation;
