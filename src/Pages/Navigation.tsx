import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
    >
      <ul>
        <li>
          <Link to="app">App</Link>
        </li>
        <li>
          <Link to="context">Context</Link>
        </li>
        <li>
          <Link to="app/home">Home</Link>
        </li>
        <li>
          <Link to="app/page1">Page1</Link>
        </li>
        <li>
          <Link to="app/hoc">Higher order Component (HoC)</Link>
        </li>
        <li>
          <Link to="app/advanced-ts">Advanced Typescript</Link>
        </li>
        <li>
          <Link to="app/generic-ts">Generic Typescript</Link>
        </li>
        <li>
          <Link to="app/redux">Redux</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
