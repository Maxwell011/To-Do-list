import './style.css';
const Task = require('../modules/task');

const task = new Task();
window.addEventListener('DomContentLoaded', task.showAllTasks());

const clearBtn = document.querySelector('#btn');
const addTaskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');

addBtn.addEventListener('click', () => task.addTasks());

addTaskInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    task.addTasks();
  }
});

clearBtn.addEventListener('click', () => task.clearComplete());
