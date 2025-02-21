// src/App.js
import React, { useRef } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Home from "./Home";
import AdminViewWrapper from "./components/AdminViewWrapper";
import PublicViewWrapper from "./components/PublicViewWrapper";
import TestFirestore from "./components/TestFirestore";
import Layout from "./Layout";
import Info from "./Info";
import "./App.css";
import MapTablePage from "./components/MapTablePage";

const AppRoutes = () => {
  const location = useLocation();
  const nodeRef = useRef(null);

  return (
    <TransitionGroup>
      <CSSTransition
        nodeRef={nodeRef}
        key={location.key}
        timeout={300}
        classNames="page"
        appear
      >
        <div ref={nodeRef}>
          <Routes location={location}>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="maps" element={<MapTablePage />} />
              <Route path="info" element={<Info />} />
              <Route path="public/:cardID" element={<PublicViewWrapper />} />
              <Route path="admin/:cardID" element={<AdminViewWrapper />} />
              <Route path="test" element={<TestFirestore />} />
            </Route>
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

const App = () => {
  return (
    <div className="app-background">
      <BrowserRouter>
        <div className="App">
          <AppRoutes />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
