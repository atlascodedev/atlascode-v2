import {
  Box,
  Divider,
  Grid,
  IconButton,
  makeStyles,
  SvgIcon,
} from "@material-ui/core";
import { Facebook, Instagram, WhatsApp } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#3C4043",
    color: "#FFF",
    padding: 20,
    fontSize: "1.5em",
  },

  copyrightText: {
    fontSize: "0.8em",
    textAlign: "center",
  },

  socialIcons: {
    transition: "all 0.5s ease",
    marginLeft: "0.5em",
    marginRight: "0.5em",
    fontSize: "2.5em",
    color: "white",

    "&:hover": {
      color: theme.palette.primary.main,
      transform: "translateY(-2.5px)",
    },
  },
}));

const getYear = new Date().getFullYear();

function AtlasFooter({ footerRef }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        justify="center"
        direction="column"
        alignItems="center"
        spacing={3}
      >
        <Grid item>
          <Box fontWeight={700}>Telefones</Box>
        </Grid>

        <Grid item>São Paulo e região:</Grid>

        <Grid item>{"(11) 9-6311-7788"}</Grid>

        <Grid container justify="center" style={{ textAlign: "center" }} item>
          Porto Alegre e região metropolitana:
        </Grid>
        <Grid item>{"(51) 9-8477-3704"}</Grid>

        <Grid item>
          <Box fontWeight={700}>E-mail</Box>
        </Grid>

        <Grid item>{"atendimento@atlascode.dev"}</Grid>

        <Grid style={{ fontSize: "2.5em" }} item container justify="center">
          <Grid item>
            <a target="_blank" href={"https://www.facebook.com/atlascodedev"}>
              <IconButton>
                <Facebook className={classes.socialIcons} />
              </IconButton>
            </a>
          </Grid>

          <Grid item>
            <a
              target="_blank"
              href={"https://www.instagram.com/atlascode/?hl=pt-br"}
            >
              <IconButton>
                <Instagram className={classes.socialIcons} />
              </IconButton>
            </a>
          </Grid>

          <Grid item>
            <a target="_blank" href={"https://wa.link/9nq6wy"}>
              <IconButton>
                <WhatsApp className={classes.socialIcons} />
              </IconButton>
            </a>
          </Grid>
        </Grid>
        <Divider style={{ color: "#161616", width: "100%" }}></Divider>
        <Grid
          item
          container
          justify="center"
          direction="column"
          alignItems="center"
          className={classes.copyrightText}
        >
          <Grid item>
            <Box my={1}>© {getYear} Todos direitos reservados</Box>
          </Grid>
          <Grid item>
            <Box my={1}>
              {"AtlasCode Dev - Desenvolvimento web & estratégia"}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default AtlasFooter;
