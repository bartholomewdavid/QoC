// React
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// Application
// Didn't want to eject and configure webpack for a small project
// used old school css instead
import './index.css';
import './styles/listview.css';
import './styles/detailview.css';

// Data
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import Root from './root'

// Async Middleware
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);

registerServiceWorker();
