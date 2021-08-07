import React from "react";
import { TodoListItem } from "./TodoListItem";

export const TodoList = ({todos, handleToogleDone, handleRemove}) => {
  return (
    <ul>
      {todos.map((todo, i) => (
        <TodoListItem
					key={ todo.id }
					todo={ todo }
					index={ i }
					handleToogleDone={ handleToogleDone }
					handleRemove={ handleRemove }
				/>
      ))}
    </ul>
  );
};
