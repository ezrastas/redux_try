import { uniqueId } from 'lodash';

export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    payload: {
      id: uniqueId(),
      isDone: false,
      text: text
    }
  };
}

export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    payload: id
  };
}
