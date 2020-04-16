import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom"

import Home from './home'
import Login from './login'
import Loading from './loading'


export default function App() {

  return (
    <Router>   
        <ScreenCheck />
        <Switch>        
          <RouteAuthWrapper path="/protected">          
            <Home />
          </RouteAuthWrapper>
        </Switch>     
    </Router>
  );
}

function ScreenCheck() {
  let history = useHistory();
  return ( checkAuthentication.isAuthenticated ?  <Home checkAuthentication={checkAuthentication} history={history} /> :
     <Login checkAuthentication={checkAuthentication}/> );  
}


function RouteAuthWrapper({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>checkAuthentication.isAuthenticated ? ( children) :(<Redirect to={{pathname: "/login",state: { from: location } }} />)
      }
    />
  );
}

const checkAuthentication = {

  isAuthenticated: false,
  authenticate(cb) {
    console.log('in authenticate');
    checkAuthentication.isAuthenticated = true;
    setTimeout(cb, 100); 
  },
  signout(cb) {
    console.log('in signout');
    checkAuthentication.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

