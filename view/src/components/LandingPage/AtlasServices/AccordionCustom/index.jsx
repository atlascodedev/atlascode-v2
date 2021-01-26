import React from "react";
import styled from "styled-components";
import { KeyboardArrowDown, Stars } from "@material-ui/icons";
import { IconButton, SvgIcon } from "@material-ui/core";

const AccordionSingleTop = styled.div`
  max-width: 100%;
  padding: 0.5em;
  text-align: center;
  transition: all 0.3s ease;
  width: 100%;
  background-color: ${(props) => (props.open ? "#F15D3C" : "#333")};
  color: #fff;
  font-family: "Barlow";
  border-top-right-radius: ${(props) => (props.roundTop ? "15px" : "0px")};
  border-top-left-radius: ${(props) => (props.roundTop ? "15px" : "0px")};
  border-bottom-right-radius: ${(props) =>
    props.roundBottom ? "15px" : "0px"};
  border-bottom-left-radius: ${(props) => (props.roundBottom ? "15px" : "0px")};
  font-weight: 700;
  display: grid;
  grid-template-columns: 0.5fr 1fr 0.5fr;
  align-items: center;
  font-size: 1.15em;
`;

const AccordSingleTopIconContainer = styled.div`
  justify-self: center;
`;

const AccordSingleTopTitleContainer = styled.div`
  justify-self: start;
  align-self: center;
`;

const AccordSingleTopArrowContainer = styled.div`
  color: "#FFF";
  transform: ${(props) => (props.open ? "rotate(180deg)" : "rotate(0deg)")};
  transition: all 0.15s ease;
`;

const AccordSingleBottom = styled.div`
  transition: max-height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  overflow: hidden;
  max-height: ${(props) => (props.open ? "250px" : "0px")};
`;

const AccordionContainer = styled.div`
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  max-width: ${(props) => (props.open ? "650px" : "500px")};
  //@media (min-width: 768px) {
  // max-width: ${(props) => (props.open ? "750px" : "600px")};
  //}
  transition: all 0.2s ease-out;
  margin: ${(props) => (props.open ? "2.75em 0em 2em 0em" : 0)};
  transition-delay: 100ms;
  transition-property: all;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

const AccordTextInner = styled.div`
  overflow: hidden;
  padding: 1.5em;
  /* word-break: break-all; */
`;

export const AccordContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 3em;
  margin-bottom: 5em;
`;

function AccordionCustom({
  roundTop,
  roundBottom,
  icon: AccordIcon,
  text,
  title,
}) {
  const [accordOpen, setAccordOpen] = React.useState(false);
  const handleAccordOpen = () => {
    setAccordOpen((prevState) => !prevState);
  };

  const ActiveIcon = AccordIcon ? <AccordIcon /> : <Stars />;
  const AccordTitle = title ? title : "Placeholder title";
  const AccordContent = text
    ? text
    : "Place holder lorem ipsum content text here, pass the TEXT prop with your desired text to each accordion item to replace this";

  return (
    <AccordionContainer open={accordOpen}>
      <AccordionSingleTop
        roundTop={roundTop || accordOpen}
        roundBottom={roundBottom && !accordOpen}
        open={accordOpen}
        onClick={handleAccordOpen}
      >
        <AccordSingleTopIconContainer>
          <SvgIcon>{ActiveIcon}</SvgIcon>
        </AccordSingleTopIconContainer>
        <AccordSingleTopTitleContainer>
          {AccordTitle}
        </AccordSingleTopTitleContainer>
        <AccordSingleTopArrowContainer open={accordOpen}>
          <IconButton style={{ color: "white" }}>
            <SvgIcon>
              <KeyboardArrowDown style={{ color: "white" }} />
            </SvgIcon>
          </IconButton>
        </AccordSingleTopArrowContainer>
      </AccordionSingleTop>
      <AccordSingleBottom open={accordOpen}>
        <AccordTextInner open={accordOpen}>{AccordContent}</AccordTextInner>
      </AccordSingleBottom>
    </AccordionContainer>
  );
}

export default AccordionCustom;
