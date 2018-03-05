import React from 'react';

import { get } from 'immutable';

export function Todo(props) {
  const { todo } = props;
  if(todo.isDone) {
    return <strike>{todo.text}</strike>
  } else {
    return <span>{todo.text}</span>
  }
}

export default function TodoList(props) {
  const { todos } = props;
  return (
    <div>
    return ({todos.map(t =>
      <div key={t.get('id')}>
        <Todo todo={t} />
      </div>
    )});
    </div>
  );
}
