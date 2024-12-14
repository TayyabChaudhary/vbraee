/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import MenuSideBar from "./componets/MenuSideBar";
import MainHeader from "./componets/MainHeader";
import RightSideBar from "./componets/RightSideBar";
import MainFooter from "./componets/MainFooter";

export default function PrivacyPolicy() {
  return (
    <>
      <div className="d-flex main_house_con">
        <MenuSideBar makeShort={true} activeLink={'privacy-policy'} />

        <div
          className="col housing_con d-flex flex-column"
          style={
            {
              // backgroundImage: " url('./assets/images/psn_bg.png')",
            }
          }>
          <MainHeader activeLink={'privacy-policy'} />

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
                  <p className="crumb_link">/ Privacy policy</p>
                </Link>
              </div>

              <div className="main_cont">
                <p className="vb_title mb-4">Privacy policy </p>
                <div className="vb_acct_cont">
                  <div className="vb_text">
                    <p className="mb-2">Last updated May 03, 2022</p>

                    <p className="mb-2">
                      This privacy notice for Vbrae Games ("Company," "we,"
                      "us," or "our"), describes how and why we might collect,
                      store, use, and/or share ("process") your information when
                      you use our services ("Services"), such as when you:
                    </p>

                    <div className="mb-2">
                      <li>
                        Visit our website at https://vbrae.com, or any website
                        of ours that links to this privacy notice
                      </li>
                      <li>
                        Engage with us in other related ways, including any
                        sales, marketing, or events
                      </li>
                    </div>
                    <p className="mb-2">
                      Questions or concerns? Reading this privacy notice will
                      help you understand your privacy rights and choices. If
                      you do not agree with our policies and practices, please
                      do not use our Services. If you still have any questions
                      or concerns, please <u>Contact us</u>.
                    </p>
                    <p className="mb-2">
                      What personal information do we process? When you visit,
                      use, or navigate our Services, we may process personal
                      information depending on how you interact with Vbrae Games
                      and the Services, the choices you make, and the products
                      and features you use.
                    </p>
                    <p className="mb-2">
                      {" "}
                      Do we process any sensitive personal information? We may
                      process sensitive personal information when necessary with
                      your consent or as otherwise permitted by applicable law.
                    </p>
                    <p className="mb-2">
                      Do you receive any information from third parties? We do
                      recieve information from Google analytics such as Location
                      Data, IP.
                    </p>
                    <p className="mb-2">
                      How do you process my information? We process your
                      information to provide, improve, and administer our
                      Services, communicate with you, for security and fraud
                      prevention, and to comply with law. We may also process
                      your information for other purposes with your consent. We
                      process your information only when we have a valid legal
                      reason to do so.
                    </p>
                    <p className="mb-2">
                      In what situations and with which parties do we share
                      personal information? We may share information in specific
                      situations and with specific third parties.
                    </p>
                    <p className="mb-2">
                      How do we keep your information safe? We have
                      organizational and technical processes and procedures in
                      place to protect your personal information.
                    </p>
                    <p className="mb-2">
                      What are your rights? Depending on where you are located
                      geographically, the applicable privacy law may mean you
                      have certain rights regarding your personal information.
                      more.
                    </p>
                    <p className="mb-2">
                      How do I exercise my rights? The easiest way to exercise
                      your rights is by filling out our data subject request
                      form available here, or by contacting us. We will consider
                      and act upon any request in accordance with applicable
                      data protection laws.
                    </p>
                    <p className="mb-2">1. WHAT INFORMATION DO WE COLLECT?</p>
                    <p className="mb-2">
                      Personal information you disclose to us
                    </p>
                    <p className="mb-2">
                      In Short: We collect personal information that you provide
                      to us.
                    </p>
                    <p className="mb-2">
                      {" "}
                      We collect personal information that you voluntarily
                      provide to us when you register on the Services, express
                      an interest in obtaining information about us or our
                      products and Services, when you participate in activities
                      on the Services, or otherwise when you contact us.
                    </p>
                    <p className="mb-2">
                      Personal Information Provided by You. The personal
                      information that we collect depends on the context of your
                      interactions with us and the Services, the choices you
                      make, and the products and features you use. The personal
                      information we collect may include the following:
                    </p>
                    <p className="mb-2">
                      names <br /> phone numbers <br /> email addresses <br />
                      usernames <br />
                      passwords <br />
                      contact preferences <br />
                      KYC
                    </p>
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
