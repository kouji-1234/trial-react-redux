import {connect} from 'react-redux';
import {toggleTodo} from '../../actions';
import TodoList from '../components/TodoList';

//フィルタリング状態によってTODOリストの絞り込み
const getVisibleTodos = (todos, filterObj) => {
  let visibleTodos = todos;
  //ステータス
  switch (filterObj.status) {
    case 'SHOW_ALL':
      visibleTodos;
      break;
    case 'SHOW_COMPLETED':
      visibleTodos = todos.filter(t => t.completed);
      break;
    case 'SHOW_ACTIVE':
      visibleTodos =  todos.filter(t => !t.completed);
      break;
  }
  //種別
  switch (filterObj.category) {
    case 'SHOW_ALL':
      visibleTodos;
      break;
    case 'SHOW_A':
      visibleTodos = visibleTodos.filter(t => t.category === 'A');
      break;
    case 'SHOW_B':
      visibleTodos =  visibleTodos.filter(t => t.category === 'B');
      break;
  }
  return visibleTodos;
};

//StateをViewのプロパティに落としこむ
const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

//ViewからStateにイベントを伝える
const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      //ActionCreatorからActionを取得し、Storeに渡す
      dispatch(
        toggleTodo(id)
      );
    }
  };
};

//つなぎこみ
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList); //ViewにはReact.jsで用意したTodoListを使用

// connect(mapStateToProps, mapDispatchToProps)
// 第一引数: Reduxが持つStateがViewに渡される際のデータ内容を整形するための処理
// 第二引数: ReduxのStoreにActionを渡す際のつなぎこみを実現

export default VisibleTodoList;