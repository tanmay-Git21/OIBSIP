// Select elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const pendingTasksList = document.getElementById('pendingTasksList');
const completedTasksList = document.getElementById('completedTasksList');

// Task array to store pending tasks
let tasks = [];

// Add new task
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const task = {
    id: Date.now(),
    text: taskText,
    completed: false,
    createdAt: new Date().toLocaleString()
  };
  tasks.push(task);
  taskInput.value = '';
  renderTasks();
});

// Mark task as complete
function markComplete(taskId) {
  const task = tasks.find(t => t.id === taskId);
  task.completed = true;
  renderTasks();
}

// Delete task
function deleteTask(taskId) {
  tasks = tasks.filter(t => t.id !== taskId);
  renderTasks();
}

// Edit task
function editTask(taskId) {
  const task = tasks.find(t => t.id === taskId);
  const newText = prompt('Edit your task:', task.text);
  if (newText) {
    task.text = newText;
    renderTasks();
  }
}

function renderTasks() {
  pendingTasksList.innerHTML = '';
  completedTasksList.innerHTML = '';

  tasks.forEach(task => {
    const taskElement = document.createElement('li');

    // Only add 'completed' class if the task is completed
    if (task.completed) {
      taskElement.classList.add('completed');
    }

    taskElement.innerHTML = `
      <span>${task.text}</span>
      <span class="task-date">Added: ${task.createdAt}</span>
      <div>
        <button class="edit" onclick="editTask(${task.id})">Edit</button>
        <button class="delete" onclick="deleteTask(${task.id})">Delete</button>
        ${!task.completed ? `<button class="complete" onclick="markComplete(${task.id})">Complete</button>` : ''}
      </div>
    `;

    if (task.completed) {
      completedTasksList.appendChild(taskElement);
    } else {
      pendingTasksList.appendChild(taskElement);
    }
  });
}


renderTasks();
