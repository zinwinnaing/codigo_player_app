import React, { Suspense } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Skeleton } from "antd";
import Page404 from "../pages/errorPages/Page404";
import Login from "../pages/login/Login";
import Player from "../pages/player/Player";

const App = () => {
  console.log("in app");
  return (
    <Router>
      <Suspense fallback={<Skeleton active />}>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/players" element={<Player />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
