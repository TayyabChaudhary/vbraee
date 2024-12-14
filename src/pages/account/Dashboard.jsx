import { Link } from "react-router-dom";
import Pagination from "../componets/utility/Pagination";
import AccountSideBar from "../componets/account/AccountSideBar";
import MainHeader from "../componets/MainHeader";
import { useTabs } from "../../services/CustomTabs";
import CustomDropdown from "../componets/utility/CustomDropdown";
import DashboardLevel from "../componets/modals/DashboardLevel";
import { useState } from "react";
import MainFooter from "../componets/MainFooter";
import BuyerCustomCoupon from "../componets/modals/BuyerCustomCoupon";

export default function Dashboard() {
  const breadCrums = [
    {
      title: "Balance",
      url: "/account/balance",
    },
  ];

  const { activeTab, ChangeTab } = useTabs(1);
  const [openLevel, setOpenLevel] = useState(false);
  const [isCustomCouponOpen, setIsCustomCouponOpen] = useState(false);


  function OpenLevelModal() {
    setOpenLevel(true);
    console.log("sd");
  }
  function CloseLevelModal() {
    setOpenLevel(false);
  }

  function OpenCouponModal() {
    setIsCustomCouponOpen(true);
  }
  function CloseCouponModal() {
    setIsCustomCouponOpen(false);
  }
  return (
    <>
      <DashboardLevel isOpen={openLevel} onClose={() => CloseLevelModal()} />
      <BuyerCustomCoupon
        isOpen={isCustomCouponOpen}
        onClose={() => CloseCouponModal()}
      />

      <div
        className="d-flex w-100 main_house_con"
        style={{
          background: "none",
        }}>
        <AccountSideBar activeLink={"dashboard"} />

        <div className="col housing_con d-flex flex-column">
          <MainHeader
            showHeader={false}
            isAccount={true}
            breadCrums={breadCrums}
            activeLink={"dashboard"}
          />

          <div id="scrollable-section" className="col acct_cont_con">
            <div className="acct_cont">
              <div
                className="acct_score_cont d-flex flex-wrap gap-4 gap-xl-5 justify-content-between align-items-center mb-3"
                style={{
                  backgroundImage: "url(./assets/images/acct_score_bg.png)",
                }}>
                <div className="col-12 col-md col-xl-auto d-flex gap-3">
                  <Link to={"/shop-details"}>
                    <div className="shop_banner_profile position-relative">
                      <img
                        src={"../assets/images/icons/verify.svg"}
                        alt=""
                        className="shop_banner_profile_check position-absolute"
                      />
                      <img
                        src={"../assets/images/user.png"}
                        alt=""
                        className="shop_banner_profile_img"
                      />
                    </div>
                  </Link>
                  <div className="col">
                    <div className="d-flex gap-3 align-items-center mb-1">
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
                    <Link to={"/shop-details"}>
                      <p className="shop_banner_profile_name">
                        <span className="text-white">Freaky</span>
                      </p>
                    </Link>
                    <p className="shop_banner_profile_time">since May 2023</p>
                  </div>
                </div>

                <div className="col-12 col-md">
                  <div className="d-flex justify-content-between mb-1">
                    <p className="acct_progress_num active">150</p>
                    <p className="acct_progress_num">300</p>
                  </div>
                  <div className="position-relative">
                    <div
                      className="col acct_progress_con"
                      style={{
                        backgroundImage:
                          "url(./assets/images/progress_stripe.png)",
                      }}>
                      <div
                        className="acct_progress d-flex justify-content-center align-items-center"
                        style={{ width: "40%" }}>
                        <p className="acct_progress_text">Sales</p>
                      </div>
                    </div>
                    <span
                      className="acct_progress_tip position-absolute position-relative translate-middle-x"
                      style={{
                        left: "40%",
                      }}>
                      243
                      <span className="angle position-absolute"></span>
                    </span>
                  </div>
                  <div className="d-flex justify-content-between my-2">
                    <div className="acct_progress_dot active"></div>
                    <div className="acct_progress_dot active"></div>
                    <div className="acct_progress_dot active"></div>
                    <div className="acct_progress_dot active"></div>
                    <div className="acct_progress_dot active"></div>
                    <div className="acct_progress_dot"></div>
                    <div className="acct_progress_dot"></div>
                    <div className="acct_progress_dot"></div>
                    <div className="acct_progress_dot"></div>
                    <div className="acct_progress_dot"></div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p
                      className="acct_progress_num active"
                      role="button"
                      onClick={() => OpenLevelModal()}>
                      <u>3 LVL</u>
                    </p>
                    <p
                      className="acct_progress_num"
                      role="button"
                      onClick={() => OpenLevelModal()}>
                      <u>4 LVL</u>
                    </p>
                  </div>
                </div>

                <div className="col-12 col-xl-auto row justify-content-between g-4 g-xl-5">
                  <div className="col-6 col-md-auto">
                    <p className="shop_banner_head">Orders</p>
                    <p className="shop_banner_num">1333</p>
                  </div>
                  <div className="col-6 col-md-auto">
                    <p className="shop_banner_head">Reviews</p>
                    <p className="shop_banner_num">608</p>
                  </div>
                  <div className="col-6 col-md-auto">
                    <p className="shop_banner_head">Positive Feedback</p>
                    <p className="shop_banner_num d-flex align-items-center">
                      97% <span className="game_badge type1 ms-2">Superb!</span>{" "}
                    </p>
                  </div>
                  <div className="col-6 col-md-auto">
                    <p className="shop_banner_head">Followers</p>
                    <div className="shop_banner_num d-flex align-items-center">
                      5
                      <div className="d-flex ms-4">
                        <img
                          src={"../assets/images/user.png"}
                          alt=""
                          className="shop_banner_num_img"
                        />
                        <img
                          src={"../assets/images/user.png"}
                          alt=""
                          className="shop_banner_num_img"
                        />
                        <img
                          src={"../assets/images/user.png"}
                          alt=""
                          className="shop_banner_num_img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col d-flex row row-cols-2 row-cols-xl-4 justify-content-between g-2 mb-3">
                <div className="col">
                  <div
                    className="col dash_cont d-flex flex-column justify-content-end position-relative"
                    style={{
                      backgroundImage: "url(./assets/images/dash_bg1.png)",
                    }}>
                    <span className="dash_cont_icon position-absolute">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.9841 3.11697C9.58188 3.29483 9.39977 3.5169 9.18222 4.09468L9.01285 4.54452L9.11742 4.66158C9.17493 4.72598 10.5508 6.29302 12.1749 8.14393L15.1279 11.5092L15.5182 11.4523C16.0462 11.3753 16.2847 11.2916 16.5216 11.1003C16.9734 10.7354 17.1248 10.1338 16.8911 9.63221C16.8059 9.44929 16.7316 9.36264 13.1433 5.2647C11.4521 3.3332 11.4351 3.31508 11.1737 3.17102C10.797 2.96337 10.3749 2.94416 9.9841 3.11697ZM8.0572 6.43199C6.94339 8.32377 5.44353 10.0589 3.64346 11.5382C3.34055 11.7871 3.24117 11.8911 3.16164 12.0424C2.96549 12.4157 2.94737 12.8026 3.10997 13.1438C3.25388 13.4458 5.00395 15.4344 5.26999 15.5982C5.53519 15.7616 5.88876 15.8229 6.2104 15.7615C6.51871 15.7026 6.67317 15.6197 7.09505 15.2864C8.91435 13.8491 11.1357 12.677 13.4256 11.946L13.8699 11.8041L11.218 8.78265C9.75951 7.12084 8.54854 5.74752 8.52702 5.73086C8.50097 5.71064 8.34388 5.94509 8.0572 6.43199ZM11.2406 13.5922C10.7104 13.8543 10.2188 14.1112 9.89335 14.2964C9.3294 14.6173 8.7163 15.0123 8.7262 15.0485C8.73892 15.095 10.0327 16.5641 10.1563 16.6723C10.3205 16.8161 10.5737 16.9347 10.813 16.9798C10.9803 17.0114 11.0927 17.0069 11.3185 16.9597C11.6443 16.8916 11.8307 16.7865 12.2027 16.4612C12.6631 16.0585 12.8095 15.4469 12.5627 14.9572C12.4648 14.7631 11.3955 13.5264 11.3426 13.5462C11.3225 13.5537 11.2765 13.5744 11.2406 13.5922Z"
                          fill="#E2435F"
                        />
                      </svg>
                    </span>
                    <p className="dash_cont_num mb-2">$359</p>
                    <p className="dash_cont_head">Revenue</p>
                  </div>
                </div>
                <div className="col">
                  <div
                    className="col dash_cont d-flex flex-column justify-content-end position-relative"
                    style={{
                      backgroundImage: "url(./assets/images/dash_bg2.png)",
                    }}>
                    <span className="dash_cont_icon position-absolute">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none">
                        <g clipPath="url(#clip0_2821_18627)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.55 2C10.4348 1.99977 11.2953 2.28573 12.0001 2.81416C12.7048 3.34259 13.2149 4.08442 13.4524 4.92622L13.4992 5.10844L15.1822 4.69333C15.3052 4.66309 15.4333 4.65886 15.5581 4.68091C15.6829 4.70296 15.8015 4.7508 15.9063 4.82129C16.0111 4.89178 16.0996 4.98334 16.166 5.08996C16.2325 5.19658 16.2754 5.31587 16.2919 5.44L16.3 5.55556V7.16444C16.8076 7.6447 17.2235 8.21139 17.5276 8.83733L17.6518 9.11111H18.1C18.3204 9.11114 18.5332 9.19107 18.6979 9.33575C18.8627 9.48042 18.9679 9.67978 18.9937 9.896L19 10V12.6667C19 12.813 18.9635 12.957 18.8936 13.086C18.8237 13.215 18.7227 13.325 18.5995 13.4062L18.5023 13.4613L17.4511 13.9813C17.0215 14.8041 16.398 15.5129 15.6331 16.048L15.4 16.2027V17.1111C15.4 17.3288 15.319 17.539 15.1726 17.7017C15.0261 17.8644 14.8242 17.9683 14.6053 17.9938L14.5 18H12.8C12.5796 18 12.3668 17.92 12.2021 17.7754C12.0373 17.6307 11.9321 16.4313 11.9063 16.2151L11.9 16.1111H9C8.99997 16.3288 8.91904 17.539 8.77256 17.7017C8.62607 17.8644 8.42423 17.9683 8.2053 17.9938L8.1 18H6.4C6.17956 18 5.9668 17.92 5.80206 17.7754C5.63733 17.6307 5.53209 17.4313 5.5063 17.2151L5.5 17.1111V16.2027C4.84956 15.7924 4.28774 15.2591 3.8469 14.6335C3.40606 14.0079 3.09492 13.3023 2.9314 12.5573C2.40056 12.4016 1.93106 12.0883 1.58654 11.6601C1.24201 11.2319 1.03913 10.7095 1.0054 10.1636L1 10V9.55556C1.00025 9.329 1.08809 9.11108 1.24556 8.94634C1.40304 8.7816 1.61826 8.68246 1.84726 8.66918C2.07625 8.6559 2.30174 8.72949 2.47765 8.8749C2.65356 9.02032 2.76661 9.22658 2.7937 9.45156L2.8 9.55556V10C2.8012 10.1327 2.8282 10.2557 2.881 10.3689C3.01815 9.56856 3.32451 8.80576 3.78011 8.13019C4.23571 7.45461 4.83032 6.88143 5.5252 6.448C5.46134 5.88843 5.51783 5.32185 5.69097 4.78533C5.8641 4.24881 6.14999 3.75444 6.52991 3.33456C6.90984 2.91469 7.37524 2.57877 7.89568 2.3488C8.41611 2.11882 8.97985 1.99996 9.55 2ZM13.6 9.11111C13.3613 9.11111 13.1324 9.20476 12.9636 9.37146C12.7948 9.53816 12.7 9.76425 12.7 10C12.7 10.2357 12.7948 10.4618 12.9636 10.6285C13.1324 10.7952 13.3613 10.8889 13.6 10.8889C13.8387 10.8889 14.0676 10.7952 14.2364 10.6285C14.4052 10.4618 14.5 10.2357 14.5 10C14.5 9.76425 14.4052 9.53816 14.2364 9.37146C14.0676 9.20476 13.8387 9.11111 13.6 9.11111ZM9.55 3.77778C9.00486 3.77778 8.47826 3.97324 8.06807 4.32786C7.65787 4.68247 7.39198 5.17211 7.3198 5.70578C7.75592 5.60559 8.20224 5.55519 8.65 5.55556H11.6893L11.7523 5.54044C11.6456 5.04174 11.3685 4.59443 10.9675 4.27351C10.5666 3.95259 10.0661 3.77757 9.55 3.77778Z"
                            fill="#43E283"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2821_18627">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <p className="dash_cont_num mb-2">359</p>
                    <p className="dash_cont_head">Offers Count</p>
                  </div>
                </div>
                <div className="col">
                  <div
                    className="col dash_cont d-flex flex-column justify-content-end position-relative"
                    style={{
                      backgroundImage: "url(./assets/images/dash_bg3.png)",
                    }}>
                    <span className="dash_cont_icon position-absolute">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none">
                        <path
                          d="M10 3.57143C8.41775 3.57143 6.87103 4.02386 5.55544 4.87152C4.23985 5.71918 3.21447 6.92398 2.60897 8.33358C2.00347 9.74319 1.84504 11.2943 2.15372 12.7907C2.4624 14.2871 3.22433 15.6617 4.34315 16.7405C5.46197 17.8194 6.88743 18.5541 8.43928 18.8518C9.99113 19.1494 11.5997 18.9967 13.0615 18.4128C14.5233 17.8289 15.7727 16.8401 16.6518 15.5715C17.5308 14.3029 18 12.8115 18 11.2857C17.9976 9.24048 17.1539 7.27968 15.6542 5.83347C14.1544 4.38727 12.121 3.57377 10 3.57143ZM13.805 8.52625L10.4717 11.7405C10.4097 11.8003 10.3362 11.8476 10.2553 11.88C10.1743 11.9123 10.0876 11.9289 10 11.9289C9.91241 11.9289 9.82567 11.9123 9.74474 11.88C9.66381 11.8476 9.59028 11.8003 9.52834 11.7405C9.46639 11.6808 9.41726 11.6099 9.38374 11.5319C9.35022 11.4538 9.33296 11.3702 9.33296 11.2857C9.33296 11.2012 9.35022 11.1176 9.38374 11.0396C9.41726 10.9615 9.46639 10.8906 9.52834 10.8309L12.8617 7.61661C12.9236 7.55688 12.9971 7.5095 13.0781 7.47717C13.159 7.44485 13.2457 7.42821 13.3333 7.42821C13.4209 7.42821 13.5077 7.44485 13.5886 7.47717C13.6695 7.5095 13.7431 7.55688 13.805 7.61661C13.8669 7.67633 13.9161 7.74724 13.9496 7.82528C13.9831 7.90332 14.0004 7.98696 14.0004 8.07143C14.0004 8.1559 13.9831 8.23954 13.9496 8.31758C13.9161 8.39561 13.8669 8.46652 13.805 8.52625ZM7.33334 1.64286C7.33334 1.47236 7.40357 1.30885 7.5286 1.18829C7.65362 1.06773 7.82319 1 8 1H12C12.1768 1 12.3464 1.06773 12.4714 1.18829C12.5964 1.30885 12.6667 1.47236 12.6667 1.64286C12.6667 1.81335 12.5964 1.97687 12.4714 2.09743C12.3464 2.21798 12.1768 2.28571 12 2.28571H8C7.82319 2.28571 7.65362 2.21798 7.5286 2.09743C7.40357 1.97687 7.33334 1.81335 7.33334 1.64286Z"
                          fill="#A5AECC"
                        />
                      </svg>
                    </span>
                    <p className="dash_cont_num mb-2">
                      $1,565<span>.39</span>
                    </p>
                    <p className="dash_cont_head">Balance</p>
                  </div>
                </div>
                <div className="col">
                  <div
                    className="col dash_cont d-flex flex-column justify-content-end position-relative"
                    style={{
                      backgroundImage: "url(./assets/images/dash_bg4.png)",
                    }}>
                    <span className="dash_cont_icon position-absolute">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none">
                        <path
                          d="M14.3636 3.76923C14.3636 3.38688 14.6736 3.07692 15.0559 3.07692H15.6818C16.4098 3.07692 17 3.66709 17 4.3951V17C17 18.1046 16.1046 19 15 19H5C3.89543 19 3 18.1046 3 17V4.39511C3 3.66709 3.59017 3.07692 4.31818 3.07692H4.94406C5.32641 3.07692 5.63636 3.38688 5.63636 3.76923C5.63636 4.15158 5.94632 4.46154 6.32867 4.46154H13.6713C14.0537 4.46154 14.3636 4.15158 14.3636 3.76923ZM4.90909 9.30769C4.90909 9.69004 5.21905 10 5.6014 10H14.3986C14.781 10 15.0909 9.69004 15.0909 9.30769C15.0909 8.92534 14.781 8.61539 14.3986 8.61539H5.6014C5.21905 8.61539 4.90909 8.92534 4.90909 9.30769ZM4.90909 14.8462C4.90909 15.2285 5.21905 15.5385 5.6014 15.5385H14.3986C14.781 15.5385 15.0909 15.2285 15.0909 14.8462C15.0909 14.4638 14.781 14.1538 14.3986 14.1538H5.6014C5.21905 14.1538 4.90909 14.4638 4.90909 14.8462ZM8.12937 3.07692C7.55585 3.07692 7.09091 2.61199 7.09091 2.03846C7.09091 1.46494 7.55584 1 8.12937 1H11.8706C12.4442 1 12.9091 1.46494 12.9091 2.03846C12.9091 2.61199 12.4442 3.07692 11.8706 3.07692H8.12937Z"
                          fill="#1095ED"
                        />
                      </svg>
                    </span>
                    <p className="dash_cont_num mb-2">
                      $215<span>.09</span>
                    </p>
                    <p className="dash_cont_head">Pending</p>
                  </div>
                </div>
              </div>

              <div className="col d-xl-flex gap-2 mb-4">
                <div className="col-12 col-lg col-xl-9 dash_cont_con mb-3 mb-xl-0">
                  <div className="d-flex align-items-center gap-1 mb-4">
                    <p className="dash_head">Monthly sales: </p>
                    <select className="dash_chart_sel">
                      <option value="">2024</option>
                    </select>
                  </div>
                  <div className="d-flex gap-4 align-items-start">
                    <div className="col-auto dash_graph_score_con d-flex flex-column justify-content-between">
                      <p className="dash_graph_score">$1000</p>
                      <p className="dash_graph_score">$800</p>
                      <p className="dash_graph_score">$600</p>
                      <p className="dash_graph_score">$400</p>
                      <p className="dash_graph_score">$200</p>
                      <p className="dash_graph_score">$0</p>
                    </div>
                    <div className="col graph_chart_cont text-center d-flex gx-0 gap-3 overflow-auto">
                      <div className="col-auto">
                        <div className="dash_graph_con d-flex flex-column justify-content-end align-items-center mb-2">
                          <div
                            className="dash_graph_cont position-relative"
                            style={{
                              height: "40%",
                            }}>
                            {/* <span className="dash_graph_num position-absolute">
                              $100.00
                            </span> */}

                            <div
                              className="dash_graph position-relative "
                              style={{
                                backgroundImage:
                                  "url(./assets/images/graph_candle.svg)",
                              }}>
                              <div className="dash_graph_line"></div>
                              <div className="d-none dash_graph_col position-absolute"></div>
                            </div>
                          </div>
                        </div>
                        <p className="dash_graph_score">Jan</p>
                      </div>
                      <div className="col-auto">
                        <div className="dash_graph_con d-flex flex-column justify-content-end align-items-center mb-2">
                          <div
                            className="dash_graph_cont position-relative"
                            style={{
                              height: "100%",
                            }}>
                            {/* <span className="dash_graph_num position-absolute">
                  $100.00
                </span> */}

                            <div
                              className="dash_graph position-relative "
                              style={{
                                backgroundImage:
                                  "url(./assets/images/graph_candle.svg)",
                              }}>
                              <div className="dash_graph_line"></div>
                              <div className="d-none dash_graph_col position-absolute"></div>
                            </div>
                          </div>
                        </div>
                        <p className="dash_graph_score">Fed</p>
                      </div>
                      <div className="col-auto">
                        <div className="dash_graph_con d-flex flex-column justify-content-end align-items-center mb-2">
                          <div
                            className="dash_graph_cont position-relative"
                            style={{
                              height: "50%",
                            }}>
                            {/* <span className="dash_graph_num position-absolute">
                  $100.00
                </span> */}

                            <div
                              className="dash_graph position-relative "
                              style={{
                                backgroundImage:
                                  "url(./assets/images/graph_candle.svg)",
                              }}>
                              <div className="dash_graph_line"></div>
                              <div className="d-none dash_graph_col position-absolute"></div>
                            </div>
                          </div>
                        </div>
                        <p className="dash_graph_score">Mar</p>
                      </div>
                      <div className="col-auto">
                        <div className="dash_graph_con d-flex flex-column justify-content-end align-items-center mb-2">
                          <div
                            className="dash_graph_cont position-relative"
                            style={{
                              height: "60%",
                            }}>
                            {/* <span className="dash_graph_num position-absolute">
                  $100.00
                </span> */}

                            <div
                              className="dash_graph position-relative "
                              style={{
                                backgroundImage:
                                  "url(./assets/images/graph_candle.svg)",
                              }}>
                              <div className="dash_graph_line"></div>
                              <div className="d-none dash_graph_col position-absolute"></div>
                            </div>
                          </div>
                        </div>
                        <p className="dash_graph_score">Apr</p>
                      </div>
                      <div className="col-auto">
                        <div className="dash_graph_con d-flex flex-column justify-content-end align-items-center mb-2">
                          <div
                            className="dash_graph_cont position-relative"
                            style={{
                              height: "40%",
                            }}>
                            {/* <span className="dash_graph_num position-absolute">
                  $100.00
                </span> */}

                            <div
                              className="dash_graph position-relative "
                              style={{
                                backgroundImage:
                                  "url(./assets/images/graph_candle.svg)",
                              }}>
                              <div className="dash_graph_line"></div>
                              <div className="d-none dash_graph_col position-absolute"></div>
                            </div>
                          </div>
                        </div>
                        <p className="dash_graph_score">May</p>
                      </div>
                      <div className="col-auto">
                        <div className="dash_graph_con d-flex flex-column justify-content-end align-items-center mb-2">
                          <div
                            className="dash_graph_cont position-relative"
                            style={{
                              height: "30%",
                            }}>
                            <span className="dash_graph_num position-absolute">
                              $312.43
                            </span>

                            <div
                              className="dash_graph position-relative "
                              style={{
                                backgroundImage:
                                  "url(./assets/images/graph_candle.svg)",
                              }}>
                              <div className="dash_graph_line"></div>
                              <div className="dash_graph_col position-absolute"></div>
                            </div>
                          </div>
                        </div>
                        <p className="dash_graph_score">Jun</p>
                      </div>
                      <div className="col-auto">
                        <div className="dash_graph_con d-flex flex-column justify-content-end align-items-center mb-2">
                          <div
                            className="dash_graph_cont position-relative"
                            style={{
                              height: "60%",
                            }}>
                            {/* <span className="dash_graph_num position-absolute">
                  $100.00
                </span> */}

                            <div
                              className="dash_graph position-relative "
                              style={{
                                backgroundImage:
                                  "url(./assets/images/graph_candle.svg)",
                              }}>
                              <div className="dash_graph_line"></div>
                              <div className="d-none dash_graph_col position-absolute"></div>
                            </div>
                          </div>
                        </div>
                        <p className="dash_graph_score">Jul</p>
                      </div>
                      <div className="col-auto">
                        <div className="dash_graph_con d-flex flex-column justify-content-end align-items-center mb-2">
                          <div
                            className="dash_graph_cont position-relative"
                            style={{
                              height: "0%",
                            }}>
                            {/* <span className="dash_graph_num position-absolute">
                  $100.00
                </span> */}

                            <div
                              className="dash_graph position-relative "
                              style={{
                                backgroundImage:
                                  "url(./assets/images/graph_candle.svg)",
                              }}>
                              <div className="dash_graph_line"></div>
                              <div className="d-none dash_graph_col position-absolute"></div>
                            </div>
                          </div>
                          <div className="dash_graph_line2"></div>
                        </div>
                        <p className="dash_graph_score">Aug</p>
                      </div>
                      <div className="col-auto">
                        <div className="dash_graph_con d-flex flex-column justify-content-end align-items-center mb-2">
                          <div
                            className="dash_graph_cont position-relative"
                            style={{
                              height: "0%",
                            }}>
                            {/* <span className="dash_graph_num position-absolute">
                  $100.00
                </span> */}

                            <div
                              className="dash_graph position-relative "
                              style={{
                                backgroundImage:
                                  "url(./assets/images/graph_candle.svg)",
                              }}>
                              <div className="dash_graph_line"></div>
                              <div className="d-none dash_graph_col position-absolute"></div>
                            </div>
                          </div>
                          <div className="dash_graph_line2"></div>
                        </div>
                        <p className="dash_graph_score">Sep</p>
                      </div>
                      <div className="col-auto">
                        <div className="dash_graph_con d-flex flex-column justify-content-end align-items-center mb-2">
                          <div
                            className="dash_graph_cont position-relative"
                            style={{
                              height: "0%",
                            }}>
                            {/* <span className="dash_graph_num position-absolute">
                  $100.00
                </span> */}

                            <div
                              className="dash_graph position-relative "
                              style={{
                                backgroundImage:
                                  "url(./assets/images/graph_candle.svg)",
                              }}>
                              <div className="dash_graph_line"></div>
                              <div className="d-none dash_graph_col position-absolute"></div>
                            </div>
                          </div>
                          <div className="dash_graph_line2"></div>
                        </div>
                        <p className="dash_graph_score">Oct</p>
                      </div>
                      <div className="col-auto">
                        <div className="dash_graph_con d-flex flex-column justify-content-end align-items-center mb-2">
                          <div
                            className="dash_graph_cont position-relative"
                            style={{
                              height: "0%",
                            }}>
                            {/* <span className="dash_graph_num position-absolute">
                  $100.00
                </span> */}

                            <div
                              className="dash_graph position-relative "
                              style={{
                                backgroundImage:
                                  "url(./assets/images/graph_candle.svg)",
                              }}>
                              <div className="dash_graph_line"></div>
                              <div className="d-none dash_graph_col position-absolute"></div>
                            </div>
                          </div>
                          <div className="dash_graph_line2"></div>
                        </div>
                        <p className="dash_graph_score">Nov</p>
                      </div>
                      <div className="col-auto">
                        <div className="dash_graph_con d-flex flex-column justify-content-end align-items-center mb-2">
                          <div
                            className="dash_graph_cont position-relative"
                            style={{
                              height: "0%",
                            }}>
                            {/* <span className="dash_graph_num position-absolute">
                  $100.00
                </span> */}

                            <div
                              className="dash_graph position-relative "
                              style={{
                                backgroundImage:
                                  "url(./assets/images/graph_candle.svg)",
                              }}>
                              <div className="dash_graph_line"></div>
                              <div className="d-none dash_graph_col position-absolute"></div>
                            </div>
                          </div>
                          <div className="dash_graph_line2"></div>
                        </div>
                        <p className="dash_graph_score">Dec</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col dash_cont_con">
                  <p className="dash_head mb-3">Top 5 buyers</p>
                  <div className="col">
                    <div className="d-flex align-items-center gap-3 mb-2">
                      <img
                        src={"../assets/images/user.png"}
                        alt=""
                        className="dash_cont_img"
                      />
                      <div className="col">
                        <p className="dash_head2 text-break">
                          xX_ShadowSl4y3r_69_Xx
                        </p>
                        <p className="dash_buy_text">
                          Bought: <span>32</span>
                        </p>
                      </div>
                      <div className="col-auto position-relative">
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
                              <p
                                className="acct_table_drop_link"
                                onClick={() => OpenCouponModal()}>
                                Custom Coupon
                              </p>

                              <Link>
                                <p className="acct_table_drop_link">Option 2</p>
                              </Link>
                            </div>
                          }
                        />
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <img
                        src={"../assets/images/user.png"}
                        alt=""
                        className="dash_cont_img"
                      />
                      <div className="col">
                        <p className="dash_head2 text-break">
                          xX_ShadowSl4y3r_69_Xx
                        </p>
                        <p className="dash_buy_text">
                          Bought: <span>32</span>
                        </p>
                      </div>
                      <div className="col-auto position-relative">
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
                              <p
                                className="acct_table_drop_link"
                                onClick={() => OpenCouponModal()}>
                                Custom Coupon
                              </p>

                              <Link>
                                <p className="acct_table_drop_link">Option 2</p>
                              </Link>
                            </div>
                          }
                        />
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <img
                        src={"../assets/images/user.png"}
                        alt=""
                        className="dash_cont_img"
                      />
                      <div className="col">
                        <p className="dash_head2 text-break">
                          xX_ShadowSl4y3r_69_Xx
                        </p>
                        <p className="dash_buy_text">
                          Bought: <span>32</span>
                        </p>
                      </div>
                      <div className="col-auto position-relative">
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
                              <p
                                className="acct_table_drop_link"
                                onClick={() => OpenCouponModal()}>
                                Custom Coupon
                              </p>

                              <Link>
                                <p className="acct_table_drop_link">Option 2</p>
                              </Link>
                            </div>
                          }
                        />
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <img
                        src={"../assets/images/user.png"}
                        alt=""
                        className="dash_cont_img"
                      />
                      <div className="col">
                        <p className="dash_head2 text-break">
                          xX_ShadowSl4y3r_69_Xx
                        </p>
                        <p className="dash_buy_text">
                          Bought: <span>32</span>
                        </p>
                      </div>
                      <div className="col-auto position-relative">
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
                              <p
                                className="acct_table_drop_link"
                                onClick={() => OpenCouponModal()}>
                                Custom Coupon
                              </p>

                              <Link>
                                <p className="acct_table_drop_link">Option 2</p>
                              </Link>
                            </div>
                          }
                        />
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <img
                        src={"../assets/images/user.png"}
                        alt=""
                        className="dash_cont_img"
                      />
                      <div className="col">
                        <p className="dash_head2 text-break">
                          xX_ShadowSl4y3r_69_Xx
                        </p>
                        <p className="dash_buy_text">
                          Bought: <span>32</span>
                        </p>
                      </div>
                      <div className="col-auto position-relative">
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
                              <p
                                className="acct_table_drop_link"
                                onClick={() => OpenCouponModal()}>
                                Custom Coupon
                              </p>

                              <Link>
                                <p className="acct_table_drop_link">Option 2</p>
                              </Link>
                            </div>
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col ">
                <div className="col d-flex gap-3 justify-content-between align-items-center mb-4 mb-lg-3">
                  <div className="col d-flex overflow-auto hide_scroll gap-2">
                    <p
                      className={
                        "dash_tab_link " + (activeTab == 1 ? "active" : "")
                      }
                      onClick={() => ChangeTab(1)}>
                      My Offers (11)
                    </p>
                    <p
                      className={
                        "dash_tab_link " + (activeTab == 2 ? "active" : "")
                      }
                      onClick={() => ChangeTab(2)}>
                      OUT OF STOCK (0)
                    </p>
                    <p
                      className={
                        "dash_tab_link " + (activeTab == 3 ? "active" : "")
                      }
                      onClick={() => ChangeTab(3)}>
                      SALES (0)
                    </p>
                  </div>
                  <Link className="d-none d-lg-block">
                    <p className="dash_all">View all</p>
                  </Link>
                </div>

                {/* My Offers */}
                {activeTab == 1 && (
                  <>
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
                                Xbox game pack 20 Games Loaded Xbox Series X | S
                                / Xbox One FULL ACCESS Account Global
                              </p>
                            </Link>
                          </div>

                          <div className="col-3">
                            <label className="mob_table_head">
                              Stock / Sold
                            </label>
                            <p className="mob_table_data">3/0</p>
                          </div>
                          <div className="col-3">
                            <label className="mob_table_head">SALES</label>
                            <p className="mob_table_data">
                              24H: 0 <br /> 7D: 0 <br /> 30D: 0
                            </p>
                          </div>
                          <div className="col-3">
                            <label className="mob_table_head">
                              LOWEST PRICE
                            </label>
                            <p className="mob_table_data bold">€46.98</p>
                          </div>
                          <div className="col-3">
                            <label className="mob_table_head">POS</label>
                            <p className="mob_table_data">1</p>
                          </div>

                          <div className="col-6">
                            <label className="mob_table_head">
                              achievement
                            </label>
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
                            <label className="mob_table_head">
                              achievement
                            </label>
                            <span className="acct_table_data_tag">
                              Inactive
                            </span>
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
                                    <p className="acct_table_drop_link">
                                      Delete
                                    </p>
                                  </Link>
                                  <Link>
                                    <p className="acct_table_drop_link">
                                      To Archive
                                    </p>
                                  </Link>
                                  <Link>
                                    <p className="acct_table_drop_link">
                                      Other
                                    </p>
                                  </Link>
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
                                Xbox game pack 20 Games Loaded Xbox Series X | S
                                / Xbox One FULL ACCESS Account Global
                              </p>
                            </Link>
                          </div>

                          <div className="col-3">
                            <label className="mob_table_head">
                              Stock / Sold
                            </label>
                            <p className="mob_table_data">3/0</p>
                          </div>
                          <div className="col-3">
                            <label className="mob_table_head">SALES</label>
                            <p className="mob_table_data">
                              24H: 0 <br /> 7D: 0 <br /> 30D: 0
                            </p>
                          </div>
                          <div className="col-3">
                            <label className="mob_table_head">
                              LOWEST PRICE
                            </label>
                            <p className="mob_table_data bold">€46.98</p>
                          </div>
                          <div className="col-3">
                            <label className="mob_table_head">POS</label>
                            <p className="mob_table_data">1</p>
                          </div>

                          <div className="col-6">
                            <label className="mob_table_head">
                              achievement
                            </label>
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
                            <label className="mob_table_head">
                              achievement
                            </label>
                            <span className="acct_table_data_tag">
                              Inactive
                            </span>
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
                                    <p className="acct_table_drop_link">
                                      Delete
                                    </p>
                                  </Link>
                                  <Link>
                                    <p className="acct_table_drop_link">
                                      To Archive
                                    </p>
                                  </Link>
                                  <Link>
                                    <p className="acct_table_drop_link">
                                      Other
                                    </p>
                                  </Link>
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
                                Xbox game pack 20 Games Loaded Xbox Series X | S
                                / Xbox One FULL ACCESS Account Global
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
                              <span className="acct_table_data_tag">
                                Inactive
                              </span>
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
                                      <p className="acct_table_drop_link">
                                        Delete
                                      </p>
                                    </Link>
                                    <Link>
                                      <p className="acct_table_drop_link">
                                        To Archive
                                      </p>
                                    </Link>
                                    <Link>
                                      <p className="acct_table_drop_link">
                                        Other
                                      </p>
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
                                Xbox game pack 20 Games Loaded Xbox Series X | S
                                / Xbox One FULL ACCESS Account Global
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
                              <span className="acct_table_data_tag">
                                Inactive
                              </span>
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
                                      <p className="acct_table_drop_link">
                                        Delete
                                      </p>
                                    </Link>
                                    <Link>
                                      <p className="acct_table_drop_link">
                                        To Archive
                                      </p>
                                    </Link>
                                    <Link>
                                      <p className="acct_table_drop_link">
                                        Other
                                      </p>
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
                                Xbox game pack 20 Games Loaded Xbox Series X | S
                                / Xbox One FULL ACCESS Account Global
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
                              <span className="acct_table_data_tag">
                                Inactive
                              </span>
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
                                      <p className="acct_table_drop_link">
                                        Delete
                                      </p>
                                    </Link>
                                    <Link>
                                      <p className="acct_table_drop_link">
                                        To Archive
                                      </p>
                                    </Link>
                                    <Link>
                                      <p className="acct_table_drop_link">
                                        Other
                                      </p>
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
                                Xbox game pack 20 Games Loaded Xbox Series X | S
                                / Xbox One FULL ACCESS Account Global
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
                              <span className="acct_table_data_tag">
                                Inactive
                              </span>
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
                                      <p className="acct_table_drop_link">
                                        Delete
                                      </p>
                                    </Link>
                                    <Link>
                                      <p className="acct_table_drop_link">
                                        To Archive
                                      </p>
                                    </Link>
                                    <Link>
                                      <p className="acct_table_drop_link">
                                        Other
                                      </p>
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
                  </>
                )}
              </div>
            </div>

            <div className="col d-lg-none">
              <MainFooter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
