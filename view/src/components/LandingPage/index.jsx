import React, { useRef } from "react";
import AtlasAppBar from "./AtlasAppBar";
import AtlasHero from "./AtlasHero";
import { makeStyles } from "@material-ui/core";
import AtlasServices from "./AtlasServices";
import AtlasFeatures from "./AtlasFeatures";
import AtlasEnterprise from "./AtlasEnterprise";
import AtlasContact from "./AtlasContact";
import AtlasFooter from "./AtlasFooter";
import AtlasShowCase from "./AtlasShowCase";

const useStyles = makeStyles((theme) => ({
  landingPage: {
    overflow: "hidden",
  },
}));

function LandingPage(props) {
  const classes = useStyles();

  const contactRef = useRef(null);
  const servicesRef = useRef(null);
  const showCaseRef = useRef(null);

  const handleScrollToFooter = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleScrollToServices = () => {
    servicesRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleScrollToShowCase = () => {
    showCaseRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const menuButtonsWithRef = [
    {
      menuName: "Serviços",
      reference: servicesRef,
      scrollFunction: handleScrollToServices,
    },

    {
      menuName: "Showcase",
      reference: showCaseRef,
      scrollFunction: handleScrollToShowCase,
    },

    {
      menuName: "Contato",
      reference: contactRef,
      scrollFunction: handleScrollToFooter,
    },
  ];

  return (
    <div className={classes.landingPage}>
      <div>
        <AtlasAppBar menu={menuButtonsWithRef} />
      </div>

      <AtlasHero scrollToFooter={handleScrollToFooter} />

      <div>
        <AtlasFeatures />
      </div>

      <div ref={servicesRef}>
        <AtlasServices />
      </div>

      <div>
        <AtlasEnterprise scrollToFooter={handleScrollToFooter} />
      </div>

      <div ref={showCaseRef}>
        <AtlasShowCase
          img={"https://i.imgur.com/IaHAmcT.png"}
          title={"Site institucional"}
          caption={
            "Fortaleça a imagem da sua marca e passe mais credibilidade com um site institucional de qualidade."
          }
          callToAction={"Fale conosco"}
          clickAction={handleScrollToFooter}
          reverse
          light
        />
        <AtlasShowCase
          img={"https://i.imgur.com/yC1bm9I.png"}
          title={"Loja Virtual"}
          caption={
            "Ofereça seus produtos em uma plataforma totalmente responsiva e pensada na experiência do usuário."
          }
          callToAction={"Fale conosco"}
          clickAction={handleScrollToFooter}
        />
      </div>

      <div ref={contactRef}>
        <AtlasContact />
      </div>

      <AtlasFooter />
    </div>
  );
}

export default LandingPage;
