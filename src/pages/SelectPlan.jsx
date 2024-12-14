import { Link } from "react-router-dom";
import MainHeader from "./componets/MainHeader";
import MenuSideBar from "./componets/MenuSideBar";
import RightSideBar from "./componets/RightSideBar";
import MainFooter from "./componets/MainFooter";

export default function SelectPlan() {
  return (
    <>
      <div className="d-flex main_house_con">
        <MenuSideBar makeShort={true} activeLink={'select-plan'} />

        <div
          className="col housing_con d-flex flex-column"
          style={
            {
              // backgroundImage: " url('./assets/images/psn_bg.png')",
            }
          }>
          <MainHeader activeLink={'select-plan'} />

          <div className="housing d-flex gap-1 position-relative">
            <div id="scrollable-section" className="col main_section">
              <div className="d-flex align-items-center gap-2 mb-3">
                <Link to={"/"}>
                  <span className="crumb_icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M13.45 2.533a2.25 2.25 0 0 0-2.9 0L3.8 8.228a2.25 2.25 0 0 0-.8 1.72v9.305c0 .966.784 1.75 1.75 1.75h3a1.75 1.75 0 0 0 1.75-1.75V15.25c0-.68.542-1.232 1.217-1.25h2.566a1.25 1.25 0 0 1 1.217 1.25v4.003c0 .966.784 1.75 1.75 1.75h3a1.75 1.75 0 0 0 1.75-1.75V9.947a2.25 2.25 0 0 0-.8-1.72z"
                      />
                    </svg>
                  </span>
                </Link>
                <Link to={'/how-to-sell'}>
                  <p className="crumb_link">/ How to sell</p>
                </Link>
                <Link>
                  <p className="crumb_link">/ Select your plan</p>
                </Link>
              </div>

              <div
                className="vb_con"
                style={{
                  backgroundImage:
                    "url(./assets/images/vb_bg2.png), url(), url(./assets/images/vb_bg1.png)",
                }}>
                <div className="vb_banner_con"></div>
                <div className="col vb_banner_cont">
                  <div className="col mb-5">
                    <div className="col text-center mb-5">
                      <p className="vb_head">Select to continue</p>
                      <p className="vb_title ">Select Your Plan</p>
                    </div>

                    <div className="col d-flex flex-wrap justify-content-center gap-3">
                      <div
                        className="col-12 col-md-5 col-lg vb_plan_coont d-flex flex-column"
                        style={{
                          backgroundImage: "url(./assets/images/plan_bg1.png)",
                        }}>
                        <div className="d-flex justify-content-center mb-3">
                          <div className="vb_plan_tag blue text-center">
                            <p className="">1</p> <span>TIER</span>
                          </div>
                        </div>

                        <div className="col">
                          <div className="d-flex align-items-center mb-2">
                            <span className="vb_plan_text_icon me-2">
                              <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 12 9"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.93869 9L0 5.40347L1.79493 3.76448L3.93869 5.7278L10.2051 0L12 1.639L3.93869 9Z" />
                              </svg>
                            </span>
                            <p className="vb_plan_text">Start Selling</p>
                          </div>
                          <div className="d-flex align-items-center mb-2">
                            <span className="vb_plan_text_icon me-2">
                              <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 12 9"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.93869 9L0 5.40347L1.79493 3.76448L3.93869 5.7278L10.2051 0L12 1.639L3.93869 9Z" />
                              </svg>
                            </span>
                            <p className="vb_plan_text">10% Commission</p>
                          </div>
                          <div className="d-flex align-items-center mb-2">
                            <span className="vb_plan_text_icon me-2">
                              <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 12 9"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.93869 9L0 5.40347L1.79493 3.76448L3.93869 5.7278L10.2051 0L12 1.639L3.93869 9Z" />
                              </svg>
                            </span>
                            <p className="vb_plan_text">
                              Release Funds 21 Days
                              <br />
                              <span>Min 7 Days!</span>
                            </p>
                          </div>
                          <div className="d-flex align-items-center mb-2">
                            <span className="vb_plan_text_icon me-2">
                              <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 12 9"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.93869 9L0 5.40347L1.79493 3.76448L3.93869 5.7278L10.2051 0L12 1.639L3.93869 9Z" />
                              </svg>
                            </span>
                            <p className="vb_plan_text">
                              Level based 5
                              <br />
                              <span>7% Commission</span>
                            </p>
                          </div>
                        </div>

                        <img
                          src={"./assets/images/plan1.png"}
                          alt=""
                          className="vp_plan_img mt-auto"
                        />

                        <p className="vb_title text-center mb-2">Free</p>

                        <div className="d-flex justify-content-center">
                          <button type="button" className="col col-md-auto details_button">
                            Choose Plan
                          </button>
                        </div>
                      </div>
                      <div
                        className="col-12 col-md-5 col-lg vb_plan_coont d-flex flex-column"
                        style={{
                          backgroundImage: "url(./assets/images/plan_bg2.png)",
                        }}>
                        <div className="d-flex justify-content-center mb-3">
                          <div className="vb_plan_tag red text-center">
                            <p className="">2</p> <span>TIER</span>
                          </div>
                        </div>

                        <div className="col">
                          <div className="d-flex align-items-center mb-2">
                            <span className="vb_plan_text_icon me-2">
                              <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 12 9"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.93869 9L0 5.40347L1.79493 3.76448L3.93869 5.7278L10.2051 0L12 1.639L3.93869 9Z" />
                              </svg>
                            </span>
                            <p className="vb_plan_text">Start Selling</p>
                          </div>
                          <div className="d-flex align-items-center mb-2">
                            <span className="vb_plan_text_icon me-2">
                              <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 12 9"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.93869 9L0 5.40347L1.79493 3.76448L3.93869 5.7278L10.2051 0L12 1.639L3.93869 9Z" />
                              </svg>
                            </span>
                            <p className="vb_plan_text">20% Commission</p>
                          </div>
                          <div className="d-flex align-items-center mb-2">
                            <span className="vb_plan_text_icon me-2">
                              <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 12 9"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.93869 9L0 5.40347L1.79493 3.76448L3.93869 5.7278L10.2051 0L12 1.639L3.93869 9Z" />
                              </svg>
                            </span>
                            <p className="vb_plan_text">
                              Release Funds 72 Days
                            </p>
                          </div>
                        </div>

                        <img
                          src={"./assets/images/plan2.png"}
                          alt=""
                          className="vp_plan_img mt-auto"
                        />

                        <p className="vb_title text-center mb-2">Free</p>

                        <div className="d-flex justify-content-center">
                          <button type="button" className="col col-md-auto details_button">
                            Choose Plan
                          </button>
                        </div>
                      </div>
                      <div
                        className="col-12 col-md-5 col-lg vb_plan_coont"
                        style={{
                          backgroundImage: "url(./assets/images/plan_bg3.png)",
                        }}>
                        <div className="d-flex justify-content-center mb-3">
                          <div className="vb_plan_tag green text-center">
                            <p className="">3</p> <span>TIER</span>
                          </div>
                        </div>

                        <div className="col">
                          <div className="d-flex align-items-center mb-2">
                            <span className="vb_plan_text_icon me-2">
                              <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 12 9"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.93869 9L0 5.40347L1.79493 3.76448L3.93869 5.7278L10.2051 0L12 1.639L3.93869 9Z" />
                              </svg>
                            </span>
                            <p className="vb_plan_text">Start Selling</p>
                          </div>
                          <div className="d-flex align-items-center mb-2">
                            <span className="vb_plan_text_icon me-2">
                              <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 12 9"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.93869 9L0 5.40347L1.79493 3.76448L3.93869 5.7278L10.2051 0L12 1.639L3.93869 9Z" />
                              </svg>
                            </span>
                            <p className="vb_plan_text">10% Commission</p>
                          </div>
                          <div className="d-flex align-items-center mb-2">
                            <span className="vb_plan_text_icon me-2">
                              <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 12 9"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.93869 9L0 5.40347L1.79493 3.76448L3.93869 5.7278L10.2051 0L12 1.639L3.93869 9Z" />
                              </svg>
                            </span>
                            <p className="vb_plan_text">
                              Release Funds 21 Days
                              <br />
                              <span>Min 7 Days!</span>
                            </p>
                          </div>
                          <div className="d-flex align-items-center mb-2">
                            <span className="vb_plan_text_icon me-2">
                              <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 12 9"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.93869 9L0 5.40347L1.79493 3.76448L3.93869 5.7278L10.2051 0L12 1.639L3.93869 9Z" />
                              </svg>
                            </span>
                            <p className="vb_plan_text">
                              Level based 5
                              <br />
                              <span>7% Commission</span>
                            </p>
                          </div>
                        </div>

                        <img
                          src={"./assets/images/plan3.png"}
                          alt=""
                          className="vp_plan_img"
                        />

                        <p className="vb_title text-center mb-2">Free</p>

                        <div className="d-flex justify-content-center">
                          <button type="button" className="col col-md-auto details_button">
                            Choose Plan
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col d-lg-none">
                <MainFooter />
              </div>
            </div>

            <RightSideBar />
          </div>
        </div>
      </div>
    </>
  );
}
