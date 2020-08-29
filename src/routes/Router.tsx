/* eslint-disable react/no-children-prop */
// Rule above disabled because children= is the recommended syntax in react-router 5.1, gets replaced with element= in 6.0
import React, { FC } from "react";
import { BrowserRouter, Redirect, Switch } from "react-router-dom";

import StartScreen from "../components/screens/StartScreen/StartScreen";
import { config } from "../config";
import { UnauthenticatedAppRoutes } from "./AppRoutes";
import LoginScreen from "../components/screens/LoginScreen/LoginScreen";
import SignUpScreen from "../components/screens/SignUpScreen/SignUpScreen";

import { Route } from "./Route";

export const Router: FC = () => {
  return (
    <BrowserRouter basename={config.basename}>
      <Switch>
        <Route
          exact
          path={UnauthenticatedAppRoutes.Login}
          children={
            <LoginScreen
              signUp={UnauthenticatedAppRoutes.SignUp}
              passwordReset={UnauthenticatedAppRoutes.PasswordReset}
            />
          }
          title={`${config.appTitle} - Login`}
        />
        <Route
          exact
          path={UnauthenticatedAppRoutes.SignUp}
          children={<SignUpScreen />}
          title={`${config.appTitle} - Login`}
        />
        <Route
          exact
          path={UnauthenticatedAppRoutes.Start}
          children={<StartScreen />}
          title={`${config.appTitle} - Start`}
        />
        <Redirect to={UnauthenticatedAppRoutes.Start} />
      </Switch>
    </BrowserRouter>
  );
};
