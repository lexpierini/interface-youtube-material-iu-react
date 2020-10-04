import React from "react";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AppBar from "@material-ui/core/AppBar";
import AppsIcon from "@material-ui/icons/Apps";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import makeStyles from "@material-ui/core/styles/makeStyles";
import MenuIcon from "@material-ui/icons/Menu";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Switch from "@material-ui/core/Switch";
import Toolbar from "@material-ui/core/Toolbar";
import useTheme from "@material-ui/core/styles/useTheme";
import VideoCallIcon from "@material-ui/icons/VideoCall";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: theme.palette.background.dark,
  },
  appBar: {
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
  },
  logo: {
    height: 25,
  },
  menuIcon: {
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(6),
  },
  icons: {
    paddingRight: theme.spacing(5),
  },
  grow: {
    flexGrow: 1,
  },
}));

export default (props) => {
  const classes = useStyles();
  const theme = useTheme();
  console.log({...props});

  return (
    <AppBar color="inherit" className={classes.appBar}>
      <Toolbar>
        <IconButton edge="start" className={classes.menuIcon} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <img
          src={
            theme.palette.type === "dark"
              ? "/images/white.png"
              : "/images/black.png"
          }
          alt="logo"
          className={classes.logo}
        />
        <div className={classes.grow} />
        <Switch
          value={props.darkMode}
          onChange={() => props.setDarkMode(!props.darkMode)}
          className={classes.icons}
        />
        <IconButton className={classes.icons}>
          <VideoCallIcon />
        </IconButton>
        <IconButton className={classes.icons}>
          <AppsIcon />
        </IconButton>
        <IconButton className={classes.icons}>
          <MoreVertIcon />
        </IconButton>
        <Button
          startIcon={<AccountCircleIcon />}
          variant="outlined"
          color="secondary"
        >
          Se connecter
        </Button>
      </Toolbar>
    </AppBar>
  );
};
