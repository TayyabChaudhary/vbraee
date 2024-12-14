import { Link } from "react-router-dom";
import Subscribe from "./componets/utility/Subscribe";
import MenuSideBar from "./componets/MenuSideBar";
import MainHeader from "./componets/MainHeader";
import RightSideBar from "./componets/RightSideBar";
import MainFooter from "./componets/MainFooter";

export default function Contact() {
  return (
    <>
      <div className="d-flex main_house_con">
        <MenuSideBar makeShort={true} activeLink={"contact"} />

        <div
          className="col housing_con d-flex flex-column"
          style={
            {
              // backgroundImage: " url('./assets/images/psn_bg.png')",
            }
          }>
          <MainHeader activeLink={"contact"} />

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
                  <p className="crumb_link">/ Contact</p>
                </Link>
              </div>
              <div className="vb_contact_con">
                <div
                  className="vb_contact_cont"
                  style={{
                    backgroundImage:
                      "url(./assets/images/red_bg_big.png), url(./assets/images/blue_bg_big.png), url(./assets/images/vb_bg3.png), url(./assets/images/sub_bg.png)",
                  }}>
                  <div className="vb_conta">
                    <p className="vb_title mb-4">Contact</p>

                    <div className="col mb-3">
                      <p className="vb_head">local number</p>
                      <p className="vb_contact_text">+4 673 994-40-88</p>
                    </div>
                    <div className="col mb-3">
                      <p className="vb_head">for message</p>
                      <p className="vb_contact_text">Info@vbrae.com</p>
                    </div>
                    <div className="col mb-3">
                      <p className="vb_head">legal address</p>
                      <p className="vb_contact_text">
                        Oskarström - Hantversksgatan 12 - 31331
                      </p>
                    </div>
                  </div>
                </div>

                <div className="vb_contact">
                  <div className="col col-xl-6 mx-auto">
                    <p className="vb_title mb-2">
                      An Offer? We’d Love to Hear from You!
                    </p>
                    <p className="vb_text">
                      Reach out to us with your partnership opportunities,
                      payment method solutions, backlink services, content
                      offers, or any other ideas. We’re always open!
                    </p>

                    <div className="col mt-4">
                      <div className="col mb-3">
                        <p className="vb_head mb-2">Your email address</p>
                        <input
                          type="email"
                          className="vb_contact_input"
                          placeholder=""
                        />
                      </div>
                      <div className="col mb-3">
                        <p className="vb_head mb-2">Description</p>
                        <textarea
                          className="vb_contact_input h-auto"
                          id=""
                          cols="30"
                          rows="5"
                          placeholder="-"></textarea>
                      </div>
                      <div className="col mb-3">
                        <p className="vb_head mb-2">
                          Attachments <span>(optional)</span>
                        </p>
                        <div className="col col-md-6 vb_contact_file_con">
                          <div className="vb_contact_file">
                            <p className="vb_contact_file_text text-center">
                              <u>Add file</u> or drop files here
                            </p>
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="col-12 col-md-auto vb_contact_btn">
                        Send Message
                      </button>
                    </div>
                  </div>
                  <hr className="vb_line my-5" />

                  <div className="col text-center mb-5">
                    <p className="vb_title mb-1">Need more help?</p>
                    <p className="vb_text mb-4">
                      If you didn&apos;t find what you were looking for, <br />{" "}
                      you can submit a support request here.
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
                  {/* Subscribe Section */}
                  <Subscribe />
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
