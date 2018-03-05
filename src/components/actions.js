import { uniqueId } from 'lodash';

export default function addTodo(text) {
  return {
    type: 'ADD_TODO',
    payload: {
      id: uniqueId(),
      isDone: false,
      text: text,
    },
  };
}
