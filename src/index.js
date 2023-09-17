import "./i18n.jsx";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import store from "./redux/store";
import "swiper/css";
import "swiper/css/bundle";
import App from "./App.js";
import "./react-toastify.css";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
reportWebVitals();
