const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY="todos";

let toDos=[];

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteTodo(event){
    const li=event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintTodo(newTodo){
     const li = document.createElement("li");
     const span = document.createElement("span");
     span.innerText = newTodo;
     const button = document.createElement("button");
     button.innerText="⭕️";
     li.appendChild(span);
     li.appendChild(button);
     button.addEventListener("click", deleteTodo);
     todoList.appendChild(li);
     li.id = newTodo.id;
    
}

function handleTodoSubmit(event){
      event.preventDefault();
      const newTodo = todoInput.value;
     todoInput.value="";
      toDos.push(newTodo);
     paintTodo(newTodo);
     saveToDos();
     /*const newTodo={
        text:newTodo,
        id:Date.now(),
     }
     */
}


todoForm.addEventListener("submit", handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}
