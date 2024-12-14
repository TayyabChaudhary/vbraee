import MainFooter from "../componets/MainFooter";
import { Outlet } from "react-router-dom";
// import AccountSideBar from "../componets/account/AccountSideBar";
// import RateModal from "../componets/modals/RateModal";

export default function AccountLayout() {
  return (
    <>
      {/* <RateModal /> */}

      {/* <div className="d-flex position-relative">
        <AccountSideBar />

        <div className="col">
          <Outlet />
        </div>
      </div> */}
      <div className="main_wrapper d-flex flex-column">
        <Outlet />

        <div className="col d-none d-lg-block">
          <MainFooter />
        </div>
      </div>
    </>
  );
}
