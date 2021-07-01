import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { add, remove, toggle, selectTodos } from './todoSlice';

import TodoItem from './TodoItem';

import { createTodo } from './todoAPI';

function TodoList() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  let [todoInput, setTodoInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    let formStuff = e.target.elements;
    let newTodoTitle = formStuff.newTodo.value;

    dispatch(add({ item: createTodo(newTodoTitle) }));
    setTodoInput('');
  }

  function handleToggle(id) {
    dispatch(toggle({ id }));
  }

  function handleDelete(id) {
    dispatch(remove({ id }));
  }

  return (
    <div className="TodoList">
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            data={todo}
            onClick={() => {
              handleToggle(todo.id);
            }}
            onDelete={() => {
              handleDelete(todo.id);
            }}
          />
        );
      })}

      <form onSubmit={handleSubmit}>
        <input
          autoComplete="off"
          value={todoInput}
          onChange={(e) => {
            setTodoInput(e.target.value);
          }}
          type="text"
          name="newTodo"
        />
        <button>+</button>
      </form>
    </div>
  );
}

export default TodoList;
