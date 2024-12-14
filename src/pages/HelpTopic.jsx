import { Link } from "react-router-dom";
import MenuSideBar from "./componets/MenuSideBar";
import MainHeader from "./componets/MainHeader";
import CustomAccordion from "./componets/utility/CustomAccordion";
import RightSideBar from "./componets/RightSideBar";
import MainFooter from "./componets/MainFooter";

// function HelpFilter({ isOpen, onClose }) {
//   return (
//     <>

//     </>
//   );
// }

export default function HelpTopic() {
  return (
    <>
      <div className="d-flex main_house_con">
        <MenuSideBar makeShort={true} activeLink={"help-center"} />

        <div
          className="col housing_con d-flex flex-column"
          style={
            {
              // backgroundImage: " url('./assets/images/psn_bg.png')",
            }
          }>
          <MainHeader activeLink={"help-center"} />

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
                <Link to={"/help-center"}>
                  <p className="crumb_link">/ Help Center</p>
                </Link>
                <Link>
                  <p className="crumb_link">/ Account</p>
                </Link>
              </div>

              <div className="main_cont d-lg-flex gap-4 position-relative">
                <div className="col-3 d-none d-lg-block sticky-top">
                  <div className="col mb-4">
                    <CustomAccordion
                      isActive={true}
                      trigger={(isOpen) => (
                        <div
                          className={
                            "cate_filter_head d-flex justify-content-between align-items-center mb-2 " +
                            (isOpen && "active")
                          }>
                          <li className="">Category</li>
                          {isOpen ? (
                            <span className="icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24">
                                <path
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="m5 15l7-7l7 7"
                                />
                              </svg>
                            </span>
                          ) : (
                            <span className="icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24">
                                <path
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="m19 9l-7 7l-7-7"
                                />
                              </svg>
                            </span>
                          )}
                        </div>
                      )}
                      content={
                        <div className="col">
                          <Link className="d-block mb-3">
                            <p className="cate_filter_text active">
                              How to Change Your Password{" "}
                            </p>
                          </Link>
                          <Link className="d-block mb-3">
                            <p className="cate_filter_text">
                              How Can I Buy a Product?{" "}
                            </p>
                          </Link>
                          <Link className="d-block mb-3">
                            <p className="cate_filter_text">
                              I Can&apos;t Sign In to My Account{" "}
                            </p>
                          </Link>
                          <Link className="d-block mb-3">
                            <p className="cate_filter_text">
                              How to Create an Account{" "}
                            </p>
                          </Link>
                        </div>
                      }
                    />
                  </div>

                  <hr className="cate_filter_line mb-4" />

                  <div className="col mb-4">
                    <CustomAccordion
                      isActive={false}
                      trigger={(isOpen) => (
                        <div
                          className={
                            "cate_filter_head d-flex justify-content-between align-items-center mb-2 " +
                            (isOpen && "active")
                          }>
                          <li className="">Vendor</li>
                          {isOpen ? (
                            <span className="icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24">
                                <path
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="m5 15l7-7l7 7"
                                />
                              </svg>
                            </span>
                          ) : (
                            <span className="icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24">
                                <path
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="m19 9l-7 7l-7-7"
                                />
                              </svg>
                            </span>
                          )}
                        </div>
                      )}
                      content={
                        <div className="col">
                          <Link className="d-block mb-3">
                            <p className="cate_filter_text active">
                              How to Change Your Password{" "}
                            </p>
                          </Link>
                          <Link className="d-block mb-3">
                            <p className="cate_filter_text">
                              How Can I Buy a Product?{" "}
                            </p>
                          </Link>
                          <Link className="d-block mb-3">
                            <p className="cate_filter_text">
                              I Can&apos;t Sign In to My Account{" "}
                            </p>
                          </Link>
                          <Link className="d-block mb-3">
                            <p className="cate_filter_text">
                              How to Create an Account{" "}
                            </p>
                          </Link>
                        </div>
                      }
                    />
                  </div>

                  <hr className="cate_filter_line mb-4" />

                  <div className="col mb-4">
                    <CustomAccordion
                      isActive={false}
                      trigger={(isOpen) => (
                        <div
                          className={
                            "cate_filter_head d-flex justify-content-between align-items-center mb-2 " +
                            (isOpen && "active")
                          }>
                          <li className="">Category</li>
                          {isOpen ? (
                            <span className="icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24">
                                <path
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="m5 15l7-7l7 7"
                                />
                              </svg>
                            </span>
                          ) : (
                            <span className="icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24">
                                <path
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="m19 9l-7 7l-7-7"
                                />
                              </svg>
                            </span>
                          )}
                        </div>
                      )}
                      content={
                        <div className="col">
                          <Link className="d-block mb-3">
                            <p className="cate_filter_text active">
                              How to Change Your Password{" "}
                            </p>
                          </Link>
                          <Link className="d-block mb-3">
                            <p className="cate_filter_text">
                              How Can I Buy a Product?{" "}
                            </p>
                          </Link>
                          <Link className="d-block mb-3">
                            <p className="cate_filter_text">
                              I Can&apos;t Sign In to My Account{" "}
                            </p>
                          </Link>
                          <Link className="d-block mb-3">
                            <p className="cate_filter_text">
                              How to Create an Account{" "}
                            </p>
                          </Link>
                        </div>
                      }
                    />
                  </div>

                  <hr className="cate_filter_line mb-4" />
                </div>
                <div className="col">
                  <select className="col-12 d-lg-none cate_filter_sort_sel mb-3">
                    <option value="">Category: All</option>
                  </select>
                  <p className="vb_title mb-4">How to Change Your Password </p>
                  <div className="vb_acct_cont mb-5">
                    <p className="vb_contact_text">
                      You can easily change your password by clicking on your
                      (Profile) Select &quot;Change Password&quot;. You will
                      need to confirm your changes through the email you have
                      choosen at signup.
                    </p>
                  </div>

                  <div className="col text-center mb-4">
                    <p className="vb_title mb-1">Still have questions?</p>
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
