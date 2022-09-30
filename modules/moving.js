// eslint-disable-next-line import/no-unresolved
import Task from './task.js';

const task = new Task();
// eslint-disable-next-line no-undef
Sortable.create(document.querySelector('#list-ul'), {
  handle: '',
  animation: 150,
  onUpdate(event) {
    task.updateList(event.oldIndex, event.newIndex);
  },
});
