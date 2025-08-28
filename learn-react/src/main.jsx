// import React from "react";
// import ReactDOM from "react-dom"
// import Card from "./components/Card";
// import App from "./App";

// ReactDOM.render(
//     <App />,
//     document.getElementById("root")
// );


import { createRoot } from 'react-dom/client';
// const container =document.getElementById('root') ;
const root = createRoot(document.getElementById('root'));
import App from './App';
import List from './components/List'

root.render(

<App />
);