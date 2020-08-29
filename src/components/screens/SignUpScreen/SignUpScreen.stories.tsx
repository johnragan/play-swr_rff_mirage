import React from "react";

import SignUpScreen from "./SignUpScreen";

export default {
  component: SignUpScreen,
  title: "SignUpScreen",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = () => <SignUpScreen />;
