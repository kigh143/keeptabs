import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./screens/Main";
import Notfound from "./screens/Notfound";
import Project from "./screens/Project";

const Navigation: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/project" exact component={Project} />
        <Route component={Notfound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
