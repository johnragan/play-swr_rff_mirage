import React from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";

//import { config } from "../../config";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

type Props = {
  link?: string;
  onMDEClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Header: React.FC<Props> = ({ onMDEClick=null }) => {
  const classes = useStyles();
  const history = useHistory();

  const link = "/login";
  const goToLogin = (): void => {
    history.push(`${link}`);
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Make a Walt Disney World Reservation
        </Typography>
        <Button
          color="inherit"
          onClick={onMDEClick ? onMDEClick :goToLogin}
        >
          My Disney Experience
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
