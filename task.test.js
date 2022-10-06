/**
 * @jest-environment jsdom
 */

describe('Add and Remove Testing', () => {
  document.body.innerHTML = `
  <input id='task-input'>
  <button id='add-btn'>Add task</button>
  <ul id='list-ul'></ul>
  `;

  // eslint-disable-next-line global-require
  const Task = require('./modules/task.js');
  const task = new Task();

  const input = document.getElementById('task-input');
  const ul = document.getElementById('list-ul');

  test('Add', () => {
    input.value = 'Task 1';
    task.addTasks();
    input.value = 'Task 2';
    task.addTasks();
    input.value = 'Task 3';
    task.addTasks();
    const children = ul.querySelectorAll('li');
    expect(children).toHaveLength(3);
  });

  test('Remove', () => {
    const btn = document.querySelectorAll('.del-btn');
    btn[0].click();
    btn[1].click();
    btn[2].click();
    const children = ul.querySelectorAll('li');
    expect(children).toHaveLength(0);
  });

  test('Edit', () => {
    input.value = 'Task thats is to be edited';
    task.addTasks();
    task.editTask('description-0', task.lists[0].description);
    input.value = 'Edited Task';
    task.addTasks();

    expect(task.lists[0].description).toBe('Edited Task');
    task.deleteTask('btn-0');
  });

  test('Clear Completed Tasks', () => {
    input.value = 'New Task 1';
    task.addTasks();
    input.value = 'New Task 2';
    task.addTasks();
    input.value = 'New Task 3';
    task.addTasks();
    input.value = 'New Task 4';
    task.addTasks();
    const completed = document.querySelectorAll('.completed');
    completed[1].checked = true;
    task.completed(completed[1]);
    completed[2].checked = true;
    task.completed(completed[2]);
    task.clearComplete();
    expect(task.lists[0].description).toBe('New Task 1');
    expect(task.lists[1].description).toBe('New Task 4');
    expect(task.lists.length).toBe(2);
  });
});
