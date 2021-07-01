import { v4 as uuidv4 } from 'uuid';

export function createTodo(title, done = false) {
  return {
    title,
    done,
    id: uuidv4(),
  };
}
