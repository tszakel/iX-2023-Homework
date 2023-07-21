import './App.css';
import { useState, useEffect } from 'react';
import { Task } from './models/task';


import 'bootstrap/dist/css/bootstrap.min.css';
import TaskForm from './components/TaskForm';
import TaskTable from './components/TaskTable';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [taskComplete, setTaskComplete] = useState(null);

  useEffect(() => {
    loadTasksFromLocalStorage();
  }, []);

  function onTaskCreated(task) {
    setTaskToEdit(null);
    setTasks([...tasks, task]);
    saveTasksToLocalStorage();
  }

  function onTaskDelete(task) {
    setTasks(tasks.filter((x) => x.taskNum !== task.taskNum));
  }

  function onTaskEdit(task) {
    setTaskToEdit(task);
    setTasks(tasks.filter((x) => x.taskNum !== task.taskNum));
  }

  function onTaskComplete(task) {
    task.taskComplete = true;
    console.log(task.taskComplete)
  }

  function saveTasksToLocalStorage() {
    const json = JSON.stringify(tasks);
    localStorage.setItem('tasks', json);
  }

  function loadTasksFromLocalStorage() {
    const json = localStorage.getItem('tasks');
    if (json !== null) {
      const taskArr = JSON.parse(json);
      for (let i = 0; i < taskArr.length; i++) {
        setTasks([...tasks, Task.fromJSON(taskArr[i])]);
      }
    }
  }

  return (
    <div className='text-center m-5'>
      <div className='card p-4'>
        <TaskForm onTaskCreated={onTaskCreated} taskToEdit={taskToEdit} onTaskComplete={taskComplete}/>
        <TaskTable tasks={tasks} onTaskDelete={onTaskDelete} onTaskEdit={onTaskEdit} onTaskComplete={onTaskComplete}/>
      </div>
    </div>
  );
}

export default App;
