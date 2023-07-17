class Task {
    constructor(task) {
      this.task = task;
    }
  }

class UI {
    constructor() {  
      this.form = document.getElementById('form');
      this.task = document.getElementById('task');
  
      this.tableBody = document.getElementById('table-body');
  
      this.form.addEventListener('submit', (e) => this.onFormSubmit(e));
  
      this.tasks = [];

      this.renderTaskTable();
    }
  
    onFormSubmit(e) {
      e.preventDefault();
      console.log('added');
  
      if (this.task.value == '') {
        return;
      }
  
      const task = new Task(this.task.value);
  
      this.tasks.push(task);
      this.renderTaskTable();
  
      this.task.value = '';
    }

  renderTaskTable() {
      this.tableBody.innerHTML = '';
  
      for (let i = 0; i < this.tasks.length; i++) {
        const task = this.tasks[i];
  
        const tr = this.createTaskTableRow(task);
        this.tableBody.appendChild(tr);
      }
  }

  createTaskTableRow(task) {
    const tr = document.createElement('tr');

    const tdTask = document.createElement('td');
    const tdActions = document.createElement('td');
    
    tdTask.innerHTML = task.value;
    
    const actionButtons = this.createActionButtons();
    tdActions.appendChild(actionButtons[0]);

    tr.appendChild(tdTask);

    return tr;
  }

  createActionButtons() {
    const deleteButton = document.createElement('button');

    deleteButton.setAttribute('class', 'btn btn-danger btn-sm');
    deleteButton.innerHTML = 'Delete';
    deleteButton.addEventListener('click', () => { console.log('Delete button clicked'); });

    return [deleteButton];
  }
}

const ui = new UI();