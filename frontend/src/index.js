import React from 'react'
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import store from './store'
import './bootstrap.min.css'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>
  </React.StrictMode>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
