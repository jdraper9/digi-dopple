// packages
import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Router } from 'react-router-dom';

// components
import Login from './Login';
import Home from './Home';

// auxiliary
import history from '../history';
import '../styling/App.css';

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/app/home" component={Home} />
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
};

export default App;
