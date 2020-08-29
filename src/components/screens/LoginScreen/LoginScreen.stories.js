import React from "react";

import LoginScreen from "./LoginScreen";

export default {
  component: LoginScreen,
  title: "LoginScreen",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = () => <LoginScreen />;
