import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Slide,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Waypoint } from "react-waypoint";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: (lightBg) => (lightBg.light ? lightBg.light : "white"),
    padding: "1em",
    [theme.breakpoints.up("md")]: {
      padding: "5em",
    },
  },

  imageClass: {
    width: "auto",
    height: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },

  showCaseCaption: {
    marginBottom: "1.5em",
  },

  showCaseTitle: {
    fontSize: "1.78em",
    color: theme.palette.secondary.main,
    fontWeight: 700,
    marginBottom: "0.65em",
    [theme.breakpoints.up("md")]: {
      fontSize: "3em",
    },
  },

  showCaseCta: {
    marginBottom: "1.5em",
  },
  imageContainer: {
    [theme.breakpoints.up("md")]: {
      order: (orderReverse) => (orderReverse.order ? orderReverse.order : 0),
    },
  },

  textGrid: {
    justifyContent: "center",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
      justifyContent: "flex-start",
    },
  },
}));

function AtlasShowCase({
  img,
  title,
  caption,
  callToAction,
  light,
  clickAction,
  reverse,
}) {
  const lightBg = light ? "#f5f5f5" : null;
  const orderReverse = reverse ? 1 : null;

  const classes = useStyles({ light: lightBg, order: orderReverse });
  const [imgShow, setImageShow] = React.useState(false);
  const handleImageShow = () => {
    setImageShow(true);
  };

  return (
    <div className={classes.root}>
      <Waypoint bottomOffset={150} onEnter={handleImageShow}></Waypoint>
      <Container>
        <Grid spacing={5} container justify="flex-start">
          <Grid
            container
            className={classes.imageContainer}
            item
            xs={12}
            md={7}
          >
            <Slide
              direction={reverse ? "left" : "right"}
              in={imgShow}
              timeout={{ enter: 1000 }}
            >
              <div>
                <img
                  className={classes.imageClass}
                  src={img}
                  alt="Site institucional"
                />
              </div>
            </Slide>
          </Grid>
          <Grid className={classes.textGrid} container item xs={12} md={4}>
            <Box display="flex" alignItems="end">
              <Typography className={classes.showCaseTitle}>{title}</Typography>
            </Box>
            <Box>
              <Typography className={classes.showCaseCaption}>
                {caption}
              </Typography>
              <Button
                onClick={() => clickAction()}
                className={classes.showCaseCta}
                variant="outlined"
                color="primary"
              >
                {callToAction}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default AtlasShowCase;
