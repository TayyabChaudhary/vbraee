/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Pagination from "../componets/utility/Pagination";
import AccountSideBar from "../componets/account/AccountSideBar";
import MainHeader from "../componets/MainHeader";
import { useState } from "react";
import MainFooter from "../componets/MainFooter";

function NewOfferFilter({ isOpen, onClose }) {
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
          <div className="col-xl-5 col-xxl-4 d-none d-lg-block">
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

          {/* Cloumn Brake */}
          <div className="w-100 d-none d-xl-block"></div>

          <div className="col-12 col-lg-6 col-xl">
            <select className="col-12 acct_sel">
              <option value="">Operating System</option>
            </select>
          </div>
          <div className="col-12 col-lg-6 col-xl">
            <select className="col-12 acct_sel">
              <option value="">Genres</option>
            </select>
          </div>
          <div className="col-12 col-lg-6 col-xl">
            <select className="col-12 acct_sel">
              <option value="">Product languages</option>
            </select>
          </div>
          <div className="col-12 col-lg-6 col-xl">
            <select className="col-12 acct_sel">
              <option value="">Product type</option>
            </select>
          </div>
          <div className="col-12 col-lg-6 col-xl">
            <select className="col-12 acct_sel">
              <option value="">Delivery</option>
            </select>
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

export default function NewOffers() {
  const breadCrums = [
    {
      title: "New Offers",
      url: "/account/new-offers",
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

  function OpenFilter() {
    setIsFilterOpen(true);
  }
  function CloseFilter() {
    setIsFilterOpen(false);
  }

  return (
    <>
      <div
        className="d-flex w-100 main_house_con"
        style={{
          background: "none",
        }}>
        <AccountSideBar activeLink={"new-offers"} />

        <div className="col housing_con d-flex flex-column">
          <MainHeader
            showHeader={true}
            isAccount={true}
            breadCrums={breadCrums}
            activeLink={"new-offers"}
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
                <div className="col d-flex gap-3 justify-content-between align-items-center mb-3">
                  <div className="col d-flex gap-2">
                    <p className="dash_tab_link active">All Offers</p>
                    <Link to={"/account/request-product"}>
                      <p className="dash_tab_link">Request Product</p>
                    </Link>
                  </div>
                </div>

                <NewOfferFilter isOpen={isFilterOpen} onClose={CloseFilter} />

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

                  <div className="col-12 d-lg-none mb-3">
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

                      <div className="col-6">
                        <label className="mob_table_head">Platform</label>
                        <span className="mob_table_data_icon active">
                          <svg
                            className="me-3"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M8.984 2.596v17.547l3.915 1.261V6.688c0-.69.304-1.151.794-.991c.636.18.76.814.76 1.505v5.875c2.441 1.193 4.362-.002 4.362-3.152c0-3.237-1.126-4.675-4.438-5.827c-1.307-.448-3.728-1.186-5.39-1.502zm4.656 16.241l6.296-2.275c.715-.258.826-.625.246-.818c-.586-.192-1.637-.139-2.357.123l-4.205 1.5V14.98l.24-.085s1.201-.42 2.913-.615c1.696-.18 3.785.03 5.437.661c1.848.601 2.04 1.472 1.576 2.072c-.465.6-1.622 1.036-1.622 1.036l-8.544 3.107V18.86zM1.807 18.6c-1.9-.545-2.214-1.668-1.352-2.32c.801-.586 2.16-1.052 2.16-1.052l5.615-2.013v2.313L4.205 17c-.705.271-.825.632-.239.826c.586.195 1.637.15 2.343-.12L8.247 17v2.074c-.12.03-.256.044-.39.073c-1.939.331-3.996.196-6.038-.479z"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="col-6">
                        <label className="mob_table_head">
                          Activation region
                        </label>
                        <span className="mob_table_data_icon active">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M2.05 13h5.477a17.9 17.9 0 0 0 2.925 8.88A10.005 10.005 0 0 1 2.049 13m0-2a10.005 10.005 0 0 1 8.402-8.881a17.9 17.9 0 0 0-2.925 8.88zm19.9 0h-5.477a17.9 17.9 0 0 0-2.925-8.881a10.005 10.005 0 0 1 8.403 8.88m0 2a10.005 10.005 0 0 1-8.402 8.88A17.9 17.9 0 0 0 16.473 13zM9.53 13h4.94A15.9 15.9 0 0 1 12 20.592A15.9 15.9 0 0 1 9.53 13m0-2A15.9 15.9 0 0 1 12 3.408A15.9 15.9 0 0 1 14.47 11z"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="col-6">
                        <label className="mob_table_head">Product type</label>
                        <span className="mob_table_data_icon active">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <g fill="none">
                              <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                              <path
                                fill="currentColor"
                                d="M10.438 4.368a6.5 6.5 0 1 1 2.252 10.66l-.269-.11l-.02-.004h-.61v1.578a1.25 1.25 0 0 1-1.122 1.244l-.128.006H8.963v1.578a1.25 1.25 0 0 1-1.122 1.244l-.128.006H3.73a1.01 1.01 0 0 1-1.004-.9l-.006-.11v-2.61a1.5 1.5 0 0 1 .34-.951l.1-.11l5.5-5.501l.01-.037a.3.3 0 0 0-.004-.081a6.5 6.5 0 0 1 1.772-5.902m4.242 2.828a1.5 1.5 0 1 0 2.122 2.121a1.5 1.5 0 0 0-2.122-2.12Z"
                              />
                            </g>
                          </svg>
                        </span>
                      </div>
                      <div className="col-6">
                        <label className="mob_table_head">Delivery</label>
                        <p className="mob_table_data">24</p>
                      </div>

                      <div className="col-6">
                        <label className="mob_table_head">
                          Offers starting{" "}
                        </label>
                        <p className="mob_table_data bold">€46.98</p>
                      </div>
                      <div className="col-6">
                        <label className="mob_table_head"></label>
                        <Link to={"/account/offer-details"} className="col-12">
                          <button
                            type="button"
                            className="col-12 acct_table_data_btn">
                            Select
                          </button>
                        </Link>
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

                      <div className="col-6">
                        <label className="mob_table_head">Platform</label>
                        <span className="mob_table_data_icon active">
                          <svg
                            className="me-3"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M8.984 2.596v17.547l3.915 1.261V6.688c0-.69.304-1.151.794-.991c.636.18.76.814.76 1.505v5.875c2.441 1.193 4.362-.002 4.362-3.152c0-3.237-1.126-4.675-4.438-5.827c-1.307-.448-3.728-1.186-5.39-1.502zm4.656 16.241l6.296-2.275c.715-.258.826-.625.246-.818c-.586-.192-1.637-.139-2.357.123l-4.205 1.5V14.98l.24-.085s1.201-.42 2.913-.615c1.696-.18 3.785.03 5.437.661c1.848.601 2.04 1.472 1.576 2.072c-.465.6-1.622 1.036-1.622 1.036l-8.544 3.107V18.86zM1.807 18.6c-1.9-.545-2.214-1.668-1.352-2.32c.801-.586 2.16-1.052 2.16-1.052l5.615-2.013v2.313L4.205 17c-.705.271-.825.632-.239.826c.586.195 1.637.15 2.343-.12L8.247 17v2.074c-.12.03-.256.044-.39.073c-1.939.331-3.996.196-6.038-.479z"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="col-6">
                        <label className="mob_table_head">
                          Activation region
                        </label>
                        <span className="mob_table_data_icon active">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M2.05 13h5.477a17.9 17.9 0 0 0 2.925 8.88A10.005 10.005 0 0 1 2.049 13m0-2a10.005 10.005 0 0 1 8.402-8.881a17.9 17.9 0 0 0-2.925 8.88zm19.9 0h-5.477a17.9 17.9 0 0 0-2.925-8.881a10.005 10.005 0 0 1 8.403 8.88m0 2a10.005 10.005 0 0 1-8.402 8.88A17.9 17.9 0 0 0 16.473 13zM9.53 13h4.94A15.9 15.9 0 0 1 12 20.592A15.9 15.9 0 0 1 9.53 13m0-2A15.9 15.9 0 0 1 12 3.408A15.9 15.9 0 0 1 14.47 11z"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="col-6">
                        <label className="mob_table_head">Product type</label>
                        <span className="mob_table_data_icon active">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <g fill="none">
                              <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                              <path
                                fill="currentColor"
                                d="M10.438 4.368a6.5 6.5 0 1 1 2.252 10.66l-.269-.11l-.02-.004h-.61v1.578a1.25 1.25 0 0 1-1.122 1.244l-.128.006H8.963v1.578a1.25 1.25 0 0 1-1.122 1.244l-.128.006H3.73a1.01 1.01 0 0 1-1.004-.9l-.006-.11v-2.61a1.5 1.5 0 0 1 .34-.951l.1-.11l5.5-5.501l.01-.037a.3.3 0 0 0-.004-.081a6.5 6.5 0 0 1 1.772-5.902m4.242 2.828a1.5 1.5 0 1 0 2.122 2.121a1.5 1.5 0 0 0-2.122-2.12Z"
                              />
                            </g>
                          </svg>
                        </span>
                      </div>
                      <div className="col-6">
                        <label className="mob_table_head">Delivery</label>
                        <p className="mob_table_data">24</p>
                      </div>

                      <div className="col-6">
                        <label className="mob_table_head">
                          Offers starting{" "}
                        </label>
                        <p className="mob_table_data bold">€46.98</p>
                      </div>
                      <div className="col-6">
                        <label className="mob_table_head"></label>
                        <Link to={"/account/offer-details"} className="col-12">
                          <button
                            type="button"
                            className="col-12 acct_table_data_btn">
                            Select
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop Table */}
                <div className="table-responsive d-none d-lg-block">
                  <table className="table table-borderless acct_table mb-3">
                    <thead>
                      <tr>
                        <th className="acct_table_head"></th>
                        <th className="acct_table_head">Name</th>
                        <th className="acct_table_head d-flex align-items-center gap-1">
                          PlatForm
                        </th>
                        <th className="acct_table_head">Activation Region</th>
                        <th className="acct_table_head">Product Type</th>
                        <th className="acct_table_head">Delivery</th>
                        <th className="acct_table_head">Offers Starting</th>
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
                        <td className="acct_table_data">
                          <Link
                            to={"/account/offer-details"}
                            className="acct_table_data">
                            Xbox game pack 20 Games Loaded Xbox Series X | S /
                            Xbox One FULL ACCESS Account Global
                          </Link>
                        </td>
                        <td className="acct_table_data">
                          <span className="acct_table_data_icon">
                            <svg
                              className="me-3"
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M8.984 2.596v17.547l3.915 1.261V6.688c0-.69.304-1.151.794-.991c.636.18.76.814.76 1.505v5.875c2.441 1.193 4.362-.002 4.362-3.152c0-3.237-1.126-4.675-4.438-5.827c-1.307-.448-3.728-1.186-5.39-1.502zm4.656 16.241l6.296-2.275c.715-.258.826-.625.246-.818c-.586-.192-1.637-.139-2.357.123l-4.205 1.5V14.98l.24-.085s1.201-.42 2.913-.615c1.696-.18 3.785.03 5.437.661c1.848.601 2.04 1.472 1.576 2.072c-.465.6-1.622 1.036-1.622 1.036l-8.544 3.107V18.86zM1.807 18.6c-1.9-.545-2.214-1.668-1.352-2.32c.801-.586 2.16-1.052 2.16-1.052l5.615-2.013v2.313L4.205 17c-.705.271-.825.632-.239.826c.586.195 1.637.15 2.343-.12L8.247 17v2.074c-.12.03-.256.044-.39.073c-1.939.331-3.996.196-6.038-.479z"
                              />
                            </svg>
                          </span>
                        </td>
                        <td className="acct_table_data">
                          <span className="acct_table_data_icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M2.05 13h5.477a17.9 17.9 0 0 0 2.925 8.88A10.005 10.005 0 0 1 2.049 13m0-2a10.005 10.005 0 0 1 8.402-8.881a17.9 17.9 0 0 0-2.925 8.88zm19.9 0h-5.477a17.9 17.9 0 0 0-2.925-8.881a10.005 10.005 0 0 1 8.403 8.88m0 2a10.005 10.005 0 0 1-8.402 8.88A17.9 17.9 0 0 0 16.473 13zM9.53 13h4.94A15.9 15.9 0 0 1 12 20.592A15.9 15.9 0 0 1 9.53 13m0-2A15.9 15.9 0 0 1 12 3.408A15.9 15.9 0 0 1 14.47 11z"
                              />
                            </svg>
                          </span>
                        </td>
                        <td className="acct_table_data">
                          <span className="acct_table_data_icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24">
                              <g fill="none">
                                <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                <path
                                  fill="currentColor"
                                  d="M10.438 4.368a6.5 6.5 0 1 1 2.252 10.66l-.269-.11l-.02-.004h-.61v1.578a1.25 1.25 0 0 1-1.122 1.244l-.128.006H8.963v1.578a1.25 1.25 0 0 1-1.122 1.244l-.128.006H3.73a1.01 1.01 0 0 1-1.004-.9l-.006-.11v-2.61a1.5 1.5 0 0 1 .34-.951l.1-.11l5.5-5.501l.01-.037a.3.3 0 0 0-.004-.081a6.5 6.5 0 0 1 1.772-5.902m4.242 2.828a1.5 1.5 0 1 0 2.122 2.121a1.5 1.5 0 0 0-2.122-2.12Z"
                                />
                              </g>
                            </svg>
                          </span>
                        </td>
                        <td className="acct_table_data">24H</td>
                        <td className="acct_table_data">$46.98</td>
                        <td className="acct_table_data">
                          <Link to={"/account/offer-details"}>
                            <button
                              type="button"
                              className="acct_table_data_btn">
                              Select
                            </button>
                          </Link>
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
