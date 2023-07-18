import React from 'react';

export default function TaskTable(props){
    return (
        <div>
            <table className='table mt-5'>
                <thead>
                    <tr>
                    <th>Task</th>
                    <th>Completed</th>
                    <th>taskNum</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody id='table-body'>
                    {props.tasks.map((task) => {
                        return (
                        <tr key={task.taskNum}>
                            <td>{task.taskName}</td>
                            <td>
                                <input type='radio'
                                    className=''
                                    onClick={() => props.onTaskComplete(task)}>
                                </input>
                            </td>
                            <td>{task.taskNum}</td>
                            <td>
                                <button 
                                className='btn btn-danger me-1 btn-sm'
                                onClick={() => props.onTaskDelete(task)}>Delete</button>
                                <button 
                                className='btn btn-warning ms-1 btn-sm'
                                onClick={() => props.onTaskEdit(task)}>Edit</button>
                            </td>
                        </tr>
                        );
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}