const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const clearStorageBtn = document.getElementById('clearStorageBtn');

let tasks = JSON.parse(localStorage.getItem('minhasTarefas')) || [];

function renderTasks() {
    taskList.innerHTML = ''; 
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;
        li.className = 'task-item';
        taskList.appendChild(li);
    });
}


function saveToLocalStorage() {

    localStorage.setItem('minhasTarefas', JSON.stringify(tasks));
}


addTaskBtn.addEventListener('click', () => {
    const text = taskInput.value.trim();
    if (text !== "") {
        tasks.push(text);
        saveToLocalStorage();
        renderTasks();
        taskInput.value = "";
        sessionStorage.removeItem('rascunho'); 
    }
});


clearStorageBtn.addEventListener('click', () => {
    if (confirm("Deseja apagar todas as tarefas?")) {
        tasks = []; 
        localStorage.removeItem('minhasTarefas'); 
        renderTasks(); 
    }
});


taskInput.addEventListener('input', (e) => {
    sessionStorage.setItem('rascunho', e.target.value);
});


window.onload = () => {

    taskInput.value = sessionStorage.getItem('rascunho') || '';
    renderTasks();
};