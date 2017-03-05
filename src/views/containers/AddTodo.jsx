import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../../actions';


class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputCategory: 'A',
    };
  }
  render() {
    //let inputCategory = 'A';
    let inputText;
    return (
      <div>
        <form onSubmit = {e => {
          e. preventDefault();
          if (!inputText.value.trim()) {
            return;
          }
          //ActionCreatorからActionを取得し、Storeに渡している
          this.props.dispatch(
            addTodo(inputText.value, this.state.inputCategory)
          );
          inputText.value = '';
        }}>
          <input ref={node => {
            inputText = node;
          }} />
          <input type="radio" name="categoryBtn" checked={this.state.inputCategory==='A'} value="A" onChange={node => {
            this.state.inputCategory = node;
          }} /> A
          <input type="radio" name="categoryBtn" checked={this.state.inputCategory==='B'} value="B" onChange={node => {
            this.state.inputCategory = node;
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
