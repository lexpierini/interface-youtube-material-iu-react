import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AddCircle from "@material-ui/icons/AddCircle";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import AppBar from "@material-ui/core/AppBar";
import AppsIcon from "@material-ui/icons/Apps";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import HistoryIcon from "@material-ui/icons/History";
import HomeIcon from "@material-ui/icons/Home";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import makeStyles from "@material-ui/core/styles/makeStyles";
import MenuIcon from "@material-ui/icons/Menu";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import Switch from "@material-ui/core/Switch";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useTheme from "@material-ui/core/styles/useTheme";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import WhatshotIcon from "@material-ui/icons/Whatshot";

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
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    borderRight: "none",
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

const videos = [
  {
    id: 1,
    title: "React JS - A quick introduction tutorial",
    channel: "Alex Pierini",
    views: "1 M vues ",
    date: "il y a 1 mois",
    avatar: "/images/avatar.jpg",
    thumb: "/images/thumb1.png",
  },
  {
    id: 2,
    title: "Why ReactJS is betther for application development",
    channel: "Alex Pierini",
    views: "2 M vues ",
    date: "il y a 2 mois",
    avatar: "/images/avatar.jpg",
    thumb: "/images/thumb2.png",
  },
  {
    id: 3,
    title: "React + Material-UI",
    channel: "Alex Pierini",
    views: "3 M vues ",
    date: "il y a 3 mois",
    avatar: "/images/avatar.jpg",
    thumb: "/images/thumb3.png",
  },
  {
    id: 4,
    title: "Material Kit React",
    channel: "Alex Pierini",
    views: "4 M vues ",
    date: "il y a 4 mois",
    avatar: "/images/avatar.jpg",
    thumb: "/images/thumb4.png",
  },
  {
    id: 5,
    title: "React Router",
    channel: "Alex Pierini",
    views: "5 M vues ",
    date: "il y a 5 mois",
    avatar: "/images/avatar.jpg",
    thumb: "/images/thumb5.png",
  },
  {
    id: 6,
    title: "Redux",
    channel: "Alex Pierini",
    views: "6 M vues ",
    date: "il y a 6 mois",
    avatar: "/images/avatar.jpg",
    thumb: "/images/thumb6.png",
  },
  {
    id: 7,
    title: "React + Redux",
    channel: "Alex Pierini",
    views: "7 M vues ",
    date: "il y a 7 mois",
    avatar: "/images/avatar.jpg",
    thumb: "/images/thumb7.png",
  },
  {
    id: 8,
    title: "Alex Pierini - Développeur",
    channel: "Alex Pierini",
    views: "8 M vues ",
    date: "il y a 8 mois",
    avatar: "/images/avatar.jpg",
    thumb: "/images/thumb8.png",
  },
];

function Home({darkMode, setDarkMode}) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <AppBar color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuIcon}
            aria-label="menu"
          >
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
            value={darkMode}
            onChange={() => setDarkMode(!darkMode)}
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
      <Box display="flex">
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

        <Box p={8}>
          <Toolbar />
          <Typography
            variant="h5"
            color="textPrimary"
            style={{ fontWeight: 600 }}
          >
            Recommandé
          </Typography>
          <Grid container spacing={4}>
            {videos.map((item, index) => (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box>
                  <img
                    style={{ width: "100%" }}
                    alt={item.title}
                    src={item.thumb}
                  />
                </Box>
                <Typography
                  style={{ fontWeight: 600 }}
                  gutterBottom
                  variant="body1"
                  color="textPrimary"
                >
                  {item.title}
                </Typography>
                <Typography display="block" variant="body1" color="textPrimary">
                  {item.channel}
                </Typography>
                <Typography variant="bady2" color="textSecondary">
                  {`${item.views} + ${item.date}`}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default Home;
