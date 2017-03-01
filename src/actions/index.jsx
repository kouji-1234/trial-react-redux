let nextTodoId = 0; //TODOのid管理するための変数

//TODOを追加する
export const addTodo = (inputText,inputCategory) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId ++,
    text: inputText,
    category: inputCategory
  };
};

//TODOを完了する
export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};

//TODOの状態をフィルタリングする
export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
};

//TODOの種別をフィルタリングする
export const setCategoryFilter = (filter) => {
  return {
    type: 'SET_CATEGORY_FILTER',
    filter
  };
};


