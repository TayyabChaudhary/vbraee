import { Link } from "react-router-dom";
import Pagination from "./componets/utility/Pagination";
import GameItem from "./componets/GameItem";
import MenuSideBar from "./componets/MenuSideBar";
import MainHeader from "./componets/MainHeader";
import { useEffect, useState } from "react";
import CategoryFilter from "./componets/CategoryFilter";
import { useTabs } from "../services/CustomTabs";
import EmptyGameItem from "./componets/EmptyGameItem";
import RightSideBar from "./componets/RightSideBar";
import MainFooter from "./componets/MainFooter";
import MessageModal from "./componets/modals/ProductMessage";

export default function ShopDetails() {
  const { activeTab, ChangeTab } = useTabs(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isBestSellerFilterOpen, setIsBestSellerFilterOpen] = useState(false);

  const [cards] = useState([...Array(10).keys()]); // Example card data (0-9)
  const [filledCards, setFilledCards] = useState([]);

  useEffect(() => {
    fillGrid();
    window.addEventListener("resize", fillGrid); // Refill on resize
    return () => window.removeEventListener("resize", fillGrid);
  }, [cards]);

  const fillGrid = () => {
    const container = document.querySelector(".game_list_con");
    const containerWidth = container.clientWidth; // Get container width
    const itemsPerRow = Math.floor(containerWidth / 250); // Calculate items that can fit

    const totalItems = Math.ceil(cards.length / itemsPerRow) * itemsPerRow; // Calculate total items needed
    const placeholders = totalItems - cards.length; // Calculate number of placeholders needed
    const filled = [...cards, ...Array(placeholders).fill(null)]; // Create filled array

    setFilledCards(filled);
  };

  const [openMessage, setOpenMessage] = useState(false);
  function OpenMessageModal() {
    setOpenMessage(true);
    console.log("sd");
  }
  function CloseMessageModal() {
    setOpenMessage(false);
  }

  function OpenFilter() {
    setIsFilterOpen(true);
  }
  function CloseFilter() {
    setIsFilterOpen(false);
  }

  function OpenBestSellerFilter() {
    setIsBestSellerFilterOpen(true);
  }
  function CloseBestSellerFilter() {
    setIsBestSellerFilterOpen(false);
  }

  return (
    <>
      <MessageModal isOpen={openMessage} onClose={CloseMessageModal} />
      <div className="d-flex main_house_con">
        <MenuSideBar makeShort={true} activeLink={"shops"} />

        <div
          className="col housing_con d-flex flex-column"
          style={
            {
              // backgroundImage: " url('./assets/images/psn_bg.png')",
            }
          }>
          <MainHeader activeLink={"shops"} />

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
                <Link to={"/shops"}>
                  <p className="crumb_link">/ Shops</p>
                </Link>
                <Link>
                  <p className="crumb_link">/ Freaky</p>
                </Link>
              </div>

              <div className="shop_details_con">
                <div
                  className="shop_details_bg position-relative"
                  style={{
                    backgroundImage: "url(./assets/images/shop_bg.png)",
                  }}>
                  <div className="shop_total_con">
                    <div className="shop_total_cont d-flex flex-wrap gap-4 justify-content-between align-items-center">
                      <div className="col-12 col-lg-auto d-flex gap-3">
                        <Link to={"/shop-details"}>
                          <div className="shop_banner_profile position-relative">
                            <img
                              src={"./assets/images/icons/verify.svg"}
                              alt=""
                              className="shop_banner_profile_check position-absolute"
                            />
                            <img
                              src={"./assets/images/user.png"}
                              alt=""
                              className="shop_banner_profile_img"
                            />
                          </div>
                        </Link>
                        <div className="col">
                          <div className="d-flex gap-3 align-items-center mb-1">
                            <span
                              className="details_profile_tag position-relative d-flex align-items-center"
                              role="button"
                              onClick={() => ChangeTab(2)}>
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
                          <Link to={"/shop-details"}>
                            <p className="shop_banner_profile_name">
                              <span className="text-white">Freaky</span>
                            </p>
                          </Link>
                          <p className="shop_banner_profile_time">
                            since May 2023
                          </p>
                        </div>
                      </div>

                      <div className="col col-xl-auto row g-4 g-xl-5">
                        <div className="col-6 col-xl">
                          <p className="shop_banner_head">Orders</p>
                          <p className="shop_banner_num">1333</p>
                        </div>
                        <div className="col-6 col-xl">
                          <p className="shop_banner_head">Reviews</p>
                          <p className="shop_banner_num">608</p>
                        </div>
                        <div className="col-6 col-xl">
                          <p className="shop_banner_head">Positive Feedback</p>
                          <p className="shop_banner_num d-flex align-items-center">
                            197.00%{" "}
                            <span className="game_badge type1 ms-2">
                              Superb!
                            </span>{" "}
                          </p>
                        </div>
                        <div className="col-6 col-xl">
                          <p className="shop_banner_head">Followers</p>
                          <div className="shop_banner_num d-flex align-items-center">
                            5
                            <div className="d-flex ms-4">
                              <img
                                src={"./assets/images/user.png"}
                                alt=""
                                className="shop_banner_num_img"
                              />
                              <img
                                src={"./assets/images/user.png"}
                                alt=""
                                className="shop_banner_num_img"
                              />
                              <img
                                src={"./assets/images/user.png"}
                                alt=""
                                className="shop_banner_num_img"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-lg-auto d-flex gap-3">
                        <button
                          onClick={() => OpenMessageModal()}
                          type="button"
                          className="col shop_banner_btn">
                          Contact Seller
                        </button>
                        <span className="shop_banner_btn_icon d-flex justify-content-center align-items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M13 14.062V22H4a8 8 0 0 1 9-7.938M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m5.793 6.914l3.535-3.535l1.415 1.414l-4.95 4.95l-3.536-3.536l1.415-1.414z"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col d-flex justify-content-center mb-2">
                  <div className="col col-xl-5 shop_tab_con d-flex  justify-content-md-center align-items-center overflow-auto hide_scroll">
                    <p
                      className={
                        "shop_tab_link " + (activeTab == 1 ? "active" : "")
                      }
                      onClick={() => ChangeTab(1)}>
                      Offers (455)
                    </p>
                    <p
                      className={
                        "shop_tab_link " + (activeTab == 2 ? "active" : "")
                      }
                      onClick={() => ChangeTab(2)}>
                      Reviews (608)
                    </p>
                    <p
                      className={
                        "shop_tab_link " + (activeTab == 3 ? "active" : "")
                      }
                      onClick={() => ChangeTab(3)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 256 256">
                        <path
                          fill="currentColor"
                          d="M143.38 17.85a8 8 0 0 0-12.63 3.41l-22 60.41l-24.16-23.41a8 8 0 0 0-11.93.89C51 87.53 40 116.08 40 144a88 88 0 0 0 176 0c0-59.45-50.79-108-72.62-126.15m40.51 135.49a57.6 57.6 0 0 1-46.56 46.55a7.7 7.7 0 0 1-1.33.11a8 8 0 0 1-1.32-15.89c16.57-2.79 30.63-16.85 33.44-33.45a8 8 0 0 1 15.78 2.68Z"
                        />
                      </svg>{" "}
                      Best Sellers (3)
                    </p>
                  </div>
                </div>

                <div className="shop_details_cont">
                  {/* Offers */}
                  {activeTab == 1 && (
                    <div className="col d-flex gap-4 position-relative">
                      <CategoryFilter
                        isOpen={isFilterOpen}
                        onClose={CloseFilter}
                      />

                      <div className="w-100">
                        <div className="col d-xl-flex flex-row-reverse align-items-start align-items-xl-center gap-3 gap-xl-4 mb-4">
                          <div className="col col-xl-3 d-flex gap-2 align-items-center mb-3 mb-xl-0">
                            <p
                              onClick={OpenFilter}
                              className="col d-flex d-lg-none cate_filter_tigger align-items-center gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24">
                                <g fill="none" fillRule="evenodd">
                                  <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                  <path
                                    fill="currentColor"
                                    d="M3 4.5A1.5 1.5 0 0 1 4.5 3h15A1.5 1.5 0 0 1 21 4.5v2.086A2 2 0 0 1 20.414 8L15 13.414v7.424a1.1 1.1 0 0 1-1.592.984l-3.717-1.858A1.25 1.25 0 0 1 9 18.846v-5.432L3.586 8A2 2 0 0 1 3 6.586z"
                                  />
                                </g>
                              </svg>
                              Filter by
                              <span className="d-flex justify-content-center align-items-center ms-auto">
                                6
                              </span>
                            </p>
                            <select className="col col-lg-6 col-xl cate_filter_sort_sel">
                              <option value="">Most recent</option>
                            </select>
                          </div>

                          <div className="col d-none d-flex gap-2 overflow-auto">
                            <span className="cate_filter_head text-nowrap my-auto">
                              34 ITEMS
                            </span>

                            <span className="cate_filter_tag">
                              Clear all
                              <svg
                                className="ms-1"
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
                            <span className="cate_filter_tag">
                              Switzerland
                              <svg
                                className="ms-1"
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
                            <span className="cate_filter_tag">
                              Instant
                              <svg
                                className="ms-1"
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
                            <span className="cate_filter_tag active">
                              24H
                              <svg
                                className="ms-1"
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
                            <span className="cate_filter_tag">
                              Max: $1000
                              <svg
                                className="ms-1"
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
                          </div>
                        </div>

                        <div className="col game_list_con row justify-content-start g-3 mb-4">
                          {filledCards.map((card, index) => (
                            <>
                              {card !== null ? (
                                <GameItem key={index} />
                              ) : (
                                <EmptyGameItem key={index} />
                              )}
                            </>
                          ))}
                        </div>

                        <div className="col d-flex justify-content-center">
                          <Pagination />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Reviews */}
                  {activeTab == 2 && (
                    <div className=" details_tab_cont">
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

                  {/* Best Sellers */}
                  {activeTab == 3 && (
                    <div className="col d-flex gap-4 position-relative">
                      <CategoryFilter
                        isOpen={isBestSellerFilterOpen}
                        onClose={CloseBestSellerFilter}
                      />

                      <div className="w-100">
                        <div className="col d-xl-flex flex-row-reverse align-items-start align-items-xl-center gap-3 gap-xl-4 mb-4">
                          <div className="col col-xl-3 d-flex gap-2 align-items-center mb-3 mb-xl-0">
                            <p
                              onClick={OpenBestSellerFilter}
                              className="col d-flex d-lg-none cate_filter_tigger align-items-center gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24">
                                <g fill="none" fillRule="evenodd">
                                  <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                  <path
                                    fill="currentColor"
                                    d="M3 4.5A1.5 1.5 0 0 1 4.5 3h15A1.5 1.5 0 0 1 21 4.5v2.086A2 2 0 0 1 20.414 8L15 13.414v7.424a1.1 1.1 0 0 1-1.592.984l-3.717-1.858A1.25 1.25 0 0 1 9 18.846v-5.432L3.586 8A2 2 0 0 1 3 6.586z"
                                  />
                                </g>
                              </svg>
                              Filter by
                              <span className="d-flex justify-content-center align-items-center ms-auto">
                                6
                              </span>
                            </p>
                            <select className="col col-lg-6 col-xl cate_filter_sort_sel">
                              <option value="">Most recent</option>
                            </select>
                          </div>

                          <div className="col d-none d-md-flex gap-2 overflow-x-auto">
                            <span className="cate_filter_head text-nowrap my-auto">
                              34 ITEMS
                            </span>

                            <span className="cate_filter_tag">
                              Clear all
                              <svg
                                className="ms-1"
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
                            <span className="cate_filter_tag">
                              Switzerland
                              <svg
                                className="ms-1"
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
                            <span className="cate_filter_tag">
                              Instant
                              <svg
                                className="ms-1"
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
                            <span className="cate_filter_tag active">
                              24H
                              <svg
                                className="ms-1"
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
                            <span className="cate_filter_tag">
                              Max: $1000
                              <svg
                                className="ms-1"
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
                          </div>
                        </div>

                        <div className="col game_list_con row justify-content-start g-3 mb-4">
                          {filledCards.map((card, index) => (
                            <>
                              {card !== null ? (
                                <GameItem key={index} />
                              ) : (
                                <EmptyGameItem key={index} />
                              )}
                            </>
                          ))}
                        </div>

                        <div className="col d-flex justify-content-center">
                          <Pagination />
                        </div>
                      </div>
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
