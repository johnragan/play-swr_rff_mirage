import React, { useEffect, useState } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import WaitTimesCard, { RideWaitTime } from "./WaitTimeCard/WaitTimeCard";

// enum Parks {
//   MK = 1,
//   EP = 2,
//   HS = 3,
//   AK = 4,
// }

type RideWaitTimes = RideWaitTime[];

type Props = {};

const RideWaitTimesScreen: React.FC<Props> = () => {
  // let history = useHistory();
  // // @ts-ignore
  // let location = useLocation(useHistory);
  // // @ts-ignore
  // let { parkId } = useParams();
  let [parkId, setParkId] = useState("1");

  let [rides, setRides] = useState([]);
  let [parks, setParks] = useState();
  let [error, setError] = useState();
  let [isAddingRide, setIsAddingRide] = useState();
  let [isSavingRide, setIsSavingRide] = useState();
  let [isAddingPark, setIsAddingPark] = useState();
  let [isSavingPark, setIsSavingPark] = useState();
  let [newRideText, setNewRideText] = useState("");
  let [newParkName, setNewParkName] = useState("");

  // @ts-ignore
  let activePark = parkId && parks?.find((park) => park.id === parkId);

  useEffect(() => {
    let isCurrent = true;
    setRides([]);
    let url = parkId ? `/api/parks/${parkId}/rides` : `/api/rides`;

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        if (isCurrent) {
          setRides(json.rides);
        }
      })
      .catch(() => {
        if (isCurrent) {
          // @ts-ignore
          setError("We couldn't load your rides. Try again soon.");
        }
      });

    return () => {
      isCurrent = false;
    };
  }, [parkId]);

  // // @ts-ignore
  // function createRide(e) {
  //   e.preventDefault();

  //   if (!newRideText) {
  //     return;
  //   }

  //   // @ts-ignore
  //   setIsSavingRide(true);

  //   fetch("/api/rides", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       text: newRideText,
  //       ...(parkId && { parkId }),
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setNewRideText("");
  //       // @ts-ignore
  //       setRides((rides) => [...rides, json.ride]);
  //       // @ts-ignore
  //       setIsAddingRide(false);
  //     })
  //     .catch((e) => {
  //       // @ts-ignore
  //       setError("Your Ride wasn't saved. Try again.");
  //       console.error(e);
  //     })
  //     .finally(() => {
  //       // @ts-ignore
  //       setIsSavingRide(false);
  //     });
  // }

  // // @ts-ignore
  // function createPark(e) {
  //   e.preventDefault();

  //   if (!newParkName) {
  //     return;
  //   }

  //   // @ts-ignore
  //   setIsSavingPark(true);

  //   fetch("/api/parks", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       name: newParkName,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setNewParkName("");
  //       // @ts-ignore
  //       setParks((parks) => [...parks, json.park]);
  //       // @ts-ignore
  //       setIsAddingPark(false);
  //       history.push(`/${json.park.id}${location.search}`);
  //     })
  //     .catch(() => {
  //       // @ts-ignore
  //       setError("Your Park wasn't saved. Try again.");
  //     })
  //     .finally(() => {
  //       // @ts-ignore
  //       setIsSavingPark(false);
  //     });
  // }

  // // @ts-ignore
  // function deleteRide(id) {
  //   fetch(`/api/rides/${id}`, { method: "DELETE" });
  //   // @ts-ignore
  //   setRides((rides) => rides.filter((ride) => ride.id !== id));
  // }

  // function deletePark() {
  //   fetch(`/api/parks/${parkId}`, { method: "DELETE" });
  //   // @ts-ignore
  //   setParks((parks) => parks?.filter((park) => park.id !== parkId));
  //   history.push(`/${location.search}`);
  // }

  // const epcotRides: RideWaitTimes = [
  //   {
  //     ride: "Living with the Land",
  //     land: "Epcot",
  //     waitMinutes: "15",
  //   },
  //   {
  //     ride: "Test Track",
  //     land: "Epcot",
  //     waitMinutes: "35",
  //   },
  // ];

  function RenderCards(rides: RideWaitTimes) {
    return (
      <React.Fragment>
        <ul>
          {rides.map(
            (
              ride: { ride: string; land: string; waitMinutes: string },
              index: number
            ) => (
              <li key={index}>
                <WaitTimesCard {...ride} />
              </li>
            )
          )}
        </ul>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Typography component="h1" variant="h4">
        Ride Wait Times
      </Typography>
      <Typography component="h1" variant="h5">
        The following are the wait times for Epcot:
      </Typography>
      {/* {RenderCards(epcotRides)} */}
      {/* @ts-ignore */}
      {RenderCards(rides)}
    </React.Fragment>
  );
};

export default RideWaitTimesScreen;
