import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import Content from "./Content";

import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import useTheme from "@material-ui/core/styles/useTheme";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: theme.palette.background.dark,
  },
}));

function Home(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box className={classes.root}>
      <Header darkMode={props.darkMode} setDarkMode={props.setDarkMode} />
      <Box display="flex">
        <Menu />
        <Content />
      </Box>
    </Box>
  );
}

export default Home;
