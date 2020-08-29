import React from "react";

import LoginScreen from "./LoginScreen";
import { UnauthenticatedAppRoutes } from "../../../routes/AppRoutes";

export default {
  component: LoginScreen,
  title: "LoginScreen",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = () => (
  <LoginScreen
    signUp={UnauthenticatedAppRoutes.SignUp}
    passwordReset={UnauthenticatedAppRoutes.PasswordReset}
  />
);
