import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/scss/index.scss";
import { Provider } from "react-redux";
import store from "./src/redux/index";
import AuthProvider from "./src/components/AuthProvider";

// // Adds a class name to the body element
// export const onRenderBody = ({ setBodyAttributes }, pluginOptions) => {
//   if (process.env.NODE_ENV !== `production`) {
//     return null;
//   }
// };

export const wrapPageElement = ({ element, props }) => {
  return (
    <Provider store={store}>
      <AuthProvider>{element}</AuthProvider>
    </Provider>
  );
};
