import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../Features/counter/counterSlice";
import postSlice from "../Features/posts/postSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    posts: postSlice,
  },
});

export default store;
