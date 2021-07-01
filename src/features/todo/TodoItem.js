import React from 'react';

function TodoItem({ data }) {
  let { title, done } = data;

  return (
    <div className="TodoItem">
      <h3>
        {title} - {done ? '✅' : '⬜'}
      </h3>
    </div>
  );
}

export default TodoItem;
