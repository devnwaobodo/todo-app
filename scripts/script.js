const button = document.getElementById('addTask');
const input = document.getElementById('newTask');
const list = document.getElementById('taskList');

button.addEventListener('click', function() {
    const task = input.value;

    if(task !== ""){
        const li = document.createElement('li');
        li.textContent = task;

        list.appendChild(li);

        input.value = "";
    }
});