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
      this.task = document.getElementById('task');
  
      this.tableBody = document.getElementById('table-body');
  
      this.addRem.addEventListener('addRem', (e) => this.onFormSubmit(e));
  
      this.tasks = [];
      this.loadTasksFromLocalStorage();
      this.renderTaskTable();
    }
  
    onFormSubmit(e) {
      e.preventDefault();
  
      if (
        this.task.value == ''
      ) {
        return;
      }
  
      const task = new Task(this.task.value);
  
      this.task.push(task);
  
      this.saveTasksToLocalStorage();
      this.renderTaskTable();
  
      this.task.value = '';
    }

    renderTaskTable() {
        this.tableBody.innerHTML = '';
    
        for (let i = 0; i < this.task.length; i++) {
          const task = this.task[i];
    
          const tr = this.createTaskTableRow(book);
          this.tableBody.appendChild(tr);
        }
      }

createTaskTableRow(task) {
    const tr = document.createElement('tr');

    const tdTask = document.createElement('th');
    
    tdTask.innerHTML = task.value;
    

    const actionButtons = this.createActionButtons(task);
    tdActions.appendChild(actionButtons[0]);

    tr.appendChild(tdTask);

    return tr;
  }

  createActionButtons(task) {
    const deleteButton = document.createElement('button');

    deleteButton.setAttribute('class', 'btn btn-danger btn-sm');
    deleteButton.innerHTML = 'Delete';
    deleteButton.addEventListener('click', () =>
      this.onRemoveTaskClicked(task)
    );

    return [deleteButton];
  }

  onRemoveTaskClicked(task) {
    this.task = this.task.filter((x) => {
      return book.isbn !== x.isbn;
    });

    this.saveBooksToLocalStorage();
    this.renderBookTable();
  }

  saveTasksToLocalStorage() {
    const json = JSON.stringify(this.books);
    localStorage.setItem('books', json);
  }

  loadTasksFromLocalStorage() {
    const json = localStorage.getItem('books');
    if (json) {
      const bookArr = JSON.parse(json);
      this.books = bookArr.map((x) => Book.fromJSON(x));
    }
  }

}

const ui = new UI();