import React from "react";
import Layout from "./src/components/Layout";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/scss/index.scss";
import { Provider } from "react-redux";
import store from "./src/redux/index";

// // Adds a class name to the body element
// export const onRenderBody = ({ setBodyAttributes }, pluginOptions) => {
//   if (process.env.NODE_ENV !== `production`) {
//     return null;
//   }
// };

export const wrapPageElement = ({ element, props }) => {
  console.log("server side rendering");

  return (
    <Provider store={store}>
      <Layout {...props}>{element}</Layout>
    </Provider>
  );
};
