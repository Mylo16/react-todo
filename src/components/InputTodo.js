import React, { useState } from 'react';
import { useTodosContext } from '../Context/TodosContext';

// eslint-disable-next-line react/prop-types
const InputTodo = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const { addTodoItem } = useTodosContext();

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle('');
      setMessage('');
    } else {
      setMessage('Please add item.');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          className="input-text"
          type="text"
          placeholder="Add Todo..."
          value={title}
          onChange={handleChange}
        />
        <button type="button" className="input-submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <span className="submit-warning">{message}</span>
    </>
  );
};

export default InputTodo;
