import React from "react";
import { action } from "@storybook/addon-actions";

import Header from "./Header";

export default {
  component: Header,
  title: "Header",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const headerData = {
  link: "disney.com",
};

export const actionsData = {
  onMDEClick: action("onMDEClick"),
};

export const Default = () => <Header {...headerData} {...actionsData} />;