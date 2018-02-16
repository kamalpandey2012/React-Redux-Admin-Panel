/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './components/Root';

import '../node_modules/font-awesome/css/font-awesome.css';
import '../node_modules/font-awesome/fonts/fontawesome-webfont.ttf';
import '../node_modules/font-awesome/fonts/fontawesome-webfont.woff2';
import '../node_modules/font-awesome/fonts/FontAwesome.otf';
import './styles/reset.css';
import './styles/fonts.css';
import './styles/theming.css';
require('./favicon.ico'); // Tell webpack to load favicon.ico

render(
  <AppContainer>
    <Root history={history} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    render(
      <AppContainer>
        <NewRoot history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
