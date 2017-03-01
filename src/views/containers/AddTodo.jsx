import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../../actions';


class AddTodo extends React.Component {
  render() {
    let inputText;
    let inputCategory = 'A';
    return (
      <div>
        <form onSubmit = {e => {
          e. preventDefault();
          if (!inputText.value.trim()) {
            return;
          }
          //ActionCreatorからActionを取得し、Storeに渡している
          this.props.dispatch(
            addTodo(inputText.value, inputCategory)
          );
          inputText.value = '';
        }}>
          <input ref={node => {
            inputText = node;
          }} />
          <input type="radio" name="categoryBtn" checked={inputCategory==='A'} value="A" onChange={() => {
            inputCategory = 'A';
          }} /> A
          <input type="radio" name="categoryBtn" checked={inputCategory==='B'} value="B" onChange={() => {
            inputCategory = 'B';
          }} /> B
          <button type="submit">
            Add Todo
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(AddTodo);
