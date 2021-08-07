import React, { useReducer, useEffect } from "react";
import { todoReducer } from "./todoReducer";
import "./style.css";
import { TodoList } from "./TodoList";
import { TodoForm } from "./TodoForm";

const init = () => JSON.parse(localStorage.getItem("todos")) || [];

export const TodoApp = () => {
  const [todos, todoDispatch] = useReducer(todoReducer, [], init);
 
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (newTodo) => {
		todoDispatch({
      type: "ADD",
      payload: newTodo,
    })
	}

  const handleRemove = (id) => {
    const action = {
      type: "REMOVE",
      payload: id,
    };

    todoDispatch(action);
  };

  const handleToogleDone = (id) => {
    const action = {
      type: "TOOGLE_DONE",
      payload: id,
    };

    todoDispatch(action);
  };

  return (
    <>
      <h1>TODO App</h1>
      <hr className="separator" />
      <div className="container">
        <div>
          <h1>List ( {todos.length} )</h1>
          <hr />
          <TodoList 
						todos={ todos }
						handleRemove={ handleRemove }
						handleToogleDone={ handleToogleDone }
					/>
        </div>
        <div>
          <h1>Add</h1>
          <hr />
          <TodoForm handleAddTodo={ handleAddTodo } />
        </div>
      </div>
    </>
  );
};
