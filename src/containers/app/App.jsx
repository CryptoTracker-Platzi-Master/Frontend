import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import LoginProvider from '../../Context/LoginContext';

import { Home } from '../../pages/Home';
import { Login } from '../../pages/Login';
import { SignUp } from '../../pages/SignUp';
import { Authentication } from '../../pages/Authentication';
import { Dashboard } from '../../pages/Dashboard';
import { Porfolio } from '../../pages/Porfolio';

import '../../assets/css/App.css';

export const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isauthenticated, setIsauthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoginProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route
            exact
            path='/login'
            render={(props) => (
              <Login
                {...props}
                setIsLogin={setIsLogin}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            )}
          ></Route>

          <Route
            exact
            path='/sign-up'
            render={(props) => <SignUp {...props} setIsLogin={setIsLogin} />}
          >
            {isLogin && <Redirect to='/login' />}
          </Route>

          <Route
            exact
            path='/2fa'
            render={(props) => (
              <Authentication
                {...props}
                setIsauthenticated={setIsauthenticated}
              />
            )}
          >
            {isauthenticated && <Redirect to='/dashboard' />}
          </Route>

          <Route
            exact
            path='/dashboard'
            render={(props) => (
              <Dashboard
                {...props}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            )}
          />
          <Route
            exact
            path='/porfolio'
            render={(props) => (
              <Porfolio
                {...props}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    </LoginProvider>
  );
};
