class Task {
    constructor(task) {
      this.task = task;
    }

    static fromJSON(json) {
      return new Task(json.task);
    }
  }

class UI {
    constructor() {  
      this.form = document.getElementById('form');
      this.task = document.getElementById('task');
  
      this.tableBody = document.getElementById('table-body');
  
      this.form.addEventListener('submit', (e) => this.onFormSubmit(e));
  
      this.tasks = [];

      this.loadTasksFromLocalStorage();
      this.renderTaskTable();
    }
  
    onFormSubmit(e) {
      e.preventDefault();
  
      if (this.task.value == '') {
        return;
      }
  
      const task = new Task(this.task.value);
  
      this.tasks.push(task);
      this.saveTasksToLocalStorage();
      this.renderTaskTable();
  
      this.task.value = '';
    }

  renderTaskTable() {
      this.tableBody.innerHTML = '';
  
      for (let i = 0; i < this.tasks.length; i++) {
        const task = this.tasks[i];
        console.log(this.tasks[i].task);
  
        const tr = this.createTaskTableRow(task);
        this.tableBody.appendChild(tr);
      }
  }

  createTaskTableRow(task) {
    const tr = document.createElement('tr');

    const tdTask = document.createElement('td');
    const tdComplete = document.createElement('td');
    const tdActions = document.createElement('td');
    
    tdTask.innerHTML = task.task;
    
    const actionButtons = this.createActionButtons();
    tdComplete.appendChild(actionButtons[0]);
    tdActions.appendChild(actionButtons[1]);

    tr.appendChild(tdTask);
    tr.appendChild(tdComplete);
    tr.appendChild(tdActions);

    return tr;
  }

  onRemoveTaskClicked() {
    this.tasks = this.tasks.filter((x) => {return task.task});

    this.saveTasksToLocalStorage();
    this.renderTaskTable();
  }

  createActionButtons(task) {
    const deleteButton = document.createElement('button');
    const completeButton = document.createElement('radio');

    deleteButton.setAttribute('class', 'btn btn-danger btn-sm');
    deleteButton.innerHTML = 'Delete';
    deleteButton.addEventListener('click', () => { this.onRemoveTaskClicked(task); });

    completeButton.setAttribute('class', 'form-check-input');

    return [completeButton,deleteButton];
  }

  saveTasksToLocalStorage (){
    const json = JSON.stringify(this.tasks);
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