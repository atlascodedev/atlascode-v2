import React from "react";
import { Box, Grid, makeStyles, Slide, useMediaQuery } from "@material-ui/core";
import AccordionCustom, { AccordContainerWrapper } from "./AccordionCustom";
import {
  AccountBalance,
  Code,
  Facebook,
  PhoneIphone,
  TouchApp,
  TrackChanges,
} from "@material-ui/icons";
import LazyImage from "../../UtilityComponents/LazyImage";
import svgImage2 from "../../../svg/svg-image-2.svg";
import { Waypoint } from "react-waypoint";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f5f5f5",
    marginTop: "5em",
  },

  gridMainContainer: {
    marginTop: "5em",
  },
  sectionTitle: {
    marginTop: "2em",
    marginBottom: "1.5em",
    fontSize: "2.57em",
    width: "85%",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    fontFamily: "Barlow",
    color: theme.palette.secondary.main,
    fontWeight: 700,
    [theme.breakpoints.up("sm")]: {
      fontSize: "3em",
    },
  },
}));

function AtlasServices({ servicesRef }) {
  const medium = useMediaQuery("(min-width:600px)");
  const large = useMediaQuery("(min-width: 1200px)");
  const extraLarge = useMediaQuery("(min-width: 1920px)");
  const classes = useStyles();
  const [drawerShow, setDrawerShow] = React.useState(false);

  const handleDrawerShow = () => {
    setDrawerShow(true);
  };

  const svgSize = extraLarge
    ? "550px"
    : large
    ? "500px"
    : medium
    ? "350px"
    : "250px";

  return (
    <div ref={servicesRef} className={classes.root}>
      <Waypoint bottomOffset={250} onEnter={handleDrawerShow} />
      <Grid className={classes.gridMainContainer} container>
        <Grid justify="center" item container>
          <Box className={classes.sectionTitle}>
            Tudo que você precisa para seu negócio em um só lugar.
          </Box>
        </Grid>

        <Grid
          style={{ marginTop: "3em" }}
          md={6}
          item
          container
          justify="center"
        >
          <LazyImage width={svgSize} height={svgSize} image={svgImage2} />
        </Grid>
        <Grid md={6} item container justify="center">
          <Slide
            in={drawerShow}
            mountOnEnter
            unmountOnExit
            direction="right"
            timeout={{ enter: 1350 }}
          >
            <div>
              <AccordContainerWrapper>
                <AccordionCustom
                  title={"Desenvolvimento de web"}
                  text={
                    "Apresente seus serviços, produtos ou a sua próxima campanha em uma plataforma totalmente personalizada. Utilizamos as melhores práticas em UI/UX para desenvolver o seu site, hotsite, landing page, loja virtual e aplicativos personalizados.  Certifique-se que seu cliente tenha a melhor experiência possível com o seu negócio ou dê vida à sua ideia para um aplicativo de sucesso."
                  }
                  icon={Code}
                  roundTop
                />
                <AccordionCustom
                  title={"Desenvolvimento de aplicativos"}
                  text={
                    "Impressione seus clientes ou dê vida para suas ideias com um aplicativo moderno construído com as melhores tecnologias disponíveis do mercado para entregar a melhor performance e trazer resultados para seu negócio."
                  }
                  icon={TouchApp}
                />
                <AccordionCustom
                  title="Google Ads"
                  text={
                    "Mostre seus produtos ou serviços no exato momento que potenciais clientes estão pesquisando no Google. Direcione seus serviços estratégicamente para o público-alvo que você desejar e fique sempre no topo das pesquisas."
                  }
                  icon={TrackChanges}
                />
                <AccordionCustom
                  roundBottom
                  title={"Facebook Ads"}
                  text={
                    "Apresente seus produtos ou serviços em anúncios no Facebook e Instagram. Pensamos em estratégias focadas para o seu nicho de mercado com diversos objetivos diferentes, como por exemplo alcance, reconhecimento de marca, tráfego para seu site, entre outros."
                  }
                  icon={Facebook}
                />
              </AccordContainerWrapper>
            </div>
          </Slide>
        </Grid>
      </Grid>
    </div>
  );
}

export default AtlasServices;
