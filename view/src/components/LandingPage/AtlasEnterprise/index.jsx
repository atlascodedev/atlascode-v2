import {
  Button,
  Container,
  Grid,
  makeStyles,
  Slide,
  useMediaQuery,
} from "@material-ui/core";
import React from "react";
import svgImage3 from "../../../svg/svg-image-3.svg";
import LazyImage from "../../UtilityComponents/LazyImage";
import { Waypoint } from "react-waypoint";

const useStyles = makeStyles((theme) => ({
  root: {
    transition: "all 0.5s ease",
    width: "auto",
    marginBottom: "3em",
  },

  enterpriseTextContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      marginLeft: "1em",
    },
  },

  enterpriseText: {
    fontSize: "2.57em",
    color: theme.palette.secondary.main,
    fontWeight: 600,
    fontFamily: "Barlow",
    textAlign: "center",
    width: "90%",
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
    },
  },

  enterpriseCaption: {
    marginTop: "1em",
    fontSize: "1.5em",
    width: "90%",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      textAlign: "left",
    },
  },

  gridItemOne: {
    order: 1,
    [theme.breakpoints.up("md")]: {
      order: 0,
    },
  },

  gridItemTwo: {
    order: 0,
    [theme.breakpoints.up("md")]: {
      order: 1,
    },
  },

  strong: {
    color: theme.palette.secondary.main,
    fontWeight: 900,
  },

  ctaEnteprise: {
    marginTop: "2em",
    marginBottom: "1em",
    width: "90%",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-start",
    },
  },
}));

function AtlasEnterprise({ enterpriseRef, scrollToFooter }) {
  const medium = useMediaQuery("(min-width:600px)");
  const large = useMediaQuery("(min-width: 1200px)");
  const extraLarge = useMediaQuery("(min-width: 1920px)");
  const classes = useStyles();
  const [enterpriseTextShow, setEnterpriseTextShow] = React.useState(false);
  const handleEnterpriseTextShow = () => {
    setEnterpriseTextShow(true);
  };

  const svgSize = extraLarge
    ? "700px"
    : large
    ? "500px"
    : medium
    ? "350px"
    : "300px";

  return (
    <div ref={enterpriseRef} className={classes.root}>
      <Container>
        <Grid container justify="center">
          <Grid
            className={classes.gridItemOne}
            xs={12}
            md={6}
            item
            container
            justify="center"
            alignItems="center"
          >
            <Slide
              mountOnEnter
              in={enterpriseTextShow}
              direction="left"
              timeout={{ enter: 1350 }}
            >
              <div className={classes.enterpriseTextContainer}>
                <div className={classes.enterpriseText}>
                  Procurando por{" "}
                  <strong className={classes.strong}>
                    habilidades específicas
                  </strong>{" "}
                  para o seu próximo projeto?
                </div>
                <div className={classes.enterpriseCaption}>
                  {
                    "O Atlas Code trabalha em parceria com empresas e agências de desenvolvimento para criação de sites, aplicativos e projetos específicos de software."
                  }
                </div>
                <div className={classes.ctaEnteprise}>
                  <Button
                    onClick={scrollToFooter}
                    variant="outlined"
                    color="primary"
                  >
                    Fale conosco
                  </Button>
                </div>
              </div>
            </Slide>
          </Grid>
          <Waypoint onEnter={handleEnterpriseTextShow}></Waypoint>

          <Grid
            className={classes.gridItemTwo}
            xs={12}
            md={6}
            item
            container
            justify="center"
          >
            <LazyImage height={svgSize} width={svgSize} image={svgImage3} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default AtlasEnterprise;
