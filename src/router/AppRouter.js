import React from 'react';
import LogIn from '../views/LogIn.js';
import Home from '../views/Home.js';
import Mesas from '../views/Mesas.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function AppRouter() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/mesas">
            <Mesas />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <LogIn />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

