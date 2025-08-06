const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
addTaskBtn.addEventListener("click", () => {

  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }
  const li = document.createElement("li");
  li.className = "task-item"; // for styling
  const span = document.createElement("span");
  span.textContent = taskText;
  const btnGroup = document.createElement("div");
  btnGroup.className = "task-buttons";
  const doneBtn = document.createElement("button");
  doneBtn.textContent = "✔";
  doneBtn.addEventListener("click", () => {
    li.classList.toggle("done");
  });
  const delBtn = document.createElement("button");
  delBtn.textContent = "🗑";
  delBtn.addEventListener("click", () => {
    li.remove();
  });

  btnGroup.appendChild(doneBtn);
  btnGroup.appendChild(delBtn);
  li.appendChild(span);
  li.appendChild(btnGroup);
  taskList.appendChild(li);
  taskInput.value = "";
});