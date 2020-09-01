import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardMedia } from "@material-ui/core";
import useSWR, { mutate, trigger } from "swr";
import {
  MK_RIDES_URL,
  EP_RIDES_URL,
  HS_RIDES_URL,
  AK_RIDES_URL,
  PARK_RIDE_URLS,
  getParkIdFromPark,
} from "../../../../constants/parks";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 140,
    width: 280,
  },
});

type Props = {
  ride: string;
  land: string;
  waitMinutes: string;
  id: string;
};

export type RideWaitTime = {
  ride: string;
  land: string;
  waitMinutes: string;
  id: string;
};

const WaitTimesCard: React.FC<Props> = ({ ride, land, waitMinutes, id }) => {
  const classes = useStyles();

  const { data: ridesMK } = useSWR(MK_RIDES_URL);
  const { data: ridesEP } = useSWR(EP_RIDES_URL);
  const { data: ridesHS } = useSWR(HS_RIDES_URL);
  const { data: ridesAK } = useSWR(AK_RIDES_URL);
  const parkRides = [ridesMK, ridesMK, ridesEP, ridesHS, ridesAK];

  return (
    <Card className={classes.root} variant="outlined">
      <CardMedia
        className={classes.media}
        image="/static/images/cards/cars.png"
        title="Cars"
      />
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Ride Wait Time
        </Typography>
        <Typography variant="h5" component="h2">
          {ride}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {land}
        </Typography>
        <Typography variant="body2" component="p">
          {waitMinutes} Minute Wait
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            console.log(`delete id: ${id}`);
            const parkId = getParkIdFromPark(land);
            //@ts-ignore
            mutate(
              //@ts-ignore
              PARK_RIDE_URLS[parkId],
              //@ts-ignore
              parkRides[parkId].filter((r) => r.id !== id),
              false
            );
            fetch(`/api/rides/${id}`, { method: "DELETE" });
            trigger(PARK_RIDE_URLS[parkId]);
          }}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default WaitTimesCard;
