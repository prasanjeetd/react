import React from "react";
import { Route, Routes } from "react-router-dom";
import { AdvancedTS } from "./AdvancedTs";
import { ContextContainer } from "./ContextComp";
import { GenericTS } from "./GenericTS";
import { HoCExample } from "./HoC";
import { Home } from "./Home/Home";
import Layout, { IndexLayout } from "./Layout";
import Navigation from "./Navigation";
import { Page1 } from "./Page1/Page1";
import { ProviderComponent } from "./ReduxComps/ProviderComp";

const AppRouter = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Routes>
        <Route path="app" element={<Layout />}>
          <Route index element={<IndexLayout />} />
          <Route path="home" element={<Home />} />
          <Route path="page1" element={<Page1 />} />
          <Route path="hoc" element={<HoCExample />} />
          <Route path="advanced-ts" element={<AdvancedTS />} />
          <Route path="generic-ts" element={<GenericTS />} />
          <Route path="redux" element={<ProviderComponent />} />
        </Route>
        <Route path="context" element={<ContextContainer />}></Route>
      </Routes>
    </div>
  );
};

export default AppRouter;
