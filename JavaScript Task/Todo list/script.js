
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const listEl = document.getElementById("list");

const addTodo = () => {
  if (inputEl.value) {
    const liEl = document.createElement("li");
    liEl.innerText = inputEl.value;
    listEl.appendChild(liEl);
    inputEl.value = "";
   
    liEl.addEventListener("click", () => {
      liEl.classList.toggle("completed");
      saveLS();
    });
   
    liEl.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      liEl.remove();
    });
    saveLS();
  }
};

const readLS = () => {
  const localTodos = JSON.parse(localStorage.getItem("todos"));
  localTodos.forEach((todo) => {
    const loliEl = document.createElement("li");
    if (todo.completed === true) {
      loliEl.classList.add("completed");
    }
    loliEl.innerText = todo.text;
    listEl.appendChild(loliEl);
   
    loliEl.addEventListener("click", () => {
      loliEl.classList.toggle("completed");
      saveLS();
    });
    
    loliEl.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      loliEl.remove();
      saveLS();
    });
  });
};

const saveLS = () => {
  let allTodos = [];
  const todoEl = document.querySelectorAll("li");
  todoEl.forEach((todo) => {
    allTodos.push({
      text: todo.innerText,
      completed: todo.classList.contains("completed"),
    });
  });
  localStorage.setItem("todos", JSON.stringify(allTodos));
};

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

readLS();