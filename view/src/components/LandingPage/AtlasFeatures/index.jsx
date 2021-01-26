import {
  Box,
  Fade,
  Grid,
  makeStyles,
  Slide,
  Typography,
} from "@material-ui/core";
import React from "react";
import atlasPriceSvg from "../../../svg/atlas-price-svg.svg";
import atlasMoreSvg from "../../../svg/atlas-more-svg.svg";
import atlasPillarSvg from "../../../svg/atlas-pillar-svg.svg";
import { Waypoint } from "react-waypoint";

const useStyles = makeStyles((theme) => ({
  root: {},
  gridContainer: {
    height: "100%",
    marginBottom: "10em",
  },

  svgFeaturesIcon: {
    transition: "all 0.5s ease",
    height: "100px",
    width: "100px",
    paddingBottom: "1.5em",
    marginTop: "6em",
    filter:
      "invert(31%) sepia(10%) saturate(2153%) hue-rotate(151deg) brightness(96%) contrast(91%)",
    "&:hover": {
      filter:
        "invert(39%) sepia(48%) saturate(1694%) hue-rotate(337deg) brightness(106%) contrast(89%)",
    },
  },

  featureTitle: {
    marginBottom: "0.75em",
    transition: "all 0.5s ease",
    fontFamily: "Barlow",
    fontWeight: 700,
    fontSize: "2em",
    textAlign: "center",
    color: theme.palette.secondary.main,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },

  featureCaption: {
    width: "75%",
    textAlign: "center",
    fontSize: "1.14285714em",
    fontFamily: "Barlow",
  },

  sectionTitle: {
    marginTop: "2em",
    fontSize: "2.57em",
    width: "85%",
    fontFamily: "Barlow",
    textAlign: "center",
    color: theme.palette.secondary.main,
    fontWeight: 600,
    [theme.breakpoints.up("sm")]: {
      fontSize: "3em",
    },
  },

  fadeContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

function AtlasFeatures({ featuresRef }) {
  const classes = useStyles();
  const [featureItem, setFeatureItem] = React.useState(false);

  const handleEnterFeatureItem = () => {
    setFeatureItem(true);
  };

  return (
    <div ref={featuresRef} className={classes.root}>
      <Grid
        container
        justify="center"
        alignItems="flex-start"
        className={classes.gridContainer}
      >
        <Grid xs={12} item container justify="center">
          <Box className={classes.sectionTitle}>
            Dê um <span style={{ fontWeight: 900 }}>upgrade</span> em seu
            negócio com o Atlas Code
          </Box>
        </Grid>
        <Waypoint
          bottomOffset={450}
          onEnter={handleEnterFeatureItem}
        ></Waypoint>

        <Grid xs={12} md={4} item container justify="center">
          <Box display="flex" alignItems="center" flexDirection="column">
            <Slide in={featureItem} direction={"up"} timeout={{ enter: 750 }}>
              <div>
                <img
                  className={classes.svgFeaturesIcon}
                  src={atlasPriceSvg}
                  alt=""
                />
              </div>
            </Slide>

            <Fade in={featureItem} timeout={{ enter: 2000 }}>
              <div className={classes.fadeContainer}>
                <Typography className={classes.featureTitle} variant="h3">
                  Preços acessíveis.
                </Typography>
                <Typography className={classes.featureCaption}>
                  Sem sustos na hora do orçamento. Conte com uma empresa
                  especializada que dará todo o apoio necessário para
                  desenvolver estratégias para alavancar o seu negócio online.
                </Typography>
              </div>
            </Fade>
          </Box>
        </Grid>
        <Grid xs={12} md={4} item container justify="center">
          <Box display="flex" alignItems="center" flexDirection="column">
            <Slide in={featureItem} direction={"up"} timeout={{ enter: 850 }}>
              <div>
                <img
                  className={classes.svgFeaturesIcon}
                  src={atlasPillarSvg}
                  alt=""
                />
              </div>
            </Slide>
            <Fade in={featureItem} timeout={{ enter: 2000 }}>
              <div className={classes.fadeContainer}>
                <Typography className={classes.featureTitle} variant="h3">
                  Design. Eficiência. Qualidade.
                </Typography>
                <Typography className={classes.featureCaption}>
                  Nossos serviços são otimizados e pensados do começo ao fim de
                  cada projeto. O nosso objetivo é simples: entregar ótimos
                  resultados e melhorar a experiência entre seus clientes e o
                  seu negócio.
                </Typography>
              </div>
            </Fade>
          </Box>
        </Grid>
        <Grid xs={12} md={4} item container justify="center">
          <Box display="flex" alignItems="center" flexDirection="column">
            <Slide in={featureItem} direction="up" timeout={{ enter: 950 }}>
              <div>
                <img
                  className={classes.svgFeaturesIcon}
                  src={atlasMoreSvg}
                  alt=""
                />
              </div>
            </Slide>
            <Fade in={featureItem} timeout={{ enter: 2000 }}>
              <div className={classes.fadeContainer}>
                <Typography className={classes.featureTitle} variant="h3">
                  Personalizado para você.
                </Typography>
                <Typography className={classes.featureCaption}>
                  Aposte na originalidade e mostre a sua identidade de forma
                  profissional no mercado. Destaque-se de seus concorrentes com
                  uma boa experiência digital e alcance mais clientes.
                </Typography>
              </div>
            </Fade>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default AtlasFeatures;
