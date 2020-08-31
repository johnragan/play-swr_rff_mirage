import React from "react";
import { createMirageServer } from "../../../index";
import RideWaitTimesScreen from "./RideWaitTimesScreen";

createMirageServer();

export default {
  component: RideWaitTimesScreen,
  title: "RideWaitTimesScreen",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Epcot = () => <RideWaitTimesScreen />;
