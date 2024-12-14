import { Link } from "react-router-dom";
import AccountSideBar from "../componets/account/AccountSideBar";
import MainHeader from "../componets/MainHeader";
import { useState } from "react";
import { useTabs } from "../../services/CustomTabs";
import CustomDropdown from "../componets/utility/CustomDropdown";
import MainFooter from "../componets/MainFooter";

export default function Messages() {
  const [breadCrums] = useState([
    {
      title: "Messages",
      url: "/account/messages",
    },
    {
      title: "Devon Lane",
      url: "/account/messages",
    },
  ]);

  const breadCrumsList = breadCrums?.map((item, index) => {
    return (
      <Link to={item.url} key={index}>
        <p className="crumb_link">/ {item.title}</p>
      </Link>
    );
  });

  const { activeTab, ChangeTab } = useTabs(1);
  const [isSelected, setIsSelected] = useState(false);

  function ToggleSelected() {
    setIsSelected(!isSelected);
  }

  return (
    <>
      <div
        className="d-flex w-100 main_house_con"
        style={{
          background: "none",
        }}>
        <AccountSideBar activeLink={"messages"} />

        <div className="col housing_con d-flex flex-column">
          <MainHeader
            showHeader={true}
            isAccount={true}
            breadCrums={breadCrums}
            activeLink={"messages"}
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
              <div className="d-xl-flex align-items-start gap-3">
                <div
                  className={
                    "col-12 col-xl-4 d-flex flex-column " +
                    (isSelected ? "d-none d-xl-flex" : "d-flex")
                  }>
                  <div className="d-flex gap-2 mb-4">
                    <p
                      className={
                        "dash_tab_link " + (activeTab == 1 && "active")
                      }
                      onClick={() => ChangeTab(1)}>
                      All (33)
                    </p>
                    <p
                      className={
                        "dash_tab_link " + (activeTab == 2 && "active")
                      }
                      onClick={() => ChangeTab(2)}>
                      Archive
                    </p>
                  </div>

                  <div className="col msg_main_con mb-4">
                    {/* Search */}
                    <div className="col pad mb-3">
                      <div className="col acct_box d-flex">
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
                    {/* Messages */}
                    <div className="col msg_cont_con">
                      <div
                        onClick={() => ToggleSelected()}
                        className="msg_cont active d-flex gap-2 align-items-center position-relative mb-3">
                        <span className="msg_cont_num d-flex justify-content-center align-items-center position-absolute">
                          1
                        </span>
                        <img
                          src={"../assets/images/user.png"}
                          alt=""
                          className="msg_cont_img"
                        />
                        <div className="col">
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="msg_cont_name">Devon Lane</p>
                            <p className="msg_cont_date">11:49 pm</p>
                          </div>
                          <p className="msg_cont_text">
                            The Outlast Trials Deluxe Xbox..
                          </p>
                        </div>
                        <span className="msg_cont_icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <g fill="none">
                              <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                              <path
                                fill="currentColor"
                                d="M12 17a2 2 0 1 1 0 4a2 2 0 0 1 0-4m0-7a2 2 0 1 1 0 4a2 2 0 0 1 0-4m0-7a2 2 0 1 1 0 4a2 2 0 0 1 0-4"></path>
                            </g>
                          </svg>
                        </span>
                      </div>
                      <div
                        onClick={() => ToggleSelected()}
                        className="msg_cont d-flex gap-2 align-items-center position-relative mb-3">
                        <img
                          src={"../assets/images/user.png"}
                          alt=""
                          className="msg_cont_img"
                        />
                        <div className="col">
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="msg_cont_name">Devon Lane</p>
                            <p className="msg_cont_date">11:49 pm</p>
                          </div>
                          <p className="msg_cont_text">
                            The Outlast Trials Deluxe Xbox..
                          </p>
                        </div>
                        {/* <span className="msg_cont_icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24">
                        <g fill="none">
                          <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                          <path
                            fill="currentColor"
                            d="M12 17a2 2 0 1 1 0 4a2 2 0 0 1 0-4m0-7a2 2 0 1 1 0 4a2 2 0 0 1 0-4m0-7a2 2 0 1 1 0 4a2 2 0 0 1 0-4"></path>
                        </g>
                      </svg>
                    </span> */}
                      </div>
                      <div
                        onClick={() => ToggleSelected()}
                        className="msg_cont fill d-flex gap-2 align-items-center position-relative mb-3">
                        <span className="msg_cont_num d-flex justify-content-center align-items-center position-absolute">
                          9
                        </span>
                        <img
                          src={"../assets/images/user.png"}
                          alt=""
                          className="msg_cont_img"
                        />
                        <div className="col">
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="msg_cont_name">Devon Lane</p>
                            <p className="msg_cont_date">11:49 pm</p>
                          </div>
                          <p className="msg_cont_text">
                            The Outlast Trials Deluxe Xbox..
                          </p>
                        </div>
                        <span className="msg_cont_icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <g fill="none">
                              <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                              <path
                                fill="currentColor"
                                d="M12 17a2 2 0 1 1 0 4a2 2 0 0 1 0-4m0-7a2 2 0 1 1 0 4a2 2 0 0 1 0-4m0-7a2 2 0 1 1 0 4a2 2 0 0 1 0-4"></path>
                            </g>
                          </svg>
                        </span>
                      </div>
                      <div
                        onClick={() => ToggleSelected()}
                        className="msg_cont d-flex gap-2 align-items-center position-relative mb-3">
                        <img
                          src={"../assets/images/user.png"}
                          alt=""
                          className="msg_cont_img"
                        />
                        <div className="col">
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="msg_cont_name">Devon Lane</p>
                            <p className="msg_cont_date">11:49 pm</p>
                          </div>
                          <p className="msg_cont_text">
                            The Outlast Trials Deluxe Xbox..
                          </p>
                        </div>
                        <span className="msg_cont_icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <g fill="none">
                              <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                              <path
                                fill="currentColor"
                                d="M12 17a2 2 0 1 1 0 4a2 2 0 0 1 0-4m0-7a2 2 0 1 1 0 4a2 2 0 0 1 0-4m0-7a2 2 0 1 1 0 4a2 2 0 0 1 0-4"></path>
                            </g>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={
                    "col msg_dea_cont " +
                    (isSelected ? "d-block" : "d-none d-xl-block")
                  }>
                  <div className="msg_dea_head_con gap-2 d-flex align-items-center position-relative">
                    <img
                      src={"../assets/images/user.png"}
                      alt=""
                      className="msg_dea_img"
                    />
                    <div className="col-10 col-md">
                      <p className="msg_dea_name">Devon Lane</p>
                      <p className="msg_dea_text">
                        Last seen: <span className="bold">6 months ago</span>
                      </p>
                      <p className="msg_dea_text blue mt-1">
                        Xbox game pack 20 Games Loaded Xbox Series X | S / Xbox
                        One FULL ACCESS Account Global
                      </p>
                    </div>

                    <div className="">
                      <CustomDropdown
                        trigger={() => (
                          <span className="msg_dea_icon more d-md-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24">
                              <g fill="none">
                                <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                                <path
                                  fill="currentColor"
                                  d="M12 17a2 2 0 1 1 0 4a2 2 0 0 1 0-4m0-7a2 2 0 1 1 0 4a2 2 0 0 1 0-4m0-7a2 2 0 1 1 0 4a2 2 0 0 1 0-4"></path>
                              </g>
                            </svg>
                          </span>
                        )}
                        content={
                          <div className="acct_table_drop_cont">
                            <Link>
                              <p className="acct_table_drop_link">
                                Help Center
                              </p>
                            </Link>
                            <p
                              className="acct_table_drop_link"
                              role="button"
                              onClick={() => ToggleSelected()}>
                              Delete
                            </p>
                          </div>
                        }
                      />
                      <div className="col d-none d-md-flex gap-3">
                        <span className="msg_dea_icon">
                          <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.38246 12.4618L5.37459 12.4428C5.25628 12.4094 5.13897 12.3723 5.02281 12.3316L5.01406 12.3279C3.80523 11.9003 2.75597 11.0927 2.01317 10.0179C1.27037 8.94323 0.871205 7.65528 0.871554 6.33439C0.871164 4.71329 1.47211 3.15376 2.5506 1.97702C3.62909 0.800286 5.10301 0.0959553 6.66876 0.00910281C8.23451 -0.0777497 9.77286 0.459491 10.967 1.51017C12.161 2.56084 12.9199 4.04494 13.0873 5.65678C13.1258 6.02951 12.8283 6.33439 12.466 6.33439C12.1038 6.33439 11.8141 6.0286 11.766 5.65768C11.6496 4.78219 11.3098 3.95453 10.7816 3.25976C10.2533 2.565 9.55565 2.02818 8.76027 1.7045C7.9649 1.38081 7.1005 1.28193 6.25591 1.41801C5.41133 1.55409 4.61703 1.92022 3.95464 2.47878C3.29225 3.03734 2.78567 3.76818 2.48696 4.59619C2.18825 5.4242 2.10819 6.3195 2.255 7.19009C2.40181 8.06069 2.7702 8.87516 3.32231 9.54981C3.87442 10.2245 4.59033 10.7349 5.39646 11.0288C5.55885 10.6493 5.84248 10.3391 6.19981 10.1501C6.55714 9.96105 6.96646 9.90477 7.35915 9.99065C7.75184 10.0765 8.10404 10.2994 8.35672 10.6218C8.6094 10.9442 8.74721 11.3466 8.74705 11.7616C8.74745 12.1798 8.60772 12.5852 8.35162 12.909C8.09552 13.2327 7.73886 13.4547 7.34231 13.5372C6.94575 13.6197 6.53379 13.5577 6.17649 13.3616C5.81918 13.1656 5.5386 12.8476 5.38246 12.4618ZM4.48553 13.5746C3.45378 13.1915 2.51671 12.5773 1.74136 11.7761C1.26195 11.8337 0.819729 12.0714 0.498699 12.444C0.17767 12.8166 0.000198915 13.2982 0 13.7971V14.6295C0 15.1469 0.15576 15.6518 0.446278 16.0733C1.79561 18.0311 4.00425 19 6.99694 19C9.98962 19 12.1991 18.0302 13.5511 16.0733C13.843 15.6513 13.9999 15.1455 14 14.6267V13.7962C14 13.2567 13.7928 12.7392 13.4239 12.3575C13.0551 11.9758 12.5548 11.7612 12.0329 11.7607H10.0596C10.0598 12.4346 9.85196 13.0909 9.46644 13.6342C9.08092 14.1776 8.53779 14.5796 7.91605 14.7818C7.2943 14.984 6.62637 14.9759 6.0094 14.7586C5.39243 14.5414 4.85859 14.1272 4.48553 13.5746ZM10.4972 6.33439C10.4972 5.80553 10.385 5.28311 10.1687 4.80388C9.95235 4.32465 9.63704 3.90028 9.24495 3.56062C8.88099 3.24585 8.45892 3.01088 8.0044 2.86998C7.54988 2.72909 7.0724 2.68521 6.60096 2.74102C6.12953 2.79682 5.674 2.95115 5.26204 3.19461C4.85009 3.43808 4.49032 3.7656 4.20459 4.15728C3.91887 4.54895 3.71316 4.9966 3.59997 5.47302C3.48677 5.94944 3.46845 6.44468 3.54613 6.92864C3.62381 7.41261 3.79585 7.87519 4.05181 8.28828C4.30777 8.70137 4.6423 9.05634 5.03506 9.33161C5.58557 8.85656 6.27986 8.59627 6.99694 8.5961C7.74336 8.5961 8.42765 8.87203 8.95969 9.33161C9.43335 8.99996 9.82118 8.55333 10.0892 8.03082C10.3572 7.5083 10.4973 6.92583 10.4972 6.33439Z" />
                          </svg>
                        </span>
                        <span className="msg_dea_icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 20 20">
                            <path
                              fill="currentColor"
                              d="m6 2l2-2h4l2 2h4v2H2V2zM3 6h14l-1 14H4zm5 2v10h1V8zm3 0v10h1V8z"></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="col msg_chat_cont">
                    <div className="col mb-3">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <p className="acct_head_s">Devon Lane</p>
                        <p className="acct_chat_date">• 24/03/2023, 03:32:45</p>
                      </div>
                      <div className="acct_chat_cont">
                        <p className="acct_chat_text">
                          {
                            "That's right. But when I click to redeem it says the key is invalid."
                          }
                        </p>
                        <span className="acct_chat_tag d-inline-flex align-items-center gap-1 mt-2">
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
                    <div className="col ms-auto mb-3">
                      <div className="d-flex justify-content-end align-items-center gap-2 mb-2">
                        <p className="acct_head_s">You</p>
                        <p className="acct_chat_date">• 24/03/2023, 03:32:45</p>
                      </div>
                      <div className="acct_chat_cont dark">
                        <p className="acct_chat_text">
                          {
                            "Hello! I acknowledge the report and would like to refund the transaction. You should be provided with a refund in eurBalance soon. If you would like to receive a refund back to your original payment method, please refrain from spending eurBalance and contact Kinguin’s Customer Support here -> https://kingu.in/ContactSupport Please accept my sincere apologies for the problem. Best regards!"
                          }
                        </p>
                      </div>
                    </div>
                    <div className="col mb-3">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <p className="acct_head_s">Devon Lane</p>
                        <p className="acct_chat_date">• 24/03/2023, 03:32:45</p>
                      </div>
                      <div className="acct_chat_cont">
                        <p className="acct_chat_text">
                          {
                            "That's right. But when I click to redeem it says the key is invalid."
                          }
                        </p>
                      </div>
                    </div>
                    <div className="col ms-auto mb-3">
                      <div className="d-flex justify-content-end align-items-center gap-2 mb-2">
                        <p className="acct_head_s">You</p>
                        <p className="acct_chat_date">• 24/03/2023, 03:32:45</p>
                      </div>
                      <div className="acct_chat_cont dark">
                        <p className="acct_chat_text">
                          {
                            "Hello! I acknowledge the report and would like to refund the transaction. You should be provided with a refund in eurBalance soon. If you would like to receive a refund back to your original payment method, please refrain from spending eurBalance and contact Kinguin’s Customer Support here -> https://kingu.in/ContactSupport Please accept my sincere apologies for the problem. Best regards!"
                          }
                        </p>
                      </div>
                    </div>
                    <div className="col mb-3">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <p className="acct_head_s">Devon Lane</p>
                        <p className="acct_chat_date">• 24/03/2023, 03:32:45</p>
                      </div>
                      <div className="acct_chat_cont">
                        <p className="acct_chat_text">
                          {
                            "That's right. But when I click to redeem it says the key is invalid."
                          }
                        </p>
                      </div>
                    </div>
                    <div className="col ms-auto mb-3">
                      <div className="d-flex justify-content-end align-items-center gap-2 mb-2">
                        <p className="acct_head_s">You</p>
                        <p className="acct_chat_date">• 24/03/2023, 03:32:45</p>
                      </div>
                      <div className="acct_chat_cont dark">
                        <p className="acct_chat_text">
                          {
                            "Hello! I acknowledge the report and would like to refund the transaction. You should be provided with a refund in eurBalance soon. If you would like to receive a refund back to your original payment method, please refrain from spending eurBalance and contact Kinguin’s Customer Support here -> https://kingu.in/ContactSupport Please accept my sincere apologies for the problem. Best regards!"
                          }
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="msg_box_con">
                    <div className="col mb-4">
                      <div className="col acct_box">
                        <textarea
                          name=""
                          className="input_box"
                          placeholder="Write your message"
                          rows={3}></textarea>
                      </div>
                    </div>

                    <div className="col d-flex flex-wrap gap-3 justify-content-between  align-items-start">
                      <div className="col-12 col-xxl d-flex flex-wrap gap-2">
                        <div className="col-12 col-md-6 acct_offer_file_con">
                          <div className="acct_offer_file p-2">
                            <p className="acct_offer_text text-center">
                              <span className="bold">Attachments </span>
                              (Max 3 files)
                            </p>
                          </div>
                        </div>
                        <div className="col align-items-start">
                          <p className="acct_offer_text mb-1">
                            <span className="bold">Attachments </span>
                            (Max 3 files)
                          </p>
                          <div className="d-flex gap-2 ">
                            <span className="cate_filter_tag">
                              File #1
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
                              File #2
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
                      </div>
                      <button
                        type="button"
                        className="col col-md-auto acct_offer_btn1">
                        Send Message
                      </button>
                      {/* <button
                    type="button"
                    className="col col-md-auto acct_offer_btn3">
                    Send Message
                  </button> */}
                    </div>
                  </div>
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
