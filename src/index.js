import './style.css';

const todoObject = [
  {
    description: 'Wash Clothes',
    completed: false,
    id: 1,
  },
  {
    description: 'Complete To-do list project',
    completed: false,
    id: 2,
  },
];

const taskDisplay = () => {
  const tasks = document.querySelector('.list-container');
  todoObject.forEach((task) => {
    const listDiv = document.createElement('div');
    const todoDiv = document.createElement('div');
    const spanDiv = document.createElement('div');
    const genDiv = document.createElement('div');
    const listInput = document.createElement('label');
    const Input = document.createElement('input');
    const line = document.createElement('hr');
    const span = document.createElement('span');

    // Adding class
    genDiv.className = 'list-group';
    listInput.className = 'todo-title';
    todoDiv.className = 'todo-div';
    span.className = 'span';

    // Displaying contents
    listInput.innerText = `${task.description}`;
    Input.innerText = `${task.completed}`;
    span.innerHTML = "<i class='fa fa-ellipsis-v' aria-hidden='true'></i>";

    // Appending element
    listDiv.appendChild(genDiv);
    genDiv.appendChild(todoDiv);
    listDiv.appendChild(line);
    tasks.appendChild(listDiv);
    todoDiv.appendChild(Input);
    todoDiv.appendChild(listInput);
    genDiv.appendChild(spanDiv);
    spanDiv.appendChild(span);

    // SetAttribute
    Input.setAttribute('type', 'checkbox');
    Input.setAttribute('class', 'check');
    listDiv.className = 'todos';
  });
};

taskDisplay();
