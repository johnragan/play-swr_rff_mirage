import React from "react";

import RideWaitTimesScreen from "./RideWaitTimesScreen";

export default {
  component: RideWaitTimesScreen,
  title: "RideWaitTimesScreen",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Epcot = () => <RideWaitTimesScreen />;
