import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./screens/Main";
import Project from "./screens/Project";

const Navigation: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} />
        <Route path="/project" component={Project} />
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
