import React from "react";

import WaitTimesCard from "./WaitTimeCard";

export default {
  component: WaitTimesCard,
  title: "WaitTimesCard",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Epcot = () => (
  <WaitTimesCard ride="Living with the Land" land="Epcot" waitMinutes="15" />
);
