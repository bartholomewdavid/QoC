import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

// Routing
import {
  BrowserRouter as Router,
  Route,
  Link
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
        <ul>
          <li><Link to="/">List View</Link></li>
        </ul>

        <hr/>

        <h1> Content should be here</h1>
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