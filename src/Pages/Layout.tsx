import React from "react";
import { Outlet } from "react-router";
import { Home } from "./Home/Home";

const Layout = () => {
  return (
    <div>
      Layout
      <Outlet />
    </div>
  );
};

export default Layout;

export const IndexLayout = () => {
  return <div>Index Page</div>;
};
