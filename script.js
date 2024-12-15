// Select elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const todoList = document.getElementById("todoList");

// Function to add a new task
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Task cannot be empty!");
    return;
  }


  const li = document.createElement("li");
  li.className = "todo-item";

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";
  completeBtn.style.marginRight = "10px";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  // Add event listeners to buttons
  completeBtn.addEventListener("click", () => {
    taskSpan.classList.toggle("completed");
  });

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  // Append elements
  li.appendChild(taskSpan);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);
  todoList.appendChild(li);

  // Clear input
  taskInput.value = "";
});
