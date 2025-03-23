function addTask() {
    let taskList = document.getElementById("task-list");

    // Create a new row
    let newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>
            <input type="time" class="task-time" value="12:00">
        </td>
        <td>
            <span class="color-box" onclick="toggleColor(this)"></span>
            <span contenteditable="true" class="task-text">New Task</span>
        </td>
        <td class="shapes">
            <span class="shape circle" onclick="cycleShape(this)"></span>
        </td>
        <td class="actions">
            <input type="checkbox" onclick="markCompleted(this)">
        </td>
        <td class="delete-column">
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        </td>
    `;

    // Insert at the top
    taskList.prepend(newRow);
}

function toggleColor(element) {
    element.classList.toggle("green"); // Toggle between red and green
}

function cycleShape(element) {
    if (element.classList.contains("circle")) {
        element.classList.remove("circle");
        element.classList.add("square");
    } else if (element.classList.contains("square")) {
        element.classList.remove("square");
        element.classList.add("triangle");
    } else {
        element.classList.remove("triangle");
        element.classList.add("circle");
    }
}

function markCompleted(checkbox) {
    let row = checkbox.closest("tr");
    row.classList.toggle("completed", checkbox.checked);
}

function deleteTask(button) {
    let row = button.closest("tr");
    row.remove(); // Removes the task when delete button is pressed
}

function searchTasks() {
    let input = document.getElementById("search-box").value.toLowerCase();
    let rows = document.querySelectorAll("#task-list tr");

    rows.forEach(row => {
        let taskText = row.querySelector(".task-text").innerText.toLowerCase();
        row.style.display = taskText.includes(input) ? "" : "none";
    });
}
