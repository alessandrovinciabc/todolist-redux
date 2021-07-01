import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { add, remove, toggle, selectTodos } from './todoSlice';

import TodoItem from './TodoItem';

function TodoList() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  return (
    <div className="TodoList">
      {todos.map((todo) => {
        return <TodoItem key={todo.id} data={todo} />;
      })}
    </div>
  );
}

export default TodoList;
