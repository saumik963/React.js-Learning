import { createStore } from "redux";
import counterReducer from "./Services/Reducers/counterReducer";

const store = createStore(counterReducer);

export default store;