import React from "react";
import { createMirageServer } from "../../../index";
import RideWaitTimesScreen from "./RideWaitTimesScreen";
import { ParkIds } from "../../../constants/parks";

createMirageServer();

export default {
  component: RideWaitTimesScreen,
  title: "RideWaitTimesScreen",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const MagicKingdom = () => (
  <RideWaitTimesScreen defaultPark={ParkIds.MK} />
);

export const Epcot = () => <RideWaitTimesScreen defaultPark={ParkIds.EP} />;

export const HollywoodStudios = () => (
  <RideWaitTimesScreen defaultPark={ParkIds.HS} />
);

export const AnimalKingdom = () => (
  <RideWaitTimesScreen defaultPark={ParkIds.AK} />
);
