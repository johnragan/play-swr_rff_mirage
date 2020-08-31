import React from "react";

import Typography from "@material-ui/core/Typography";
import WaitTimesCard, { RideWaitTime } from "./WaitTimeCard/WaitTimeCard";

// enum Parks {
//   MK = 1,
//   EP = 2,
//   HS = 3,
//   AK = 4,
// }

type RideWaitTimes = RideWaitTime[];

// const RenderCards = (rides: RideWaitTimes) => {
//   return (
//     <React.Fragment>
//       {rides.map(
//         (ride: { ride: string; land: string; waitMinutes: string }) => (
//           <WaitTimesCard {...ride} />
//         )
//       )}
//     </React.Fragment>
//   );
// };

type Props = {};

const RideWaitTimesScreen: React.FC<Props> = () => {
  const epcotRides: RideWaitTimes = [
    {
      ride: "Living with the Land",
      land: "Epcot",
      waitMinutes: "15",
    },
    {
      ride: "Test Track",
      land: "Epcot",
      waitMinutes: "35",
    },
  ];

  // console.log(epcotRides);
  // console.log(typeof epcotRides);

  function RenderCards(rides: RideWaitTimes) {
    // console.log(rides);
    // console.log(typeof rides);

    return rides.map(function (ride) {
      return `<p>This wait is ${ride.waitMinutes}</p>`;
    });

    // return <div></div>;
  }

  // // @ts-ignore
  // function RenderCards2(rides: RideWaitTimes) {
  //   // console.log(rides);
  //   // console.log(typeof rides);

  //   // @ts-ignore
  //   return rides["rides"].map(function (ride) {
  //     return `<p>This wait is ${ride.waitMinutes}</p>`;
  //   });

  //   // return <div></div>;
  // }

  return (
    <React.Fragment>
      <Typography component="h1" variant="h4">
        Ride Wait Times
      </Typography>
      <Typography component="h1" variant="h5">
        The following are the wait times for Epcot:
      </Typography>
      <WaitTimesCard {...epcotRides[0]} />

      {/* <RenderCards3 {...epcotRides} /> */}

      {RenderCards(epcotRides)}
    </React.Fragment>
  );
};

export default RideWaitTimesScreen;
