const { createStore, combineReducers,applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

// Constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";
const GET_CART_ITEMS = "GET_CART_ITEMS";
const ADD_TO_CART = "ADD_TO_CART";

const initialProductState = {
  products: ["suger", "salt"],
  numberOfProducts: 2,
};

const initialCartState = {
  cart: ["sope"],
  numberOfItems: 1,
};

const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};

const addProducts = (product) => {
  return {
    type: ADD_PRODUCTS,
    payload: product,
  };
};

const getCartItems = () => {
  return {
    type: GET_CART_ITEMS,
  };
};

const addToCart = (items) => {
  return {
    type: ADD_TO_CART,
    payload: items,
  };
};

const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case ADD_PRODUCTS:
      return {
        ...state,
        products: [...state.products, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };
    default:
      return state;
  }
};

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case GET_CART_ITEMS:
      return {
        ...state,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        numberOfItems: state.numberOfItems + 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  productR: productReducer,
  cartR: cartReducer,
});

const store = createStore(productReducer,applyMiddleware(logger));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addProducts("Paper Powder"));
store.dispatch(getProducts());
console.log("-----------");
// // store.dispatch(getCartItems());
// store.dispatch(addToCart("Oil"));
