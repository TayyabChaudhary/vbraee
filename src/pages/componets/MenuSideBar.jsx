/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link } from "react-router-dom";
import MenuSideBarContent from "./MenuSideBarContent";
import { SideBarContext } from "../../store/SideBarContext";

export default function MenuSideBar({ activeCategory, activeLink }) {
  const { isLeftSideMenuCollaped, ToggleLeftSideMenu } =
    useContext(SideBarContext);

  return (
    <>
      <div
        className="menu_sidebar_con d-none d-lg-flex flex-column align-items-stretch position-relative"
        style={{
          width: isLeftSideMenuCollaped ? "auto" : "250px",
        }}>
        <div className="col-auto position-relative mb-4">
          <Link to={"/"} className=" d-flex">
            {!isLeftSideMenuCollaped ? (
              <img
                src={"./assets/images/logo.png"}
                alt=""
                className="menu_sidebar_logo"
              />
            ) : (
              <img
                src={"./assets/images/single_logo.png"}
                alt=""
                className=" menu_sidebar_logo mx-auto"
              />
            )}
          </Link>
          {isLeftSideMenuCollaped ? (
            <span
              onClick={() => ToggleLeftSideMenu()}
              className="d-flex menu_sidebar_triger justify-content-center align-items-center position-absolute ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.3em"
                height="1.3em"
                viewBox="0 0 24 24">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m9 5l7 7l-7 7"></path>
              </svg>
            </span>
          ) : (
            <span
              onClick={() => ToggleLeftSideMenu()}
              className="d-flex menu_sidebar_triger justify-content-center align-items-center position-absolute ">
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
            </span>
          )}
        </div>

        <MenuSideBarContent
          isShort={isLeftSideMenuCollaped}
          activeCategory={activeCategory}
          activeLink={activeLink}
        />
      </div>
    </>
  );
}
