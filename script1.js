
    function addTask() {
        let taskInput = document.getElementById("taskInput");
        let task = taskInput.value.trim();

        if (task === "") {
            alert("Please enter a task.");
            return;
        }

        let taskList = document.getElementById("taskList");
        let li = document.createElement("li");

        li.innerHTML = `
            <span>${task}</span>
            <button class="delete" onclick="deleteTask(this)">Delete</button>
        `;
        li.addEventListener("click", function () 
        {
            li.classList.toggle("completed");
        });

        taskList.appendChild(li);
        taskInput.value = "";
    }

    function deleteTask(button) {
        let li = button.parentElement;
        li.remove();
    }