import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './components/reducer';
import { TodoList } from './containers';

const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}
