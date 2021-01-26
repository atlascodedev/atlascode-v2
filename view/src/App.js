import { Fade } from "@material-ui/core";
import React, { useEffect } from "react";
import styled from "styled-components";
import AtlasRouter from "./components/AtlasRouter";
import AtlasLoader from "./components/UtilityComponents/AtlasLoader";

function App() {
  const [loader, setLoader] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1750);
  }, []);

  return (
    <div>
      <AtlasRouter />

      <Fade in={loader} unmountOnExit timeout={{ exit: 1500 }}>
        <div>
          <AtlasLoader loader={loader} />
        </div>
      </Fade>
    </div>
  );
}

export default App;
