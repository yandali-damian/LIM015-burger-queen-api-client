import React from 'react';
import LogIn from '../views/LogIn.js';
import Home from '../views/Home.js';
import Mesas from '../views/Mesas.js'
import Order from '../views/Order.js'
import Error404 from '../views/Error404.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function AppRouter() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={LogIn} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/order" component={Order} />
          <Route exact path="/mesas" component={Mesas} />
          <Route path="*" component={Error404} />
        </Switch>
    </Router>
  );
}

