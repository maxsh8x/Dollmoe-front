import React from 'react';
import { render } from 'react-dom';
import Router from './router';

if (module.hot) module.hot.accept();
render(
  <Router />,
  document.getElementById('root'),
);
