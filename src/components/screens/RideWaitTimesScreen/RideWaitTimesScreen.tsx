import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import WaitTimesCard, { RideWaitTime } from "./WaitTimeCard/WaitTimeCard";
import { Parks, getParkById, MK, EP, HS, AK } from "../../../constants/parks";
import {
  FormControl,
  InputLabel,
  NativeSelect,
  FormHelperText,
  makeStyles,
  List,
  ListItem,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

type RideWaitTimes = RideWaitTime[];

type Props = {
  defaultPark: Parks;
};

const RideWaitTimesScreen: React.FC<Props> = ({ defaultPark }) => {
  // let history = useHistory();
  // // @ts-ignore
  // let location = useLocation(useHistory);
  // // @ts-ignore
  // let { parkId } = useParams();
  // let [parkId, setParkId] = useState("1");

  const classes = useStyles();

  let [parkId, setParkId] = useState(defaultPark);

  let [rides, setRides] = useState([]);
  // let [parks, setParks] = useState();

  // @ts-ignore
  //let activePark = parkId && parks?.find((park) => park.id === parkId);

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

  function RenderCards(rides: RideWaitTimes) {
    return (
      <React.Fragment>
        <List>
          {rides.map(
            (
              ride: { ride: string; land: string; waitMinutes: string },
              index: number
            ) => (
              <ListItem key={index}>
                <WaitTimesCard {...ride} />
              </ListItem>
            )
          )}
        </List>
      </React.Fragment>
    );
  }

  const handleParkChange = (event: any) => {
    setParkId(event.target.value);
  };

  return (
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="uncontrolled-native">Park</InputLabel>
        <NativeSelect
          defaultValue={defaultPark}
          inputProps={{
            name: "name",
            id: "uncontrolled-native",
          }}
          onChange={handleParkChange}
        >
          <option value={Parks.MK}>{MK}</option>
          <option value={Parks.EP}>{EP}</option>
          <option value={Parks.HS}>{HS}</option>
          <option value={Parks.AK}>{AK}</option>
        </NativeSelect>
        <FormHelperText>Pick your park</FormHelperText>
      </FormControl>

      <Typography component="h1" variant="h4">
        Ride Wait Times
      </Typography>
      <Typography component="h1" variant="h5">
        The following are the wait times for {getParkById(parkId)}:
      </Typography>
      {RenderCards(rides)}
    </React.Fragment>
  );
};

export default RideWaitTimesScreen;
