import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

// Routing
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// Components
import {
  ListView,
  DetailView
} from './components';

const Root = ({ store, match }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={ListView}/>
        <Route path="/detail/:appId" component={DetailView}/>
      </div>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root