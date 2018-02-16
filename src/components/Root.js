import React, { Component } from 'react';
import PropTypes from 'prop-types';
import App from './App';
import { Router } from 'react-router-dom';
import { history } from '../store/configureStore';

export default class Root extends Component {
  render() {
    return (
      <Router history={history}>
        <App />
      </Router>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
