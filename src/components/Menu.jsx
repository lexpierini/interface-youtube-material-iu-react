import React from "react";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AddCircle from "@material-ui/icons/AddCircle";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import HistoryIcon from "@material-ui/icons/History";
import HomeIcon from "@material-ui/icons/Home";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import makeStyles from "@material-ui/core/styles/makeStyles";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useTheme from "@material-ui/core/styles/useTheme";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import WhatshotIcon from "@material-ui/icons/Whatshot";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: theme.palette.background.dark,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    borderRight: "none",
  },
  listItemText: {
    fontSize: 14,
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  subheader: {
    textTransform: "uppercase",
  },
}));

export default (props) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Hidden mdDown>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>{<HomeIcon />}</ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={"Accueil"}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>{<WhatshotIcon />}</ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={"Tendances"}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={"Abonnements"}
              />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>{<VideoLibraryIcon />}</ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={"Bibliotèque"}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>{<HistoryIcon />}</ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={"Historique"}
              />
            </ListItem>
          </List>
          <Divider />
          <Box p={6}>
            <Typography variant="body2">
              Connectez-vous à YouTube pour cliquer sur "J'aime", ajouter un
              commentaire et vous abonner.
            </Typography>
            <Box mt={2}>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<AccountCircleIcon />}
              >
                Se connecter
              </Button>
            </Box>
          </Box>
          <Divider />
          <List
            component="nav"
            aria-label="nested-list-subheader"
            subheader={
              <ListSubheader
                component="div"
                id="nested-list-subheader"
                className={classes.subheader}
              >
                Le meilleur de YouTube
              </ListSubheader>
            }
          >
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AddCircle />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={"Musique"}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AddCircle />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary={"Sport"}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AddCircle />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary={"Jeux vidéo"}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AddCircle />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary={"Films et TV"}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AddCircle />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary={"Actualités"}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AddCircle />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary={"En direct"}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AddCircle />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary={"Mode et beauté"}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AddCircle />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary={"Apprendre"}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AddCircle />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary={"Vidéo à 360"}
              />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </Hidden>
  );
};
