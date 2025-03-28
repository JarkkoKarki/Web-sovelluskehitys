// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
const ul = document.querySelector('ul');
const refresh = () => {
  ul.innerHTML = '';
  for (let item of todoList) {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const deleteButton = document.createElement('button');

    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', () => {
      ul.removeChild(li);
      todoList.splice(todoList.indexOf(item), 1);
      console.log(todoList);
    });

    checkbox.type = 'checkbox';
    checkbox.id = `todo-${item.id}`;
    checkbox.checked = item.completed;
    checkbox.addEventListener('change', () => {
      item.completed = checkbox.checked;
      console.log(todoList);
    });

    const label = document.createElement('label');
    label.htmlFor = `todo-${item.id}`;
    label.textContent = item.task;

    li.appendChild(checkbox);
    li.appendChild(label);
    ul.appendChild(li);
    li.appendChild(deleteButton);
  }
};

const openModal = () => {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = `
    <form id="form">
      <input type="text" id="task" placeholder="Enter task" required>
      <button type="submit">Add</button>
    </form>
  `;
  document.body.appendChild(modal);

  const form = document.querySelector('#form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const input = document.querySelector('#task');
    const taskValue = input.value.trim();

    if (!taskValue) {
      alert('Task cannot be empty!');
      return;
    }

    if (todoList.some(item => item.task === taskValue)) {
      alert('Task already exists!');
      return;
    }

    todoList.push({
      id: todoList.length + 1,
      task: taskValue,
      completed: false,
    });

    console.log(todoList);
    refresh();
    document.body.removeChild(modal);
  });
};

const addButton = document.querySelector('.add-btn');
addButton.addEventListener('click', () => openModal());

refresh();
