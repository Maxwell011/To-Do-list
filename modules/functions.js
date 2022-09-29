/* eslint-disable padded-blocks */
let todoList = [];

// Function to set items to local storage
// eslint-disable-next-line no-unused-vars
const addToLocaleStorage = (task) => {
  todoList = JSON.parse(localStorage.getItem('tasks'));
  if (todoList == null) {
    todoList = [];
  }
  todoList.push(task);
  localStorage.setItem('tasks', JSON.stringify(todoList));
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
  taskDiv.appendChild(taskStatus);
  taskDiv.appendChild(Input);
  taskDiv.appendChild(ellipsis);
  taskDiv.appendChild(deleteBtn);
  tasks.appendChild(taskDiv);
}

// function to get task from local storage and display from storage
// eslint-disable-next-line no-unused-vars
const getTask = () => {
  todoList = JSON.parse(localStorage.getItem('tasks'));
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
// eslint-disable-next-line no-unused-vars
const removeTask = (taskElements, index) => {
  todoList.splice(index, 1);
  taskElements[index].remove();
  for (let i = 0; i < todoList.length; i += 1) {
    todoList[i].index = i;
  }
  localStorage.setItem('tasks', JSON.stringify(todoList));
};

// function to modify each task
// eslint-disable-next-line no-unused-vars
const editTask = (todos, index) => {
  todoList[index].description = todos;
  localStorage.setItem('tasks', JSON.stringify(todoList));
};

const highlightTask = (index) => {
  const moveBtns = document.querySelectorAll('.fa.fa-ellipsis-h');
  const deleteBtn = document.querySelectorAll('.fa.fa-trash');
  const activeTasks = document.querySelectorAll('.task.active');
  const tasksElt = document.querySelectorAll('.task');
  activeTasks.forEach((activeTask) => {
    activeTask.classList.remove('active');
  });
  moveBtns.forEach((btn, index) => {
    btn.classList.remove('active');
    deleteBtn[index].classList.remove('active');
  });

  tasksElt[index].classList.toggle('active');
  moveBtns[index].classList.toggle('active');
  deleteBtn[index].classList.toggle('active');
};

// function for the clear completed button, hint: its not functional yet
const clearCompleted = () => {
  const checkedTask = document.querySelectorAll('.checkTask');
  checkedTask.forEach((task, index) => {
    if (task.checked === true) {
      const taskElements = document.querySelectorAll('.task');
      removeTask(taskElements, index);
    }
  });
};

export {
  taskObjects,
  clearCompleted,
  highlightTask,
  editTask,
  removeTask,
  taskDisplay,
  addToLocaleStorage,
  getTask,
};
