import { Link } from "react-router-dom";
import MainHeader from "./componets/MainHeader";
import MenuSideBar from "./componets/MenuSideBar";
import FaqAccordion from "./componets/FaqAccordion";
import RightSideBar from "./componets/RightSideBar";
import MainFooter from "./componets/MainFooter";

export default function Affiliate() {
  return (
    <>
      <div className="d-flex main_house_con">
        <MenuSideBar makeShort={true} activeLink={'affiliate'} />

        <div
          className="col housing_con d-flex flex-column"
          style={
            {
              // backgroundImage: " url('./assets/images/psn_bg.png')",
            }
          }>
          <MainHeader activeLink={'affiliate'} />

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
                  <p className="crumb_link">/ Affiliate</p>
                </Link>
              </div>
              <div
                className="vb_con"
                style={{
                  backgroundImage:
                    "url(./assets/images/vb_bg2.png), url(), url(./assets/images/affiliate_bg.png)",
                }}>
                <div className="vb_banner_con"></div>
                <div className="col vb_banner_cont text-center">
                  <div className="col">
                    <div className="col mb-5">
                      <p className="vb_head">Start Earning</p>
                      <p className="vb_title mb-4">Become Our Partner!</p>

                      <div className="d-flex justify-content-center">
                        <Link
                          to={"/how-to-sell"}
                          className="col-12 col-md-auto">
                          <button
                            type="button"
                            className="col-12 details_button d-flex justify-content-center align-items-center">
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
                            Try it for free
                          </button>
                        </Link>
                      </div>
                    </div>

                    <div className="col mb-5">
                      <p className="vb_title_sm">We offer the Best Terms</p>
                      <p className="vb_text">
                        A clear plan with fair margins for everyone!
                      </p>
                      <div className="col d-flex flex-wrap gap-4 mt-4">
                        <div
                          className="col-12 col-md vb_off_cont"
                          style={{
                            backgroundImage:
                              "url(./assets/images/red_bg.png), url(./assets/images/blue_bg.png)",
                          }}>
                          <img
                            src={"./assets/images/icons/step1.svg"}
                            alt=""
                            className="step_img mb-3"
                          />
                          <p className="vb_tit">Become an affiliate</p>
                          <p className="vb_text">
                            Join in an instant for free. We&apos;ll provide all
                            the tools you need.
                          </p>
                        </div>
                        <div
                          className="col-12 col-md vb_off_cont"
                          style={{
                            backgroundImage:
                              "url(./assets/images/red_bg.png), url(./assets/images/blue_bg.png)",
                          }}>
                          <img
                            src={"./assets/images/icons/step2.svg"}
                            alt=""
                            className="step_img mb-3"
                          />
                          <p className="vb_tit">Promote VBrae </p>
                          <p className="vb_text">
                            Share our special offers. We have deals on all kinds
                            of games.
                          </p>
                        </div>
                        <div
                          className="col-12 col-md vb_off_cont"
                          style={{
                            backgroundImage:
                              "url(./assets/images/red_bg.png), url(./assets/images/blue_bg.png)",
                          }}>
                          <img
                            src={"./assets/images/icons/step3.svg"}
                            alt=""
                            className="step_img mb-3"
                          />
                          <p className="vb_tit">Up Your Income </p>
                          <p className="vb_text">
                            Profit from every sale you inspire! See the
                            commission details here.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="col vb_how mb-5"
                      style={{
                        backgroundImage: "url(./assets/images/how_bg.png)",
                      }}>
                      <div className="col vb_how_cont text-start d-flex flex-wrap gap-3">
                        <div className="col-12 col-lg">
                          <p className="mb-2">
                            <span className="vb_how_title">How it works?</span>
                          </p>
                          <p className="vb_text">
                            How to become <br /> a business person.
                          </p>
                        </div>
                        <div className="col-12 col-md">
                          <span className="d-inline-block mb-2">
                            <svg
                              width="30"
                              height="30"
                              viewBox="0 0 30 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M20.0219 4.85467C20.1039 4.72839 20.223 4.62826 20.3643 4.56693C20.5055 4.5056 20.6625 4.48581 20.8155 4.51008L24.8478 5.15562C25.0528 5.18843 25.2358 5.298 25.3567 5.46024C25.4776 5.62248 25.5264 5.82412 25.4924 6.02086L24.8211 9.89111C24.7955 10.0378 24.7251 10.1739 24.6189 10.2823C24.5127 10.3907 24.3753 10.4664 24.2243 10.4999C24.0732 10.5333 23.9152 10.5231 23.7702 10.4705C23.6252 10.4178 23.4997 10.3251 23.4096 10.2041L22.3211 8.74448L16.7158 12.1814C16.4768 12.3281 16.1905 12.387 15.9098 12.3472C15.629 12.3074 15.3728 12.1715 15.1882 11.9647L12.0625 8.45857L6.21719 11.3402C5.93975 11.4771 5.61699 11.5026 5.31993 11.4112C5.02286 11.3198 4.77582 11.1188 4.63314 10.8526C4.49047 10.5865 4.46386 10.2768 4.55915 9.99177C4.65445 9.70675 4.86385 9.46973 5.14129 9.33284L11.8147 6.04193C12.0503 5.9258 12.3198 5.88936 12.5797 5.93852C12.8396 5.98768 13.0746 6.11955 13.2466 6.31278L16.3112 9.75116L20.9535 6.90415L20.0486 5.68981C19.9586 5.56872 19.9081 5.42476 19.9033 5.27612C19.8986 5.12748 19.9398 4.98082 20.0219 4.85467ZM9.75541 12.243L5.20403 14.741C5.02423 14.8395 4.87472 14.9818 4.77063 15.1536C4.66653 15.3253 4.61153 15.5204 4.61119 15.719V24.3714C4.61119 24.9944 5.13816 25.5 5.78746 25.5H9.75541V12.243ZM11.7159 25.5H17.4686V15.2496L14.8824 16.4895L12.2977 12.1498C12.1672 11.9291 11.9627 11.7572 11.7174 11.6622L11.7159 25.5ZM23.8236 25.5H19.4291V14.3091L23.2982 12.4522C23.4776 12.3663 23.6768 12.3258 23.877 12.3345C24.0773 12.3433 24.2718 12.4009 24.4423 12.5021C24.6128 12.6032 24.7535 12.7445 24.8511 12.9125C24.9487 13.0805 24.9999 13.2696 24.9999 13.4619V24.3714C24.9999 24.6707 24.876 24.9578 24.6554 25.1694C24.4348 25.3811 24.1356 25.5 23.8236 25.5Z"
                                fill="url(#paint0_linear_599_34926)"
                              />
                              <defs>
                                <linearGradient
                                  id="paint0_linear_599_34926"
                                  x1="25.5029"
                                  y1="8"
                                  x2="6.16346"
                                  y2="13.6669"
                                  gradientUnits="userSpaceOnUse">
                                  <stop stopColor="#1095ED" />
                                  <stop offset="1" stopColor="#E2435F" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </span>
                          <p className="vb_tit">Engage people</p>
                          <p className="vb_text">
                            Share your referral link with people that are
                            interested in buying games.
                          </p>
                        </div>
                        <div className="col-12 col-md">
                          <span className="d-inline-block mb-2">
                            <svg
                              width="30"
                              height="30"
                              viewBox="0 0 30 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M4.5 13.5C6.15469 13.5 7.5 12.1547 7.5 10.5C7.5 8.84531 6.15469 7.5 4.5 7.5C2.84531 7.5 1.5 8.84531 1.5 10.5C1.5 12.1547 2.84531 13.5 4.5 13.5ZM25.5 13.5C27.1547 13.5 28.5 12.1547 28.5 10.5C28.5 8.84531 27.1547 7.5 25.5 7.5C23.8453 7.5 22.5 8.84531 22.5 10.5C22.5 12.1547 23.8453 13.5 25.5 13.5ZM27 15H24C23.175 15 22.4297 15.3328 21.8859 15.8719C23.775 16.9078 25.1156 18.7781 25.4062 21H28.5C29.3297 21 30 20.3297 30 19.5V18C30 16.3453 28.6547 15 27 15ZM15 15C17.9016 15 20.25 12.6516 20.25 9.75C20.25 6.84844 17.9016 4.5 15 4.5C12.0984 4.5 9.75 6.84844 9.75 9.75C9.75 12.6516 12.0984 15 15 15ZM18.6 16.5H18.2109C17.2359 16.9688 16.1531 17.25 15 17.25C13.8469 17.25 12.7687 16.9688 11.7891 16.5H11.4C8.41875 16.5 6 18.9188 6 21.9V23.25C6 24.4922 7.00781 25.5 8.25 25.5H21.75C22.9922 25.5 24 24.4922 24 23.25V21.9C24 18.9188 21.5812 16.5 18.6 16.5ZM8.11406 15.8719C7.57031 15.3328 6.825 15 6 15H3C1.34531 15 0 16.3453 0 18V19.5C0 20.3297 0.670312 21 1.5 21H4.58906C4.88438 18.7781 6.225 16.9078 8.11406 15.8719Z"
                                fill="url(#paint0_linear_599_34931)"
                              />
                              <defs>
                                <linearGradient
                                  id="paint0_linear_599_34931"
                                  x1="30"
                                  y1="8"
                                  x2="4.47307"
                                  y2="18.6857"
                                  gradientUnits="userSpaceOnUse">
                                  <stop stopColor="#1095ED" />
                                  <stop offset="1" stopColor="#E2435F" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </span>
                          <p className="vb_tit">Engage people</p>
                          <p className="vb_text">
                            Share your referral link with people that are
                            interested in buying games.
                          </p>
                        </div>
                        <div className="col-12 col-md">
                          <span className="d-inline-block mb-2">
                            <svg
                              width="30"
                              height="30"
                              viewBox="0 0 30 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M25.0931 12.4332C25.0232 12.4298 24.9531 12.4286 24.8831 12.4296H21.9609C19.5704 12.4296 17.5231 14.3269 17.5231 16.8014C17.5231 19.2759 19.5704 21.1732 21.9621 21.1732H24.8819C24.9551 21.1732 25.0259 21.1732 25.0919 21.1684C25.5853 21.1369 26.0505 20.9271 26.4007 20.578C26.7508 20.2289 26.9621 19.7645 26.9952 19.2711C27 19.2003 27 19.1247 27 19.0551V14.5477C27 14.4781 27 14.4025 26.9952 14.3317C26.9622 13.8385 26.751 13.3742 26.4011 13.0252C26.0512 12.6761 25.5863 12.4662 25.0931 12.4344M21.7053 17.9679C22.321 17.9679 22.8214 17.447 22.8214 16.8026C22.8214 16.1582 22.321 15.6373 21.7053 15.6373C21.0897 15.6373 20.5905 16.1582 20.5905 16.8026C20.5905 17.447 21.0885 17.9679 21.7053 17.9679Z"
                                fill="url(#paint0_linear_599_34936)"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M24.8819 22.9217C24.9221 22.9203 24.9621 22.9283 24.9986 22.9452C25.0351 22.9621 25.0672 22.9873 25.0921 23.0188C25.1171 23.0504 25.1344 23.0873 25.1425 23.1267C25.1505 23.1661 25.1493 23.2069 25.1387 23.2457C24.9059 24.0762 24.5375 24.7842 23.9458 25.3794C23.0806 26.2519 21.9825 26.6395 20.6265 26.8231C19.3088 27.0019 17.6263 27.0019 15.4998 27.0019H13.0553C10.93 27.0019 9.24631 27.0019 7.92865 26.8231C6.57258 26.6395 5.47452 26.2519 4.60928 25.3794C3.74404 24.5094 3.36002 23.4017 3.17761 22.0361C3 20.7064 3 19.0095 3 16.8674V16.7354C3 14.5933 3 12.8952 3.17761 11.5679C3.36002 10.2011 3.74404 9.09701 4.60808 8.22217C5.47332 7.35092 6.57138 6.9621 7.92745 6.77969C9.24631 6.60089 10.93 6.60089 13.0553 6.60089H15.4998C17.6251 6.60089 19.3088 6.60089 20.6265 6.77969C21.9825 6.9633 23.0806 7.35092 23.9458 8.22217C24.5375 8.8186 24.9059 9.52663 25.1387 10.3583C25.149 10.397 25.1501 10.4376 25.142 10.4769C25.1338 10.5161 25.1165 10.5529 25.0915 10.5843C25.0666 10.6157 25.0346 10.6408 24.9982 10.6576C24.9618 10.6744 24.922 10.6824 24.8819 10.6811H21.9621C18.6812 10.6811 15.7902 13.2936 15.7902 16.8014C15.7902 20.3092 18.6824 22.9217 21.9633 22.9217H24.8819ZM7.33702 11.2643C7.22276 11.2648 7.10972 11.2878 7.00434 11.3319C6.89896 11.3761 6.80331 11.4406 6.72286 11.5217C6.6424 11.6028 6.57871 11.699 6.53542 11.8047C6.49214 11.9105 6.4701 12.0237 6.47057 12.138C6.47057 12.6216 6.85819 13.0128 7.33702 13.0128H11.9644C12.4445 13.0128 12.8321 12.6216 12.8321 12.138C12.8327 11.9071 12.7417 11.6854 12.579 11.5216C12.4164 11.3578 12.1953 11.2653 11.9644 11.2643H7.33702Z"
                                fill="url(#paint1_linear_599_34936)"
                              />
                              <path
                                d="M9.93275 5.42963L12.2825 3.69794C12.8956 3.24463 13.638 3 14.4006 3C15.1631 3 15.9055 3.24463 16.5187 3.69794L18.8816 5.43923C17.8927 5.40083 16.7887 5.40083 15.5802 5.40083H12.9761C11.8696 5.40083 10.8532 5.40083 9.93275 5.42963Z"
                                fill="url(#paint2_linear_599_34936)"
                              />
                              <defs>
                                <linearGradient
                                  id="paint0_linear_599_34936"
                                  x1="27"
                                  y1="7.00032"
                                  x2="4.89747"
                                  y2="13.4763"
                                  gradientUnits="userSpaceOnUse">
                                  <stop stopColor="#1095ED" />
                                  <stop offset="1" stopColor="#E2435F" />
                                </linearGradient>
                                <linearGradient
                                  id="paint1_linear_599_34936"
                                  x1="27"
                                  y1="7.00032"
                                  x2="4.89747"
                                  y2="13.4763"
                                  gradientUnits="userSpaceOnUse">
                                  <stop stopColor="#1095ED" />
                                  <stop offset="1" stopColor="#E2435F" />
                                </linearGradient>
                                <linearGradient
                                  id="paint2_linear_599_34936"
                                  x1="27"
                                  y1="7.00032"
                                  x2="4.89747"
                                  y2="13.4763"
                                  gradientUnits="userSpaceOnUse">
                                  <stop stopColor="#1095ED" />
                                  <stop offset="1" stopColor="#E2435F" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </span>
                          <p className="vb_tit">Engage people</p>
                          <p className="vb_text">
                            Share your referral link with people that are
                            interested in buying games.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col col-xl-6 vb_much mx-auto mb-5">
                      <p className="vb_title_sm mb-4">How much can I earn?</p>
                      <div className="col d-flex align-items-center gap-3">
                        <div className="col text-start">
                          <img
                            src={"./assets/images/logo2.png"}
                            alt=""
                            className="vb_much_img mb-4"
                          />

                          <p className="vb_much_text mb-4">
                            Digital items (CPS)
                          </p>
                          <p className="vb_much_text mb-4">Software products</p>
                          <p className="vb_much_text mb-4">
                            Cookies time (days)
                          </p>
                        </div>
                        <div
                          className="col vb_much_cont"
                          style={{
                            backgroundImage:
                              "url(./assets/images/vb_much_bg1.png)",
                          }}>
                          <p className="vb_much_text mb-3">New Users</p>
                          <p className="vb_title_sm mb-3">5%</p>
                          <p className="vb_title_sm mb-3">5%</p>
                          <p className="vb_title_sm mb-3">30</p>
                        </div>
                        <div
                          className="col vb_much_cont"
                          style={{
                            backgroundImage:
                              "url(./assets/images/vb_much_bg2.png)",
                          }}>
                          <p className="vb_much_text mb-3">Existing Users</p>
                          <p className="vb_title_sm mb-3">2.5%</p>
                          <p className="vb_title_sm mb-3">5%</p>
                          <p className="vb_title_sm mb-3">30</p>
                        </div>
                      </div>
                    </div>

                    <hr className="vb_line mb-5" />

                    {/* Faq */}
                    <div className="col mb-5">
                      <div className="col d-flex gap-3 justify-content-between align-items-center mb-4">
                        <p className="vb_title_sm">FAQ</p>
                        <p className="vb_faq_head text-end">
                          Need help? <br className="d-lg-none" /> Visit our{" "}
                          <u>Help Center</u>
                        </p>
                      </div>

                      <div className="col">
                        <FaqAccordion
                          isActive={false}
                          triggerText={"Where can I find my referral link?"}
                          contentText={`Control is a thrilling action-adventure game made by Remedy
            Entertainment. You step into the shoes of Jessie Faden, who&apos;s
            the top honcho at the secretive Federal Bureau of Control. Her job?
            To deal with all things paranormal. This game offers something
            totally new. Imagine working in a building that keeps changing
            around you. This is what Control is like, mixing exploration,
            puzzles, and combat into an epic adventure.`}
                        />
                        <FaqAccordion
                          isActive={false}
                          triggerText={"Where can I find my referral link?"}
                          contentText={`Control is a thrilling action-adventure game made by Remedy
            Entertainment. You step into the shoes of Jessie Faden, who&apos;s
            the top honcho at the secretive Federal Bureau of Control. Her job?
            To deal with all things paranormal. This game offers something
            totally new. Imagine working in a building that keeps changing
            around you. This is what Control is like, mixing exploration,
            puzzles, and combat into an epic adventure.`}
                        />
                        <FaqAccordion
                          isActive={false}
                          triggerText={"Where can I find my referral link?"}
                          contentText={`Control is a thrilling action-adventure game made by Remedy
            Entertainment. You step into the shoes of Jessie Faden, who&apos;s
            the top honcho at the secretive Federal Bureau of Control. Her job?
            To deal with all things paranormal. This game offers something
            totally new. Imagine working in a building that keeps changing
            around you. This is what Control is like, mixing exploration,
            puzzles, and combat into an epic adventure.`}
                        />
                      </div>
                    </div>

                    <div className="col mb-4">
                      <p className="vb_title_sm mb-1">
                        Start earning money now!
                      </p>
                      <p className="vb_text mb-4">
                        Monitor your earnings on your affiliate panel. <br />{" "}
                        Receive commission for referred orders.
                      </p>
                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          className="details_button d-flex align-items-center">
                          <svg
                            className="me-2"
                            width="20"
                            height="20"
                            viewBox="0 0 30 30"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M25.0931 12.4332C25.0232 12.4298 24.9531 12.4286 24.8831 12.4296H21.9609C19.5704 12.4296 17.5231 14.3269 17.5231 16.8014C17.5231 19.2759 19.5704 21.1732 21.9621 21.1732H24.8819C24.9551 21.1732 25.0259 21.1732 25.0919 21.1684C25.5853 21.1369 26.0505 20.9271 26.4007 20.578C26.7508 20.2289 26.9621 19.7645 26.9952 19.2711C27 19.2003 27 19.1247 27 19.0551V14.5477C27 14.4781 27 14.4025 26.9952 14.3317C26.9622 13.8385 26.751 13.3742 26.4011 13.0252C26.0512 12.6761 25.5863 12.4662 25.0931 12.4344M21.7053 17.9679C22.321 17.9679 22.8214 17.447 22.8214 16.8026C22.8214 16.1582 22.321 15.6373 21.7053 15.6373C21.0897 15.6373 20.5905 16.1582 20.5905 16.8026C20.5905 17.447 21.0885 17.9679 21.7053 17.9679Z"
                              fill="currentColor"></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M24.8819 22.9217C24.9221 22.9203 24.9621 22.9283 24.9986 22.9452C25.0351 22.9621 25.0672 22.9873 25.0921 23.0188C25.1171 23.0504 25.1344 23.0873 25.1425 23.1267C25.1505 23.1661 25.1493 23.2069 25.1387 23.2457C24.9059 24.0762 24.5375 24.7842 23.9458 25.3794C23.0806 26.2519 21.9825 26.6395 20.6265 26.8231C19.3088 27.0019 17.6263 27.0019 15.4998 27.0019H13.0553C10.93 27.0019 9.24631 27.0019 7.92865 26.8231C6.57258 26.6395 5.47452 26.2519 4.60928 25.3794C3.74404 24.5094 3.36002 23.4017 3.17761 22.0361C3 20.7064 3 19.0095 3 16.8674V16.7354C3 14.5933 3 12.8952 3.17761 11.5679C3.36002 10.2011 3.74404 9.09701 4.60808 8.22217C5.47332 7.35092 6.57138 6.9621 7.92745 6.77969C9.24631 6.60089 10.93 6.60089 13.0553 6.60089H15.4998C17.6251 6.60089 19.3088 6.60089 20.6265 6.77969C21.9825 6.9633 23.0806 7.35092 23.9458 8.22217C24.5375 8.8186 24.9059 9.52663 25.1387 10.3583C25.149 10.397 25.1501 10.4376 25.142 10.4769C25.1338 10.5161 25.1165 10.5529 25.0915 10.5843C25.0666 10.6157 25.0346 10.6408 24.9982 10.6576C24.9618 10.6744 24.922 10.6824 24.8819 10.6811H21.9621C18.6812 10.6811 15.7902 13.2936 15.7902 16.8014C15.7902 20.3092 18.6824 22.9217 21.9633 22.9217H24.8819ZM7.33702 11.2643C7.22276 11.2648 7.10972 11.2878 7.00434 11.3319C6.89896 11.3761 6.80331 11.4406 6.72286 11.5217C6.6424 11.6028 6.57871 11.699 6.53542 11.8047C6.49214 11.9105 6.4701 12.0237 6.47057 12.138C6.47057 12.6216 6.85819 13.0128 7.33702 13.0128H11.9644C12.4445 13.0128 12.8321 12.6216 12.8321 12.138C12.8327 11.9071 12.7417 11.6854 12.579 11.5216C12.4164 11.3578 12.1953 11.2653 11.9644 11.2643H7.33702Z"
                              fill="currentColor"></path>
                            <path
                              d="M9.93275 5.42963L12.2825 3.69794C12.8956 3.24463 13.638 3 14.4006 3C15.1631 3 15.9055 3.24463 16.5187 3.69794L18.8816 5.43923C17.8927 5.40083 16.7887 5.40083 15.5802 5.40083H12.9761C11.8696 5.40083 10.8532 5.40083 9.93275 5.42963Z"
                              fill="currentColor"></path>
                          </svg>
                          Create Link
                        </button>
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
