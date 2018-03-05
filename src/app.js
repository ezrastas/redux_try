import React from 'react';
import { List, Map } from 'immutable';

import TodoApp from './components/TodoApp'

const Todos = List([
  Map({ id: 0, idDone: true, text: '123'}),
  Map({ id: 1, idDone: false, text: '321' })
]);
export default function App() {
  return <TodoApp todos={Todos} />;
}
