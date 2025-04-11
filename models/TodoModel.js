import KWM_Observable from "../core/kwm-observable.js";

class TodoModel {

    constructor() {
        const savedTodos = localStorage.todos ? JSON.parse(localStorage.todos) : [];

        this.todos = new KWM_Observable(savedTodos);

        this.todos.subscribe((todos) => {
            localStorage.todos = JSON.stringify(todos); // Sync the todos to local storage
        });
    }

    toggle(id){
        this.todos.value = this.todos.value.map(todo => {
            if(todo.id == id){
                todo.completed = !todo.completed;
            }
            return todo;
        });
    }

    add(todoText){
        const todo = {
            id: new Date().getTime(),
            text: todoText,
            completed: false
        }
        this.todos.value = [...this.todos.value, todo];
    }

    remove(id){
        this.todos.value = this.todos.value.filter(todo => todo.id != id);
    }
}

// Singelton Instance of the Model - only one instance of the model is allowed
export const todoModelInstance = new TodoModel();