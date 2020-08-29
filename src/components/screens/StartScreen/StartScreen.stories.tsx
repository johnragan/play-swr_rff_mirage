import React from "react";

import StartScreen from "./StartScreen";

export default {
  component: StartScreen,
  title: "StartScreen",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = () => <StartScreen />;
