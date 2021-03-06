import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './store/reducers';

import './main.scss';

import Info from './component/Info';
import FormContainer from './component/Form/FormContainer';
import View from './component/View';

import { loadState, saveState } from './store/localStorage';

export const store = createStore(rootReducer, loadState());
store.subscribe(() => saveState(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <div className="row">
      <div className="col-sm-12 col-md-6 col-lg-5">
        <h1>Конструктор коптилен</h1>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-7">
        <Info />
      </div>
    </div>
    <div className="row">
      <div className="col-sm-12 col-md-6 col-lg-5">
        <FormContainer />
      </div>
      <div className="col-sm-12 col-md-6 col-lg-7">
        <View />
      </div>
    </div>
  </Provider>,
  document.getElementById('app')
);
