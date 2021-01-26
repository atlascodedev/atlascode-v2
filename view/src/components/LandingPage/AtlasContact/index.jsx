import { Grid, makeStyles, useMediaQuery } from "@material-ui/core";
import React from "react";
import svgImage4 from "../../../svg/svg-image-4.svg";
import LazyImage from "../../UtilityComponents/LazyImage";
import ContactForm from "./ContactForm";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
  },

  contactFormContainer: {
    marginTop: "7em",
    marginBottom: "7em",
    transition: "all 0.5s ease",
    width: "325px",
    [theme.breakpoints.up("sm")]: {
      width: "550px",
    },
    [theme.breakpoints.up("md")]: {
      width: "450px",
    },
  },

  contactFormHeader: {
    backgroundColor: "#333",
    borderTopLeftRadius: "25px",
    borderTopRightRadius: "15px",
    color: "#FFF",
    padding: "0.35em",
    fontSize: "2em",
    fontWeight: 900,
    textAlign: "center",
    transition: "all 0.5s ease",
  },

  contactFormContent: {
    transition: "all 0.5s ease",
    backgroundColor: "#FFF",
    borderBottomLeftRadius: "25px",
    borderBottomRightRadius: "25px",
    padding: "1em",
    [theme.breakpoints.up("md")]: {
      padding: "2.5em",
    },
  },
}));

function AtlasContact({ footerRef }) {
  const medium = useMediaQuery("(min-width:600px)");
  const large = useMediaQuery("(min-width: 1200px)");
  const extraLarge = useMediaQuery("(min-width: 1920px)");
  const classes = useStyles();

  const svgSize = extraLarge
    ? "550px"
    : large
    ? "500px"
    : medium
    ? "350px"
    : "250px";

  return (
    <div ref={footerRef} className={classes.root}>
      <Grid container justify="center">
        <Grid xs={12} md={6} item container justify="center">
          <div className={classes.contactFormContainer}>
            <div className={classes.contactFormHeader}>Fale conosco</div>
            <div className={classes.contactFormContent}>
              <ContactForm />
            </div>
          </div>
        </Grid>

        <Grid
          alignItems="center"
          xs={12}
          md={6}
          item
          container
          justify="center"
        >
          <LazyImage width={svgSize} height={svgSize} image={svgImage4} />
        </Grid>
      </Grid>
    </div>
  );
}

export default AtlasContact;
