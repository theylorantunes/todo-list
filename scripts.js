const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');


let tasks = JSON.parse(localStorage.getItem('minhasTarefas')) || [];

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task) => {
        const li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
    });
}


taskInput.addEventListener('input', (e) => {
    sessionStorage.setItem('rascunho', e.target.value);
});


addTaskBtn.addEventListener('click', () => {
    const text = taskInput.value.trim();
    if (text !== "") {
        tasks.push(text);
  
        localStorage.setItem('minhasTarefas', JSON.stringify(tasks));
        
        renderTasks();
        

        taskInput.value = "";
        sessionStorage.removeItem('rascunho');
    }
});


window.onload = () => {

    taskInput.value = sessionStorage.getItem('rascunho') || '';
    renderTasks();
};