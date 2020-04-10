import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './store/reducers'

import './main.scss';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <h1>Конструктор коптилен</h1>
    </div>
  </Provider>,
  document.getElementById('app')
);
