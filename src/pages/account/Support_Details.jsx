import { Link } from "react-router-dom";
import AccountSideBar from "../componets/account/AccountSideBar";
import MainHeader from "../componets/MainHeader";
import MainFooter from "../componets/MainFooter";

export default function SupportDetails() {
  const breadCrums = [
    {
      title: "Support Ticket",
      url: "/account/support",
    },
  ];

  const breadCrumsList = breadCrums?.map((item, index) => {
    return (
      <Link to={item.url} key={index}>
        <p className="crumb_link">/ {item.title}</p>
      </Link>
    );
  });

  return (
    <>
      <div
        className="d-flex w-100 main_house_con"
        style={{
          background: "none",
        }}>
        <AccountSideBar activeLink={"support"} />

        <div className="col housing_con d-flex flex-column">
          <MainHeader
            showHeader={true}
            isAccount={true}
            breadCrums={breadCrums}
            activeLink={"support"}
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

            <div className="acct_cont">
              <div className="col d-flex justify-content-between align-items-center">
                <p className="acct_offer_title ">Ticket #20074</p>
                <button type="button" className="acct_offer_btn3">
                  Close Ticket
                </button>
              </div>

              <hr className="acct_fil_line my-3" />

              <div className="col d-flex flex-wrap gap-3 mb-5">
                <div className="col acct_offer_cont">
                  <div className="col d-flex flex-wrap mb-4">
                    <div className="col-12 mb-3">
                      <p className="acct_head_sm mb-1">Subject</p>
                      <p className="acct_head">Testing Support Ticket</p>
                    </div>
                    <div className="col-6 col-md pe-3 mb-3">
                      <p className="acct_head_sm mb-1">ID </p>
                      <p className="acct_head_s">#20074</p>
                    </div>
                    <div className="col-6 col-md mb-3">
                      <p className="acct_head_sm mb-1">Status</p>
                      <span className="acct_table_data_tag yellow">
                        Responded
                      </span>
                    </div>
                    <div className="col-6 col-md pe-3">
                      <p className="acct_head_sm mb-1">Date </p>
                      <p className="acct_head_s">2024-11-15 / 12:15</p>
                    </div>
                    <div className="col-6 col-md">
                      <p className="acct_head_sm mb-1">Updated</p>
                      <p className="acct_head_s">3 hours ago</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col acct_offer_cont">
                <p className="acct_head_smm mb-3">Recent Activity</p>

                <div className="col d-flex flex-column">
                  <div className="col col-xl-8  mb-3">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <p className="acct_head_s">Freaky</p>
                      <p className="acct_chat_date">• 24/03/2023, 03:32:45</p>
                    </div>
                    <div className="acct_chat_cont">
                      <p className="acct_chat_text mb-2">
                        {
                          "That's right. But when I click to redeem it says the key is invalid."
                        }
                      </p>
                      <span className="acct_chat_tag d-inline-flex align-items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 512 512">
                          <path
                            fill="currentColor"
                            d="M416 64H96a64.07 64.07 0 0 0-64 64v256a64.07 64.07 0 0 0 64 64h320a64.07 64.07 0 0 0 64-64V128a64.07 64.07 0 0 0-64-64m-80 64a48 48 0 1 1-48 48a48.05 48.05 0 0 1 48-48M96 416a32 32 0 0 1-32-32v-67.63l94.84-84.3a48.06 48.06 0 0 1 65.8 1.9l64.95 64.81L172.37 416Zm352-32a32 32 0 0 1-32 32H217.63l121.42-121.42a47.72 47.72 0 0 1 61.64-.16L448 333.84Z"></path>
                        </svg>
                        Attachment 1
                      </span>
                    </div>
                  </div>
                  <div className="col col-xl-8 ms-auto mb-3">
                    <div className="d-flex justify-content-end align-items-center gap-2 mb-2">
                      <p className="acct_head_s">You</p>
                      <p className="acct_chat_date">• 24/03/2023, 03:32:45</p>
                    </div>
                    <div className="acct_chat_cont dark">
                      <p className="acct_chat_text mb-2">
                        {
                          "Hello! I acknowledge the report and would like to refund the transaction. You should be provided with a refund in eurBalance soon. If you would like to receive a refund back to your original payment method, please refrain from spending eurBalance and contact Kinguin’s Customer Support here -> https://kingu.in/ContactSupport Please accept my sincere apologies for the problem. Best regards!"
                        }
                      </p>
                      <span className="acct_chat_tag d-inline-flex align-items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 512 512">
                          <path
                            fill="currentColor"
                            d="M416 64H96a64.07 64.07 0 0 0-64 64v256a64.07 64.07 0 0 0 64 64h320a64.07 64.07 0 0 0 64-64V128a64.07 64.07 0 0 0-64-64m-80 64a48 48 0 1 1-48 48a48.05 48.05 0 0 1 48-48M96 416a32 32 0 0 1-32-32v-67.63l94.84-84.3a48.06 48.06 0 0 1 65.8 1.9l64.95 64.81L172.37 416Zm352-32a32 32 0 0 1-32 32H217.63l121.42-121.42a47.72 47.72 0 0 1 61.64-.16L448 333.84Z"></path>
                        </svg>
                        Attachment 1
                      </span>
                    </div>
                  </div>
                </div>

                <hr className="acct_fil_line2 my-3" />

                <div className="col mb-4">
                  <div className="col acct_box">
                    <textarea
                      name=""
                      className="input_box"
                      placeholder="Write your message"
                      rows={4}></textarea>
                  </div>
                </div>
                <div className="col mb-4">
                  <label className="acct_offer_label mb-2">
                    Attachments{" "}
                    <span className="text-lowercase">
                      (Max 3 screenshots files (Only jpg, jpeg and png
                      attachments are allowed))
                    </span>
                  </label>
                  <div className="col col-lg-6 col-xl-4 acct_offer_file_con">
                    <div className="acct_offer_file">
                      <p className="acct_offer_text text-center">
                        <span className="bold">
                          <u>Add file</u> or drop files here
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <button
                    type="button"
                    className="col-12 col-md-auto acct_offer_btn1">
                    Send Message
                  </button>
                </div>
              </div>
            </div>

            <div className="col d-lg-none mt-4">
              <MainFooter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
