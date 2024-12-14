/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Subscribe({customClass}) {
  return (
    <>
      <div
        className={"main_sub_con " + (customClass ? customClass : "")}
        style={{
          backgroundImage: "url(./assets/images/sub_bg.png)",
        }}>
        <div className="main_sub_cont d-lg-flex align-items-center gap-3 ">
          <div className="col">
            <h4 className="main_sub_title">Get 15% off your first purchase!</h4>
            <p className="main_sub_text">
              Sign up for our newsletter and receive special offers
            </p>
          </div>
          <div className="col d-flex gap-3 mt-3 mt-lg-0">
            <input
              type="text"
              className="main_input"
              placeholder="E-mail address"
            />
            <Link to={"/"}>
              <button type="button" className="main_button">
                Subscribe
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
