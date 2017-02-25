/*
  TodoList.jsx
  TODOのデータを複数受け取り
*/
import React, { PropTypes } from 'react';
import Todo from './Todo';

class TodoList extends React.Component{
  render() {
    return (
      <ul>
        {this.props.todos.map( todo =>
          <Todo
            key={todo.id}
            {...todo}
            onClick ={() => this.props.onTodoClick(todo.id)}
          /> 
        )}
      </ul>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default TodoList;