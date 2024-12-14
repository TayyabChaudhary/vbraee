import { Link } from "react-router-dom";
import MenuSideBar from "./componets/MenuSideBar";
import MainHeader from "./componets/MainHeader";
import { useState } from "react";
import RightSideBar from "./componets/RightSideBar";
import MainFooter from "./componets/MainFooter";

function RequestSuccesfull() {
  return (
    <>
      <div
        className="col col-md-10 col-lg-8 col-xl-6 vb_off_cont text-center"
        style={{
          backgroundImage:
            "url(./assets/images/red_bg.png), url(./assets/images/blue_bg.png)",
        }}>
        <img
          src={"./assets/images/icons/icon_help.svg"}
          alt=""
          height={"60px"}
          className="mb-4"
        />
        <p className="vb_title mb-2">Earning & Payouts</p>
        <p className="vb_text mb-4">
          A confirmation email is on the way. <br /> An agent will be in touch
          in the next 24h.
        </p>
        <div className="d-flex flex-wrap justify-content-center gap-4">
          <Link to={"/account/support"}>
            <button type="button" className="vb_contact_btn3">
              See your request
            </button>
          </Link>
          <Link to={"/psn"}>
            <button type="button" className="vb_contact_btn2">
              Go back to catelog
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default function SubmitRequest() {
  const [completed, setCompleted] = useState(false);
  function ToggleComplete() {
    setCompleted(true);
  }
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
                  <p className="crumb_link">/ Submit a Request</p>
                </Link>
              </div>
              <div
                className="vb_con"
                style={{
                  backgroundImage:
                    "url(./assets/images/vb_bg2.png), url(), url(./assets/images/request_bg.png)",
                }}>
                <div className="vb_req_con d-flex justify-content-center align-items-center position-relative">
                  {completed ? (
                    <RequestSuccesfull />
                  ) : (
                    <div className="col col-md-10 col-lg-8 col-xl-6 vb_req">
                      <p className="vb_title mb-4">Submit a Request</p>

                      <div className="col mb-4">
                        <p className="vb_head mb-2">Your email address</p>
                        <input
                          type="email"
                          className="vb_contact_input"
                          placeholder="-"
                        />
                      </div>
                      <div className="col mb-4">
                        <p className="vb_head mb-2">Subject</p>
                        <select className="vb_contact_sel">
                          <option value="">-</option>
                        </select>
                      </div>
                      <div className="col mb-4">
                        <p className="vb_head mb-2">
                          What is you inquiry about?
                        </p>
                        <select className="vb_contact_sel">
                          <option value="">-</option>
                        </select>
                      </div>
                      <div className="col mb-4">
                        <p className="vb_head mb-2">Description</p>
                        <textarea
                          className="vb_contact_input h-auto"
                          id=""
                          cols="30"
                          rows="5"
                          placeholder="-"></textarea>
                      </div>
                      <div className="col mb-4">
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
                        className="col-12 col-md-auto vb_contact_btn2"
                        onClick={() => ToggleComplete()}>
                        Send Message
                      </button>
                    </div>
                  )}
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
