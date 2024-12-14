/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import AccountSideBarContent from "./AccountSideBarContent";

export default function AccountSideBar({activeLink}) {
  return (
    <>
      <div
        className="col-auto menu_sidebar_con d-none d-lg-flex flex-column p-3"
        style={{
          width: "250px",
        }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <Link to={"/"}>
            <img
              src={"../assets/images/logo.png"}
              alt=""
              className="menu_sidebar_logo"
            />
          </Link>
          {/* <span className="menu_sidebar_triger d-flex justify-content-center align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.3em"
              height="1.3em"
              viewBox="0 0 20 20">
              <g fill="currentColor">
                <path d="M6.732 10.64a1 1 0 1 1 1.536-1.28l5 6a1 1 0 1 1-1.536 1.28z" />
                <path d="M8.268 10.64a1 1 0 1 1-1.536-1.28l5-6a1 1 0 1 1 1.536 1.28z" />
              </g>
            </svg>
          </span> */}
        </div>

        <AccountSideBarContent activeLink={activeLink} />
      </div>
    </>
  );
}
