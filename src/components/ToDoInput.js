import React, { useState } from 'react';

const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleAddTodo = () => {
    if (text.trim() !== '') {
      addTodo(text);
      setText('');
    }
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Add a new task"
        value={text}
        onChange={handleInputChange}
      />
      <button className="btn btn-primary" onClick={handleAddTodo}>
        Add
      </button>
    </div>
  );
};

export default TodoInput;
