import styles from './index.module.scss';
import { useState } from 'react';

export const Input = (props) => {
    const ButtonDisabled = !(props.todo && props.todo1 );
    return (
        <div className={styles.blockInput}>
            <input maxLength={30} className={styles.input} value={props.todo}
                onChange={(e) => props.setTodo(e.target.value)} placeholder='ФИО или Никнейм'></input>

            <input maxLength={50} className={styles.input1} value={props.todo1}
                onChange={(e) => props.setTodo1(e.target.value)} placeholder='Отзыв'></input>
            <button className={styles.btn} onClick={() => props.addTask()} disabled={ButtonDisabled}>Добавить</button>
        </div>
    )
}