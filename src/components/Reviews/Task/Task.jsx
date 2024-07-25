
import styles from './index.module.scss';

export const Task = (props) => {
    return (
        <div className={styles.Task} key={props.id}>
            <p className={styles.pName}>{props.value}  </p>
            <p className={styles.p}>{props.name}  </p>
            <button className={styles.btnDelete} onClick={() => props.deleteTask(props.id)}>x</button>
        </div>
    )
}