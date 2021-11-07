import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home/Home";
import Layout, { IndexLayout } from "./Layout";
import Navigation from "./Navigation";
import { Page1 } from "./Page1/Page1";

const AppRouter = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Routes>
        <Route path="app" element={<Layout />}>
          <Route index element={<IndexLayout />} />
          <Route path="home" element={<Home />} />
          <Route path="page1" element={<Page1 />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRouter;
