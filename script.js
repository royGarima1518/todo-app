document.getElementById('add-task').addEventListener('click', addTask);
document.getElementById('task-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');

    li.innerHTML = `
        <span onclick="toggleTask(this)">${taskText}</span>
        <button class="delete" onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(li);
    taskInput.value = '';
}

function toggleTask(taskElement) {
    const li = taskElement.parentElement;
    li.classList.toggle('completed');
}

function deleteTask(deleteButton) {
    const li = deleteButton.parentElement;
    li.remove();
}
