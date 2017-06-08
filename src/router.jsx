import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TorrentListContainer from './components/containers/TorrentList';
import MainLayout from './components/layouts/Main';

const Main = () => (
  <Router>
    <MainLayout>
      <Route path="/" component={TorrentListContainer} />
    </MainLayout>
  </Router>
);

export default Main;
