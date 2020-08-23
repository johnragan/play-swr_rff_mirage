import React from "react";
import epcot from "../../..//photos/Epcot_mono_5x2.png";
import { Typography } from "@material-ui/core";

import Header from "../../Header/Header";

export default function StartScreen() {
  return (
    <React.Fragment>
      <Header link="/login" />
      <img src={epcot} className="App-epcot" alt="epcot" />
      <Typography variant="h6">Your Ultimate WDW Planning Resource</Typography>
    </React.Fragment>
  );
}
