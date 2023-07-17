class Task {
  constructor(taskName) {
    this.taskName = taskName;
  }

  static fromJSON(json) {
    return new Task(json.taskName);
  }
}

class UI {
  constructor() {  
    this.form = document.getElementById('form');
    this.taskName = document.getElementById('task');

    this.tableBody = document.getElementById('table-body');

    this.form.addEventListener('submit', (e) => this.onFormSubmit(e));

    this.taskList = [];

    this.loadTasksFromLocalStorage();
    this.renderTaskTable();
  }

  onFormSubmit(e) {
    e.preventDefault();

    if (this.taskName.value == '') {
      return;
    }

    const task = new Task(this.taskName.value);

    this.taskList.push(task);
    this.saveTasksToLocalStorage();
    this.renderTaskTable();

    this.taskName.value = '';
  }

renderTaskTable() {
    this.tableBody.innerHTML = '';

    for (let i = 0; i < this.taskList.length; i++) {
      const task = this.taskList[i];

      const tr = this.createTaskTableRow(task);
      this.tableBody.appendChild(tr);
    }
}

createTaskTableRow(task) {
  const tr = document.createElement('tr');

  const tdTask = document.createElement('td');
  const tdComplete = document.createElement('td');
  const tdActions = document.createElement('td');
  
  tdTask.innerHTML = task.taskName;
  
  const actionButtons = this.createActionButtons(task);
  tdComplete.appendChild(actionButtons[0]);
  tdActions.appendChild(actionButtons[1]);

  tr.appendChild(tdTask);
  tr.appendChild(tdComplete);
  tr.appendChild(tdActions);

  return tr;
}

onRemoveTaskClicked(task) {
  this.taskList = this.taskList.filter((curTask) => {return task.taskName != curTask.taskName;});

  this.saveTasksToLocalStorage();
  this.renderTaskTable();
}

createActionButtons(task) {
  const deleteButton = document.createElement('button');
  const completeButton = document.createElement('input');

  deleteButton.setAttribute('class', 'btn btn-danger btn-sm');
  deleteButton.innerHTML = 'Delete';
  deleteButton.addEventListener('click', () => { this.onRemoveTaskClicked(task); });

  completeButton.setAttribute('type', 'radio');

  return [completeButton,deleteButton];
}

saveTasksToLocalStorage (){
  const json = JSON.stringify(this.taskList);
  localStorage.setItem('tasks', json);
}

loadTasksFromLocalStorage (){
  const json = localStorage.getItem('tasks');
  if(json) {
    const taskArr = JSON.parse(json);
    this.taskArr = taskArr.map((x) => Task.fromJSON(x));
  }
}

}

const ui = new UI();