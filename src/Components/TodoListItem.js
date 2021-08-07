import React from "react";

export const TodoListItem = ({ todo, index, handleRemove, handleToogleDone}) => {
	const { id, done, description } = todo;

  return (
    <li key={id}>
      <p onClick={() => handleToogleDone(id)} className={`${done && "done"}`}>
        {index + 1}. {description}
      </p>
      <div>
        <button className="remove-button" onClick={() => handleRemove(id)}>
          Remove
        </button>
      </div>
    </li>
  );
};
