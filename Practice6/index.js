const { createStore } = require("redux");

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";

// state
const initialCounterState = {
  count: 0,
  user: "Anisul sir",
  id: 1,
};
const initialUserState = {
  users: ["anisul islam"],
  count: 1,
};

// action - object - type, payload

// INCREMENT COUNTER

const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

// DECREMENT COUNTER

const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

// 1. action
// 2. dispatch action
// 3. reducer
// 4. store

// create reducer for counter
const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case ADD_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      state;
  }
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        count: state.count + 1,
        users: [...state.users, action.payload],
      };
    default:
      state;
  }
};

// create store
const store = createStore(counterReducer);
const userStore = createStore(userReducer);

store.subscribe(() => {
  console.log(store.getState());
});

// dispatch action
// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());
// store.dispatch(decrementCounter());
// store.dispatch(addUser());

userStore.subscribe(() => {
  console.log(userStore.getState());
});

userStore.dispatch(addUser("John Wick"));
userStore.dispatch(addUser("Peeter Parker"));

