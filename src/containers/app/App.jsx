import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import LoginProvider from '../../Context/LoginContext';
import SignUpProvider from '../../Context/SignUpContext';
// import ModalProvider from '../../Context/ModalContext';

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
  const [spinner, setSpinner] = useState(false);

  return (
    <LoginProvider>
      <SignUpProvider>
        {/* <ModalProvider> */}
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route
              exact
              path='/login'
              render={(props) => <Login {...props} setIsLogin={setIsLogin} />}
              spinner={spinner}
              setSpinner={setSpinner}
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

            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/porfolio' component={Porfolio} />
          </Switch>
        </BrowserRouter>
        {/* </ModalProvider> */}
      </SignUpProvider>
    </LoginProvider>
  );
};
