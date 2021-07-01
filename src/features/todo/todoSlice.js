import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    {
      title: 'Read a book',
      done: false,
      id: 'banana',
    },
  ],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add(state, action) {
      state.todos.push(action.item);
    },
    remove(state, action) {
      state.todos = state.todos.filter((item) => item.id !== action.id);
    },
    toggle(state, action) {
      let todoToChange = state.todos.find((el) => el.id === action.id);
      todoToChange.done = !todoToChange.done;
    },
  },
});

export const { add, remove, toggle } = todoSlice.actions;

export const selectTodos = (state) => state.todo.todos;

export default todoSlice.reducer;
