//finding elements
const container = document.querySelector(".container")
const todoForm = document.querySelector(".todo-form")
const inputTodo = document.querySelector("#input-todo")
const addButtonTodo = document.querySelector("#addTodoButton")


//addTodo
const addTodo = (e) =>{
    e.preventDefault();
    console.log('ff');
}

//adding listeners
todoForm.addEventListener("submit", addTodo)