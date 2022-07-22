
const lists_container = document.querySelector(".lists-container");
const addTodo = document.querySelector("button[type='submit']");
const input = document.querySelector("input");
const todo_text = document.querySelector(".todo-text");
const todoNum = document.querySelector(".todoNum");


let todoLists = [];

// update the List as soon as the page loads

let todo =  localStorage.getItem("todo");

    if(todo === null) {
        todoLists = [];
    }else {
        todoLists = JSON.parse(todo);
    }
    let task = "";
    todoLists.map((item,id) => {
         task += `<li class="list-item">
        <input type="radio"  onclick="taskCompleted(${item})" name="todo-radio" id="todo-radio">
        <div class="text">
        <p class=" class="todo-text">${item.item}</p>
        <button class="button" onclick="deleteTodo(${id})">×</button>
        </div>
      </li>`;
    });
    lists_container.innerHTML =  task;

// Add Todo handler

addTodo.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.target.classList)
    let todo = localStorage.getItem("todo");
    if(todo === null) {
        todoLists = [];
    }else {
        todoLists = JSON.parse(todo);
    }
    
    if (input.value === "") {
        return;
    }

    todoLists.unshift({
        id: Math.random(),
        item:input.value
    });
    input.value = "";
    localStorage.setItem("todo",JSON.stringify(todoLists));
    displayTodo();
});




function displayTodo() {
    let todo =  localStorage.getItem("todo");
    
    if(todo === null) {
        todoLists = [];
    }else {
        todoLists = JSON.parse(todo);
    }
    let task = "";
    todoLists.map((item, id) => {
        task += `<li class="list-item">
            <input type="radio" onclick="taskCompleted(${item})" name="todo-radio" id="todo-radio">
            <div class="text">
            <p>${item.item}</p>
            <button class="button" onclick="deleteTodo(${id})">×</button>
            </div>
            </li>`;
        });
        lists_container.innerHTML =  task;
    }
    
    todoNum.textContent = todoLists.length;
    

function deleteTodo(ind) {
 let todo = localStorage.getItem("todo");
 todoLists = JSON.parse(todo);
 todoLists.splice(ind, 1);
 localStorage.setItem("todo", JSON.stringify(todoLists));
 displayTodo();
}

function taskCompleted(task) {
    // let todo = localStorage.getItem("todo");
    // todoLists = JSON.parse(todo);
    // todoLists.map((item, id) => {
    //     if(task.id === item.id) {
    //         e.target.nes
    //     }
    // })
    console.log("clicked")
}










const themeToggle = document.querySelector(".img-theme");
themeToggle.addEventListener("click", () => {
    const root = document.documentElement;
    root.classList = root.className === "dark" ? "light" : "dark";
});



