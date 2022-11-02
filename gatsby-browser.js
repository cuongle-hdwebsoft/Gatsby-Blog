import React from "react";
import Layout from "./src/components/Layout";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/scss/index.scss";

// Logs when the client route changes
export const onRouteUpdate = ({ location, prevLocation }) => {
  // console.log("new pathname", location.pathname);
  // console.log("old pathname", prevLocation ? prevLocation.pathname : null);
};

// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
