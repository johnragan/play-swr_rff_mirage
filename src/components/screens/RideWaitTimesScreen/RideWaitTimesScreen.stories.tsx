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

export const MagicKingdom = () => <RideWaitTimesScreen defaultPark={1} />;

export const Epcot = () => <RideWaitTimesScreen defaultPark={2} />;

export const HollywoodStudios = () => <RideWaitTimesScreen defaultPark={3} />;

export const AnimalKingdom = () => <RideWaitTimesScreen defaultPark={4} />;
