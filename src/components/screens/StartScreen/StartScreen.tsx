import React from "react";
import { useHistory } from "react-router-dom";
import epcot from "../../..//photos/Epcot_mono_5x2.png";
import { Typography } from "@material-ui/core";

import Header from "../../Header/Header";

export default function StartScreen() {
  const history = useHistory();
  const link = "/login";
  const goToLogin = (): void => {
    history.push(`${link}`);
  };

  return (
    <React.Fragment>
      <Header onMDEClick={goToLogin} />
      <img src={epcot} className="App-epcot" alt="epcot" />
      <Typography variant="h6">Your Ultimate WDW Planning Resource</Typography>
    </React.Fragment>
  );
}
