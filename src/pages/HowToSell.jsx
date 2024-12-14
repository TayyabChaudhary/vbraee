import { Link } from "react-router-dom";
import MenuSideBar from "./componets/MenuSideBar";
import MainHeader from "./componets/MainHeader";
import RightSideBar from "./componets/RightSideBar";
import MainFooter from "./componets/MainFooter";

export default function HowToSell() {
  return (
    <>
      <div className="d-flex main_house_con">
        <MenuSideBar makeShort={true} activeLink={'how-to-sell'} />

        <div
          className="col housing_con d-flex flex-column"
          style={
            {
              // backgroundImage: " url('./assets/images/psn_bg.png')",
            }
          }>
          <MainHeader activeLink={'how-to-sell'} />

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
                <Link>
                  <p className="crumb_link">/ How to sell</p>
                </Link>
              </div>
              <div
                className="vb_con"
                style={{
                  backgroundImage:
                    "url(./assets/images/vb_bg2.png), url(), url(./assets/images/vb_bg1.png)",
                }}>
                <div className="vb_banner_con"></div>
                <div className="col vb_banner_cont text-center">
                  <div className="col">
                    <div className="col mb-5">
                      <p className="vb_head">
                        Reach many customers and great sales!
                      </p>
                      <p className="vb_title mb-4">Start Selling on Vbrae</p>

                      <div className="d-flex justify-content-center">
                        <Link to={"/select-plan"} className="col col-md-auto">
                          <button
                            type="button"
                            className="details_button col-12 d-flex justify-content-center align-items-center">
                            <svg
                              className="me-2"
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M15.78 15.84S18.64 13 19.61 12c3.07-3 1.54-9.18 1.54-9.18S15 1.29 12 4.36C9.66 6.64 8.14 8.22 8.14 8.22S4.3 7.42 2 9.72L14.25 22c2.3-2.33 1.53-6.16 1.53-6.16m-1.5-9a2 2 0 0 1 2.83 0a2 2 0 1 1-2.83 0M3 21a7.8 7.8 0 0 0 5-2l-3-3c-2 1-2 5-2 5"
                              />
                            </svg>
                            Start selling
                          </button>
                        </Link>
                      </div>
                    </div>

                    <div className="col mb-5">
                      <p className="vb_title_sm">You too can sell on Vbrae</p>
                      <p className="vb_text">
                        Start selling here and flourish your buisness with good
                        sales and quick payouts.
                      </p>
                      <div className="col d-flex flex-wrap gap-4 mt-4">
                        <div
                          className="col-12 col-md vb_off_cont"
                          style={{
                            backgroundImage:
                              "url(./assets/images/red_bg.png), url(./assets/images/blue_bg.png)",
                          }}>
                          <span className="d-inline-block mb-3">
                            <svg
                              width="29"
                              height="28"
                              viewBox="0 0 29 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M14.4682 0.238827C13.6638 0.594546 13.2995 1.03868 12.8644 2.19424L12.5257 3.09391L12.7348 3.32804C12.8499 3.45684 15.6016 6.59092 18.8499 10.2927L24.7557 17.0233L25.5365 16.9095C26.5923 16.7555 27.0695 16.5881 27.5433 16.2055C28.4469 15.4757 28.7497 14.2726 28.2823 13.2693C28.1118 12.9035 27.9631 12.7302 20.7867 4.53428C17.4042 0.671285 17.3701 0.635044 16.8475 0.346915C16.094 -0.0683863 15.2497 -0.106791 14.4682 0.238827ZM10.6144 6.86887C8.38678 10.6524 5.38705 14.1227 1.78693 17.0812C1.18109 17.5791 0.982332 17.7871 0.823287 18.0898C0.430982 18.8362 0.394732 19.61 0.719936 20.2925C1.00777 20.8965 4.5079 24.8737 5.03999 25.2014C5.57039 25.528 6.27752 25.6507 6.92081 25.5279C7.53742 25.4101 7.84634 25.2443 8.6901 24.5777C12.3287 21.7031 16.7714 19.3588 21.3511 17.8968L22.2399 17.6131L16.9361 11.5702C14.019 8.24657 11.5971 5.49992 11.554 5.4666C11.5019 5.42616 11.1878 5.89507 10.6144 6.86887ZM16.9812 21.1892C15.9208 21.7135 14.9375 22.2274 14.2867 22.5977C13.1588 23.2394 11.9326 24.0296 11.9524 24.102C11.9778 24.1949 14.5655 27.133 14.8126 27.3495C15.1409 27.6371 15.6474 27.8743 16.126 27.9645C16.4607 28.0276 16.6855 28.0186 17.137 27.9243C17.7885 27.7881 18.1614 27.5779 18.9053 26.9273C19.8261 26.122 20.119 24.8986 19.6254 23.9193C19.4296 23.531 17.291 21.0577 17.1852 21.0972C17.1449 21.1123 17.0531 21.1537 16.9812 21.1892Z"
                                fill="url(#paint0_linear_2659_35502)"
                              />
                              <defs>
                                <linearGradient
                                  id="paint0_linear_2659_35502"
                                  x1="28.5"
                                  y1="4.67155"
                                  x2="2.71404"
                                  y2="12.2274"
                                  gradientUnits="userSpaceOnUse">
                                  <stop stopColor="#1095ED" />
                                  <stop offset="1" stopColor="#E2435F" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </span>
                          <p className="vb_tit mb-2">Products and Promotions</p>
                          <p className="vb_text">
                            We are open for all verified providers of games,
                            items, and software. Stay competitive and get more
                            sales with our platform.
                          </p>
                        </div>
                        <div
                          className="col-12 col-md vb_off_cont"
                          style={{
                            backgroundImage:
                              "url(./assets/images/red_bg.png), url(./assets/images/blue_bg.png)",
                          }}>
                          <span className="d-inline-block mb-3">
                            <svg
                              width="29"
                              height="28"
                              viewBox="0 0 29 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M21.1959 0.477776C21.3052 0.309409 21.464 0.175901 21.6523 0.0941223C21.8407 0.0123439 22.05 -0.0140342 22.254 0.0183217L27.6303 0.879045C27.9037 0.922792 28.1478 1.06888 28.3089 1.2852C28.4701 1.50152 28.5352 1.77038 28.4898 2.0327L27.5948 7.19303C27.5606 7.38864 27.4668 7.57015 27.3252 7.71462C27.1835 7.85908 27.0004 7.96003 26.799 8.00469C26.5976 8.04935 26.3869 8.03572 26.1936 7.96554C26.0002 7.89535 25.8329 7.77174 25.7128 7.61035L24.2615 5.66419L16.7877 10.2467C16.469 10.4424 16.0873 10.5209 15.713 10.4678C15.3387 10.4147 14.997 10.2336 14.751 9.95777L10.5833 5.28298L2.78959 9.12514C2.41966 9.30766 1.98932 9.3417 1.59324 9.21979C1.19715 9.09788 0.867757 8.83 0.677526 8.47508C0.487296 8.12016 0.451809 7.70727 0.578871 7.32725C0.705932 6.94722 0.985136 6.63119 1.35506 6.44867L10.2529 2.06078C10.567 1.90595 10.9264 1.85736 11.2729 1.92291C11.6194 1.98845 11.9327 2.16428 12.1621 2.42193L16.2482 7.00643L22.438 3.21042L21.2314 1.5913C21.1115 1.42984 21.0441 1.2379 21.0377 1.03971C21.0314 0.841518 21.0864 0.645975 21.1959 0.477776ZM7.50722 10.3289L1.4387 13.6595C1.19897 13.7909 0.999629 13.9807 0.860834 14.2096C0.722039 14.4386 0.648708 14.6987 0.64825 14.9636V26.5001C0.64825 27.3307 1.35088 28.0049 2.21661 28.0049H7.50722V10.3289ZM10.1212 28.0049H17.7915V14.3376L14.3432 15.9909L10.897 10.2046C10.7229 9.91029 10.4502 9.68118 10.1232 9.5545L10.1212 28.0049ZM26.2648 28.0049H20.4054V13.0837L25.5643 10.6078C25.8034 10.4933 26.069 10.4393 26.336 10.4509C26.603 10.4626 26.8625 10.5395 27.0897 10.6743C27.317 10.8092 27.5047 10.9976 27.6348 11.2215C27.7649 11.4455 27.8332 11.6977 27.8332 11.9541V26.5001C27.8332 26.8992 27.6679 27.2819 27.3738 27.5641C27.0797 27.8463 26.6808 28.0049 26.2648 28.0049Z"
                                fill="url(#paint0_linear_2659_22489)"
                              />
                              <defs>
                                <linearGradient
                                  id="paint0_linear_2659_22489"
                                  x1="28.5039"
                                  y1="4.67155"
                                  x2="2.71795"
                                  y2="12.2274"
                                  gradientUnits="userSpaceOnUse">
                                  <stop stopColor="#1095ED" />
                                  <stop offset="1" stopColor="#E2435F" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </span>
                          <p className="vb_tit mb-2">Products and Promotions</p>
                          <p className="vb_text">
                            We are open for all verified providers of games,
                            items, and software. Stay competitive and get more
                            sales with our platform.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Steps */}
                    <div
                      className="col vb_step mb-5"
                      style={{
                        backgroundImage:
                          "url(./assets/images/red_bg.png), url(./assets/images/blue_bg.png), url(./assets/images/start_bg.png), url(./assets/images/start_bg_sm.png)",
                      }}>
                      <div className="vb_step_col">
                        <p className="vb_title_sm mb-5">
                          How to Start: Easy Steps to Follow
                        </p>

                        <div className="col d-flex flex-wrap gap-4 gap-lg-5">
                          <div className="col-12 col-md text-center">
                            <img
                              src={"./assets/images/icons/step1.svg"}
                              alt=""
                              className="step_img mb-3"
                            />
                            <p className="vb_tit">Fill in the Form </p>
                            <p className="vb_text">
                              Write in English to ensure your application is
                              reviewed
                            </p>
                          </div>
                          <div className="col-12 col-md text-center">
                            <img
                              src={"./assets/images/icons/step2.svg"}
                              alt=""
                              className="step_img mb-3"
                            />
                            <p className="vb_tit">Let us review it</p>
                            <p className="vb_text">
                              We will contact you if we have additional
                              questions
                            </p>
                          </div>
                          <div className="col-12 col-md text-center">
                            <img
                              src={"./assets/images/icons/step3.svg"}
                              alt=""
                              className="step_img mb-3"
                            />
                            <p className="vb_tit">Start selling! </p>
                            <p className="vb_text">
                              Welcome to VBrae, we wish you great sales!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col mb-4">
                      <p className="vb_title_sm mb-1">Still have questions?</p>
                      <p className="vb_text mb-4">
                        Reach out to our support agents!
                      </p>
                      <div className="d-flex justify-content-center">
                      <Link to={"/submit-request"}>
                          <button
                            type="button"
                            className="details_button d-flex align-items-center">
                            <svg
                              className="me-2"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M8.38246 12.4618L8.37459 12.4428C8.25628 12.4094 8.13897 12.3723 8.02281 12.3316L8.01406 12.3279C6.80523 11.9003 5.75597 11.0927 5.01317 10.0179C4.27037 8.94323 3.8712 7.65528 3.87155 6.33439C3.87116 4.71329 4.47211 3.15376 5.5506 1.97702C6.62909 0.800286 8.10301 0.0959553 9.66876 0.00910281C11.2345 -0.0777497 12.7729 0.459491 13.967 1.51017C15.161 2.56084 15.9199 4.04494 16.0873 5.65678C16.1258 6.02951 15.8283 6.33439 15.466 6.33439C15.1038 6.33439 14.8141 6.0286 14.766 5.65768C14.6496 4.78219 14.3098 3.95453 13.7816 3.25976C13.2533 2.565 12.5556 2.02818 11.7603 1.7045C10.9649 1.38081 10.1005 1.28193 9.25591 1.41801C8.41133 1.55409 7.61703 1.92022 6.95464 2.47878C6.29225 3.03734 5.78567 3.76818 5.48696 4.59619C5.18825 5.4242 5.10819 6.3195 5.255 7.19009C5.40181 8.06069 5.7702 8.87516 6.32231 9.54981C6.87442 10.2245 7.59033 10.7349 8.39646 11.0288C8.55885 10.6493 8.84248 10.3391 9.19981 10.1501C9.55714 9.96105 9.96646 9.90477 10.3591 9.99065C10.7518 10.0765 11.104 10.2994 11.3567 10.6218C11.6094 10.9442 11.7472 11.3466 11.747 11.7616C11.7475 12.1798 11.6077 12.5852 11.3516 12.909C11.0955 13.2327 10.7389 13.4547 10.3423 13.5372C9.94575 13.6197 9.53379 13.5577 9.17649 13.3616C8.81918 13.1656 8.5386 12.8476 8.38246 12.4618ZM7.48553 13.5746C6.45378 13.1915 5.51671 12.5773 4.74136 11.7761C4.26195 11.8337 3.81973 12.0714 3.4987 12.444C3.17767 12.8166 3.0002 13.2982 3 13.7971V14.6295C3 15.1469 3.15576 15.6518 3.44628 16.0733C4.79561 18.0311 7.00425 19 9.99694 19C12.9896 19 15.1991 18.0302 16.5511 16.0733C16.843 15.6513 16.9999 15.1455 17 14.6267V13.7962C17 13.2567 16.7928 12.7392 16.4239 12.3575C16.0551 11.9758 15.5548 11.7612 15.0329 11.7607H13.0596C13.0598 12.4346 12.852 13.0909 12.4664 13.6342C12.0809 14.1776 11.5378 14.5796 10.916 14.7818C10.2943 14.984 9.62637 14.9759 9.0094 14.7586C8.39243 14.5414 7.85859 14.1272 7.48553 13.5746ZM13.4972 6.33439C13.4972 5.80553 13.385 5.28311 13.1687 4.80388C12.9524 4.32465 12.637 3.90028 12.245 3.56062C11.881 3.24585 11.4589 3.01088 11.0044 2.86998C10.5499 2.72909 10.0724 2.68521 9.60096 2.74102C9.12953 2.79682 8.674 2.95115 8.26204 3.19461C7.85009 3.43808 7.49032 3.7656 7.20459 4.15728C6.91887 4.54895 6.71316 4.9966 6.59997 5.47302C6.48677 5.94944 6.46845 6.44468 6.54613 6.92864C6.62381 7.41261 6.79585 7.87519 7.05181 8.28828C7.30777 8.70137 7.6423 9.05634 8.03506 9.33161C8.58557 8.85656 9.27986 8.59627 9.99694 8.5961C10.7434 8.5961 11.4277 8.87203 11.9597 9.33161C12.4334 8.99996 12.8212 8.55333 13.0892 8.03082C13.3572 7.5083 13.4973 6.92583 13.4972 6.33439Z" />
                            </svg>
                            Create Ticket
                          </button>
                        </Link>
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
