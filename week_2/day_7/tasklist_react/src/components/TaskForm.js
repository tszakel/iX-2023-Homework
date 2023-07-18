import React, {useState, useEffect} from 'react';

import { Task } from '../models/task';

export default function TaskForm(props){
    const [taskName, setTaskName] = useState('');
    const [taskNum, setTaskNum] = useState(0);
    const [taskComplete, setTaskComplete] = useState(false);

    useEffect(() => {
        if (props.taskToEdit) {
            setTaskName(props.taskToEdit.taskName);
            setTaskNum(props.taskToEdit.taskNum);
            setTaskComplete(props.taskToEdit.taskComplete);
        }
    }, [props.taskToEdit]);

    function onTaskFormSubmit(e){
        e.preventDefault();
        if(!isValid){
            return;
        }

        let task = new Task(taskName,taskNum, false);
        props.onTaskCreated(task);
        clearInputs();
    }

    function isValid(){
        return taskName !== '' && taskNum !== 0 && taskComplete !== false;
    }

    function clearInputs() {
        setTaskName('');
        setTaskNum(0);
        setTaskComplete(false);
    }

    return (
        <div>
            <h1 class='text-center'> Task List </h1>
            <hr />
            <form id='form' onSubmit={onTaskFormSubmit}>
                <div className='mb-3'>
                    <label className='form-label'>Task</label>
                    <input 
                    id='task-input' 
                    type='text' 
                    className='form-control' 
                    placeholder='Enter your task' 
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}></input>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>taskNum</label>
                    <input 
                    id='taskNum-input' 
                    type='number' 
                    className='form-control' 
                    placeholder='Enter taskNum'
                    value={taskNum}
                    onChange={(e) => setTaskNum(e.target.value)}></input>
                </div>

                <div className='d-grid mt-4'>
                    <button className='btn btn-outline-primary' type='submit'>
                        {props.taskToEdit ? "Update Task " : "Add Task"}
                    </button>
                </div>
            </form>
        </div>
    )
}