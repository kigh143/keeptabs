import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Lock from "./screens/Lock";
import Main from "./screens/Main";
import Notfound from "./screens/Notfound";
import Project from "./screens/Project";
import Settings from "./screens/Settings";
import Statistics from "./screens/Statistics";

const Navigation: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/keeptabs/home" component={Main} />
        <Route exact path="/keeptabs/project" component={Project} />
        <Route exact path="/keeptabs/settings" component={Settings} />
        <Route exact path="/keeptabs/statistics" component={Statistics} />
        <Route exact path="/keeptabs" component={Lock} />
        <Route component={Notfound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
