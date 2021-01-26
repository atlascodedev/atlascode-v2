import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "../LandingPage/";

const ContactPage = (props) => {
  return <div>Contact page</div>;
};

function AtlasRouter(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/contact" component={ContactPage} />
      </Switch>
    </Router>
  );
}

export default AtlasRouter;
