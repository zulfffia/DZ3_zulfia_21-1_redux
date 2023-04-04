import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createStore} from "react-redux";
import {reducer} from './redux/reduser';
import {Provider} from 'react';



const histore = createStore(reducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={histore}>
    <App />
  </Provider>
);
