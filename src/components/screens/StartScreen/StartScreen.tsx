import React from "react";
import { useHistory } from "react-router-dom";
import epcot from "../../..//photos/Epcot_mono_5x2.png";
import { Typography } from "@material-ui/core";

import Header from "../../Header/Header";

// TODO: Should this action be pushed into the component, or embedded in
// the component itself?  What about other actions in this component's
// children?

export default function StartScreen() {
  const history = useHistory();
  const goToSignInPage = (): void => {
    history.push("/login");
  };

  return (
    <React.Fragment>
      <Header onMDEClick={goToSignInPage} />
      <img src={epcot} className="App-epcot" alt="epcot" />
      <Typography variant="h6">Your Ultimate WDW Planning Resource</Typography>
    </React.Fragment>
  );
}
