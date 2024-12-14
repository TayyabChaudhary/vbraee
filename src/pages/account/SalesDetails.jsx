/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import AccountSideBar from "../componets/account/AccountSideBar";
import MainHeader from "../componets/MainHeader";
import MainFooter from "../componets/MainFooter";
import OrderAccordion from "../componets/utility/OrderAccordion";
import { useState } from "react";

function NewLicenseModal({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div className="modal_con d-lg-flex justify-content-center align-items-start pt-5">
          <div className="col col-lg-10 col-xl-5">
            <div className="col modal_cont d-flex flex-column position-relative mb-3">
              <span
                className="dash_level_close position-absolute"
                role="button"
                onClick={() => onClose()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
                  />
                </svg>
              </span>

              <p className="dash_level_title mb-4">Add Key</p>

              <div className="col">
                <label
                  htmlFor="comment"
                  className="auth_label text-uppercase mb-2">
                  Enter Key
                </label>
                <div className="col acct_box">
                  <textarea
                    name=""
                    className="input_box"
                    placeholder="-"
                    rows={3}></textarea>
                </div>
              </div>

              <div className="d-flex gap-3 mt-5">

                <button type="button" className="acct_offer_btn3">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function SalesDetails() {
  const breadCrums = [
    {
      title: "Sales",
      url: "/account/sales",
    },
    {
      title: "Sale #20074",
      url: "/account/sales-details",
    },
  ];

  const breadCrumsList = breadCrums?.map((item, index) => {
    return (
      <Link to={item.url} key={index}>
        <p className="crumb_link">/ {item.title}</p>
      </Link>
    );
  });

  const [isLicenseModalOpen, setIsLicenseModalOpen] = useState(false);
  function OpenLicenseModal() {
    setIsLicenseModalOpen(true);
  }
  function CloseLicenseModal() {
    setIsLicenseModalOpen(false);
  }

  return (
    <>
      <NewLicenseModal
        isOpen={isLicenseModalOpen}
        onClose={CloseLicenseModal}
      />

      <div
        className="d-flex w-100 main_house_con"
        style={{
          background: "none",
        }}>
        <AccountSideBar activeLink={"sales"} />

        <div className="col housing_con d-flex flex-column">
          <MainHeader
            showHeader={true}
            isAccount={true}
            breadCrums={breadCrums}
            activeLink={"sales"}
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
              <p className="acct_offer_title ">Sale #20074</p>

              <hr className="acct_fil_line my-3" />

              <div className="col d-flex flex-wrap gap-3 mb-5">
                <div className="col-12 col-xl acct_offer_cont">
                  <div className="col d-flex flex-wrap gap-3 justify-content-between align-items-center mb-3">
                    <div className="col-12 col-md-auto d-flex align-items-center gap-3">
                      <img
                        src={"../assets/images/game1.png"}
                        alt=""
                        className="acct_sale_img"
                      />
                      <div className="col">
                        <p className="acct_head_s">
                          Tekken 8 Xbox Series X | S Private Account Global
                        </p>
                        <p className="acct_offer_text_big">$19.98</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="acct_offer_btn2 d-flex gap-2 align-items-center">
                      <span className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M4 3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1.65.76l-1.033-.885a1 1 0 0 0-1.301 0l-1.032.884a1 1 0 0 1-1.302 0l-1.031-.884a1 1 0 0 0-1.302 0l-1.031.884a1 1 0 0 1-1.302 0l-1.032-.884a1 1 0 0 0-1.301 0l-1.032.884A1 1 0 0 1 4 21zm5 3a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2zm1 5a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1"
                            clipRule="evenodd"></path>
                        </svg>
                      </span>
                      Invoice
                    </button>
                  </div>

                  <div className="col row row-cols-2 row-cols-md-4 g-4">
                    <div className="col">
                      <p className="acct_head_sm mb-1">Status</p>
                      <span className="acct_table_data_tag green">
                        Completed
                      </span>
                    </div>
                    <div className="col">
                      <p className="acct_head_sm mb-1">Payment Status</p>
                      <p className="acct_head_s">Payment Received</p>
                    </div>
                    <div className="col">
                      <p className="acct_head_sm mb-1">Payment Method </p>
                      <p className="acct_head_s">reepay</p>
                    </div>
                    <div className="col">
                      <p className="acct_head_sm mb-1">Quantity</p>
                      <p className="acct_head_s">10</p>
                    </div>
                    <div className="col">
                      <p className="acct_head_sm mb-1">Buyer</p>
                      <p className="acct_head_s blue">Game Account</p>
                    </div>
                    <div className="col">
                      <p className="acct_head_sm mb-1">Date</p>
                      <p className="acct_head_s">2024-03-16 / 05:08</p>
                    </div>
                    <div className="col">
                      <p className="acct_head_sm mb-1">Update</p>
                      <p className="acct_head_s">4 months ago</p>
                    </div>
                  </div>

                  <OrderAccordion
                    isActive={false}
                    trigger={({ isOpen, ToggleAccordion }) => (
                      <div className="col">
                        <div className="col col-md-auto d-flex gap-4 justify-content-end align-items-center">
                          <div
                            className="acct_offer_arrow d-flex gap-1 justify-content-center align-items-center"
                            role="button"
                            onClick={() => ToggleAccordion()}>
                            {isOpen ? "Close" : "Show keys"}
                            <span className="icon">
                              {isOpen ? (
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
                              ) : (
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
                                    d="m19 9l-7 7l-7-7"></path>
                                </svg>
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                    content={
                      <>
                        <div className="col">
                          <hr className="acct_fil_line2 my-3" />
                          <div className="col d-flex gap-3 justify-content-between align-items-center">
                            <div className="col">
                              <p className="acct_head_s">
                                Tekken 8 Xbox Series X | S Private Account
                                Global
                              </p>
                              <p className="acct_offer_text_big">$19.98</p>
                            </div>

                            <button
                              type="button"
                              className="col-auto acct_offer_btn3"
                              onClick={() => OpenLicenseModal()}>
                              Attach Key Here
                            </button>
                          </div>
                        </div>
                        <div className="col">
                          <hr className="acct_fil_line2 my-3" />
                          <div className="col d-flex gap-3 justify-content-between align-items-center">
                            <div className="col">
                              <p className="acct_head_s">
                                Tekken 8 Xbox Series X | S Private Account
                                Global
                              </p>
                              <p className="acct_offer_text_big">$19.98</p>
                            </div>

                            <button
                              type="button"
                              className="col-auto acct_offer_btn3"
                              onClick={() => OpenLicenseModal()}>
                             Attach Key Here
                            </button>
                          </div>
                        </div>
                      </>
                    }
                  />
                </div>
                <div className="col-12 col-xl-4 ">
                  <div className="col acct_offer_cont dark mb-3">
                    <p className="acct_head_smm mb-4">Order summary</p>

                    <p className="cart_sum_text d-flex justify-content-between align-items-center mb-2">
                      Subtotal (1 item) <span className="white">$44.26</span>
                    </p>
                    <p className="cart_sum_text d-flex justify-content-between align-items-center mb-2">
                      Shipping <span className="white">$0</span>
                    </p>
                    <p className="cart_sum_text d-flex justify-content-between align-items-center mb-2">
                      Fees <span className="white">$0.26</span>
                    </p>

                    <p className="cart_sum_head d-flex justify-content-between align-items-center mt-4">
                      Total <span>$44.26</span>
                    </p>
                  </div>
                  <div className="d-flex">
                    {/* <button
                      type="button"
                      className="col-10 acct_offer_btn3 mx-auto"
                      onClick={() => OpenLicenseModal()}>
                      Add Licence Key
                    </button> */}
                  </div>
                </div>
              </div>

              <div className="col acct_offer_cont">
                <p className="acct_head_smm mb-3">Recent Activity</p>

                <div className="col d-flex flex-column">
                  <div className="col col-xl-8  mb-3">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <p className="acct_head_s">Buyer</p>
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
