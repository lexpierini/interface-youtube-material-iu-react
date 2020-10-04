import React from "react";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

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

export default (props) => {
  return (
    <Box p={8}>
      <Toolbar />
      <Typography variant="h5" color="textPrimary" style={{ fontWeight: 600 }}>
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
  );
};
