/* eslint-disable padded-blocks */
let todoList = [];

// Function to set items to local storage
// eslint-disable-next-line no-unused-vars
const addToLocaleStorage = (task) => {
  todoList = JSON.parse(localStorage.getItem('tasks: '));
  if (todoList == null) {
    todoList = [];
  }
  todoList.push(task);
  localStorage.setItem('tasks:', JSON.stringify(todoList));
};

// Function for the add button
function taskDisplay(todos) {
  const tasks = document.querySelector('.list-container');
  const taskDiv = document.createElement('div');
  const Input = document.createElement('input');
  const taskStatus = document.createElement('input');
  const ellipsis = document.createElement('span');
  const deleteBtn = document.createElement('span');

  // Adding class
  taskDiv.className = 'task';
  deleteBtn.className = 'removeBtn';
  Input.className = 'task-value';
  taskStatus.className = 'checkTask';

  // Setting Attribute
  taskStatus.setAttribute('type', 'checkbox');

  // Display Elements
  taskStatus.checked = todos.completed;
  Input.value = todos.description;
  ellipsis.innerHTML = '<i class="fa fa-ellipsis-h" aria-hidden="true"></i>';
  deleteBtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';

  // Appending element
  taskDiv.appendChild(Input);
  taskDiv.appendChild(taskStatus);
  taskDiv.appendChild(ellipsis);
  taskDiv.appendChild(deleteBtn);
  tasks.appendChild(taskDiv);
}

// function to get task from local storage and display from storage
// eslint-disable-next-line no-unused-vars
const getTask = () => {
  todoList = JSON.parse(localStorage.getItem('tasks: '));
  if (todoList !== null) {
    todoList.forEach((todos) => {
      taskDisplay(todos);
    });
  } else {
    todoList = [];
  }
};

// Creating the todo object structure
// eslint-disable-next-line no-unused-vars
const taskObjects = (todos) => {
  const task = {
    description: String,
    completed: false,
    index: Number,
  };
  task.description = todos;
  task.index = todoList.length;
  addToLocaleStorage(task);
  taskDisplay(task);
};

// function to delete a task from the list

// ! I will have to uncomment this before it will work properly
// export { taskObjects };
