import React from 'react';

function TodoItem({ data, onClick, onDelete }) {
  let { title, done } = data;

  return (
    <div className="TodoItem">
      <h3 className={done && 'TodoItem--done'} onClick={onClick}>
        {title} - {done ? '✅' : '⬜'}
      </h3>
      <button className="delete-button" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
