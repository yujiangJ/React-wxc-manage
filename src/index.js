import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import { BrowserRouter } from 'react-router-dom'
import store from "@/store"

//打包时，用的HashRouter并加上了basename，因为放在服务器的二级目录下
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'));
