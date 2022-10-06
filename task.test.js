/**
 * @jest-environment jsdom
 */

// test('Testing', () => {
//   document.body.innerHTML = `
//   <input id='task-input'>
//   <button id='add-btn'>Add task</button>
//   <ul id='list-ul'></ul>
//   `

//   const Task = require('./modules/task');
//   const task = new Task();

//   const input = document.getElementById('task-input');
//   const btn = document.getElementById('add-btn');
//   const ul = document.getElementById('list-ul');

//   input.value = 'Task 1';
//   task.addTasks();
//   input.value = 'Task 2';
//   task.addTasks();
//   input.value = 'Task 3';
//   task.addTasks();
//   const children = ul.querySelectorAll('li');
//   expect(children).toHaveLength(3);
// })

describe('Add and Remove Testing', () => {
  document.body.innerHTML = `
  <input id='task-input'>
  <button id='add-btn'>Add task</button>
  <ul id='list-ul'></ul>
  `

  const Task = require('./modules/task');
  const task = new Task();

  const input = document.getElementById('task-input');
  const btn = document.getElementById('add-btn');
  const ul = document.getElementById('list-ul');

  test('Add', () => {
    input.value = 'Task 1';
    task.addTasks();
    input.value = 'Task 2';
    task.addTasks();
    input.value = 'Task 3';
    task.addTasks();
    const children = ul.querySelectorAll('li');
    console.log(ul.innerHTML);
    expect(children).toHaveLength(3);
  })

  test('Remove', () => {
    const btn = document.querySelectorAll('.del-btn');
    btn[0].click();
    btn[1].click();
    btn[2].click();
    const children = ul.querySelectorAll('li');
    console.log(ul.innerHTML);
    expect(children).toHaveLength(0);
  })
})