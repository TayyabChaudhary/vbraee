import { Link } from "react-router-dom";
import MenuSideBar from "./componets/MenuSideBar";
import MainHeader from "./componets/MainHeader";
import { useState } from "react";
import CustomAccordion from "./componets/utility/CustomAccordion";
import MainFooter from "./componets/MainFooter";

export default function CheckOut() {
  const [showServiceFeeTooltip, setShowServiceFeeTooltip] = useState(false);

  function ToggleServiceFeeTooltip() {
    setShowServiceFeeTooltip(!showServiceFeeTooltip);
  }
  function CloseServiceFeeTooltip() {
    setShowServiceFeeTooltip(false);
  }

  return (
    <>
      <div className="d-flex main_house_con">
        <MenuSideBar makeShort={true} activeLink={'checkout'} />

        <div
          className="col housing_con d-flex flex-column"
          style={
            {
              // backgroundImage: " url('./assets/images/psn_bg.png')",
            }
          }>
          <MainHeader activeLink={'checkout'} />

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
                <Link to={"/cart"}>
                  <p className="crumb_link">/ Cart</p>
                </Link>
                <Link>
                  <p className="crumb_link">/ Checkout</p>
                </Link>
              </div>

              <div className="main_cont">
                <div className="col d-xl-flex gap-4">
                  <div className="col d-flex gap-3 gap-xl-4 align-items-center overflow-auto mb-4">
                    <Link to={"/cart"}>
                      <p className="cart_tab done">
                        Cart <span>(2 items)</span>
                      </p>
                    </Link>
                    <hr className="cart_tab_line" />
                    <Link to={"/checkout"}>
                      <p className="cart_tab active">Checkout</p>
                    </Link>
                    <hr className="cart_tab_line" />
                    <Link to={"/"}>
                      <p className="cart_tab">Your placed</p>
                    </Link>
                  </div>
                  {/* For An Empty Importance Space */}
                  <div className="col-3"></div>
                </div>

                <div className="col d-xl-flex gap-4 mb-5">
                  {/* Address and Payment */}
                  <div className="col mb-4 mb-xl-0">
                    {/* Addresses */}
                    <div className="col mb-4">
                      <p className="cart_accr_head d-flex gap-3 align-items-center mb-3">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M21.57 19.2L24 16.778L12 4.8L0 16.778L2.43 19.2L12 9.653z"
                            />
                          </svg>
                        </span>
                        Billing Address
                      </p>

                      <div className="col d-flex flex-wrap gap-3">
                        <div className="col-12 col-md cart_add_item position-relative">
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
                        <div className="col-12 col-md cart_add_item active position-relative">
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
                        <div className="col-12 col-md cart_add_item new d-flex justify-content-center align-items-center">
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

                    {/* Payment */}
                    <div className="col cart_item_con mb-4">
                      <p className="cart_pay_hint d-flex gap-2 align-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="m11.005 2l7.298 2.28a1 1 0 0 1 .702.955V7h2a1 1 0 0 1 1 1v2h-13V8a1 1 0 0 1 1-1h7V5.97l-6-1.876l-6 1.876v7.404a4 4 0 0 0 1.558 3.169l.189.136l4.253 2.9L14.787 17h-4.782a1 1 0 0 1-1-1v-4h13v4a1 1 0 0 1-1 1l-3.22.001c-.387.51-.857.96-1.4 1.33L11.005 22l-5.38-3.668a6 6 0 0 1-2.62-4.958V5.235a1 1 0 0 1 .702-.954z"
                          />
                        </svg>
                        All transactions are secured, processed and authorized
                        by external payment providers
                      </p>

                      <hr className="cart_item_line" />

                      <div className="col">
                        <div className="col cart_pay_item d-flex gap-2 gap-md-4 justify-content-between align-items-center">
                          <input
                            type="radio"
                            className="cart_pay_radio"
                            name="method"
                          />
                          <div className="col-5 col-md-3 col-xl-2 d-flex gap-2 justify-content-center">
                            <img
                              src={"./assets/images/icons/visa.svg"}
                              alt=""
                              className="cart_pay_img"
                            />
                            <img
                              src={"./assets/images/icons/visa.svg"}
                              alt=""
                              className="cart_pay_img"
                            />
                          </div>
                          <div className="col">
                            <p className="cart_pay_head mb-1">
                              Credit or debit card
                            </p>
                            <p className="cart_pay_text d-none d-md-block">
                              Pay via Visa, Mastercard, Maestro, American
                              Express, or Discover debit or credit card
                            </p>
                          </div>
                        </div>

                        <hr className="cart_item_line" />

                        <div className="col cart_pay_item d-flex gap-2 gap-md-4 justify-content-between align-items-center">
                          <input
                            type="radio"
                            className="cart_pay_radio"
                            name="method"
                          />
                          <div className="col-5 col-md-3 col-xl-2 d-flex gap-2 justify-content-center">
                            <img
                              src={"./assets/images/icons/g-pay.svg"}
                              alt=""
                              className="cart_pay_img"
                            />
                          </div>
                          <div className="col">
                            <p className="cart_pay_head mb-1">Google Pay</p>
                          </div>
                        </div>

                        <hr className="cart_item_line" />

                        <div className="col cart_pay_item d-flex gap-2 gap-md-4 justify-content-between align-items-center">
                          <input
                            type="radio"
                            className="cart_pay_radio"
                            name="method"
                          />
                          <div className="col-5 col-md-3 col-xl-2 d-flex gap-2 justify-content-center">
                            <img
                              src={"./assets/images/icons/a-pay.svg"}
                              alt=""
                              className="cart_pay_img"
                            />
                          </div>
                          <div className="col">
                            <p className="cart_pay_head mb-1">Apple Pay</p>
                          </div>
                        </div>

                        <hr className="cart_item_line" />

                        <div className="col cart_pay_item d-flex gap-2 gap-md-4 justify-content-between align-items-center">
                          <input
                            type="radio"
                            className="cart_pay_radio"
                            name="method"
                          />
                          <div className="col-5 col-md-3 col-xl-2 d-flex gap-2 justify-content-center">
                            <img
                              src={"./assets/images/icons/paypal.svg"}
                              alt=""
                              className="cart_pay_img"
                            />
                          </div>
                          <div className="col">
                            <p className="cart_pay_head mb-1">Paypal</p>
                          </div>
                        </div>

                        <hr className="cart_item_line" />

                        <div className="col cart_pay_item active d-flex gap-4 justify-content-between align-items-center">
                          <input
                            type="radio"
                            className="cart_pay_radio"
                            name="method"
                            checked
                          />
                          <div className="col-5 col-md-3 col-xl-2 d-flex gap-1 justify-content-center">
                            <img
                              src={"./assets/images/icons/btc.svg"}
                              alt=""
                              className="cart_pay_img"
                            />
                            <img
                              src={"./assets/images/icons/btc.svg"}
                              alt=""
                              className="cart_pay_img"
                            />
                            <img
                              src={"./assets/images/icons/btc.svg"}
                              alt=""
                              className="cart_pay_img"
                            />
                            <img
                              src={"./assets/images/icons/btc.svg"}
                              alt=""
                              className="cart_pay_img"
                            />
                          </div>
                          <div className="col">
                            <p className="cart_pay_head mb-1">
                              Crypto currencies
                            </p>
                            <p className="cart_pay_text d-none d-md-block">
                              Pay with your selected crypto currency
                            </p>
                          </div>
                          <div className="col-auto d-none d-lg-block">
                            <p className="cart_pay_pow">powered by</p>
                            <img
                              src={"./assets/images/cry-logo.png"}
                              alt=""
                              className="cart_pay_pow_img"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <Link to={"/cart"}>
                      <p className="cart_item_shop d-flex align-items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.2 2.43L16.778 0L4.8 12l11.978 12l2.422-2.43L9.653 12z"
                          />
                        </svg>
                        Back to cart
                      </p>
                    </Link>
                  </div>
                  {/* Order Summary */}
                  <div className="col col-xl-3">
                    <div className="col cart_sum_con mb-3">
                      <p className="cart_sum_head mb-4">Order summary</p>

                      <p className="cart_sum_text d-flex justify-content-between align-items-center mb-2">
                        Products <span className="white">$44.26</span>
                      </p>
                      <p className="cart_sum_text d-flex justify-content-between align-items-center position-relative mb-2">
                        Service fee{" "}
                        <span
                          onClick={ToggleServiceFeeTooltip}
                          className="icon ms-1 me-auto"
                          role="button">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              fillRule="evenodd"
                              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10M12 6.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span>$1.33</span>
                        {/* Tooltip */}
                        {showServiceFeeTooltip && (
                          <div className="cart_sum_tip position-absolute position-relative d-flex gap-2 ">
                            {/* Close Icon */}
                            <span
                              onClick={CloseServiceFeeTooltip}
                              className="cart_sum_tip_close position-absolute"
                              role="button">
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

                            <span className="cart_sum_tip_icon">
                              <svg
                                className="me-auto"
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24">
                                <path
                                  fill="currentColor"
                                  fillRule="evenodd"
                                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10M12 6.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <div className="col">
                              <p className="mb-0">
                                Fee covers the costs of delivering top quality
                                services to our users, including anti-fraud
                                protection, 24/7 customer support, merchants
                                verification, compliance measures etc. It allows
                                us to ensure that we can always deliver a wide
                                selection of products from merchants all over
                                the world at fair prices. See Terms & Conditions
                                for more details.
                              </p>
                            </div>
                          </div>
                        )}
                      </p>
                      <p className="cart_sum_text d-flex justify-content-between align-items-center mb-2">
                        Tax <span className="">$0.00</span>
                      </p>
                      <p className="cart_sum_text d-flex justify-content-between align-items-center mb-4">
                        Savings <span className="green">$9.21</span>
                      </p>

                      <p className="cart_sum_head d-flex justify-content-between align-items-center ">
                        Total <span>$44.26</span>
                      </p>
                    </div>

                    {/* Order Details */}
                    <div className="cart_sum_con mb-3">
                      <CustomAccordion
                        isActive={true}
                        trigger={(isOpen) => (
                          <p className="cart_ord_head d-flex gap-2 align-items-center mb-0">
                            <span className="">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24">
                                <path
                                  fill="currentColor"
                                  fillRule="evenodd"
                                  d="M14.665 2.33a.75.75 0 0 1 1.006.335l2.201 4.402c1.353.104 2.202.37 2.75 1.047c.9 1.114.541 2.79-.177 6.143l-.429 2c-.487 2.273-.73 3.409-1.555 4.076S16.474 21 14.15 21h-4.3c-2.324 0-3.486 0-4.31-.667c-.826-.667-1.07-1.803-1.556-4.076l-.429-2c-.718-3.353-1.078-5.029-.177-6.143c.548-.678 1.397-.943 2.75-1.047l2.201-4.402a.75.75 0 0 1 1.342.67l-1.835 3.67Q8.559 7 9.422 7h5.156q.863-.001 1.586.005l-1.835-3.67a.75.75 0 0 1 .336-1.006M7.25 12a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M10 14.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
                                  clipRule="evenodd"></path>
                              </svg>
                            </span>
                            Order details (1 items)
                            <span
                              className={
                                "icon ms-auto " + (isOpen ? "" : "rotate_180")
                              }>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1.2em"
                                height="1.2em"
                                viewBox="0 0 24 24">
                                <path
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  d="m2 15.999l10.173-9.824l9.824 10.173"
                                />
                              </svg>
                            </span>
                          </p>
                        )}
                        content={
                          <div className="col mt-4">
                            <div className="col mb-4">
                              <div className="col d-flex gap-3 align-items-center mb-2">
                                <p className="cart_ord_title">
                                  Resident Evil 2 Xbox One / Series X|S [Digital
                                  Code] GLOBAL
                                </p>
                                <span className="cart_ord_del">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 20 20">
                                    <path
                                      fill="currentColor"
                                      d="m6 2l2-2h4l2 2h4v2H2V2zM3 6h14l-1 14H4zm5 2v10h1V8zm3 0v10h1V8z"
                                    />
                                  </svg>
                                </span>
                              </div>
                              <div className="d-flex flex-wrap gap-2 mb-2">
                                <p className="cart_item_dea">
                                  Sold by:
                                  <span>
                                    <u>Freaky</u>
                                  </span>
                                </p>
                                <p className="cart_item_dea">
                                  Delivery: <span>24H</span>
                                </p>
                                <p className="cart_item_dea">
                                  Type: <span>Digital key</span>
                                </p>
                                <p className="cart_item_dea">
                                  Region: <span>Freaky</span>
                                </p>
                                <p className="cart_item_dea">
                                  Platform: <span>Steam</span>
                                </p>
                              </div>

                              <div className="col d-flex justify-content-between align-items-center">
                                <div className="cart_ord_count border-0 d-flex gap-3 align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="1em"
                                      height="1em"
                                      viewBox="0 0 24 24">
                                      <path
                                        fill="currentColor"
                                        d="M19 12.998H5v-2h14z"
                                      />
                                    </svg>
                                  </span>
                                  1
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="1em"
                                      height="1em"
                                      viewBox="0 0 24 24">
                                      <path
                                        fill="currentColor"
                                        d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
                                      />
                                    </svg>
                                  </span>
                                </div>
                                <p className="cart_item_price text-white mt-auto mb-2">
                                  $7.<span>75</span>
                                </p>
                              </div>
                            </div>
                            <div className="col ">
                              <div className="col d-flex gap-3 align-items-center mb-2">
                                <p className="cart_ord_title">
                                  Resident Evil 2 Xbox One / Series X|S [Digital
                                  Code] GLOBAL
                                </p>
                                <span className="cart_ord_del">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 20 20">
                                    <path
                                      fill="currentColor"
                                      d="m6 2l2-2h4l2 2h4v2H2V2zM3 6h14l-1 14H4zm5 2v10h1V8zm3 0v10h1V8z"
                                    />
                                  </svg>
                                </span>
                              </div>
                              <div className="d-flex flex-wrap gap-2 mb-2">
                                <p className="cart_item_dea">
                                  Sold by:
                                  <span>
                                    <u>Freaky</u>
                                  </span>
                                </p>
                                <p className="cart_item_dea">
                                  Delivery: <span>24H</span>
                                </p>
                                <p className="cart_item_dea">
                                  Type: <span>Digital key</span>
                                </p>
                                <p className="cart_item_dea">
                                  Region: <span>Freaky</span>
                                </p>
                                <p className="cart_item_dea">
                                  Platform: <span>Steam</span>
                                </p>
                              </div>

                              <div className="col d-flex justify-content-between align-items-center">
                                <div className="cart_ord_count border-0 d-flex gap-3 align-items-center">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="1em"
                                      height="1em"
                                      viewBox="0 0 24 24">
                                      <path
                                        fill="currentColor"
                                        d="M19 12.998H5v-2h14z"
                                      />
                                    </svg>
                                  </span>
                                  1
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="1em"
                                      height="1em"
                                      viewBox="0 0 24 24">
                                      <path
                                        fill="currentColor"
                                        d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
                                      />
                                    </svg>
                                  </span>
                                </div>
                                <p className="cart_item_price text-white mt-auto mb-2">
                                  $7.<span>75</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        }
                      />
                    </div>

                    <div className="cart_sum_con mb-4">
                      <p className="cart_ord_head d-flex gap-2 align-items-center mb-3">
                        <span className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              fillRule="evenodd"
                              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10M12 6.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        Your local tax
                      </p>

                      <div className="col">
                        <select className="cart_sum_sel">
                          <option value="">Outside EU</option>
                        </select>
                      </div>
                    </div>

                    <div className="col text-center">
                      <button
                        type="button"
                        className="col-12 col-md-10 cart_btn2 mx-auto mb-3">
                        Pay and place an order
                      </button>

                      <p className="col-12 col-md-10 cart_ord_hint text-start mx-auto">
                        By clicking this button I declare that I have read the{" "}
                        <Link className="link">
                          <u>Terms & Conditions</u>
                        </Link>{" "}
                        and the{" "}
                        <Link className="link">
                          <u>Privacy Policy</u>
                        </Link>{" "}
                        and agree to the terms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col d-lg-none">
                <MainFooter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
