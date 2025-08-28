const axios = require("axios");
const { createStore, applyMiddleware } = require("redux");
const thunk = require("redux-thunk").default;



// Constants
const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const GET_TODOS_FAILED = "GET_TODOS_FAILED";
const API_URL = "https://jsonplaceholder.typicode.com/todos";

// Initial State
const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};

// Action Creators
const getTodosRequest = () => ({ type: GET_TODOS_REQUEST });
const getTodosSuccess = (todos) => ({ type: GET_TODOS_SUCCESS, payload: todos });
const getTodosFailed = (error) => ({ type: GET_TODOS_FAILED, payload: error });

// Reducer
const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return { ...state, isLoading: true, error: null };
    case GET_TODOS_SUCCESS:
      return { ...state, isLoading: false, todos: action.payload };
    case GET_TODOS_FAILED:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

// Async Action Creator
const fetchTodos = () => {
  return async (dispatch) => {
    dispatch(getTodosRequest());
    try {
      const response = await axios.get(API_URL);
      dispatch(getTodosSuccess(response.data));
    } catch (error) {
      dispatch(getTodosFailed(error.message));
    }
  };
};

// Create store with middleware
const store = createStore(todosReducer, applyMiddleware(thunk));

// Subscribe to store updates
store.subscribe(() => {
  console.log("Updated state:", store.getState());
});

// Dispatch the async action
store.dispatch(fetchTodos());
