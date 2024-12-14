import { ModalProvider } from "../../store/ModalContext";
import MainFooter from "../componets/MainFooter";
import { Outlet } from "react-router-dom";

import RegisterModal from "../Register";
import LoginModal from "../Login";
import CookieModal from "../componets/Cookies";
import ScrollToTop from "../componets/utility/ScrollToTop";

export default function MainLayout() {
  return (
    <>
      <div className="main_wrapper d-flex flex-column">
        <ModalProvider>
          <Outlet />

          {/* General Modals */}
          {<RegisterModal />}
          {<LoginModal />}
          {<CookieModal />}
        </ModalProvider>

        <ScrollToTop />

        <div className="col d-none d-lg-block">
          <MainFooter />
        </div>
      </div>
    </>
  );
}
