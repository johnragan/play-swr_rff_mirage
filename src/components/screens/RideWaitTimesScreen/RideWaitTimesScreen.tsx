import React from "react";

import Typography from "@material-ui/core/Typography";
import WaitTimesCard from "./WaitTimeCard/WaitTimesCard";

type Props = {};

const RideWaitTimesScreen: React.FC<Props> = () => {
  const epcotRide = {
    ride: "Living with the Land",
    land: "Epcot",
    waitMinutes: "15",
  };
  return (
    <React.Fragment>
      <Typography component="h1" variant="h4">
        Ride Wait Times
      </Typography>
      <Typography component="h1" variant="h5">
        The following are the wait times for Epcot:
      </Typography>
      <WaitTimesCard {...epcotRide} />
    </React.Fragment>
  );
};

export default RideWaitTimesScreen;
