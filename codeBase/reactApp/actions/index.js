import axios from 'axios'
let nextTodoId = 0
export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
});

export const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});

export const fetchTodods = () =>{
    let request = axios({
        URL:'/api/redux/retrieve',
        headers:[],
        method:'get'
    });
    return {
        type:FETCH_TODOS,
        payload:request
    }
};

export const fetchTodosSuccess = (todos) =>{
    return {
        type:'FETCH_TODOS_SUCCESS',
        payload:todos
    }
};

export const fetchTodoFailure = (error)=>{
  return {
      type:'FETCH_TODOS_FAILURE',
      payload:error
  }
};

export const resetTodos = () =>{
  return {
      type:'RESET_POSTS'
  }
};

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
});