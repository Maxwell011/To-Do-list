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
    const listInput = document.createElement('label');
    const Input = document.createElement('input');
    const line = document.createElement('hr');

    listInput.innerText = `${task.description}`;
    Input.innerText = `${task.completed}`;

    listDiv.appendChild(Input);
    listDiv.appendChild(listInput);
    listDiv.appendChild(line);
    tasks.appendChild(listDiv);

    Input.setAttribute('type', 'checkbox');
    Input.setAttribute('class', 'check');
    listDiv.className = 'todos';
  });
};

taskDisplay();
