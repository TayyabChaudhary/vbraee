import { Link } from "react-router-dom";
import AccountSideBar from "../componets/account/AccountSideBar";
import MainHeader from "../componets/MainHeader";
import { useTabs } from "../../services/CustomTabs";

export default function Profile() {
  const breadCrums = [
    {
      title: "Settings",
      url: "/account/profile",
    },
  ];

  const breadCrumsList = breadCrums?.map((item, index) => {
    return (
      <Link to={item.url} key={index}>
        <p className="crumb_link">/ {item.title}</p>
      </Link>
    );
  });

  const { activeTab, ChangeTab } = useTabs(1);

  return (
    <>
      <div
        className="d-flex w-100 main_house_con"
        style={{
          background: "none",
        }}>
        <AccountSideBar activeLink={'settings'} />

        <div className="col housing_con d-flex flex-column">
          <MainHeader
            showHeader={true}
            isAccount={true}
            breadCrums={breadCrums}
            activeLink={"settings"}
          />

          <div id="scrollable-section" className="col acct_cont_con pt-lg-0">
            <div className=" d-lg-none justify-content-between align-items-center mb-3">
              <div className="d-flex align-items-center gap-2">
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
                {breadCrumsList}
              </div>
            </div>

            <div className="acct_cont ">
              <div className="col d-flex flex-wrap justify-content-between gap-4 align-items-center mb-4">
                <p className="d-none d-xl-block acct_offer_title">Settings</p>

                <div className="col hide_scroll d-flex gap-2 justify-content-md-center align-items-center overflow-auto">
                  <p
                    className={"dash_tab_link " + (activeTab == 1 && "active")}
                    onClick={() => ChangeTab(1)}>
                    Account Details
                  </p>
                  <p
                    className={"dash_tab_link " + (activeTab == 2 && "active")}
                    onClick={() => ChangeTab(2)}>
                    Shop Settings
                  </p>
                  <p
                    className={"dash_tab_link " + (activeTab == 3 && "active")}
                    onClick={() => ChangeTab(3)}>
                    2FA
                  </p>
                  <p
                    className={"dash_tab_link " + (activeTab == 4 && "active")}
                    onClick={() => ChangeTab(4)}>
                    LINKS
                  </p>
                  <p
                    className={"dash_tab_link " + (activeTab == 5 && "active")}
                    onClick={() => ChangeTab(5)}>
                    Address
                  </p>
                </div>

                <div className="col-auto offer_save_btn_con d-flex justify-content-center">
                  <button type="button" className="col acct_offer_btn">
                    Save
                  </button>
                </div>
              </div>

              {/* Account Details */}
              {activeTab == 1 && (
                <div className="col pro_tab_cont">
                  <p className="acct_offer_title gray mb-4">Account Details</p>

                  <div className="col position-relative mb-4">
                    <div className="pro_up_img_cont text-center ">
                      <p className="acct_offer_label mb-2">AVATAR Image</p>
                      <img
                        src={"../assets/images/user.png"}
                        alt=""
                        className="pro_up_img mb-2"
                      />
                      <div className="d-flex justify-content-center">
                        <button type="button" className="acct_offer_btn2">
                          Change
                        </button>
                      </div>
                    </div>
                    <div
                      className="col pro_up d-flex justify-content-center"
                      style={{
                        backgroundImage:
                          "url(../assets/images/pro_upload_bg.png)",
                      }}>
                      <div className="col col-lg-6 col-xl-4 text-center">
                        <p className="acct_offer_label mb-2">
                          Cover shop Image (1920x400){" "}
                        </p>
                        <p className="acct_offer_hint d-flex gap-1 justify-content-center align-items-start">
                          <span className="icon2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10M12 6.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
                                clipRule="evenodd"></path>
                            </svg>
                          </span>
                          This image will only be displayed on computers and
                          laptops
                        </p>
                        <img
                          src={"../assets/images/fade_logo.png"}
                          className="my-4"
                          height={"60px"}
                        />
                        <div className="d-flex justify-content-center">
                          <button type="button" className="acct_offer_btn2">
                            Upload
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col d-flex flex-wrap gap-3">
                    <div className="col">
                      <div className="d-md-flex gap-3">
                        <div className="col mb-3">
                          <label className="acct_offer_label green mb-2">
                            Email Address (required)
                          </label>
                          <div className="acct_box filled">
                            <input
                              type="text"
                              name="amount"
                              className="input_box "
                              value={"tclausens@mail.com"}
                              placeholder="-"
                            />
                          </div>
                        </div>
                        <div className="col mb-3">
                          <label className="acct_offer_label green mb-2">
                            Username (required)
                          </label>
                          <div className="acct_box filled">
                            <input
                              type="text"
                              name="amount"
                              className="input_box"
                              value={"tmmarious"}
                              placeholder="-"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="d-md-flex gap-3">
                        <div className="col mb-3">
                          <label className="acct_offer_label green mb-2">
                            First Name (required)
                          </label>
                          <div className="acct_box filled">
                            <input
                              type="text"
                              name="amount"
                              className="input_box "
                              value={"Marious"}
                              placeholder="-"
                            />
                          </div>
                        </div>
                        <div className="col mb-3">
                          <label className="acct_offer_label green mb-2">
                            Last Name (required)
                          </label>
                          <div className="acct_box filled">
                            <input
                              type="text"
                              name="amount"
                              className="input_box"
                              value={"Tclausens"}
                              placeholder="-"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="d-md-flex gap-3">
                        <div className="col mb-3">
                          <label className="acct_offer_label green mb-2">
                            Phone Number (required)
                          </label>
                          <div className="acct_box">
                            <input
                              type="text"
                              name="amount"
                              className="input_box "
                              placeholder="-"
                            />
                          </div>
                        </div>
                        <div className="col mb-3">
                          <label className="acct_offer_label green mb-2">
                            Country (required)
                          </label>
                          <div className="acct_box filled">
                            <input
                              type="text"
                              name="amount"
                              className="input_box"
                              value={"United States"}
                              placeholder="-"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col">
                        <div className="col d-flex align-items-center gap-2 mb-3">
                          <input
                            className="acct_offer_check"
                            type="checkbox"
                            value=""
                            name="type"
                            id="defaultCheck2"
                            checked
                            onChange={() => {}}
                          />
                          <label
                            className="acct_offer_text active"
                            htmlFor="defaultCheck2">
                            Send me an email when someone send me a message
                          </label>
                        </div>
                        <div className="col d-flex align-items-center gap-2 mb-3">
                          <input
                            className="acct_offer_check"
                            type="checkbox"
                            onChange={() => {}}
                            value=""
                            name="type"
                            id="defaultCheck3"
                          />
                          <label
                            className="acct_offer_text"
                            htmlFor="defaultCheck3">
                            Show my location
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-xl-4">
                      <div className="col pro_info_cont mb-2">
                        <p className="pro_info_head green d-flex gap-2 align-items-center mb-3">
                          <span className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10M12 6.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
                                clipRule="evenodd"></path>
                            </svg>
                          </span>
                          Information required
                        </p>
                        <p className="pro_info_text">
                          In order to sell your products, you must be a verified
                          member. Verification is a one-time process. This
                          verification process is necessary because of spammers
                          and fraud.
                        </p>
                      </div>
                      <div className="col pro_info_cont mb-2">
                        <p className="pro_info_head green d-flex gap-2 align-items-center mb-3">
                          <span className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10M12 6.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
                                clipRule="evenodd"></path>
                            </svg>
                          </span>
                          KYC Verification
                        </p>
                        <p className="pro_info_text mb-4">
                          We work together with Kycaid. Verify your ID within 15
                          seconds
                        </p>
                        <button type="button" className="acct_offer_btn3">
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Shop Settings */}
              {activeTab == 2 && (
                <div className="col pro_tab_cont">
                  <p className="acct_offer_title gray mb-3">Shop Settings</p>

                  <div className="col d-flex flex-wrap gap-3">
                    <div className="col">
                      <div className="d-md-flex gap-3">
                        <div className="col mb-3">
                          <label className="acct_offer_label green mb-2">
                            Shop Name (required)
                          </label>
                          <div className="acct_box filled">
                            <input
                              type="text"
                              name="amount"
                              className="input_box "
                              value={"Game Accounts"}
                              placeholder="-"
                            />
                          </div>
                        </div>
                        <div className="col mb-3"></div>
                      </div>

                      <div className="col mb-4">
                        <div className="form-check form-switch d-flex gap-3 align-items-center mb-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckChecked"
                            onChange={() => {}}
                          />
                          <label
                            className="acct_offer_title small"
                            htmlFor="flexSwitchCheckChecked">
                            Vacation mode
                          </label>
                        </div>
                        <p className="acct_offer_text">
                          Pause your game and notifications. Enjoy your break!
                        </p>
                      </div>

                      <div className="col mb-4">
                        <p className="acct_offer_title small d-flex gap-3 align-items-center mb-4">
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
                                strokeWidth={2}
                                d="m5 15l7-7l7 7"></path>
                            </svg>
                          </span>
                          Change your password
                        </p>

                        <div className="col">
                          <div className="col mb-3">
                            <label className="acct_offer_label mb-2">
                              Current password
                            </label>
                            <div className="acct_box">
                              <input
                                type="text"
                                name="amount"
                                className="input_box "
                                placeholder=""
                              />
                            </div>
                          </div>
                          <div className="col mb-3">
                            <label className="acct_offer_label mb-2">
                              New password
                            </label>
                            <div className="acct_box">
                              <input
                                type="text"
                                name="amount"
                                className="input_box "
                                placeholder=""
                              />
                            </div>
                          </div>

                          <div className="col mb-3">
                            <label className="acct_offer_label mb-3">
                              Your password must have
                            </label>
                            <div className="col row row-cols-1 row-cols-md-2">
                              <div className="col d-flex align-items-center gap-2 mb-3">
                                <input
                                  className="acct_offer_check"
                                  type="checkbox"
                                  value=""
                                  name="type"
                                  id="defaultCheck2"
                                  onChange={() => {}}
                                />
                                <label
                                  className="acct_offer_text active"
                                  htmlFor="defaultCheck2">
                                  at least one uppercase character
                                </label>
                              </div>
                              <div className="col d-flex align-items-center gap-2 mb-3">
                                <input
                                  className="acct_offer_check"
                                  type="checkbox"
                                  value=""
                                  name="type"
                                  id="defaultCheck2"
                                  onChange={() => {}}
                                />
                                <label
                                  className="acct_offer_text active"
                                  htmlFor="defaultCheck2">
                                  at least one uppercase character
                                </label>
                              </div>
                              <div className="col d-flex align-items-center gap-2 mb-3">
                                <input
                                  className="acct_offer_check"
                                  type="checkbox"
                                  value=""
                                  name="type"
                                  id="defaultCheck2"
                                  onChange={() => {}}
                                />
                                <label
                                  className="acct_offer_text active"
                                  htmlFor="defaultCheck2">
                                  at least one uppercase character
                                </label>
                              </div>
                              <div className="col d-flex align-items-center gap-2 mb-3">
                                <input
                                  className="acct_offer_check"
                                  type="checkbox"
                                  value=""
                                  name="type"
                                  id="defaultCheck2"
                                  onChange={() => {}}
                                />
                                <label
                                  className="acct_offer_text active"
                                  htmlFor="defaultCheck2">
                                  at least one uppercase character
                                </label>
                              </div>
                              <div className="col d-flex align-items-center gap-2 mb-3">
                                <input
                                  className="acct_offer_check"
                                  type="checkbox"
                                  value=""
                                  name="type"
                                  id="defaultCheck2"
                                  onChange={() => {}}
                                />
                                <label
                                  className="acct_offer_text active"
                                  htmlFor="defaultCheck2">
                                  at least one uppercase character
                                </label>
                              </div>
                              <div className="col d-flex align-items-center gap-2 mb-3">
                                <input
                                  className="acct_offer_check"
                                  type="checkbox"
                                  value=""
                                  name="type"
                                  id="defaultCheck2"
                                  onChange={() => {}}
                                />
                                <label
                                  className="acct_offer_text active"
                                  htmlFor="defaultCheck2">
                                  at least one uppercase character
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="d-md-flex gap-3 align-items-end">
                            <div className="col mb-3">
                              <label className="acct_offer_label mb-2">
                                Repeat password
                              </label>
                              <div className="acct_box">
                                <input
                                  type="text"
                                  name="amount"
                                  className="input_box "
                                  placeholder=""
                                />
                              </div>
                            </div>
                            <div className="col d-flex gap-2 mb-3">
                              <button
                                type="button"
                                className="col acct_offer_btn2">
                                Cancel
                              </button>
                              <button
                                type="button"
                                className="col acct_offer_btn1">
                                Change
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-xl-4"></div>
                  </div>
                </div>
              )}

              {/* Two Factor Authentication */}
              {activeTab == 3 && (
                <div className="col pro_tab_cont">
                  <p className="acct_offer_title gray mb-3">
                    Two Factor Authentication
                  </p>

                  <div className="col">
                    <div className="col mb-4">
                      <div className="form-check form-switch d-flex gap-3 align-items-center mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckChecked"
                          checked
                          onChange={() => {}}
                        />
                        <label
                          className="acct_offer_title small"
                          htmlFor="flexSwitchCheckChecked">
                          Email Two Factor Authentication
                        </label>
                      </div>
                      <p className="acct_offer_text">
                        If you want to log in to your Kinguin account or perform
                        an action that will require 2FA, we will send a
                        verification code to your email address. It will prevent
                        unauthorised log ins to your account.
                      </p>
                    </div>
                    <div className="col mb-4">
                      <div className="form-check form-switch d-flex gap-3 align-items-center mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckChecked"
                          onChange={() => {}}
                        />
                        <label
                          className="acct_offer_title dark small"
                          htmlFor="flexSwitchCheckChecked">
                          Google Authenticator
                        </label>
                      </div>
                      <p className="acct_offer_text">
                        If you want to log in to your Kinguin account or perform
                        an action that will require 2FA, we will send a
                        verification code to your email address. It will prevent
                        unauthorised log ins to your account.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Links */}
              {activeTab == 4 && (
                <div className="col pro_tab_cont">
                  <p className="acct_offer_title gray mb-3">Links</p>

                  <div className="col">
                    <div className="d-md-flex align-items-end gap-3 mb-2">
                      <div className="col-12 col-md mb-3">
                        <label className="acct_offer_label mb-2">
                          Link Title
                        </label>
                        <div className="acct_box filled">
                          <input
                            type="text"
                            name="amount"
                            className="input_box "
                            placeholder="Enter Link Title"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md mb-3">
                        <label className="acct_offer_label mb-2">URL</label>
                        <div className="acct_box filled">
                          <input
                            type="text"
                            name="amount"
                            className="input_box "
                            placeholder="Url"
                          />
                        </div>
                      </div>
                      <button
                        type="button"
                        className="col-12 col-md-3 acct_offer_btn1 mb-3">
                        Add Link
                      </button>
                    </div>

                    <div className="col">
                      <div className="pro_link_cont d-md-flex justify-content-between align-items-center position-relative mb-2">
                        <div className="form-check form-switch d-flex gap-3 align-items-center mb-3 mb-md-0">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckChecked"
                            checked
                            onChange={() => {}}
                          />
                          <label
                            className="acct_offer_title small"
                            htmlFor="flexSwitchCheckChecked">
                            Facebook
                          </label>
                        </div>
                        <div className="d-flex gap-3 align-items-center">
                          <p className="acct_offer_title light dark small">
                            https://www.Facebook.com/in/sergej-arhutik/
                          </p>
                          <span className="pro_link_icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 32 32">
                              <path
                                fill="currentColor"
                                d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"></path>
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className="pro_link_cont d-md-flex justify-content-between align-items-center position-relative mb-2">
                        <div className="form-check form-switch d-flex gap-3 align-items-center mb-3 mb-md-0">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckChecked"
                            checked
                            onChange={() => {}}
                          />
                          <label
                            className="acct_offer_title small"
                            htmlFor="flexSwitchCheckChecked">
                            Facebook
                          </label>
                        </div>
                        <div className="d-flex gap-3 align-items-center">
                          <p className="acct_offer_title light dark small">
                            https://www.Facebook.com/in/sergej-arhutik/
                          </p>
                          <span className="pro_link_icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 32 32">
                              <path
                                fill="currentColor"
                                d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"></path>
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className="pro_link_cont d-md-flex justify-content-between align-items-center position-relative mb-2">
                        <div className="form-check form-switch d-flex gap-3 align-items-center mb-3 mb-md-0">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckChecked"
                            checked
                            onChange={() => {}}
                          />
                          <label
                            className="acct_offer_title small"
                            htmlFor="flexSwitchCheckChecked">
                            Facebook
                          </label>
                        </div>
                        <div className="d-flex gap-3 align-items-center">
                          <p className="acct_offer_title light dark small">
                            https://www.Facebook.com/in/sergej-arhutik/
                          </p>
                          <span className="pro_link_icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 32 32">
                              <path
                                fill="currentColor"
                                d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"></path>
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className="pro_link_cont d-md-flex justify-content-between align-items-center position-relative mb-2">
                        <div className="form-check form-switch d-flex gap-3 align-items-center mb-3 mb-md-0">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckChecked"
                            checked
                            onChange={() => {}}
                          />
                          <label
                            className="acct_offer_title small"
                            htmlFor="flexSwitchCheckChecked">
                            Facebook
                          </label>
                        </div>
                        <div className="d-flex gap-3 align-items-center">
                          <p className="acct_offer_title light dark small">
                            https://www.Facebook.com/in/sergej-arhutik/
                          </p>
                          <span className="pro_link_icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 32 32">
                              <path
                                fill="currentColor"
                                d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"></path>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Addresses */}
              {activeTab == 5 && (
                <div className="col pro_tab_cont">
                  <p className="acct_offer_title gray mb-3">Addresses</p>

                  <div className="col row row-cols-1 row-cols-md-2 g-3 mb-4">
                    <div className="col">
                      <div className="col h-100 cart_add_item position-relative">
                        <span className="cart_add_close position-absolute">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 32 32">
                            <path
                              fill="currentColor"
                              d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"
                            />
                          </svg>
                        </span>
                        <p className="cart_add_head mb-2">Andreas Loow</p>
                        <p className="cart_add_text mb-2">
                          Hantverksgatan 12 <br /> Osksrström, 31331
                        </p>
                        <p className="cart_add_type">Sweden</p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="col h-100 cart_add_item position-relative">
                        <span className="cart_add_close position-absolute">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 32 32">
                            <path
                              fill="currentColor"
                              d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"
                            />
                          </svg>
                        </span>
                        <p className="cart_add_head mb-2">Andreas Loow</p>
                        <p className="cart_add_text mb-2">
                          Hantverksgatan 12 <br /> Osksrström, 31331
                        </p>
                        <p className="cart_add_type">Sweden</p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="col h-100 cart_add_item position-relative">
                        <span className="cart_add_close position-absolute">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 32 32">
                            <path
                              fill="currentColor"
                              d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"
                            />
                          </svg>
                        </span>
                        <p className="cart_add_head mb-2">Andreas Loow</p>
                        <p className="cart_add_text mb-2">
                          Hantverksgatan 12 <br /> Osksrström, 31331
                        </p>
                        <p className="cart_add_type">Sweden</p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="col h-100 cart_add_item  new d-flex justify-content-center align-items-center">
                        <p className="cart_add_new d-flex gap-2 align-items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m5 11h-4v4h-2v-4H7v-2h4V7h2v4h4z"></path>
                          </svg>
                          Add new address
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap">
                    <div className="col">
                      <div className="d-md-flex align-items-end gap-3">
                        <div className="col mb-3">
                          <label className="acct_offer_label mb-2">
                            First name*
                          </label>
                          <div className="acct_box active">
                            <input
                              type="text"
                              name="amount"
                              className="input_box "
                              value={"tclausens"}
                              placeholder="-"
                            />
                          </div>
                        </div>
                        <div className="col mb-3">
                          <label className="acct_offer_label mb-2">
                            Last name*
                          </label>
                          <div className="acct_box active">
                            <input
                              type="text"
                              name="amount"
                              className="input_box "
                              value={"tmmarious"}
                              placeholder="-"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="d-mb-flex align-items-end gap-3">
                        <div className="col mb-3">
                          <label className="acct_offer_label mb-2">
                            Street, House No., City*
                          </label>
                          <div className="acct_box active">
                            <input
                              type="text"
                              name="amount"
                              className="input_box "
                              value={"Marious"}
                              placeholder="-"
                            />
                          </div>
                        </div>
                      </div>
                      <p className="acct_offer_hint d-flex gap-2 align-items-center mb-4">
                        <span className="icon2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              fillRule="evenodd"
                              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10M12 6.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
                              clipRule="evenodd"></path>
                          </svg>
                        </span>
                        If you want to receive an invoice, please fill out the
                        data below
                      </p>
                      <div className="col ">
                        <p className="acct_offer_title small d-flex gap-3 align-items-center mb-4">
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
                                strokeWidth={2}
                                d="m5 15l7-7l7 7"></path>
                            </svg>
                          </span>
                          Hide additional fields
                        </p>

                        <div className="col">
                          <div className="d-md-flex gap-3">
                            <div className="col mb-3">
                              <label className="acct_offer_label mb-2">
                                Company
                              </label>
                              <div className="acct_box">
                                <input
                                  type="text"
                                  name="amount"
                                  className="input_box "
                                  placeholder="-"
                                />
                              </div>
                            </div>
                            <div className="col mb-3">
                              <label className="acct_offer_label mb-2">
                                Tax ID
                              </label>
                              <div className="acct_box">
                                <input
                                  type="text"
                                  name="amount"
                                  className="input_box "
                                  placeholder="-"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="d-md-flex gap-3">
                            <div className="col mb-3">
                              <label className="acct_offer_label mb-2">
                                Telephone
                              </label>
                              <div className="acct_box">
                                <input
                                  type="text"
                                  name="amount"
                                  className="input_box "
                                  placeholder="-"
                                />
                              </div>
                            </div>
                            <div className="col mb-3">
                              <label className="acct_offer_label mb-2">
                                Fax
                              </label>
                              <div className="acct_box">
                                <input
                                  type="text"
                                  name="amount"
                                  className="input_box "
                                  placeholder="-"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="d-flex gap-3">
                            <div className="col-12 col-md d-flex gap-2 mb-3">
                              <button
                                type="button"
                                className="col acct_offer_btn2">
                                Cancel
                              </button>
                              <button
                                type="button"
                                className="col acct_offer_btn1">
                                Add
                              </button>
                            </div>
                            <div className="col"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-xl-4"></div>
                  </div>
                </div>
              )}

              {/* Important Empty Space */}
              <div className="col d-lg-none my-5 "></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
