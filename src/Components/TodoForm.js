import React from "react";
import { useForm } from '../hooks/useForm';

export const TodoForm = ({ handleAddTodo }) => {
	const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

	const handleSubmit = ( e ) => {
    e.preventDefault();

		if(description.trim().length === 0 ) {
			return;
		}

    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };

    handleAddTodo(newTodo);
    reset();
  };

  return (
    <form>
      <input
        placeholder="Enter todo..."
        name="description"
        value={description}
        onChange={handleInputChange}
      />
      <button type="submit" className="submit-button" onClick={handleSubmit}>
        Add TODO
      </button>
    </form>
  );
};
