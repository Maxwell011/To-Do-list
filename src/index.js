/* eslint-disable no-unused-vars */
import './style.css';
import {
  taskObjects,
  clearCompleted,
  highlightTask,
  editTask,
  removeTask,
  taskDisplay,
  addToLocaleStorage,
  getTask,
} from '../modules/functions.js';

window.onload = getTask();

const addTask = document.querySelector('#add');
addTask.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    if (addTask.value !== '') {
      // eslint-disable-next-line no-undef
      e = taskObjects(addTask.value);
      addTask.value = '';
    } else {
      e.preventDefault();
    }
  }
});

// Event Handlers for the remove and highlight functions
document.addEventListener('click', (e) => {
  if (!(e.target.matches('.checkTask') || e.target.matches('.fa-trash'))) {
    return;
  }
  if (e.target.matches('.checkTask')) {
    const tasks = document.querySelectorAll('.checkTask');
    tasks.forEach((task, index) => {
      if (e.target === task) {
        highlightTask(index);
      }
    });
  } else {
    const deleteBtn = document.querySelectorAll('.fa-trash');
    deleteBtn.forEach((btn, index) => {
      if (e.target === btn) {
        removeTask(index);
      }
    });
  }
});

// Event handler for the edit task function
document.addEventListener('change', (e) => {
  if (!e.target.matches('.task-value')) {
    return;
  }
  const allTasks = document.querySelectorAll('.task-value');
  allTasks.forEach((task, index) => {
    if (e.target === task) {
      editTask(task.value, index);
    }
  });
});

// Event Handler for the clearCompleted function
const clearAll = document.querySelector('.clear-btn');
clearAll.addEventListener('click', () => {
  const taskStatus = document.querySelector('.checkTask');
  if (taskStatus.checked === true) {
    clearCompleted();
  }
});
