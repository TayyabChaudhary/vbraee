import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Router from "./router/index.jsx";
import "../public/assets/css/main.css";
import "../public/assets/css/responsive.css";
import { NavProvider } from "./store/NavContext.jsx";
import { ModalProvider } from "./store/ModalContext.jsx";
import { SideBarProvider } from "./store/SideBarContext.jsx";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { UserProvider } from "./store/Usercontext";


createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <UserProvider>
    <ModalProvider>
      <NavProvider>
       <SideBarProvider>
       <RouterProvider router={Router} />
       </SideBarProvider>
      </NavProvider>
    </ModalProvider>
    </UserProvider>
    </Provider>
  </React.StrictMode>
);
