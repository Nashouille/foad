const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
let tasks = [];

loadTasks();

addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});

function addTask() {
    const taskText = taskInput.value.trim();
    if (!taskText) {
        alert("Veuillez entrer une tâche valide !");
        return;
    }

    const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    tasks.push(newTask);
    saveTasks();
    renderTask(newTask);
    taskInput.value = ''; // Efface le champ de saisie
}

function renderTask(task) {
    const li = document.createElement('li');
    li.className = 'task-item';
    li.dataset.id = task.id;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', toggleTask);

    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = task.text;
    if (task.completed) span.classList.add('completed');

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Supprimer';
    deleteBtn.addEventListener('click', deleteTask);

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}

function loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
        tasks.forEach(renderTask); // Affiche toutes les tâches
    }
}

function toggleTask(e) {
    const taskId = parseInt(e.target.parentElement.dataset.id);
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
        tasks[taskIndex].completed = !tasks[taskIndex].completed;
        saveTasks();
        e.target.nextElementSibling.classList.toggle('completed');
    }
}

function deleteTask(e) {
    const taskId = parseInt(e.target.parentElement.dataset.id);
    tasks = tasks.filter(task => task.id !== taskId);
    saveTasks();
    e.target.parentElement.remove();
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}