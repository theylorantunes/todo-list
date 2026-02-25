const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

let tasks = JSON.parse(localStorage.getItem('minhasTarefas')) || [];

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
    });
}


function saveToLocalStorage() {
    localStorage.setItem('minhasTarefas', JSON.stringify(tasks));
}

addTaskBtn.addEventListener('click', () => {
    if (taskInput.value.trim() !== "") {
        tasks.push(taskInput.value);
        saveToLocalStorage();
        renderTasks();
        taskInput.value = "";
        sessionStorage.removeItem('rascunho'); 
    }
});


taskInput.addEventListener('input', (e) => {
    sessionStorage.setItem('rascunho', e.target.value);
});


window.onload = () => {
    taskInput.value = sessionStorage.getItem('rascunho') || '';
    renderTasks();
};