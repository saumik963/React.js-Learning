import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import ReactBootstrap from './components/React_bootstrap/React_Bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllComponentLoader from './App';

// import reportWebVitals from './reportWebVitals';

const data="I am from parent";

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AllComponentLoader />
  
  </React.StrictMode>

);