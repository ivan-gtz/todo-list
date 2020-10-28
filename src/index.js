
import './styles.css';

import { Todo, TodoList } from './classes'
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList;


todoList.todos.forEach( crearTodoHtml );//es equivalente a
// todoList.todos.forEach( todo => crearTodoHtml( todo )); 


const newTodo = new Todo('Aprender php');
// todoList.nuevoTodo( newTodo );


