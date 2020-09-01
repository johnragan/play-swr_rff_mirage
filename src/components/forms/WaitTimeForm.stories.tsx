import React from "react";

import WaitTimeForm from "./WaitTimeForm";

export default {
  component: WaitTimeForm,
  title: "WaitTimeForm",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = () => <WaitTimeForm />;
