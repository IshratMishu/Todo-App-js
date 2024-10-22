//finding elements
const container = document.querySelector(".container")
const todoForm = document.querySelector(".todo-form")
const inputTodo = document.querySelector("#input-todo")
const addButtonTodo = document.querySelector("#addTodoButton")
const todoLists = document.getElementById("lists")
const messageElement = document.getElementById("message")


//show Message
const showMessage = (text, status) => {
    messageElement.innerText = text
    messageElement.classList.add(`bg-${status}`)
    setTimeout(() => {
        messageElement.innerText = ''
        messageElement.classList.remove(`bg-${status}`)
    }, 1000);
}

//create todo
const createTodo = (todoId, todoValue) => {
    const todoElement = document.createElement("li");
    todoElement.id = todoId;
    todoElement.classList.add("li-style");
    todoElement.innerHTML = `
    <span> ${todoValue} </span>
    <span> <button class="btn" id="deleteButton"> <i class="fa-solid fa-trash"></i> </button> </span>
    `
    todoLists.appendChild(todoElement);

    const deleteButton = todoElement.querySelector('#deleteButton');
    deleteButton.addEventListener('click', deleteTodo);
}


//delete todo
const deleteTodo = (e) => {
    const selectedTodo = e.target.parentElement.parentElement.parentElement;

    todoLists.removeChild(selectedTodo);
    showMessage('Todo is deleted', 'danger');


    let todos = getTodosLocalStorage();
    todos = todos.filter((todo) => todo.todoId !== selectedTodo.id);

    localStorage.setItem('myTodos', JSON.stringify(todos));
}

// getTodosFromLocalStorage
const getTodosLocalStorage = () => {
    return localStorage.getItem("mytodos")
      ? JSON.parse(localStorage.getItem("mytodos"))
      : [];
  };

//addTodo
const addTodo = (e) => {
    e.preventDefault();
    const todoValue = inputTodo.value;


    //unique id
    const todoId = Date.now().toString();
    createTodo(todoId, todoValue);
    showMessage('Todo is added', 'success');

    //local storage
    const todos = getTodosLocalStorage();
    todos.push({ todoId, todoValue });
    localStorage.setItem('myTodos', JSON.stringify(todos));
    inputTodo.value = '';
}



//adding listeners
todoForm.addEventListener("submit", addTodo)