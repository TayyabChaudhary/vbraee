/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Pagination from "../componets/utility/Pagination";
import AccountSideBar from "../componets/account/AccountSideBar";
import MainHeader from "../componets/MainHeader";
import { useState } from "react";
import SetRetailPrice from "../componets/modals/OfferModal";
import CustomDropdown from "../componets/utility/CustomDropdown";
import MainFooter from "../componets/MainFooter";

function MyOfferFilter({ isOpen, onClose }) {
  return (
    <>
      <div
        className={
          "col acct_filter_cont flex-column mb-lg-4 " +
          (isOpen ? "d-flex" : "d-none d-lg-flex")
        }>
        <div className="col-auto row g-3 g-lg-2 mb-4 mb-lg-0">
          <p className="col d-flex d-lg-none cate_filter_title align-items-center gap-2 mb-4">
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
            <span
              onClick={onClose}
              className="d-flex justify-content-center align-items-center ms-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"></path>
              </svg>
            </span>
          </p>
          <div className="col-xl-6 col-xxl-7 d-none d-lg-block">
            <div className="col acct_box d-flex ">
              <input
                type="text"
                className="input_box"
                placeholder="Search..."
              />
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M18.319 14.433A8.001 8.001 0 0 0 6.343 3.868a8 8 0 0 0 10.564 11.976l.043.045l4.242 4.243a1 1 0 1 0 1.415-1.415l-4.243-4.242zm-2.076-9.15a6 6 0 1 1-8.485 8.485a6 6 0 0 1 8.485-8.485"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="col-lg-6 col-xl">
            <select className="col-12 acct_sel ">
              <option value="">Platforms</option>
            </select>
          </div>
          <div className="col-lg-6 col-xl">
            <select className="col-12 acct_sel ">
              <option value="">Activation region</option>
            </select>
          </div>

          {/* Cloumn Brake */}
          <div className="w-100 d-none d-xl-block"></div>

          <div className="col-lg-4 col-xl">
            <select className="col-12 acct_sel ">
              <option value="">Buy Button Visibility</option>
            </select>
          </div>
          <div className="col-lg-8 col-xl-7 d-flex flex-wrap gap-3 gap-lg-2">
            <div className="col-12 col-lg">
              <select className="col-12 acct_sel ">
                <option value="">Smart Pricing</option>
              </select>
            </div>
            <div className="col-12 col-lg">
              <select className="col-12 acct_sel ">
                <option value="">Stock Availability</option>
              </select>
            </div>
          </div>

          <div className="col-lg-6 col-xl d-flex gap-2">
            <div className="col acct_box ">
              <input type="text" className="input_box" placeholder="Min: $0" />
            </div>
            <div className="col acct_box active">
              <input
                type="text"
                className="input_box"
                placeholder="Max: $100"
              />
            </div>
          </div>
        </div>

        <div className="col-auto d-flex d-lg-none gap-2 cate_filter_btn_con mt-auto">
          <button type="button" className="col cate_filter_btn dark">
            Clear all
          </button>
          <button type="button" className="col cate_filter_btn">
            Apply filter
          </button>
        </div>
      </div>
    </>
  );
}

export default function MyOffers() {
  const breadCrums = [
    {
      title: "My Offers",
      url: "/account/offers",
    },
  ];

  const breadCrumsList = breadCrums?.map((item, index) => {
    return (
      <Link to={item.url} key={index}>
        <p className="crumb_link">/ {item.title}</p>
      </Link>
    );
  });

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isRetailPriceOpen, setIsRetailPriceOpen] = useState(false);

  function OpenFilter() {
    setIsFilterOpen(true);
  }
  function CloseFilter() {
    setIsFilterOpen(false);
  }
  function OpenRetailModal() {
    setIsRetailPriceOpen(true);
  }
  function CloseRetailModal() {
    setIsRetailPriceOpen(false);
  }

  return (
    <>
      <SetRetailPrice
        isOpen={isRetailPriceOpen}
        onClose={() => CloseRetailModal()}
      />

      <div
        className="d-flex w-100 main_house_con"
        style={{
          background: "none",
        }}>
        <AccountSideBar activeLink={"my-offers"} />

        <div className="col housing_con d-flex flex-column">
          <MainHeader
            showHeader={true}
            isAccount={true}
            breadCrums={breadCrums}
            activeLink={"my-offers"}
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
              <div className="col">
                <div className="col row row-cols-2 row-cols-lg-4 g-2 justify-content-between mb-3">
                  <div className="col">
                    <div className="col acct_off_cont active">
                      <p className="acct_off_num mb-2">33</p>
                      <p className="acct_off_head">Active</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="col acct_off_cont">
                      <p className="acct_off_num mb-2">2</p>
                      <p className="acct_off_head">Watchlist</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="col acct_off_cont">
                      <p className="acct_off_num mb-2">10</p>
                      <p className="acct_off_head">Out of sttock</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="col acct_off_cont">
                      <p className="acct_off_num mb-2">20</p>
                      <p className="acct_off_head">Deactivate</p>
                    </div>
                  </div>
                </div>

                <MyOfferFilter isOpen={isFilterOpen} onClose={CloseFilter} />

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

                  <div className="d-lg-none mb-3">
                    <div className="col acct_box d-flex ">
                      <input
                        type="text"
                        className="input_box"
                        placeholder="Search..."
                      />
                      <span className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M18.319 14.433A8.001 8.001 0 0 0 6.343 3.868a8 8 0 0 0 10.564 11.976l.043.045l4.242 4.243a1 1 0 1 0 1.415-1.415l-4.243-4.242zm-2.076-9.15a6 6 0 1 1-8.485 8.485a6 6 0 0 1 8.485-8.485"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>

                  <div className="col d-flex gap-2 overflow-auto hide_scroll">
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

                <hr className="acct_fil_line mb-0" />
                {/* Mobile Table */}
                <div className="col d-lg-none mb-4">
                  <div className="mob_table_con position-relative mb-3">
                    <div className="col row gx-4 gy-3">
                      <div className="col-12 d-flex gap-3 align-items-center">
                        <img
                          src={"../assets/images/game1.png"}
                          alt=""
                          className="col-auto acct_table_data_img"
                        />
                        <Link to={"/account/offer-details"}>
                          <p className="col mob_table_data">
                            Xbox game pack 20 Games Loaded Xbox Series X | S /
                            Xbox One FULL ACCESS Account Global
                          </p>
                        </Link>
                      </div>

                      <div className="col-3">
                        <label className="mob_table_head">Stock / Sold</label>
                        <p className="mob_table_data">3/0</p>
                      </div>
                      <div className="col-3">
                        <label className="mob_table_head">SALES</label>
                        <p className="mob_table_data">
                          24H: 0 <br /> 7D: 0 <br /> 30D: 0
                        </p>
                      </div>
                      <div className="col-3">
                        <label className="mob_table_head">LOWEST PRICE</label>
                        <p className="mob_table_data bold">€46.98</p>
                      </div>
                      <div className="col-3">
                        <label className="mob_table_head">POS</label>
                        <p className="mob_table_data">1</p>
                      </div>

                      <div className="col-6">
                        <label className="mob_table_head">achievement</label>
                        <div className="col d-flex flex-wrap gap-1">
                          <span className="game_badge type2 me-1 mb-1">
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
                          <span className="game_badge type3 me-1 mb-1">
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
                      </div>
                      <div className="col-6">
                        <label className="mob_table_head">POS</label>
                        <p className="mob_table_data">1</p>
                      </div>

                      <div className="col-6">
                        <label className="mob_table_head">achievement</label>
                        <span className="acct_table_data_tag">Inactive</span>
                      </div>
                      <div className="col-6">
                        <label className="mob_table_head">POS</label>
                        <span className="acct_table_data_tag_con d-inline-flex gap-1 align-items-center">
                          $275
                          <span className="acct_table_data_tag active">
                            $275
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="mob_table_icon_con position-absolute">
                      <div className="col-auto position-relative">
                        <CustomDropdown
                          trigger={() => (
                            <span className="mob_table_data_icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24">
                                <path
                                  fill="currentColor"
                                  d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m0 14c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m0-7c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2"
                                />
                              </svg>
                            </span>
                          )}
                          content={
                            <div className="acct_table_drop_cont">
                              <Link>
                                <p className="acct_table_drop_link">Delete</p>
                              </Link>
                              <Link>
                                <p className="acct_table_drop_link">
                                  To Archive
                                </p>
                              </Link>
                              <Link>
                                <p className="acct_table_drop_link">Other</p>
                              </Link>
                              <p
                                className="acct_table_drop_link"
                                role="button"
                                onClick={() => OpenRetailModal()}>
                                Set Retail Price
                              </p>
                            </div>
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mob_table_con position-relative mb-3">
                    <div className="col row gx-4 gy-3">
                      <div className="col-12 d-flex gap-3 align-items-center">
                        <img
                          src={"../assets/images/game1.png"}
                          alt=""
                          className="col-auto acct_table_data_img"
                        />
                        <Link to={"/account/offer-details"}>
                          <p className="col mob_table_data">
                            Xbox game pack 20 Games Loaded Xbox Series X | S /
                            Xbox One FULL ACCESS Account Global
                          </p>
                        </Link>
                      </div>

                      <div className="col-3">
                        <label className="mob_table_head">Stock / Sold</label>
                        <p className="mob_table_data">3/0</p>
                      </div>
                      <div className="col-3">
                        <label className="mob_table_head">SALES</label>
                        <p className="mob_table_data">
                          24H: 0 <br /> 7D: 0 <br /> 30D: 0
                        </p>
                      </div>
                      <div className="col-3">
                        <label className="mob_table_head">LOWEST PRICE</label>
                        <p className="mob_table_data bold">€46.98</p>
                      </div>
                      <div className="col-3">
                        <label className="mob_table_head">POS</label>
                        <p className="mob_table_data">1</p>
                      </div>

                      <div className="col-6">
                        <label className="mob_table_head">achievement</label>
                        <div className="col d-flex flex-wrap gap-1">
                          <span className="game_badge type2 me-1 mb-1">
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
                          <span className="game_badge type3 me-1 mb-1">
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
                      </div>
                      <div className="col-6">
                        <label className="mob_table_head">POS</label>
                        <p className="mob_table_data">1</p>
                      </div>

                      <div className="col-6">
                        <label className="mob_table_head">achievement</label>
                        <span className="acct_table_data_tag">Inactive</span>
                      </div>
                      <div className="col-6">
                        <label className="mob_table_head">POS</label>
                        <span className="acct_table_data_tag_con d-inline-flex gap-1 align-items-center">
                          $275
                          <span className="acct_table_data_tag active">
                            $275
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="mob_table_icon_con position-absolute">
                      <div className="col-auto position-relative">
                        <CustomDropdown
                          trigger={() => (
                            <span className="mob_table_data_icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24">
                                <path
                                  fill="currentColor"
                                  d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m0 14c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m0-7c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2"
                                />
                              </svg>
                            </span>
                          )}
                          content={
                            <div className="acct_table_drop_cont">
                              <Link>
                                <p className="acct_table_drop_link">Delete</p>
                              </Link>
                              <Link>
                                <p className="acct_table_drop_link">
                                  To Archive
                                </p>
                              </Link>
                              <Link>
                                <p className="acct_table_drop_link">Other</p>
                              </Link>
                              <p
                                className="acct_table_drop_link"
                                role="button"
                                onClick={() => OpenRetailModal()}>
                                Set Retail Price
                              </p>
                            </div>
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop Table */}
                <div className="table-responsive d-none d-lg-block">
                  <table className="w-100 table table-borderless acct_table">
                    <thead>
                      <tr>
                        <th className="acct_table_head"></th>
                        <th className="acct_table_head">Name</th>
                        <th className="acct_table_head d-flex align-items-center gap-1">
                          Stock / Sold
                          <span className="icon">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M3 5V6.66667H7.66667V5H3ZM3 9.16667V10.8333H12.3333V9.16667H3ZM3 13.3333V15H17V13.3333H3Z" />
                            </svg>
                          </span>
                        </th>
                        <th className="acct_table_head">Sales</th>
                        <th className="acct_table_head">Lowest Price</th>
                        <th className="acct_table_head">Pos</th>
                        <th className="acct_table_head">Achievement</th>
                        <th className="acct_table_head">Sales Booster</th>
                        <th className="acct_table_head">IWTR / Price</th>
                        <th className="acct_table_head"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="acct_table_row mb-2">
                        <td className="acct_table_data">
                          <img
                            src={"../assets/images/game1.png"}
                            alt=""
                            className="acct_table_data_img"
                          />
                        </td>
                        <td className="acct_table_data ">
                          <Link
                            to={"/account/offer-details"}
                            className="acct_table_data">
                            Xbox game pack 20 Games Loaded Xbox Series X | S /
                            Xbox One FULL ACCESS Account Global
                          </Link>
                        </td>
                        <td className="acct_table_data">3 / 0</td>
                        <td className="acct_table_data text-end">
                          24H: 0 <br /> 7D: 0 <br /> 30D: 0
                        </td>
                        <td className="acct_table_data">€46.98</td>
                        <td className="acct_table_data">1</td>
                        <td className="acct_table_data">
                          <span className="game_badge type2 me-1 mb-1">
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
                        </td>
                        <td className="acct_table_data">
                          <span className="acct_table_data_tag">Inactive</span>
                        </td>
                        <td className="acct_table_data">
                          <span className="acct_table_data_tag_con d-inline-flex gap-1 align-items-center">
                            $275
                            <span className="acct_table_data_tag active">
                              $275
                            </span>
                          </span>
                        </td>
                        <td className="acct_table_data position-relative">
                          <CustomDropdown
                            trigger={() => (
                              <span className="acct_table_data_icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 24 24">
                                  <path
                                    fill="currentColor"
                                    d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m0 14c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m0-7c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2"
                                  />
                                </svg>
                              </span>
                            )}
                            content={
                              <div className="acct_table_drop_cont">
                                <Link>
                                  <p className="acct_table_drop_link">Delete</p>
                                </Link>
                                <Link>
                                  <p className="acct_table_drop_link">
                                    To Archive
                                  </p>
                                </Link>
                                <Link>
                                  <p className="acct_table_drop_link">Other</p>
                                </Link>
                                <p
                                  className="acct_table_drop_link"
                                  role="button"
                                  onClick={() => OpenRetailModal()}>
                                  Set Retail Price
                                </p>
                              </div>
                            }
                          />
                        </td>
                      </tr>
                      <tr className="acct_table_row lin_bg mb-2">
                        <td className="acct_table_data">
                          <img
                            src={"../assets/images/game1.png"}
                            alt=""
                            className="acct_table_data_img"
                          />
                        </td>
                        <td className="acct_table_data">
                          <Link
                            to={"/account/offer-details"}
                            className="acct_table_data">
                            Xbox game pack 20 Games Loaded Xbox Series X | S /
                            Xbox One FULL ACCESS Account Global
                          </Link>
                        </td>
                        <td className="acct_table_data">3 / 0</td>
                        <td className="acct_table_data text-end">
                          24H: 0 <br /> 7D: 0 <br /> 30D: 0
                        </td>
                        <td className="acct_table_data">€46.98</td>
                        <td className="acct_table_data">1</td>
                        <td className="acct_table_data">
                          <span className="game_badge type2 me-1 mb-1">
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
                        </td>
                        <td className="acct_table_data">
                          <span className="acct_table_data_tag">Inactive</span>
                        </td>
                        <td className="acct_table_data">
                          <span className="acct_table_data_tag_con d-inline-flex gap-1 align-items-center">
                            $275
                            <span className="acct_table_data_tag active">
                              $275
                            </span>
                          </span>
                        </td>
                        <td className="acct_table_data position-relative">
                          <CustomDropdown
                            trigger={() => (
                              <span className="acct_table_data_icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 24 24">
                                  <path
                                    fill="currentColor"
                                    d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m0 14c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m0-7c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2"
                                  />
                                </svg>
                              </span>
                            )}
                            content={
                              <div className="acct_table_drop_cont">
                                <Link>
                                  <p className="acct_table_drop_link">Delete</p>
                                </Link>
                                <Link>
                                  <p className="acct_table_drop_link">
                                    To Archive
                                  </p>
                                </Link>
                                <Link>
                                  <p className="acct_table_drop_link">Other</p>
                                </Link>
                              </div>
                            }
                          />
                        </td>
                      </tr>
                      <tr className="acct_table_row mb-2 fill_bg">
                        <td className="acct_table_data">
                          <img
                            src={"../assets/images/game1.png"}
                            alt=""
                            className="acct_table_data_img"
                          />
                        </td>
                        <td className="acct_table_data">
                          <Link
                            to={"/account/offer-details"}
                            className="acct_table_data">
                            Xbox game pack 20 Games Loaded Xbox Series X | S /
                            Xbox One FULL ACCESS Account Global
                          </Link>
                        </td>
                        <td className="acct_table_data">3 / 0</td>
                        <td className="acct_table_data text-end">
                          24H: 0 <br /> 7D: 0 <br /> 30D: 0
                        </td>
                        <td className="acct_table_data">€46.98</td>
                        <td className="acct_table_data">1</td>
                        <td className="acct_table_data">
                          <span className="game_badge type2 me-1 mb-1">
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
                        </td>
                        <td className="acct_table_data">
                          <span className="acct_table_data_tag">Inactive</span>
                        </td>
                        <td className="acct_table_data">
                          <span className="acct_table_data_tag_con d-inline-flex gap-1 align-items-center">
                            $275
                            <span className="acct_table_data_tag active">
                              $275
                            </span>
                          </span>
                        </td>
                        <td className="acct_table_data position-relative">
                          <CustomDropdown
                            trigger={() => (
                              <span className="acct_table_data_icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 24 24">
                                  <path
                                    fill="currentColor"
                                    d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m0 14c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m0-7c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2"
                                  />
                                </svg>
                              </span>
                            )}
                            content={
                              <div className="acct_table_drop_cont">
                                <Link>
                                  <p className="acct_table_drop_link">Delete</p>
                                </Link>
                                <Link>
                                  <p className="acct_table_drop_link">
                                    To Archive
                                  </p>
                                </Link>
                                <Link>
                                  <p className="acct_table_drop_link">Other</p>
                                </Link>
                              </div>
                            }
                          />
                        </td>
                      </tr>
                      <tr className="acct_table_row mb-2">
                        <td className="acct_table_data">
                          <img
                            src={"../assets/images/game1.png"}
                            alt=""
                            className="acct_table_data_img"
                          />
                        </td>
                        <td className="acct_table_data">
                          <Link
                            to={"/account/offer-details"}
                            className="acct_table_data">
                            Xbox game pack 20 Games Loaded Xbox Series X | S /
                            Xbox One FULL ACCESS Account Global
                          </Link>
                        </td>
                        <td className="acct_table_data">3 / 0</td>
                        <td className="acct_table_data text-end">
                          24H: 0 <br /> 7D: 0 <br /> 30D: 0
                        </td>
                        <td className="acct_table_data">€46.98</td>
                        <td className="acct_table_data">1</td>
                        <td className="acct_table_data">
                          <span className="game_badge type2 me-1 mb-1">
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
                        </td>
                        <td className="acct_table_data">
                          <span className="acct_table_data_tag">Inactive</span>
                        </td>
                        <td className="acct_table_data">
                          <span className="acct_table_data_tag_con d-inline-flex gap-1 align-items-center">
                            $275
                            <span className="acct_table_data_tag active">
                              $275
                            </span>
                          </span>
                        </td>
                        <td className="acct_table_data position-relative">
                          <CustomDropdown
                            trigger={() => (
                              <span className="acct_table_data_icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 24 24">
                                  <path
                                    fill="currentColor"
                                    d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m0 14c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m0-7c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2"
                                  />
                                </svg>
                              </span>
                            )}
                            content={
                              <div className="acct_table_drop_cont">
                                <Link>
                                  <p className="acct_table_drop_link">Delete</p>
                                </Link>
                                <Link>
                                  <p className="acct_table_drop_link">
                                    To Archive
                                  </p>
                                </Link>
                                <Link>
                                  <p className="acct_table_drop_link">Other</p>
                                </Link>
                              </div>
                            }
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="col d-flex justify-content-center">
                  <Pagination />
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
