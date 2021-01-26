import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Box, Button, Fab, Grid, Hidden, Paper } from "@material-ui/core";
import AtlasAppDrawer from "./AtlasAppDrawer";
import HideOnScroll from "../../UtilityComponents/HideOnScroll";
import ScrollTopComponent, {
  ScrollTop,
} from "../../UtilityComponents/ScrollBackTop";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  appBarSpacer: {
    minHeight: "50px",
    top: 0,
    opacity: 0,
  },

  title: {
    flexGrow: 1,
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeightMedium,
  },

  mobileButtonDrawer: {
    margin: 0,
  },

  appBarButton: {
    color: "#FFF",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "translateY(-2.5px)",
      color: theme.palette.primary.main,
    },
  },

  toolBar: {
    [theme.breakpoints.up("md")]: {
      marginTop: "1em",
      marginBottom: "1em",
    },
  },

  atlasLogoClass: {
    width: "10em",
    marginLeft: "3em",
    [theme.breakpoints.up("md")]: {
      width: "15em",
    },
  },
}));

export default function AtlasAppBar({ menu, ...props }) {
  const classes = useStyles();
  const [atlasDrawerState, setAtlasDrawerState] = React.useState(false);

  const handleAtlasDrawerOpen = () => {
    setAtlasDrawerState(true);
  };

  const handleAtlasDrawerClosed = () => {
    setAtlasDrawerState(false);
  };
  return (
    <div className={classes.root}>
      <AtlasAppDrawer
        menuItems={menu}
        open={atlasDrawerState}
        handleClose={handleAtlasDrawerClosed}
        handleOpen={handleAtlasDrawerOpen}
      />
      <div id="back-to-top-anchor" className={classes.appBarSpacer}></div>

      <HideOnScroll {...props}>
        <AppBar elevation={8} color="secondary" position="fixed">
          <Toolbar className={classes.toolBar}>
            <Grid container direction="row" alignItems="center">
              <Grid item xs={4} sm={4}>
                <Box display="flex" justifyContent="center" pt={1}>
                  <Button>
                    <Link to="/">
                      <img
                        className={classes.atlasLogoClass}
                        src={null}
                        alt=""
                      />
                    </Link>
                  </Button>
                </Box>
              </Grid>

              <Hidden only={["xs", "sm"]}>
                <Grid
                  item
                  xs={6}
                  sm={7}
                  spacing={5}
                  justify="flex-end"
                  container
                >
                  {menu.map((item, index) => (
                    <Grid item key={index}>
                      <Button
                        className={classes.appBarButton}
                        onClick={item.scrollFunction}
                      >
                        {item.menuName}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </Hidden>

              <Hidden only={["md", "lg", "xl"]}>
                <Grid
                  item
                  style={{
                    flexGrow: 1,
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <IconButton
                    onClick={handleAtlasDrawerOpen}
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                  >
                    <MenuIcon />
                  </IconButton>
                </Grid>
              </Hidden>
            </Grid>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <ScrollTopComponent {...props} />
    </div>
  );
}
