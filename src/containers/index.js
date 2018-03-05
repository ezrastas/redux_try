import { connect } from 'react-redux';

import * as components from '../components/TodoApp'
import { addTodo } from '../components/actions';

export const TodoList = connect(
  function mapStateToProps(state) {
    return { todos: state };
  },
  function mapDispatchToProps(dispatch) {
    return {
      addTodo: text => dispatch(addTodo(text))
    };
  }
)(components.TodoList);
