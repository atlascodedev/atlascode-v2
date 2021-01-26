import { Fade } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import styles from "./loader.module.css";

const LoaderExperiment = styled.div`
  clip-path: polygon(50% 0%, 0% 100%, 50% 68%, 100% 100%);
  height: 125px;
  width: 125px;
  background-color: #ffffff;
  transition: all 0.5s ease;
  @media (min-width: 768px) {
    height: 200px;
    width: 200px;
  }
`;

const LoaderBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f15d3c;
  height: 100vh;
  width: 100%;
  position: fixed;
  z-index: 1500;
  top: 0;
  left: 0;
  transition: all 1s ease;
  opacity: ${(props) => (props.loader ? 1 : 0)};
`;

const LoaderContainerOuter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
`;

const LoaderCenterOuter = styled.div`
  position: absolute;
  left: 50%;
  z-index: 9999;
  transition: all 0.5s ease;
`;

const LoaderCenterInner = styled.div`
  position: relative;
  left: -50%;
  transition: all 0.5s ease;
`;

function AtlasLoader({ loader }) {
  if (loader) {
    window.document.querySelector("body").style.display = "fixed";
    window.document.querySelector("body").style.overflow = "hidden";
  } else {
    window.document.querySelector("body").style.display = "initial";
    window.document.querySelector("body").style.overflow = "initial";
  }

  return (
    <div>
      <LoaderBackground loader={loader}>
        <LoaderContainerOuter>
          <LoaderCenterOuter>
            <LoaderCenterInner>
              <LoaderExperiment />
            </LoaderCenterInner>
          </LoaderCenterOuter>
          <div className={styles.loader}></div>
        </LoaderContainerOuter>
      </LoaderBackground>
    </div>
  );
}

export default AtlasLoader;
