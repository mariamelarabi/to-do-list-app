 function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if (task !== "") {
        let li = document.createElement("li");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.onchange = function() {
            taskText.classList.toggle("completed", checkbox.checked);
        };

        let taskText = document.createElement("span");
        taskText.textContent = task;
        taskText.className = "task-text";

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.className = "delete-btn";
        deleteBtn.onclick = function() {
            li.remove();
        };

        li.appendChild(checkbox);
        li.appendChild(taskText);
        li.appendChild(deleteBtn);

        document.getElementById("taskList").appendChild(li);
        input.value = "";
    }
}