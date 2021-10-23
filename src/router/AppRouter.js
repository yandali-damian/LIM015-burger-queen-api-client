import React from 'react';
// import LogIn from '../views/LogIn.js';
import LogInForm from '../views/LogIn1'
import Home from '../views/Home.js';
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
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            {/* <LogIn /> */}
            <LogInForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

