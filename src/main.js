import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './store/reducers';

import 'bootstrap/dist/css/bootstrap.min.css';
import './profkoptilnya.css'
import './main.scss';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <div className="container">
      <h1>Конструктор коптилен</h1>
    </div>
  </Provider>,
  document.getElementById('app')
);
