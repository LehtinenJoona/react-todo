import React from 'react';
import button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoItem = ({ todo, removeTodo }) => {
  return (
    <div className="list-group-item d-flex justify-content-between">
      {todo.text}
      <button
        className="btn btn-danger"
        onClick={() => removeTodo(todo.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
