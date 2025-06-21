let pendingList = document.getElementById("pending-tasks");
let completedList = document.getElementById("completed-tasks");

function addTask() {
  let title = document.getElementById("title").value.trim();
  let desc = document.getElementById("description").value.trim();

  if (!title || !desc) {
    alert("Please fill out both fields.");
    return;
  }

  let li = document.createElement("li");

  const timestamp = new Date().toLocaleString();

  li.innerHTML = `
    <div class="task-header">${title}</div>
    <div class="task-desc">${desc}</div>
    <div class="task-meta">🕒 Added: ${timestamp}</div>
    <div class="task-buttons">
      <button class="complete" onclick="markComplete(this)">Mark Complete</button>
      <button class="delete" onclick="deleteTask(this)">Delete</button>
    </div>
  `;

  pendingList.appendChild(li);

  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
}

function deleteTask(button) {
  let li = button.closest("li");
  li.remove();
}

function markComplete(button) {
  let li = button.closest("li");
  button.remove(); // Remove "Mark Complete"
  completedList.appendChild(li);
}
