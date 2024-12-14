import { Link } from "react-router-dom";
import GameItem from "./componets/GameItem";
import MenuSideBar from "./componets/MenuSideBar";
import MainHeader from "./componets/MainHeader";
import { useState } from "react";
import CustomAccordion from "./componets/utility/CustomAccordion";
// import Swiper core and required modules
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import MainFooter from "./componets/MainFooter";

export default function Cart() {
  const [showServiceFeeTooltip, setShowServiceFeeTooltip] = useState(false);

  const slides = [
    "Slide 1",
    "Slide 2",
    "Slide 3",
    "Slide 4",
    "Slide 5",
    "Slide 6",
  ];

  function ToggleServiceFeeTooltip() {
    setShowServiceFeeTooltip(!showServiceFeeTooltip);
  }
  function CloseServiceFeeTooltip() {
    setShowServiceFeeTooltip(false);
  }

  return (
    <>
      <div className="d-flex main_house_con">
        <MenuSideBar makeShort={true} activeLink={'cart'} />

        <div
          className="col housing_con d-flex flex-column"
          style={
            {
              // backgroundImage: " url('./assets/images/psn_bg.png')",
            }
          }>
          <MainHeader activeLink={'cart'} />

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
                  <p className="crumb_link">/ Cart</p>
                </Link>
              </div>

              <div className="main_cont">
                <div className="col d-xl-flex gap-4">
                  <div className="col d-flex gap-3 gap-xl-4 align-items-center overflow-auto hide_scroll mb-4">
                    <Link to={"/cart"}>
                      <p className="cart_tab active">
                        Cart <span>(2 items)</span>
                      </p>
                    </Link>
                    <hr className="cart_tab_line" />
                    <Link to={"/checkout"}>
                      <p className="cart_tab">Checkout</p>
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
                  {/* Cart Items */}
                  <div className="col mb-4 mb-xl-0">
                    <div className="cart_item_con mb-3">
                      <div className="col d-flex flex-wrap gap-3 mb-4">
                        <img
                          src={"./assets/images/details_img.png"}
                          alt=""
                          className="d-none d-md-block cart_item_img"
                        />
                        <div className="col d-flex flex-column">
                          <div className="col d-flex gap-3 align-items-start mb-3 mb-md-0">
                            <img
                              src={"./assets/images/details_img.png"}
                              alt=""
                              className="d-md-none cart_item_img"
                            />
                            <div className="col">
                              <p className="cart_item_name">
                                Resident Evil 2 Xbox One / Series X|S [Digital
                                Code] GLOBAL
                              </p>
                              <p className="cart_item_price">
                                $7.<span>75</span>
                              </p>
                            </div>
                          </div>
                          <div className="d-flex flex-wrap gap-3 mt-auto">
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
                        </div>
                        <div className="col-12 col-md-auto d-flex flex-md-column gap-4 justify-content-between align-items-center align-items-md-end">
                          <div className="col-auto text-md-end">
                            <div className="d-flex align-items-center mb-2">
                              <span className="cart_item_dis">-26%</span>
                              <span className="cart_item_price_sm">$14.37</span>
                            </div>
                            <p className="cart_item_price text-white mt-auto mb-2">
                              $7.<span>75</span>
                            </p>
                            <p className="cart_item_save mb-0">
                              You save <span>$3.99</span>
                            </p>
                          </div>

                          <div className="col col-md-auto d-flex justify-content-end align-items-center gap-3 mt-md-auto">
                            <span className="cart_item_icon d-flex justify-content-center align-items-center">
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
                            <span className="cart_item_icon d-flex justify-content-center align-items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24">
                                <path
                                  fill="currentColor"
                                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
                                />
                              </svg>
                            </span>
                            <div className="col cart_item_count d-flex gap-3 justify-content-between align-items-center">
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
                          </div>
                        </div>
                      </div>

                      <hr className="cart_item_line mb-4" />

                      <div className="col d-flex flex-wrap gap-3 mb-4">
                        <img
                          src={"./assets/images/details_img.png"}
                          alt=""
                          className="d-none d-md-block cart_item_img"
                        />
                        <div className="col d-flex flex-column">
                          <div className="col d-flex gap-3 align-items-start mb-3 mb-md-0">
                            <img
                              src={"./assets/images/details_img.png"}
                              alt=""
                              className="d-md-none cart_item_img"
                            />
                            <div className="col">
                              <p className="cart_item_name">
                                Resident Evil 2 Xbox One / Series X|S [Digital
                                Code] GLOBAL
                              </p>
                              <p className="cart_item_price">
                                $7.<span>75</span>
                              </p>
                            </div>
                          </div>
                          <div className="d-flex flex-wrap gap-3 mt-auto">
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
                        </div>
                        <div className="col-12 col-md-auto d-flex flex-md-column justify-content-between align-items-center align-items-md-end">
                          <div className="col-auto text-md-end">
                            <div className="d-flex align-items-center mb-2">
                              <span className="cart_item_dis">-26%</span>
                              <span className="cart_item_price_sm">$14.37</span>
                            </div>
                            <p className="cart_item_price text-white mt-auto mb-2">
                              $7.<span>75</span>
                            </p>
                            <p className="cart_item_save mb-0">
                              You save <span>$3.99</span>
                            </p>
                          </div>

                          <div className="col col-md-auto d-flex justify-content-end align-items-center gap-3 mt-md-auto">
                            <span className="cart_item_icon d-flex justify-content-center align-items-center">
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
                            <span className="cart_item_icon d-flex justify-content-center align-items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24">
                                <path
                                  fill="currentColor"
                                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
                                />
                              </svg>
                            </span>
                            <div className="cart_item_count d-flex gap-3 align-items-center">
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
                          </div>
                        </div>
                      </div>

                      <div className="col d-flex align-items-center gap-2">
                        <span className="cart_item_tip_icon">
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
                        <p className="cart_item_tip_text">
                          This product is region / country restricted to: OTHER.
                          To see the list of supported countries, click here.
                        </p>
                      </div>
                    </div>

                    <Link to={"/psn"} className="d-inline-block">
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
                        Continue shopping
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
                      <div className="cart_sum_text d-flex justify-content-between align-items-center position-relative mb-2">
                        Service fee{" "}
                        <span
                          onClick={() => ToggleServiceFeeTooltip()}
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
                      </div>
                      <p className="cart_sum_text d-flex justify-content-between align-items-center mb-4">
                        Savings <span className="green">$9.21</span>
                      </p>

                      <p className="cart_sum_head d-flex justify-content-between align-items-center ">
                        Total <span>$44.26</span>
                      </p>
                    </div>

                    <div className="cart_sum_con mb-3">
                      <CustomAccordion
                        isActive={true}
                        trigger={(isOpen) => (
                          <p className="cart_sum_text d-flex align-items-center">
                            <span className="text-white">
                              <svg
                                className="me-2"
                                xmlns="http://www.w3.org/2000/svg"
                                width="1.3em"
                                height="1.3em"
                                viewBox="0 0 24 24">
                                <path
                                  fill="currentColor"
                                  d="M19 3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2M8.83 7.05c.98 0 1.77.79 1.77 1.78c0 .98-.79 1.77-1.77 1.77c-.99 0-1.78-.79-1.78-1.77c0-.99.79-1.78 1.78-1.78M15.22 17c-.98 0-1.77-.8-1.77-1.78s.79-1.77 1.77-1.77s1.78.79 1.78 1.77S16.2 17 15.22 17m-6.72.03L7 15.53L15.53 7l1.5 1.5z"
                                />
                              </svg>
                              Do you have Discount code
                            </span>
                            <span
                              className={
                                "ms-auto " + (isOpen ? "" : "rotate_180")
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
                          <div className="col d-flex gap-3 mt-4">
                            <input
                              type="text"
                              className="cart_sum_input"
                              placeholder="Enter a code"
                            />
                            <button type="button" className="cart_sum_btn">
                              Apply
                            </button>
                          </div>
                        }
                      />
                    </div>

                    <div className="d-flex">
                      <Link to={"/checkout"} className="col-10 mx-auto">
                        <button type="button" className="col-12 cart_btn">
                          Continue to Payment
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col d-xl-flex gap-4 mb-4">
                  <div className="w-100" style={{
                    minWidth: '300px'
                  }}>
                    <div className="col mb-3">
                      <h4 className="details_title">
                        Treat yourself, get something extra!
                      </h4>
                      <p className="details_tit_sm">
                        Based on what customers bought
                      </p>
                    </div>

                    <div className="">
                      <Swiper
                        modules={[Pagination]}
                        spaceBetween={10}
                        slidesPerView={'auto'}
                        pagination={{
                          el: ".custom_pagination",
                          clickable: true,
                          renderBullet: function (index, className) {
                            // Customize the pagination bullets with your own HTML structure and classes
                            return `<span class="${className} custom_bullet"></span>`;
                          },
                        }}>
                        {/* Generate the slides dynamically */}
                        {slides.map((slide, index) => (
                          <SwiperSlide key={index} style={{ width: "auto" }}>
                            <GameItem />
                          </SwiperSlide>
                        ))}

                        {/* Custom Pagination */}
                        <div className="custom_pagination d-flex justify-content-center mt-4"></div>
                      </Swiper>
                    </div>
                  </div>
                  <div className="col-3 d-none d-xl-block cart_sum_con mb-3">
                    <p className="cart_sum_head mb-4">Latest Purchase</p>
                    <div className="col">
                      <div className="rs_item1_cont mb-3">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <p className="rs_item1_type">Psc.Dlc</p>
                          <p className="rs_item1_time">20m ago</p>
                        </div>
                        <p className="rs_item1_text">
                          Try To Get Destiny 2: The Final Shape + Annual Pass –
                          Rand...
                        </p>
                        <div className="d-flex align-items-end mb-2">
                          <p className="banner_sm_price me-2 mb-0">
                            $47.<span>75</span>
                          </p>
                          <p className="banner_sm_price_sm mb-0">$64.37</p>
                        </div>
                        <div className="d-flex gap-2">
                          <img
                            src={"./assets/images/user.png"}
                            alt=""
                            className="rs_item1_img"
                          />
                          <div className="col">
                            <p className="rs_item1_img_text_sm">Seller</p>
                            <p className="rs_item1_img_text">Instant Keyz</p>
                          </div>
                        </div>
                      </div>
                      <div className="rs_item1_cont mb-3">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <p className="rs_item1_type">Psc.Dlc</p>
                          <p className="rs_item1_time">20m ago</p>
                        </div>
                        <p className="rs_item1_text">
                          Try To Get Destiny 2: The Final Shape + Annual Pass –
                          Rand...
                        </p>
                        <div className="d-flex align-items-end mb-2">
                          <p className="banner_sm_price me-2 mb-0">
                            $47.<span>75</span>
                          </p>
                          <p className="banner_sm_price_sm mb-0">$64.37</p>
                        </div>
                        <div className="d-flex gap-2">
                          <img
                            src={"./assets/images/user.png"}
                            alt=""
                            className="rs_item1_img"
                          />
                          <div className="col">
                            <p className="rs_item1_img_text_sm">Seller</p>
                            <p className="rs_item1_img_text">Instant Keyz</p>
                          </div>
                        </div>
                      </div>
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
