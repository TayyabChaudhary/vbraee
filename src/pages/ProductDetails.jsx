import { Link } from "react-router-dom";
import GameItem from "./componets/GameItem";
import MenuSideBar from "./componets/MenuSideBar";
import MainHeader from "./componets/MainHeader";
import RightSideBar from "./componets/RightSideBar";
import { useTabs } from "../services/CustomTabs";

import MessageModal from "./componets/modals/ProductMessage";

// import Swiper core and required modules
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState } from "react";
import MainFooter from "./componets/MainFooter";

function ProductImage() {
  return (
    <>
      <div className="col details_img_con position-relative mb-3">
        <span
          className="detail_img_star position-absolute d-flex justify-content-center align-items-center"
          role="button">
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

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          // navigation={true}
          pagination={{
            // el: "",
            clickable: true,
            renderBullet: function (index, className) {
              // Customize the pagination bullets with your own HTML structure and classes
              return `<span class="${className} custom_bullet"></span>`;
            },
          }}>
          <SwiperSlide>
            <img
              src={"./assets/images/details_img.png"}
              alt=""
              className="details_img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={"./assets/images/details_img.png"}
              alt=""
              className="details_img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={"./assets/images/details_img.png"}
              alt=""
              className="details_img"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="col d-flex flex-wrap gap-2 gap-md-4 mb-3 mb-lg-0">
        <div className="col-12 col-md">
          <label htmlFor="platform" className="details_hd mb-2">
            Platform
          </label>
          <select name="" className="details_sel">
            <option value="">Xbox One/Series</option>
          </select>
        </div>
        <div className="col-12 col-md">
          <label htmlFor="platform" className="details_hd mb-2">
            Edition
          </label>
          <select name="" className="details_sel">
            <option value="">Standard</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default function ProductDetails() {
  const Tab1 = useTabs(1);
  const Tab2 = useTabs(1);

  const slides = [
    "Slide 1",
    "Slide 2",
    "Slide 3",
    "Slide 4",
    "Slide 5",
    "Slide 6",
  ];

  const [openMessage, setOpenMessage] = useState(false);
  function OpenMessageModal() {
    setOpenMessage(true);
    console.log("sd");
  }
  function CloseMessageModal() {
    setOpenMessage(false);
  }

  return (
    <>
      <MessageModal isOpen={openMessage} onClose={CloseMessageModal} />
      <div className="d-flex main_house_con">
        <MenuSideBar makeShort={true} activeLink={"xbox"} />

        <div
          className="col housing_con d-flex flex-column"
          style={{
            backgroundImage: " url('./assets/images/psn_bg.png')",
          }}>
          <MainHeader activeLink={"xbox"} />

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
                  <p className="crumb_link">/ PC Gaming</p>
                </Link>
                <Link>
                  <p className="crumb_link">/ Stream</p>
                </Link>
              </div>

              <div className="main_cont">
                <div className="col d-flex gap-4 gap-xl-5 mb-4 mb-lg-5">
                  <div className="col-5 d-none d-lg-block">
                    <ProductImage />
                  </div>
                  <div className="col-12 col-lg">
                    <div className="d-flex flex-wrap">
                      <span className="game_badge type1 me-1 mb-1">DLC</span>
                    </div>

                    <h4 className="details_header">
                      Resident Evil 2 Xbox One / Series X|S
                    </h4>

                    <div className="d-flex align-items-center gap-2 mb-3">
                      <span className="details_review text-white">
                        <svg
                          className="me-1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
                          />
                        </svg>
                        <strong> 4.9</strong>
                      </span>
                      <span className="details_review">
                        <strong>• 33 </strong>
                        Reviews
                      </span>

                      <span className="details_review_tag d-flex align-items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M11.99 0A12 12 0 1 0 24 12v-.014A12 12 0 0 0 11.99 0m-.055 2.564a9.4 9.4 0 0 1 9.407 9.389v.01a9.399 9.399 0 1 1-9.408-9.399Zm-1.61 17.198l2.046-2.046l-3.94-3.94c-.165-.166-.345-.373-.442-.608c-.221-.47-.318-1.203.221-1.742c.664-.664 1.548-.387 2.406.47l3.788 3.788l2.046-2.046l-3.954-3.954a2.5 2.5 0 0 1-.456-.622c-.263-.539-.25-1.216.235-1.7c.677-.678 1.562-.429 2.544.553l3.677 3.677l2.046-2.046l-3.982-3.982c-2.018-2.018-3.912-1.949-5.212-.65c-.498.499-.802 1.024-.954 1.618a4 4 0 0 0-.055 1.686l-.027.028c-.996-.414-2.13-.166-3 .705c-1.162 1.161-1.12 2.392-.982 3.11l-.042.043l-1.009-.816l-1.77 1.77a64 64 0 0 1 2.213 2.1z"
                          />
                        </svg>
                        33
                      </span>
                    </div>

                    {/* Product Image for Small Screen */}
                    <div className="col d-lg-none">
                      <ProductImage />
                    </div>

                    <div className="d-flex gap-2 mb-3">
                      <span className="game_badge type5">
                        <svg
                          className="me-1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M12 8H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h1v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h3l5 4V4zm9.5 4c0 1.71-.96 3.26-2.5 4V8c1.53.75 2.5 2.3 2.5 4"
                          />
                        </svg>
                        Promoted
                      </span>
                      <span className="game_badge type2">
                        <svg
                          className="me-1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 256 256">
                          <path
                            fill="currentColor"
                            d="M143.38 17.85a8 8 0 0 0-12.63 3.41l-22 60.41l-24.16-23.41a8 8 0 0 0-11.93.89C51 87.53 40 116.08 40 144a88 88 0 0 0 176 0c0-59.45-50.79-108-72.62-126.15m40.51 135.49a57.6 57.6 0 0 1-46.56 46.55a7.7 7.7 0 0 1-1.33.11a8 8 0 0 1-1.32-15.89c16.57-2.79 30.63-16.85 33.44-33.45a8 8 0 0 1 15.78 2.68Z"
                          />
                        </svg>
                        Hot
                      </span>
                      <span className="game_badge type3">
                        <svg
                          className="me-1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16">
                          <path
                            fill="currentColor"
                            d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"
                          />
                        </svg>
                        Instant
                      </span>
                    </div>
                    <div className="col d-flex gap-2 mb-3">
                      <Link to={"/shop-details"}>
                        <div className=" position-relative">
                          <img
                            src={"./assets/images/icons/verify.svg"}
                            alt=""
                            className="details_profile_verify position-absolute"
                          />
                          <img
                            src={"./assets/images/user.png"}
                            alt=""
                            className="details_profile_img"
                          />
                        </div>
                      </Link>
                      <div className="col">
                        <div className="d-flex flex-wrap gap-3 align-items-start">
                          <p className="details_profile_name">
                            Seller{" "}
                            <Link to={"/shop-details"}>
                              <span className="text-white">Freaky</span>
                            </Link>
                            <br />
                            474 Orders
                          </p>
                          <Link to={"/shop-details"}>
                            <span className="details_profile_tag position-relative d-flex align-items-center">
                              <svg
                                className="position-absolute"
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24">
                                <path
                                  fill="currentColor"
                                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
                                />
                              </svg>
                              4.9
                            </span>
                          </Link>

                          <span className="details_profile_tag seller position-relative d-flex align-items-center">
                            <svg
                              className="position-absolute"
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 256 256">
                              <path
                                fill="currentColor"
                                d="M239.75 90.81c0 .11 0 .21-.07.32L217 195a16 16 0 0 1-15.72 13H54.71A16 16 0 0 1 39 195L16.32 91.13c0-.11-.05-.21-.07-.32A16 16 0 0 1 44 77.39l33.67 36.29l35.8-80.29a1 1 0 0 0 0-.1a16 16 0 0 1 29.06 0a1 1 0 0 0 0 .1l35.8 80.29L212 77.39a16 16 0 0 1 27.71 13.42Z"
                              />
                            </svg>
                            Top seller
                          </span>
                        </div>
                        {/* <p className="details_profile_name">474 Orders</p> */}
                      </div>
                    </div>

                    <div className="d-flex gap-3 align-items-center mb-3">
                      <p className="details_price mb-0">
                        $47.<span>75</span>
                      </p>
                      <span className="details_price_tag">-26%</span>
                      <p className="details_price_sm mb-0">$64.37</p>
                    </div>

                    <div className="col d-flex flex-wrap gap-2 align-items-center mb-3">
                      <button
                        type="button"
                        className="col-auto details_button d-flex gap-2 align-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M14.665 2.33a.75.75 0 0 1 1.006.335l2.201 4.402c1.353.104 2.202.37 2.75 1.047c.9 1.114.541 2.79-.177 6.143l-.429 2c-.487 2.273-.73 3.409-1.555 4.076S16.474 21 14.15 21h-4.3c-2.324 0-3.486 0-4.31-.667c-.826-.667-1.07-1.803-1.556-4.076l-.429-2c-.718-3.353-1.078-5.029-.177-6.143c.548-.678 1.397-.943 2.75-1.047l2.201-4.402a.75.75 0 0 1 1.342.67l-1.835 3.67Q8.559 7 9.422 7h5.156q.863-.001 1.586.005l-1.835-3.67a.75.75 0 0 1 .336-1.006M7.25 12a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M10 14.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Add to card
                      </button>

                      <button
                        type="button"
                        className="col-auto details_button paypal d-flex gap-2 align-items-center">
                        <img
                          src={"./assets/images/paypal.png"}
                          alt=""
                          className="w-100"
                        />
                      </button>

                      <div
                        className="col-auto details_mail d-flex justify-content-center align-items-center"
                        role="button"
                        onClick={() => OpenMessageModal()}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24">
                          <g fill="currentColor">
                            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0z" />
                            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0z" />
                          </g>
                        </svg>
                      </div>

                      <p className=" details_off">
                        8 MORE OFFERS AVAILABLE STARTING{" "}
                        <span>FROM $47.75</span>
                      </p>
                    </div>

                    <hr className="details_hr mb-4" />

                    <div className="col">
                      <p className="details_hint d-flex gap-1 align-items-center mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M11 17h2v-6h-2zm1-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
                          />
                        </svg>
                        This product is region / country restricted to: OTHER.
                        To see the list of supported countries, click here.
                      </p>

                      <div className="col mb-3">
                        <div className="details_text d-md-flex gap-2 mb-2">
                          <span>GLOBAL: </span>
                          <p className="mb-0">
                            Can be activated in{" "}
                            <strong className="fw-bold">Switzerland</strong>.
                            Check region <u>restrictions</u>
                          </p>
                        </div>
                        <div className="details_text d-md-flex gap-2 mb-2">
                          <span>Digital Key: </span>
                          <p className="mb-0">
                            This is a digital edition of the product (CD-KEY)
                          </p>
                        </div>
                      </div>

                      <div className="col d-flex flex-wrap gap-4">
                        <div className="col-auto">
                          <p className="details_hd mb-2">Genres</p>
                          <div className="d-flex flex-wrap gap-2">
                            <span className="details_hd_tag">Adventure</span>
                            <span className="details_hd_tag">RPG</span>
                          </div>
                        </div>
                        <div className="col-auto">
                          <p className="details_hd mb-2">Languages</p>
                          <div className="d-flex flex-rap gap-2">
                            <span className="details_hd_tag">English</span>
                            <span className="details_hd_tag">French</span>
                            <span className="details_hd_tag">German</span>
                            <span className="details_hd_tag">+3</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col mb-5">
                  <div className="col mb-3">
                    <h4 className="details_title">
                      Similar items you might like
                    </h4>
                    <p className="details_tit_sm">
                      Based on what customers bought
                    </p>
                  </div>

                  <Swiper
                    modules={[Pagination]}
                    spaceBetween={10}
                    slidesPerView={"auto"}
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

                <div className="col mb-4">
                  <div className="col d-flex flex-wrap gap-3 align-items-center mb-3">
                    <div className="col-12 col-md">
                      <h4 className="details_title">
                        Offers from other sellers
                      </h4>
                      <p className="details_tit">
                        Lowest price <span>$47.75</span>
                      </p>
                    </div>
                    <select name="" className="col col-md-auto details_fil_sel">
                      <option value="">Sort by: Best price</option>
                    </select>
                  </div>

                  {/* Details Offers */}
                  <div className="col gap-3 mb-5">
                    <div className="col details_offer active d-flex flex-wrap gap-2 gap-md-4 justify-content-between align-items-center mb-3">
                      <div className="col d-flex flex-wrap align-items-center gap-3">
                        <div className="col d-flex align-items-center gap-2">
                          <Link to={"/shop-details"}>
                            <div className="col-auto position-relative">
                              <img
                                src={"./assets/images/icons/verify.svg"}
                                alt=""
                                className="details_profile_verify position-absolute"
                              />
                              <img
                                src={"./assets/images/user.png"}
                                alt=""
                                className="details_profile_img"
                              />
                            </div>
                          </Link>
                          <div className="col">
                            <div className="d-flex gap-3 align-items-center">
                              <p className="details_profile_name">
                                Seller{" "}
                                <Link to={"/shop-details"}>
                                  <span className="text-white">Freaky</span>
                                </Link>
                              </p>
                              <span className="details_profile_tag position-relative d-flex align-items-center">
                                <svg
                                  className="position-absolute"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 24 24">
                                  <path
                                    fill="currentColor"
                                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
                                  />
                                </svg>
                                4.9
                              </span>
                              <span className="details_profile_tag seller position-relative d-flex align-items-center">
                                <svg
                                  className="position-absolute"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 256 256">
                                  <path
                                    fill="currentColor"
                                    d="M239.75 90.81c0 .11 0 .21-.07.32L217 195a16 16 0 0 1-15.72 13H54.71A16 16 0 0 1 39 195L16.32 91.13c0-.11-.05-.21-.07-.32A16 16 0 0 1 44 77.39l33.67 36.29l35.8-80.29a1 1 0 0 0 0-.1a16 16 0 0 1 29.06 0a1 1 0 0 0 0 .1l35.8 80.29L212 77.39a16 16 0 0 1 27.71 13.42Z"
                                  />
                                </svg>
                                Top seller
                              </span>
                            </div>
                            <p className="details_profile_name">474 Orders</p>
                          </div>
                        </div>

                        <div className="col-12 col-md-auto d-flex align-items-center gap-2">
                          {/* <span className="game_badge type2">
                            <svg
                              className="me-1"
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 256 256">
                              <path
                                fill="currentColor"
                                d="M143.38 17.85a8 8 0 0 0-12.63 3.41l-22 60.41l-24.16-23.41a8 8 0 0 0-11.93.89C51 87.53 40 116.08 40 144a88 88 0 0 0 176 0c0-59.45-50.79-108-72.62-126.15m40.51 135.49a57.6 57.6 0 0 1-46.56 46.55a7.7 7.7 0 0 1-1.33.11a8 8 0 0 1-1.32-15.89c16.57-2.79 30.63-16.85 33.44-33.45a8 8 0 0 1 15.78 2.68Z"
                              />
                            </svg>
                            Hot
                          </span> */}
                          {/* <span className="game_badge type3">
                            <svg
                              className="me-1"
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 16 16">
                              <path
                                fill="currentColor"
                                d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"
                              />
                            </svg>
                            Instant
                          </span> */}
                          <span className="game_badge d-flex align-items-center type5">
                            <svg
                              className="me-1"
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M12 8H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h1v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h3l5 4V4zm9.5 4c0 1.71-.96 3.26-2.5 4V8c1.53.75 2.5 2.3 2.5 4"
                              />
                            </svg>
                            Promoted
                          </span>
                          <span className="game_badge d-flex align-items-center type6">
                            24H
                          </span>
                          <hr className="details_offer_line d-none d-md-block ms-2"></hr>
                        </div>
                      </div>

                      <div className="col-12 col-md-auto d-flex justify-content-between gap-4 align-items-end align-items-md-center">
                        <div className="col-auto text-end">
                          {/* <span className="details_discount">-26%</span> */}
                          <p className="details_offer_price mb-0">
                            $47.<span>75</span>
                          </p>
                        </div>
                        <div className="game_item_cart d-flex">
                          <span className="icon d-flex justify-content-center align-items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M14.665 2.33a.75.75 0 0 1 1.006.335l2.201 4.402c1.353.104 2.202.37 2.75 1.047c.9 1.114.541 2.79-.177 6.143l-.429 2c-.487 2.273-.73 3.409-1.555 4.076S16.474 21 14.15 21h-4.3c-2.324 0-3.486 0-4.31-.667c-.826-.667-1.07-1.803-1.556-4.076l-.429-2c-.718-3.353-1.078-5.029-.177-6.143c.548-.678 1.397-.943 2.75-1.047l2.201-4.402a.75.75 0 0 1 1.342.67l-1.835 3.67Q8.559 7 9.422 7h5.156q.863-.001 1.586.005l-1.835-3.67a.75.75 0 0 1 .336-1.006M7.25 12a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M10 14.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col details_offer d-flex flex-wrap gap-2 gap-md-4 justify-content-between align-items-center mb-3">
                      <div className="col d-flex flex-wrap align-items-center gap-3">
                        <div className="col d-flex align-items-center gap-2">
                          <Link to={"/shop-details"}>
                            <div className="col-auto position-relative">
                              <img
                                src={"./assets/images/icons/verify.svg"}
                                alt=""
                                className="details_profile_verify position-absolute"
                              />
                              <img
                                src={"./assets/images/user.png"}
                                alt=""
                                className="details_profile_img"
                              />
                            </div>
                          </Link>
                          <div className="col">
                            <div className="d-flex gap-3 align-items-center">
                              <p className="details_profile_name">
                                Seller{" "}
                                <Link to={"/shop-details"}>
                                  <span className="text-white">Freaky</span>
                                </Link>
                              </p>
                              <span className="details_profile_tag position-relative d-flex align-items-center">
                                <svg
                                  className="position-absolute"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 24 24">
                                  <path
                                    fill="currentColor"
                                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
                                  />
                                </svg>
                                4.9
                              </span>
                              <span className="details_profile_tag seller position-relative d-flex align-items-center">
                                <svg
                                  className="position-absolute"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 256 256">
                                  <path
                                    fill="currentColor"
                                    d="M239.75 90.81c0 .11 0 .21-.07.32L217 195a16 16 0 0 1-15.72 13H54.71A16 16 0 0 1 39 195L16.32 91.13c0-.11-.05-.21-.07-.32A16 16 0 0 1 44 77.39l33.67 36.29l35.8-80.29a1 1 0 0 0 0-.1a16 16 0 0 1 29.06 0a1 1 0 0 0 0 .1l35.8 80.29L212 77.39a16 16 0 0 1 27.71 13.42Z"
                                  />
                                </svg>
                                Top seller
                              </span>
                            </div>
                            <p className="details_profile_name">474 Orders</p>
                          </div>
                        </div>

                        <div className="col-12 col-md-auto d-flex align-items-center gap-2">
                          {/* <span className="game_badge type2">
                            <svg
                              className="me-1"
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 256 256">
                              <path
                                fill="currentColor"
                                d="M143.38 17.85a8 8 0 0 0-12.63 3.41l-22 60.41l-24.16-23.41a8 8 0 0 0-11.93.89C51 87.53 40 116.08 40 144a88 88 0 0 0 176 0c0-59.45-50.79-108-72.62-126.15m40.51 135.49a57.6 57.6 0 0 1-46.56 46.55a7.7 7.7 0 0 1-1.33.11a8 8 0 0 1-1.32-15.89c16.57-2.79 30.63-16.85 33.44-33.45a8 8 0 0 1 15.78 2.68Z"
                              />
                            </svg>
                            Hot
                          </span> */}
                          {/* <span className="game_badge type3">
                            <svg
                              className="me-1"
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 16 16">
                              <path
                                fill="currentColor"
                                d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"
                              />
                            </svg>
                            Instant
                          </span> */}
                          <span className="game_badge d-flex align-items-center type5">
                            <svg
                              className="me-1"
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M12 8H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h1v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h3l5 4V4zm9.5 4c0 1.71-.96 3.26-2.5 4V8c1.53.75 2.5 2.3 2.5 4"
                              />
                            </svg>
                            Promoted
                          </span>
                          <span className="game_badge d-flex align-items-center type6">
                            24H
                          </span>
                          <hr className="details_offer_line d-none d-md-block ms-2"></hr>
                        </div>
                      </div>

                      <div className="col-12 col-md-auto d-flex justify-content-between gap-4 align-items-end align-items-md-center">
                        <div className="col-auto text-end">
                          {/* <span className="details_discount">-26%</span> */}
                          <p className="details_offer_price mb-0">
                            $47.<span>75</span>
                          </p>
                        </div>
                        <div className="game_item_cart d-flex">
                          <span className="icon d-flex justify-content-center align-items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M14.665 2.33a.75.75 0 0 1 1.006.335l2.201 4.402c1.353.104 2.202.37 2.75 1.047c.9 1.114.541 2.79-.177 6.143l-.429 2c-.487 2.273-.73 3.409-1.555 4.076S16.474 21 14.15 21h-4.3c-2.324 0-3.486 0-4.31-.667c-.826-.667-1.07-1.803-1.556-4.076l-.429-2c-.718-3.353-1.078-5.029-.177-6.143c.548-.678 1.397-.943 2.75-1.047l2.201-4.402a.75.75 0 0 1 1.342.67l-1.835 3.67Q8.559 7 9.422 7h5.156q.863-.001 1.586.005l-1.835-3.67a.75.75 0 0 1 .336-1.006M7.25 12a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M10 14.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="col d-flex gap-2 justify-content-start justify-content-md-center align-items-center overflow-auto hide_scroll mb-4">
                    <p
                      className={
                        "details_tab_link " +
                        (Tab1.activeTab == 1 ? "active" : "")
                      }
                      onClick={() => Tab1.ChangeTab(1)}>
                      Description
                    </p>
                    <p
                      className={
                        "details_tab_link d-flex gap-1 align-items-center " +
                        (Tab1.activeTab == 2 ? "active" : "")
                      }
                      onClick={() => Tab1.ChangeTab(2)}>
                      Reviews (33)
                      <span className="d-flex align-items-center">
                        <svg
                          className="ms-1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
                          />
                        </svg>
                        4.9
                      </span>
                    </p>
                    <p
                      className={
                        "details_tab_link " +
                        (Tab1.activeTab == 3 ? "active" : "")
                      }
                      onClick={() => Tab1.ChangeTab(3)}>
                      System Requirements
                    </p>
                    <p
                      className={
                        "details_tab_link " +
                        (Tab1.activeTab == 4 ? "active" : "")
                      }
                      onClick={() => Tab1.ChangeTab(4)}>
                      Key Activation
                    </p>
                  </div>

                  {/* Description */}
                  {Tab1.activeTab == 1 && (
                    <div className="col details_tab_cont">
                      <p className="details_tab_head">
                        Release date: 08/02/2024
                      </p>
                      <p className="details_tab_text">
                        The Medium + Observer: System Redux + DARQ is a bundle
                        of three psychological horror games. Here are the
                        features of each game:
                      </p>

                      <p className="details_tab_head">The Medium</p>
                      <ul className="details_tab_text">
                        <li>
                          Dual-reality gameplay: Explore two realities at the
                          same time, the physical and the spiritual, as you
                          investigate a dark mystery in an abandoned communist
                          resort.
                        </li>
                        <li>
                          Psychic abilities: Use your unique psychic abilities
                          to solve puzzles, interact with the environment, and
                          uncover hidden secrets.
                        </li>
                        <li>
                          Sinister spirits: Encounter terrifying spirits that
                          haunt the abandoned resort. Dark and atmospheric
                          setting: Immerse yourself in the eerie atmosphere of
                          the abandoned resort, as you delve into its disturbing
                          past.
                        </li>
                      </ul>
                      <p className="details_tab_head">The Medium</p>
                      <ul className="details_tab_text">
                        <li>
                          Dual-reality gameplay: Explore two realities at the
                          same time, the physical and the spiritual, as you
                          investigate a dark mystery in an abandoned communist
                          resort.
                        </li>
                        <li>
                          Psychic abilities: Use your unique psychic abilities
                          to solve puzzles, interact with the environment, and
                          uncover hidden secrets.
                        </li>
                        <li>
                          Sinister spirits: Encounter terrifying spirits that
                          haunt the abandoned resort. Dark and atmospheric
                          setting: Immerse yourself in the eerie atmosphere of
                          the abandoned resort, as you delve into its disturbing
                          past.
                        </li>
                      </ul>
                      <p className="details_tab_head">The Medium</p>
                      <ul className="details_tab_text">
                        <li>
                          Dual-reality gameplay: Explore two realities at the
                          same time, the physical and the spiritual, as you
                          investigate a dark mystery in an abandoned communist
                          resort.
                        </li>
                        <li>
                          Psychic abilities: Use your unique psychic abilities
                          to solve puzzles, interact with the environment, and
                          uncover hidden secrets.
                        </li>
                        <li>
                          Sinister spirits: Encounter terrifying spirits that
                          haunt the abandoned resort. Dark and atmospheric
                          setting: Immerse yourself in the eerie atmosphere of
                          the abandoned resort, as you delve into its disturbing
                          past.
                        </li>
                      </ul>
                    </div>
                  )}

                  {/* Reviews */}
                  {Tab1.activeTab == 2 && (
                    <div className="col details_tab_cont">
                      <div className="col d-flex flex-wrap justify-content-between gap-3 align-items-center mb-4">
                        <div className="col d-flex justify-content-between align-items-center">
                          <div className="col-auto">
                            <p className="details_title">4.9 out of 5</p>
                            <p className="details_tit">33 Reviews</p>
                          </div>
                          <button
                            type="button"
                            className="d-md-none details_rev_button">
                            Add Review
                          </button>
                        </div>
                        <select
                          name=""
                          className="col-12 col-md-auto details_fil_sel">
                          <option value="">Sort by: Best price</option>
                        </select>
                      </div>

                      <div className="col d-flex flex-column gap-3 mb-4">
                        <div className="col details_rev">
                          <div className="d-flex gap-1 mb-2">
                            <span className="details_rev_star">
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
                            <span className="details_rev_star">
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
                            <span className="details_rev_star">
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
                            <span className="details_rev_star">
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
                            <span className="details_rev_star">
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
                          </div>
                          <p className="details_rev_text mb-3">
                            Incredible game, true survival horror, if you
                            don&apos;t know the story and didn&apos;t have
                            spoilers, you will definitely take some jump scaries
                            and have fun for a few hours. Don&apos;t be in a
                            hurry to play this game, enjoy every second paying
                            attention to the details, the animations, the
                            soundtrack. The game is just perfect!
                          </p>

                          <div className="d-flex gap-2 align-items-center mb-3">
                            <p className="details_rev_hint">Helpful?</p>
                            <span className="details_rev_like d-flex align-items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24">
                                <path
                                  fill="currentColor"
                                  d="m20.27 16.265l.705-4.08a1.666 1.666 0 0 0-1.64-1.95h-5.181a.833.833 0 0 1-.822-.969l.663-4.045a4.8 4.8 0 0 0-.09-1.973a1.64 1.64 0 0 0-1.092-1.137l-.145-.047a1.35 1.35 0 0 0-.994.068c-.34.164-.588.463-.68.818l-.476 1.834a7.6 7.6 0 0 1-.656 1.679c-.415.777-1.057 1.4-1.725 1.975l-1.439 1.24a1.67 1.67 0 0 0-.572 1.406l.812 9.393A1.666 1.666 0 0 0 8.597 22h4.648c3.482 0 6.453-2.426 7.025-5.735"
                                />
                                <path
                                  fill="currentColor"
                                  fillRule="evenodd"
                                  d="M2.968 9.485a.75.75 0 0 1 .78.685l.97 11.236a1.237 1.237 0 1 1-2.468.107V10.234a.75.75 0 0 1 .718-.749"
                                  clipRule="evenodd"
                                />
                              </svg>
                              (0)
                            </span>
                            <span className="details_rev_like d-flex align-items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24">
                                <path
                                  fill="currentColor"
                                  d="m20.27 8.485l.705 4.08a1.666 1.666 0 0 1-1.64 1.95h-5.181a.833.833 0 0 0-.822.969l.663 4.045a4.8 4.8 0 0 1-.09 1.974c-.139.533-.55.962-1.092 1.136l-.145.047c-.328.105-.685.08-.994-.068a1.26 1.26 0 0 1-.68-.818l-.476-1.834a7.6 7.6 0 0 0-.656-1.679c-.415-.777-1.057-1.4-1.725-1.975l-1.439-1.24a1.67 1.67 0 0 1-.572-1.406l.812-9.393A1.666 1.666 0 0 1 8.597 2.75h4.648c3.482 0 6.453 2.426 7.025 5.735"
                                />
                                <path
                                  fill="currentColor"
                                  fillRule="evenodd"
                                  d="M2.968 15.265a.75.75 0 0 0 .78-.685l.97-11.236a1.237 1.237 0 1 0-2.468-.107v11.279a.75.75 0 0 0 .718.75"
                                  clipRule="evenodd"
                                />
                              </svg>
                              (0)
                            </span>
                          </div>

                          <div className="d-flex gap-2 align-items-start">
                            <div className=" position-relative">
                              <img
                                src={"./assets/images/icons/verify.svg"}
                                alt=""
                                className="details_profile_verify position-absolute"
                              />
                              <img
                                src={"./assets/images/user.png"}
                                alt=""
                                className="details_profile_img"
                              />
                            </div>
                            <div className="col">
                              <p className="details_rev_name">Pedro</p>
                              <p className="details_rev_date">01/04/2023</p>
                            </div>
                          </div>
                        </div>
                        <div className="col details_rev">
                          <div className="d-flex gap-1 mb-2">
                            <span className="details_rev_star">
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
                            <span className="details_rev_star">
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
                            <span className="details_rev_star">
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
                            <span className="details_rev_star">
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
                            <span className="details_rev_star">
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
                          </div>
                          <p className="details_rev_text mb-3">
                            Incredible game, true survival horror, if you
                            don&apos;t know the story and didn&apos;t have
                            spoilers, you will definitely take some jump scaries
                            and have fun for a few hours. Don&apos;t be in a
                            hurry to play this game, enjoy every second paying
                            attention to the details, the animations, the
                            soundtrack. The game is just perfect!
                          </p>

                          <div className="d-flex gap-2 align-items-center mb-3">
                            <p className="details_rev_hint">Helpful?</p>
                            <span className="details_rev_like d-flex align-items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24">
                                <path
                                  fill="currentColor"
                                  d="m20.27 16.265l.705-4.08a1.666 1.666 0 0 0-1.64-1.95h-5.181a.833.833 0 0 1-.822-.969l.663-4.045a4.8 4.8 0 0 0-.09-1.973a1.64 1.64 0 0 0-1.092-1.137l-.145-.047a1.35 1.35 0 0 0-.994.068c-.34.164-.588.463-.68.818l-.476 1.834a7.6 7.6 0 0 1-.656 1.679c-.415.777-1.057 1.4-1.725 1.975l-1.439 1.24a1.67 1.67 0 0 0-.572 1.406l.812 9.393A1.666 1.666 0 0 0 8.597 22h4.648c3.482 0 6.453-2.426 7.025-5.735"
                                />
                                <path
                                  fill="currentColor"
                                  fillRule="evenodd"
                                  d="M2.968 9.485a.75.75 0 0 1 .78.685l.97 11.236a1.237 1.237 0 1 1-2.468.107V10.234a.75.75 0 0 1 .718-.749"
                                  clipRule="evenodd"
                                />
                              </svg>
                              (0)
                            </span>
                            <span className="details_rev_like d-flex align-items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24">
                                <path
                                  fill="currentColor"
                                  d="m20.27 8.485l.705 4.08a1.666 1.666 0 0 1-1.64 1.95h-5.181a.833.833 0 0 0-.822.969l.663 4.045a4.8 4.8 0 0 1-.09 1.974c-.139.533-.55.962-1.092 1.136l-.145.047c-.328.105-.685.08-.994-.068a1.26 1.26 0 0 1-.68-.818l-.476-1.834a7.6 7.6 0 0 0-.656-1.679c-.415-.777-1.057-1.4-1.725-1.975l-1.439-1.24a1.67 1.67 0 0 1-.572-1.406l.812-9.393A1.666 1.666 0 0 1 8.597 2.75h4.648c3.482 0 6.453 2.426 7.025 5.735"
                                />
                                <path
                                  fill="currentColor"
                                  fillRule="evenodd"
                                  d="M2.968 15.265a.75.75 0 0 0 .78-.685l.97-11.236a1.237 1.237 0 1 0-2.468-.107v11.279a.75.75 0 0 0 .718.75"
                                  clipRule="evenodd"
                                />
                              </svg>
                              (0)
                            </span>
                          </div>

                          <div className="d-flex gap-2 align-items-start">
                            <div className=" position-relative">
                              <img
                                src={"./assets/images/icons/verify.svg"}
                                alt=""
                                className="details_profile_verify position-absolute"
                              />
                              <img
                                src={"./assets/images/user.png"}
                                alt=""
                                className="details_profile_img"
                              />
                            </div>
                            <div className="col">
                              <p className="details_rev_name">Pedro</p>
                              <p className="details_rev_date">01/04/2023</p>
                            </div>
                          </div>

                          <div className="col px-md-4 mt-3">
                            <div className="col d-flex align-items-center gap-2">
                              <p className="details_rev_head text-nowrap">
                                seller’s respose
                              </p>
                              <hr className="details_rev_line" />
                            </div>
                            <div className="d-flex gap-2">
                              <div className=" position-relative">
                                <img
                                  src={"./assets/images/icons/verify.svg"}
                                  alt=""
                                  className="details_profile_verify position-absolute"
                                />
                                <img
                                  src={"./assets/images/user.png"}
                                  alt=""
                                  className="details_profile_img"
                                />
                              </div>
                              <div className="col">
                                <div className="d-flex gap-3 align-items-center mb-2">
                                  <p className="details_rev_name">Freaky</p>
                                  <span className="details_profile_tag position-relative d-flex align-items-center">
                                    <svg
                                      className="position-absolute"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="1em"
                                      height="1em"
                                      viewBox="0 0 24 24">
                                      <path
                                        fill="currentColor"
                                        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
                                      />
                                    </svg>
                                    4.9
                                  </span>
                                  <span className="details_profile_tag seller position-relative d-flex align-items-center">
                                    <svg
                                      className="position-absolute"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="1em"
                                      height="1em"
                                      viewBox="0 0 256 256">
                                      <path
                                        fill="currentColor"
                                        d="M239.75 90.81c0 .11 0 .21-.07.32L217 195a16 16 0 0 1-15.72 13H54.71A16 16 0 0 1 39 195L16.32 91.13c0-.11-.05-.21-.07-.32A16 16 0 0 1 44 77.39l33.67 36.29l35.8-80.29a1 1 0 0 0 0-.1a16 16 0 0 1 29.06 0a1 1 0 0 0 0 .1l35.8 80.29L212 77.39a16 16 0 0 1 27.71 13.42Z"
                                      />
                                    </svg>
                                    Top seller
                                  </span>
                                </div>
                                <p className="details_rev_text mb-3">
                                  Incredible game, true survival horror, if you
                                  don&apos;t know the story and didn&apos;t have
                                  spoilers, you will definitely take some jump
                                  scaries and have fun for a few hours.
                                  Don&apos;t be in a hurry to play this game,
                                  enjoy every second paying attention to the
                                  details, the animations, the soundtrack. The
                                  game is just perfect!
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col details_rev">
                          <div className="d-flex gap-1 mb-2">
                            <span className="details_rev_star">
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
                            <span className="details_rev_star">
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
                            <span className="details_rev_star">
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
                            <span className="details_rev_star">
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
                            <span className="details_rev_star">
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
                          </div>
                          <p className="details_rev_text mb-3">
                            Incredible game, true survival horror, if you
                            don&apos;t know the story and didn&apos;t have
                            spoilers, you will definitely take some jump scaries
                            and have fun for a few hours. Don&apos;t be in a
                            hurry to play this game, enjoy every second paying
                            attention to the details, the animations, the
                            soundtrack. The game is just perfect!
                          </p>

                          <div className="d-flex gap-2 align-items-center mb-3">
                            <p className="details_rev_hint">Helpful?</p>
                            <span className="details_rev_like d-flex align-items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24">
                                <path
                                  fill="currentColor"
                                  d="m20.27 16.265l.705-4.08a1.666 1.666 0 0 0-1.64-1.95h-5.181a.833.833 0 0 1-.822-.969l.663-4.045a4.8 4.8 0 0 0-.09-1.973a1.64 1.64 0 0 0-1.092-1.137l-.145-.047a1.35 1.35 0 0 0-.994.068c-.34.164-.588.463-.68.818l-.476 1.834a7.6 7.6 0 0 1-.656 1.679c-.415.777-1.057 1.4-1.725 1.975l-1.439 1.24a1.67 1.67 0 0 0-.572 1.406l.812 9.393A1.666 1.666 0 0 0 8.597 22h4.648c3.482 0 6.453-2.426 7.025-5.735"
                                />
                                <path
                                  fill="currentColor"
                                  fillRule="evenodd"
                                  d="M2.968 9.485a.75.75 0 0 1 .78.685l.97 11.236a1.237 1.237 0 1 1-2.468.107V10.234a.75.75 0 0 1 .718-.749"
                                  clipRule="evenodd"
                                />
                              </svg>
                              (0)
                            </span>
                            <span className="details_rev_like d-flex align-items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24">
                                <path
                                  fill="currentColor"
                                  d="m20.27 8.485l.705 4.08a1.666 1.666 0 0 1-1.64 1.95h-5.181a.833.833 0 0 0-.822.969l.663 4.045a4.8 4.8 0 0 1-.09 1.974c-.139.533-.55.962-1.092 1.136l-.145.047c-.328.105-.685.08-.994-.068a1.26 1.26 0 0 1-.68-.818l-.476-1.834a7.6 7.6 0 0 0-.656-1.679c-.415-.777-1.057-1.4-1.725-1.975l-1.439-1.24a1.67 1.67 0 0 1-.572-1.406l.812-9.393A1.666 1.666 0 0 1 8.597 2.75h4.648c3.482 0 6.453 2.426 7.025 5.735"
                                />
                                <path
                                  fill="currentColor"
                                  fillRule="evenodd"
                                  d="M2.968 15.265a.75.75 0 0 0 .78-.685l.97-11.236a1.237 1.237 0 1 0-2.468-.107v11.279a.75.75 0 0 0 .718.75"
                                  clipRule="evenodd"
                                />
                              </svg>
                              (0)
                            </span>
                          </div>

                          <div className="d-flex gap-2 align-items-start">
                            <div className=" position-relative">
                              <img
                                src={"./assets/images/icons/verify.svg"}
                                alt=""
                                className="details_profile_verify position-absolute"
                              />
                              <img
                                src={"./assets/images/user.png"}
                                alt=""
                                className="details_profile_img"
                              />
                            </div>
                            <div className="col">
                              <p className="details_rev_name">Pedro</p>
                              <p className="details_rev_date">01/04/2023</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button type="button" className="details_rev_button">
                          Load more
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Requirement */}
                  {Tab1.activeTab == 3 && (
                    <div className="col details_tab_cont">
                      <div className="col details_req_tab_con d-flex gap-2 justify-content-start justify-content-md-center mb-3">
                        <p
                          className={
                            "details_tab_link small " +
                            (Tab2.activeTab == 1 ? "active" : "")
                          }
                          onClick={() => Tab2.ChangeTab(1)}>
                          Windows
                        </p>
                        <p
                          className={
                            "details_tab_link small " +
                            (Tab2.activeTab == 2 ? "active" : "")
                          }
                          onClick={() => Tab2.ChangeTab(2)}>
                          Mac
                        </p>
                      </div>

                      {/* Windows */}
                      {Tab2.activeTab == 1 && (
                        <div className="col d-flex flex-wrap gap-3">
                          <div className="col-12 col-md">
                            <h4 className="details_req_header">
                              Minimal requirements
                            </h4>

                            <div className="col mb-3">
                              <p className="details_req_head">
                                Minimal requirements
                              </p>
                              <p className="details_req_text">
                                AMD Ryzen 3 1200 ／ Intel Core i5-7500
                              </p>
                            </div>
                            <div className="col mb-3">
                              <p className="details_req_head">GRAPHICS</p>
                              <p className="details_req_text">
                                AMD Radeon RX 560 with 4GB VRAM ／ NVIDIA
                                GeForce GTX 1050 Ti with 4GB VRAM
                              </p>
                            </div>
                            <div className="col mb-3">
                              <p className="details_req_head">Memory</p>
                              <p className="details_req_text">
                                AMD Radeon RX 560 with 4GB VRAM ／ NVIDIA
                                GeForce GTX 1050 Ti with 4GB VRAM
                              </p>
                            </div>
                            <div className="col mb-3">
                              <p className="details_req_head">System</p>
                              <p className="details_req_text">
                                AMD Radeon RX 560 with 4GB VRAM ／ NVIDIA
                                GeForce GTX 1050 Ti with 4GB VRAM
                              </p>
                            </div>
                            <div className="col mb-3">
                              <p className="details_req_head">OTHER</p>
                              <p className="details_req_text">
                                Estimated performance (when set to Prioritize
                                Performance): 1080p/60fps. ・Framerate might
                                drop in graphics-intensive scenes. ・AMD Radeon
                                RX 6700 XT or NVIDIA GeForce RTX 2060 required
                                to support ray tracing. System requirements
                                subject to change during game development.
                              </p>
                            </div>
                          </div>
                          <div className="col-12 col-md">
                            <h4 className="details_req_header">
                              Recommended requirements
                            </h4>

                            <div className="col mb-3">
                              <p className="details_req_head">
                                Minimal requirements
                              </p>
                              <p className="details_req_text">
                                AMD Ryzen 3 1200 ／ Intel Core i5-7500
                              </p>
                            </div>
                            <div className="col mb-3">
                              <p className="details_req_head">GRAPHICS</p>
                              <p className="details_req_text">
                                AMD Radeon RX 5700 ／ NVIDIA GeForce GTX 1070
                              </p>
                            </div>
                            <div className="col mb-3">
                              <p className="details_req_head">Memory</p>
                              <p className="details_req_text">16 GB RAM</p>
                            </div>
                            <div className="col mb-3">
                              <p className="details_req_head">System</p>
                              <p className="details_req_text">
                                Windows 10 (64 bit)
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                      {/* Mac */}
                      {Tab2.activeTab == 2 && (
                        <div className="col d-flex flex-wrap gap-3">
                          <div className="col-12 col-md">
                            <h4 className="details_req_header">
                              Minimal requirements
                            </h4>

                            <div className="col mb-3">
                              <p className="details_req_head">
                                Minimal requirements
                              </p>
                              <p className="details_req_text">
                                AMD Ryzen 3 1200 ／ Intel Core i5-7500
                              </p>
                            </div>
                            <div className="col mb-3">
                              <p className="details_req_head">GRAPHICS</p>
                              <p className="details_req_text">
                                AMD Radeon RX 560 with 4GB VRAM ／ NVIDIA
                                GeForce GTX 1050 Ti with 4GB VRAM
                              </p>
                            </div>
                            <div className="col mb-3">
                              <p className="details_req_head">Memory</p>
                              <p className="details_req_text">
                                AMD Radeon RX 560 with 4GB VRAM ／ NVIDIA
                                GeForce GTX 1050 Ti with 4GB VRAM
                              </p>
                            </div>
                            <div className="col mb-3">
                              <p className="details_req_head">System</p>
                              <p className="details_req_text">
                                AMD Radeon RX 560 with 4GB VRAM ／ NVIDIA
                                GeForce GTX 1050 Ti with 4GB VRAM
                              </p>
                            </div>
                            <div className="col mb-3">
                              <p className="details_req_head">OTHER</p>
                              <p className="details_req_text">
                                Estimated performance (when set to Prioritize
                                Performance): 1080p/60fps. ・Framerate might
                                drop in graphics-intensive scenes. ・AMD Radeon
                                RX 6700 XT or NVIDIA GeForce RTX 2060 required
                                to support ray tracing. System requirements
                                subject to change during game development.
                              </p>
                            </div>
                          </div>
                          <div className="col-12 col-md">
                            <h4 className="details_req_header">
                              Recommended requirements
                            </h4>

                            <div className="col mb-3">
                              <p className="details_req_head">
                                Minimal requirements
                              </p>
                              <p className="details_req_text">
                                AMD Ryzen 3 1200 ／ Intel Core i5-7500
                              </p>
                            </div>
                            <div className="col mb-3">
                              <p className="details_req_head">GRAPHICS</p>
                              <p className="details_req_text">
                                AMD Radeon RX 5700 ／ NVIDIA GeForce GTX 1070
                              </p>
                            </div>
                            <div className="col mb-3">
                              <p className="details_req_head">Memory</p>
                              <p className="details_req_text">16 GB RAM</p>
                            </div>
                            <div className="col mb-3">
                              <p className="details_req_head">System</p>
                              <p className="details_req_text">
                                Windows 10 (64 bit)
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Key Activation */}
                  {Tab1.activeTab == 4 && (
                    <div className="col details_tab_cont">
                      <div className="col mb-3">
                        <p className="details_req_head mb-2">
                          ON XBOX ONE AND XBOX SERIES X|S:
                        </p>
                        <p className="details_req_text mb-1">
                          1. Press the Xbox button to open the guide, and then
                          select Store.
                        </p>
                        <p className="details_req_text mb-1">
                          2. Press the View button to open the side menu, and
                          then select Redeem.
                        </p>
                        <p className="details_req_text mb-1">
                          3. Press the View button to open the side menu, and
                          then select Redeem.
                        </p>
                      </div>
                      <div className="col mb-3">
                        <p className="details_req_head mb-2">ON XBOX 360</p>
                        <p className="details_req_text mb-1">
                          1. Press the Xbox button to open the guide, and then
                          select Store.
                        </p>
                        <p className="details_req_text mb-1">
                          2. Press the View button to open the side menu, and
                          then select Redeem.
                        </p>
                        <p className="details_req_text mb-1">
                          3. Press the View button to open the side menu, and
                          then select Redeem.
                        </p>
                      </div>
                      <div className="col mb-3">
                        <p className="details_req_head mb-2">
                          IN A WEB BROWSER:
                        </p>
                        <p className="details_req_text mb-1">
                          1. Go to <span>this Website</span>
                        </p>
                        <p className="details_req_text mb-1">
                          2. Log into your Microsoft Account.
                        </p>
                        <p className="details_req_text mb-1">
                          3. Enter the key and click next
                        </p>
                        <p className="details_req_text mb-1">
                          4. Follow the prompts.
                        </p>
                        <p className="details_req_text mb-1">
                          5. Please note that Xbox 360 codes can ONLY be
                          activated on the Xbox 360 console directly!
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="col d-lg-none">
                <MainFooter />
              </div>
            </div>

            <RightSideBar makeOpen={false} />
          </div>
        </div>
      </div>
    </>
  );
}
