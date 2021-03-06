// @flow

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../Home/Home';
import NotFound from '../../components/NotFound/NotFound';
import AppNavBar from './AppNavBar';
import Profile from '../Profile/Profile';
import RoomPage from '../Room/Room';

const AppHome = () => (
  <Router>
    <div>
      <Route path="/" component={AppNavBar} />
      <Switch>
        <Redirect from="/login" to="/" />
        <Redirect from="/register" to="/" />
        <Route exact path="/" component={Home} />
        <Route exact path="/profile/:id" component={Profile} />
        <Route exact path="/room/:id" component={RoomPage} />
        <Route exact path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default AppHome;
