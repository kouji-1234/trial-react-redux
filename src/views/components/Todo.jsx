/*
  Todo.jsx
  各行のテキストや完了状態の表示
*/
import React, { PropTypes } from 'react';

class Todo extends React.Component{
  render() {
    return (
      <li 
        onClick ={this.props.onClick}
        style={{textDecoration: this.props.completed ? 'line-through' : 'none' }}>
        {this.props.text}
      </li>
    );
  }
}
//各プロパティのデータ型指定や必須指定
Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
};

export default Todo;