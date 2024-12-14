import { Link } from "react-router-dom";
import MainHeader from "./componets/MainHeader";
import MenuSideBar from "./componets/MenuSideBar";
import RightSideBar from "./componets/RightSideBar";
import MainFooter from "./componets/MainFooter";

export default function GiveAway() {
  return (
    <>
      <div className="d-flex main_house_con">
        <MenuSideBar makeShort={true} activeLink={'giveaway'} />

        <div
          className="col housing_con d-flex flex-column"
          style={
            {
              // backgroundImage: " url('./assets/images/psn_bg.png')",
            }
          }>
          <MainHeader activeLink={'giveaway'} />

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
                  <p className="crumb_link">/ Giveaway</p>
                </Link>
              </div>
              <div
                className="vb_con"
                style={{
                  backgroundImage:
                    "url(./assets/images/vb_bg2.png), url(), url(./assets/images/giveaway_bg.png)",
                }}>
                <div className="vb_banner_con"></div>
                <div className="col vb_banner_cont text-center">
                  <div className="col">
                    <div className="col mb-4">
                      <p className="vb_head">Ready To Feel</p>
                      <p className="vb_title mb-4">Gaming extravaganza</p>

                      <div className="d-flex justify-content-center">
                        <Link>
                          <button
                            type="button"
                            className="details_button d-flex align-items-center">
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
                            Join now
                          </button>
                        </Link>
                      </div>
                    </div>

                    <div className="col mb-5">
                      <p className="vb_title_sm mb-4">
                        You can always buy exceptional video games on VBrae
                        cheaply.
                      </p>
                      <p className="vb_text">
                        VBRAE Games is a digital marketplace where you can buy
                        and sell game keys for PC, Xbox, PlayStation, and
                        Nintendo Switch, also softwares is a huge seller here.
                        We offer a wide variety of games and softwares at
                        competitive prices, and we also have regular sales and
                        discounts.
                      </p>
                      <div className="col d-flex gap-4 my-4">
                        <div
                          className="col vb_off_cont"
                          style={{
                            backgroundImage:
                              "url(./assets/images/red_bg.png), url(./assets/images/blue_bg.png)",
                          }}>
                          <img
                            src={"./assets/images/icons/icon_cup.svg"}
                            alt=""
                            className="step_img mb-3"
                          />
                          <p className="vb_tit">Latest Winners </p>
                          <p className="vb_text mb-2">
                            Winners of Monthly Giveaway #254 (ended: 31.05.2024)
                          </p>

                          <p className="vb_contact_text">
                            No Rest for the Wicked Steam - Bao S. -
                            (ne******y@g***l.com)
                          </p>
                          <p className="vb_contact_text">
                            No Rest for the Wicked Steam - Kaya E. -
                            (ka*****0@a*l.com)
                          </p>
                          <p className="vb_contact_text">
                            Manor Lords Steam - Alan S. -
                            (al************9@i****d.com)
                          </p>
                          <p className="vb_contact_text">
                            Manor Lords Steam - Carlos B. -
                            (ca***********6@g***l.com)
                          </p>
                        </div>
                      </div>

                      <p className="vb_text">
                        Winners are required to contact us at
                        partnership@vbrae.com to collect the rewards. Rewards
                        should be redeemed within 14 days from the announcement
                        of winners. By joining our VBRAE{" "}
                          <u>
                            Giveaway you accept our Giveaway Terms and
                            Conditions
                          </u>
                      </p>
                    </div>

                    <div className="col col-lg-10 col-xl-6 mx-auto mb-5">
                      <div className="col d-flex gap-1">
                        <div className="col vb_give_cont">
                          <p className="vb_give_count">0</p>
                          <p className="vb_give_text">Your Entries</p>
                        </div>
                        <div className="col vb_give_cont active">
                          <p className="vb_give_count ">27,295</p>
                          <p className="vb_give_text">Total Entries</p>
                        </div>
                        <div className="col vb_give_cont">
                          <p className="vb_give_count">3</p>
                          <p className="vb_give_text">Days Left</p>
                        </div>
                      </div>
                      <img
                        src={"./assets/images/giveaway_img.png"}
                        alt=""
                        className="w-100"
                      />
                      <div className="col ga_con1">
                        <p className="ga_text mb-1">
                          Join VBRAE Monthly Giveaway and take your chance of
                          winning:
                        </p>
                        <p className="ga_text mb-1">
                          {"2x Senua's Saga: Hellblade II Steam"}
                        </p>
                        <p className="ga_text mb-1">
                          {"2x Ghost of Tsushima: Director's Cut Steam"}
                        </p>
                      </div>
                      <div className="ga_con2">
                        <p className="ga_head">10 Ways to Enter</p>
                      </div>

                      {/* Login */}
                      <div className="ga_con3 d-flex justify-content-center align-items-center">
                        <p className="ga_text small">Login with: </p>
                        <span className="ga_icon puple small d-flex justify-content-center align-items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.1.1 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.1 16.1 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"></path>
                          </svg>
                        </span>
                        <span className="ga_icon gray small d-flex justify-content-center align-items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"></path>
                          </svg>
                        </span>
                        <span className="ga_icon blue small d-flex justify-content-center align-items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"></path>
                          </svg>
                        </span>
                        <span className="ga_icon sky small d-flex justify-content-center align-items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.1.1 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.1 16.1 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"></path>
                          </svg>
                        </span>
                      </div>

                      {/* Tasks */}
                      <div className="ga_con1 py-0 ps-0">
                        <div className="col d-flex gap-3 justify-content-start align-items-center">
                          <span className="ga_icon pink d-flex justify-content-center align-items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"></path>
                            </svg>
                          </span>
                          <p className="ga_text_big">
                            Follow VBRAE on TikTok [+20]
                          </p>
                          <span className="ga_badge ms-auto">+20</span>
                        </div>
                        <div className="col d-flex gap-3 justify-content-start align-items-center">
                          <span className="ga_icon sky d-flex justify-content-center align-items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.1.1 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.1 16.1 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"></path>
                            </svg>
                          </span>
                          <p className="ga_text_big">
                            Follow VBRAE on TikTok [+20]
                          </p>
                          <span className="ga_badge ms-auto">+20</span>
                        </div>
                        <div className="col d-flex gap-3 justify-content-start align-items-center">
                          <span className="ga_icon puple d-flex justify-content-center align-items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24">
                              <g
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={1.5}>
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></path>
                                <path d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z"></path>
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m17.5 6.51l.01-.011"></path>
                              </g>
                            </svg>
                          </span>
                          <p className="ga_text_big">
                            Follow VBRAE on TikTok [+20]
                          </p>
                          <span className="ga_badge ms-auto">+20</span>
                        </div>
                        <div className="col d-flex gap-3 justify-content-start align-items-center">
                          <span className="ga_icon blue d-flex justify-content-center align-items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path>
                            </svg>
                          </span>
                          <p className="ga_text_big">
                            Follow VBRAE on TikTok [+20]
                          </p>
                          <span className="ga_badge ms-auto">+20</span>
                        </div>
                        <div className="col d-flex gap-3 justify-content-start align-items-center">
                          <span className="ga_icon gray d-flex justify-content-center align-items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"></path>
                            </svg>
                          </span>
                          <p className="ga_text_big">
                            Follow VBRAE on TikTok [+20]
                          </p>
                          <span className="ga_badge ms-auto">+20</span>
                        </div>
                        <div className="col d-flex gap-3 justify-content-start align-items-center">
                          <span className="ga_icon blue d-flex justify-content-center align-items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"></path>
                            </svg>
                          </span>
                          <p className="ga_text_big">
                            Follow VBRAE on TikTok [+20]
                          </p>
                          <span className="ga_badge ms-auto">+20</span>
                        </div>
                      </div>

                      <div className="ga_con3 d-flex justify-content-center align-items-center py-2">
                        <p className="ga_text small">
                          Terms & Conditions | © Vbrae.com
                        </p>
                      </div>
                    </div>

                    <div className="col mb-4">
                      <p className="vb_title mb-1">Start earning money now!</p>
                      <p className="vb_text mb-4">
                        Monitor your earnings on your affiliate panel. <br />{" "}
                        Receive commission for referred orders.
                      </p>
                      <div className="d-flex justify-content-center">
                        <Link>
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
