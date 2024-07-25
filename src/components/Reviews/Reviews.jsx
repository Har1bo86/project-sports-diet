import React, { useState } from "react";
import styles from './index.module.scss';
import { Value } from "sass";
import { Input } from "./Input/Input";
import { Task } from "./Task/Task";


function Reviews() {

    const [todo, setTodo] = useState('')
    const [todo1, setTodo1] = useState('')
    const [tasks, setTasks] = useState([])

    const addTask = () => {
        const taskTodo = {
            id: Math.random(),
            value: todo,
            status: false,
            name: todo1,
        }
        let newTask = [taskTodo, ...tasks]
        setTasks(newTask)
        setTodo("")
        setTodo1("")
    }

    const deleteTask = (id) =>{
        let del = tasks.filter(e => e.id !== id)
        setTasks(del)
    }


    const taskTodoList = tasks.map(e => <Task id={e.id} value={e.value} status={e.status} name={e.name} deleteTask = {deleteTask}/>)

    return (
        <div className={styles.BlockReviews}>
            <p className={styles.headerReviews}>
                <h2> Оставьте <span>отзыв</span> <span className={styles.stars}>★★★★★</span>  </h2>
            </p>
            <Input addTask={addTask} todo={todo} setTodo={setTodo} todo1={todo1} setTodo1={setTodo1} />
            {taskTodoList}
        </div>
    )
}

export default Reviews;