import './style.css';
import { taskArrayofObjects } from '../modules/functions.js';

const addTask = document.querySelector('#add');
addTask.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    if (addTask.value !== '') {
      // eslint-disable-next-line no-undef
      e = taskArrayofObjects(addTask.value);
      addTask.value = '';
    } else {
      e.preventDefault();
    }
  }
});

console.log(addTask);
