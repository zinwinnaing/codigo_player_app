import React, { Suspense } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Skeleton } from "antd";
import Page404 from "../pages/errorPages/Page404";
import Login from "../pages/login/Login";
import Player from "../pages/player/Player";
import Team from "../pages/teams/Team";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Skeleton active />}>
        <Switch>
          <Route exact path="/">
            <Login></Login>
          </Route>
          <Route exact path="/players">
            <Player />
          </Route>
          <Route exact path="/teams">
            <Team />
          </Route>
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
