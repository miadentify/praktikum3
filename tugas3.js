function addTask() {
    const taskInput = document.getElementById('newTask');
    const taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("Ga bole kosong kak");
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskValue;

    const span = document.createElement('span');
    span.textContent = "       delete";
    span.className = "close";
    span.onclick = function () {
        deleteTask(this);
    };
    li.appendChild(span);

    li.ondblclick = function () {
        editTask(this);
    };

    document.getElementById('tasklist').appendChild(li);
    taskInput.value = "";
}

function deleteTask(element) {
    const task = element.parentElement;
    task.remove();
}

function editTask(element) {
    const newTask = prompt("Edit Task:", element.firstChild.textContent.trim());
    if (newTask !== null && newTask.trim() !== "") {
        element.firstChild.textContent = newTask;
    }
}

function changeBackgroundColor() {
    const color = document.getElementById('bgColor').value;
    document.body.style.backgroundColor = color;
}

function changeFontSize(size) {
    document.body.style.fontSize = size + 'px';
    document.getElementById('fontSizeValue').textContent = size + 'px';
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function changeFontStyle() {
    const font = document.getElementById('fontStyle').value;
    document.body.style.fontFamily = font;
}