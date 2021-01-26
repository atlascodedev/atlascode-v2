import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  useMediaQuery,
} from "@material-ui/core";
import React from "react";
import atlasSvg from "../../../svg/ATLAS-SVG-HERO.svg";
import LazyImage from "../../UtilityComponents/LazyImage";

const useStyles = makeStyles((theme) => ({
  atlasHeroContainerGrid: {
    display: "grid",

    gridTemplateColumns: "1fr",
    gridTemplateRows: "1fr 1fr",
    // height: "calc(100vh - 80px)",
    color: "#FFF",
    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr",
    },
  },

  atlasHeroChildGrid: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    marginBottom: "1em",
    marginTop: "1em",
  },

  atlasGridOne: {
    marginTop: "2.5em",
    order: "-1",
    [theme.breakpoints.up("md")]: {
      order: "1",
    },
  },

  atlasGridTwo: {
    order: "0",
    [theme.breakpoints.up("md")]: {
      order: "0",
    },
  },

  heroText: {
    fontSize: "1.78em",
    fontFamily: "Barlow",
    fontWeight: "600",

    [theme.breakpoints.up("sm")]: {
      fontSize: "3em",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "3em",
      letterSpacing: "2px",
      lineHeight: "1.15em",
    },
  },

  heroCaption: {
    marginTop: "1.5em",
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.5em",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "2em",
      lineHeight: "1.25em",
    },
  },

  heroCta: {
    fontSize: "1em",
    textTransform: "capitalize",
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.5em",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "1.75em",
    },
  },

  betterContainer: {
    [theme.breakpoints.up("sm")]: {
      paddingRight: "75px",
      paddingLeft: "75px",
    },
  },

  ctaContainer: {
    [theme.breakpoints.up("lg")]: {
      width: "75%",
    },

    [theme.breakpoints.up("xl")]: {
      width: "60%",
    },
  },

  helpme: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

function AtlasHero({ scrollToFooter }) {
  const classes = useStyles();
  const medium = useMediaQuery("(min-width:600px)");
  const large = useMediaQuery("(min-width: 1200px)");
  const extraLarge = useMediaQuery("(min-width: 1920px)");

  const svgSize = extraLarge
    ? "850px"
    : large
    ? "650px"
    : medium
    ? "450px"
    : "250px";

  return (
    <div className={classes.helpme}>
      <Container maxWidth={"xl"} className={classes.betterContainer}>
        <div className={classes.atlasHeroContainerGrid}>
          <div
            className={`${classes.atlasHeroChildGrid} ${classes.atlasGridOne}`}
          >
            <Box>
              <LazyImage height={svgSize} image={atlasSvg} />
            </Box>
          </div>
          <div
            className={`${classes.atlasHeroChildGrid} ${classes.atlasGridTwo}`}
          >
            <Box className={classes.ctaContainer}>
              <Box className={classes.heroText}>
                Alcance mais clientes e apresente o seu negócio de forma
                profissional.
              </Box>
              <Box className={classes.heroCaption}>
                Criação de websites personalizados, campanhas promocionais no
                Facebook, Instagram e Google Ads.
              </Box>
              <Box mt={3}>
                <Button
                  onClick={scrollToFooter}
                  className={classes.heroCta}
                  variant="contained"
                  color="primary"
                >
                  Fale conosco
                </Button>
              </Box>
            </Box>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AtlasHero;
