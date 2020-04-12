import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './store/reducers';

// Только для dev, перед билдом комментить
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './profkoptilnya.css';

import './main.scss';

import Info from './component/Info';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1>Конструктор коптилен</h1>
        </div>
        <div className="col-md-6">
          <Info />
        </div>
      </div>
    </div>
  </Provider>,
  document.getElementById('app')
);
