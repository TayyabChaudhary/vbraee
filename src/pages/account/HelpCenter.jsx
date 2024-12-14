/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Pagination from "../componets/utility/Pagination";
import AccountSideBar from "../componets/account/AccountSideBar";
import MainHeader from "../componets/MainHeader";
import { useState } from "react";
import CustomDropdown from "../componets/utility/CustomDropdown";
import MainFooter from "../componets/MainFooter";
import { useTabs } from "../../services/CustomTabs";

function HelpFilter({ isOpen, onClose }) {
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

          <div className="col-12 col-lg-4 col-xl">
            <div className="col-12 acct_box ">
              <input
                type="text"
                className="input_box"
                placeholder="Product name"
              />
            </div>
          </div>

          <div className="col-12 col-lg-4 col-xl">
            <select className="col-12 acct_sel">
              <option value="">Issue</option>
            </select>
          </div>
          <div className="col-12 col-lg-4 col-xl">
            <select className="col-12 acct_sel">
              <option value="">Preferred Solution</option>
            </select>
          </div>
          <div className="col-12 col-lg-4 col-xl">
            <div className="col-12 acct_box ">
              <input
                type="text"
                className="input_box"
                placeholder="Buyer name"
              />
            </div>
          </div>
          <div className="col-12 col-lg-4 col-xl">
            <select className="col-12 acct_sel">
              <option value="">Status</option>
            </select>
          </div>
          <div className="col-12 col-lg-4 col-xl">
            <div className="col-12 acct_box ">
              <input type="date" className="input_box" placeholder="Date" />
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

export default function AccountHelpCenter() {
  const breadCrums = [
    {
      title: "Help Center",
      url: "/account/help-center",
    },
  ];

  const breadCrumsList = breadCrums?.map((item, index) => {
    return (
      <Link to={item.url} key={index}>
        <p className="crumb_link">/ {item.title}</p>
      </Link>
    );
  });

  const { activeTab, ChangeTab } = useTabs(1);
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
        <AccountSideBar activeLink={"help-center"} />

        <div className="col housing_con d-flex flex-column">
          <MainHeader
            showHeader={true}
            isAccount={true}
            breadCrums={breadCrums}
            activeLink={"help-center"}
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
              <div className="col d-flex gap-3 justify-content-between align-items-center mb-3">
                <div className="col d-flex overflow-auto hide_scroll gap-2">
                  <p
                    className={
                      "dash_tab_link " + (activeTab == 1 ? "active" : "")
                    }
                    onClick={() => ChangeTab(1)}>
                    Purchases
                  </p>
                  <p
                    className={
                      "dash_tab_link " + (activeTab == 2 ? "active" : "")
                    }
                    onClick={() => ChangeTab(2)}>
                    Sales
                  </p>
                </div>
              </div>

              <div className="col">
                <HelpFilter isOpen={isFilterOpen} onClose={CloseFilter} />

                <div className="col d-lg-none flex-row-reverse align-items-start align-items-xl-center gap-3 gap-xl-4 mb-4">
                  <div className="col col-xl-3 d-flex gap-2 align-items-center mb-3 mb-xl-0">
                    <p
                      onClick={OpenFilter}
                      className="col d-flex cate_filter_tigger align-items-center gap-2">
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
                </div>

                <hr className="acct_fil_line mb-0" />

                {activeTab == 1 && (
                  <>
                    {/* Mobile Table */}
                    <div className="col d-lg-none mb-4">
                      <div className="mob_table_con position-relative mb-3">
                        <div className="col row gx-4 gy-3">
                          <div className="col-12">
                            <label className="mob_table_head">Product</label>
                            <Link
                              to={"/account/help-details"}
                              className="mob_table_data">
                              Xbox game pack 20 Games Loaded Xbox Series X | S /
                              Xbox One FULL ACCESS Account Global
                            </Link>
                          </div>
                          <div className="col-6">
                            <label className="mob_table_head">ID</label>
                            <p className="mob_table_data">#20074</p>
                          </div>
                          <div className="col-6">
                            <label className="mob_table_head">Buyer</label>
                            <p className="mob_table_data blue">The Magician</p>
                          </div>

                          <div className="col-6">
                            <label className="mob_table_head">STATUS</label>
                            <span className="acct_table_data_tag green">
                              Completed
                            </span>
                          </div>
                          <div className="col-6">
                            <label className="mob_table_head">Date</label>
                            <p className="mob_table_data">
                              {" "}
                              2024-05-28 / 23:42
                            </p>
                          </div>
                        </div>
                        <div className="mob_table_icon_con position-absolute">
                          <div className="col-auto position-relative">
                            <CustomDropdown
                              trigger={() => (
                                <span className="mob_table_data_icon">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path d="M10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10C19 12.3869 18.0518 14.6761 16.364 16.364C14.6761 18.0518 12.3869 19 10 19C7.61305 19 5.32387 18.0518 3.63604 16.364C1.94821 14.6761 1 12.3869 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1ZM10 4.85714C9.83676 4.857 9.67529 4.8909 9.5259 4.95668C9.3765 5.02247 9.24247 5.11869 9.13237 5.2392C9.02226 5.35971 8.9385 5.50186 8.88644 5.65657C8.83438 5.81129 8.81515 5.97515 8.83 6.13771L9.29929 11.2883C9.31748 11.4614 9.39915 11.6217 9.52854 11.7383C9.65793 11.8548 9.82588 11.9192 10 11.9192C10.1741 11.9192 10.3421 11.8548 10.4715 11.7383C10.6009 11.6217 10.6825 11.4614 10.7007 11.2883L11.1687 6.13771C11.1836 5.97526 11.1644 5.8115 11.1124 5.65688C11.0604 5.50226 10.9767 5.36017 10.8668 5.23968C10.7568 5.11919 10.6229 5.02294 10.4737 4.95707C10.3245 4.89121 10.1631 4.85718 10 4.85714ZM10 15.1429C10.2728 15.1429 10.5344 15.0345 10.7273 14.8416C10.9202 14.6487 11.0286 14.3871 11.0286 14.1143C11.0286 13.8415 10.9202 13.5799 10.7273 13.387C10.5344 13.1941 10.2728 13.0857 10 13.0857C9.72721 13.0857 9.46558 13.1941 9.27269 13.387C9.0798 13.5799 8.97143 13.8415 8.97143 14.1143C8.97143 14.3871 9.0798 14.6487 9.27269 14.8416C9.46558 15.0345 9.72721 15.1429 10 15.1429Z" />
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
                          <div className="col-12">
                            <label className="mob_table_head">Product</label>
                            <Link
                              to={"/account/help-details"}
                              className="mob_table_data">
                              Xbox game pack 20 Games Loaded Xbox Series X | S /
                              Xbox One FULL ACCESS Account Global
                            </Link>
                          </div>
                          <div className="col-6">
                            <label className="mob_table_head">ID</label>
                            <p className="mob_table_data">#20074</p>
                          </div>
                          <div className="col-6">
                            <label className="mob_table_head">Buyer</label>
                            <p className="mob_table_data blue">The Magician</p>
                          </div>

                          <div className="col-6">
                            <label className="mob_table_head">STATUS</label>
                            <span className="acct_table_data_tag yellow">
                              Processing
                            </span>
                          </div>
                          <div className="col-6">
                            <label className="mob_table_head">Date</label>
                            <p className="mob_table_data">
                              {" "}
                              2024-05-28 / 23:42
                            </p>
                          </div>
                        </div>
                        <div className="mob_table_icon_con position-absolute">
                          <div className="col-auto position-relative">
                            <CustomDropdown
                              trigger={() => (
                                <span className="mob_table_data_icon">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path d="M10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10C19 12.3869 18.0518 14.6761 16.364 16.364C14.6761 18.0518 12.3869 19 10 19C7.61305 19 5.32387 18.0518 3.63604 16.364C1.94821 14.6761 1 12.3869 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1ZM10 4.85714C9.83676 4.857 9.67529 4.8909 9.5259 4.95668C9.3765 5.02247 9.24247 5.11869 9.13237 5.2392C9.02226 5.35971 8.9385 5.50186 8.88644 5.65657C8.83438 5.81129 8.81515 5.97515 8.83 6.13771L9.29929 11.2883C9.31748 11.4614 9.39915 11.6217 9.52854 11.7383C9.65793 11.8548 9.82588 11.9192 10 11.9192C10.1741 11.9192 10.3421 11.8548 10.4715 11.7383C10.6009 11.6217 10.6825 11.4614 10.7007 11.2883L11.1687 6.13771C11.1836 5.97526 11.1644 5.8115 11.1124 5.65688C11.0604 5.50226 10.9767 5.36017 10.8668 5.23968C10.7568 5.11919 10.6229 5.02294 10.4737 4.95707C10.3245 4.89121 10.1631 4.85718 10 4.85714ZM10 15.1429C10.2728 15.1429 10.5344 15.0345 10.7273 14.8416C10.9202 14.6487 11.0286 14.3871 11.0286 14.1143C11.0286 13.8415 10.9202 13.5799 10.7273 13.387C10.5344 13.1941 10.2728 13.0857 10 13.0857C9.72721 13.0857 9.46558 13.1941 9.27269 13.387C9.0798 13.5799 8.97143 13.8415 8.97143 14.1143C8.97143 14.3871 9.0798 14.6487 9.27269 14.8416C9.46558 15.0345 9.72721 15.1429 10 15.1429Z" />
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
                      <table className="table table-borderless acct_table mb-3">
                        <thead>
                          <tr>
                            <th className="acct_table_head">Product</th>
                            <th className="acct_table_head">ID</th>
                            <th className="acct_table_head d-flex align-items-center gap-1">
                              Issue
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
                            <th className="acct_table_head">
                              Preferred Solution
                            </th>
                            <th className="acct_table_head">Buyer</th>
                            <th className="acct_table_head">Status</th>
                            <th className="acct_table_head">Date</th>
                            <th className="acct_table_head">Updated</th>
                            <th className="acct_table_head"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="acct_table_row">
                            <td className="acct_table_data">
                              <Link
                                to={"/account/help-details"}
                                className="acct_table_data">
                                Xbox game pack 20 Games Loaded Xbox Series X | S
                                / Xbox One FULL ACCESS Account Global
                              </Link>
                            </td>
                            <td className="acct_table_data">#20074</td>
                            <td className="acct_table_data">Other Issue</td>
                            <td className="acct_table_data">
                              Refund Key Amount{" "}
                            </td>
                            <td className="acct_table_data blue text-nowrap">
                              The Magician
                            </td>
                            <td className="acct_table_data">
                              <span className="acct_table_data_tag">
                                Processing
                              </span>
                            </td>
                            <td className="acct_table_data text-nowrap">
                              2024-05-28 <br /> / 23:42
                            </td>
                            <td className="acct_table_data text-nowrap">
                              1 month ago
                            </td>
                            <td className="acct_table_data position-relative">
                              <CustomDropdown
                                trigger={() => (
                                  <span className="acct_table_data_icon">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20"
                                      height="20"
                                      viewBox="0 0 20 20"
                                      fill="currentColor">
                                      <path d="M10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10C19 12.3869 18.0518 14.6761 16.364 16.364C14.6761 18.0518 12.3869 19 10 19C7.61305 19 5.32387 18.0518 3.63604 16.364C1.94821 14.6761 1 12.3869 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1ZM10 4.85714C9.83676 4.857 9.67529 4.8909 9.5259 4.95668C9.3765 5.02247 9.24247 5.11869 9.13237 5.2392C9.02226 5.35971 8.9385 5.50186 8.88644 5.65657C8.83438 5.81129 8.81515 5.97515 8.83 6.13771L9.29929 11.2883C9.31748 11.4614 9.39915 11.6217 9.52854 11.7383C9.65793 11.8548 9.82588 11.9192 10 11.9192C10.1741 11.9192 10.3421 11.8548 10.4715 11.7383C10.6009 11.6217 10.6825 11.4614 10.7007 11.2883L11.1687 6.13771C11.1836 5.97526 11.1644 5.8115 11.1124 5.65688C11.0604 5.50226 10.9767 5.36017 10.8668 5.23968C10.7568 5.11919 10.6229 5.02294 10.4737 4.95707C10.3245 4.89121 10.1631 4.85718 10 4.85714ZM10 15.1429C10.2728 15.1429 10.5344 15.0345 10.7273 14.8416C10.9202 14.6487 11.0286 14.3871 11.0286 14.1143C11.0286 13.8415 10.9202 13.5799 10.7273 13.387C10.5344 13.1941 10.2728 13.0857 10 13.0857C9.72721 13.0857 9.46558 13.1941 9.27269 13.387C9.0798 13.5799 8.97143 13.8415 8.97143 14.1143C8.97143 14.3871 9.0798 14.6487 9.27269 14.8416C9.46558 15.0345 9.72721 15.1429 10 15.1429Z" />
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
                          <tr className="acct_table_row active">
                            <td className="acct_table_data">
                              <Link
                                to={"/account/help-details"}
                                className="acct_table_data">
                                Xbox game pack 20 Games Loaded Xbox Series X | S
                                / Xbox One FULL ACCESS Account Global
                              </Link>
                            </td>
                            <td className="acct_table_data">#20074</td>
                            <td className="acct_table_data">Other Issue</td>
                            <td className="acct_table_data">
                              Refund Key Amount{" "}
                            </td>
                            <td className="acct_table_data blue text-nowrap">
                              The Magician
                            </td>
                            <td className="acct_table_data">
                              <span className="acct_table_data_tag green">
                                Completed
                              </span>
                            </td>
                            <td className="acct_table_data text-nowrap">
                              2024-05-28 <br /> / 23:42
                            </td>
                            <td className="acct_table_data text-nowrap">
                              1 month ago
                            </td>
                            <td className="acct_table_data position-relative">
                              <CustomDropdown
                                trigger={() => (
                                  <span className="acct_table_data_icon">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20"
                                      height="20"
                                      viewBox="0 0 20 20"
                                      fill="currentColor">
                                      <path d="M10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10C19 12.3869 18.0518 14.6761 16.364 16.364C14.6761 18.0518 12.3869 19 10 19C7.61305 19 5.32387 18.0518 3.63604 16.364C1.94821 14.6761 1 12.3869 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1ZM10 4.85714C9.83676 4.857 9.67529 4.8909 9.5259 4.95668C9.3765 5.02247 9.24247 5.11869 9.13237 5.2392C9.02226 5.35971 8.9385 5.50186 8.88644 5.65657C8.83438 5.81129 8.81515 5.97515 8.83 6.13771L9.29929 11.2883C9.31748 11.4614 9.39915 11.6217 9.52854 11.7383C9.65793 11.8548 9.82588 11.9192 10 11.9192C10.1741 11.9192 10.3421 11.8548 10.4715 11.7383C10.6009 11.6217 10.6825 11.4614 10.7007 11.2883L11.1687 6.13771C11.1836 5.97526 11.1644 5.8115 11.1124 5.65688C11.0604 5.50226 10.9767 5.36017 10.8668 5.23968C10.7568 5.11919 10.6229 5.02294 10.4737 4.95707C10.3245 4.89121 10.1631 4.85718 10 4.85714ZM10 15.1429C10.2728 15.1429 10.5344 15.0345 10.7273 14.8416C10.9202 14.6487 11.0286 14.3871 11.0286 14.1143C11.0286 13.8415 10.9202 13.5799 10.7273 13.387C10.5344 13.1941 10.2728 13.0857 10 13.0857C9.72721 13.0857 9.46558 13.1941 9.27269 13.387C9.0798 13.5799 8.97143 13.8415 8.97143 14.1143C8.97143 14.3871 9.0798 14.6487 9.27269 14.8416C9.46558 15.0345 9.72721 15.1429 10 15.1429Z" />
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
                          <tr className="acct_table_row">
                            <td className="acct_table_data">
                              <Link
                                to={"/account/help-details"}
                                className="acct_table_data">
                                Xbox game pack 20 Games Loaded Xbox Series X | S
                                / Xbox One FULL ACCESS Account Global
                              </Link>
                            </td>
                            <td className="acct_table_data">#20074</td>
                            <td className="acct_table_data">Other Issue</td>
                            <td className="acct_table_data">
                              Refund Key Amount{" "}
                            </td>
                            <td className="acct_table_data blue text-nowrap">
                              The Magician
                            </td>
                            <td className="acct_table_data">
                              <span className="acct_table_data_tag">
                                Processing
                              </span>
                            </td>
                            <td className="acct_table_data text-nowrap">
                              2024-05-28 <br /> / 23:42
                            </td>
                            <td className="acct_table_data text-nowrap">
                              1 month ago
                            </td>
                            <td className="acct_table_data position-relative">
                              <CustomDropdown
                                trigger={() => (
                                  <span className="acct_table_data_icon">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20"
                                      height="20"
                                      viewBox="0 0 20 20"
                                      fill="currentColor">
                                      <path d="M10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10C19 12.3869 18.0518 14.6761 16.364 16.364C14.6761 18.0518 12.3869 19 10 19C7.61305 19 5.32387 18.0518 3.63604 16.364C1.94821 14.6761 1 12.3869 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1ZM10 4.85714C9.83676 4.857 9.67529 4.8909 9.5259 4.95668C9.3765 5.02247 9.24247 5.11869 9.13237 5.2392C9.02226 5.35971 8.9385 5.50186 8.88644 5.65657C8.83438 5.81129 8.81515 5.97515 8.83 6.13771L9.29929 11.2883C9.31748 11.4614 9.39915 11.6217 9.52854 11.7383C9.65793 11.8548 9.82588 11.9192 10 11.9192C10.1741 11.9192 10.3421 11.8548 10.4715 11.7383C10.6009 11.6217 10.6825 11.4614 10.7007 11.2883L11.1687 6.13771C11.1836 5.97526 11.1644 5.8115 11.1124 5.65688C11.0604 5.50226 10.9767 5.36017 10.8668 5.23968C10.7568 5.11919 10.6229 5.02294 10.4737 4.95707C10.3245 4.89121 10.1631 4.85718 10 4.85714ZM10 15.1429C10.2728 15.1429 10.5344 15.0345 10.7273 14.8416C10.9202 14.6487 11.0286 14.3871 11.0286 14.1143C11.0286 13.8415 10.9202 13.5799 10.7273 13.387C10.5344 13.1941 10.2728 13.0857 10 13.0857C9.72721 13.0857 9.46558 13.1941 9.27269 13.387C9.0798 13.5799 8.97143 13.8415 8.97143 14.1143C8.97143 14.3871 9.0798 14.6487 9.27269 14.8416C9.46558 15.0345 9.72721 15.1429 10 15.1429Z" />
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
                  </>
                )}
                {activeTab == 2 && (
                  <>
                    {/* Mobile Table */}
                    <div className="col d-lg-none mb-4">
                      <div className="mob_table_con position-relative mb-3">
                        <div className="col row gx-4 gy-3">
                          <div className="col-12">
                            <label className="mob_table_head">Product</label>
                            <Link
                              to={"/account/help-details"}
                              className="mob_table_data">
                              Cyberpunk 2077 & Phantom Liberty Bundle Xbox Series X | S / Xbox One FULL ACCESS Account Global
                            </Link>
                          </div>
                          <div className="col-6">
                            <label className="mob_table_head">ID</label>
                            <p className="mob_table_data">#20074</p>
                          </div>
                          <div className="col-6">
                            <label className="mob_table_head">Buyer</label>
                            <p className="mob_table_data blue">The Magician</p>
                          </div>

                          <div className="col-6">
                            <label className="mob_table_head">STATUS</label>
                            <span className="acct_table_data_tag green">
                              Completed
                            </span>
                          </div>
                          <div className="col-6">
                            <label className="mob_table_head">Date</label>
                            <p className="mob_table_data">
                              {" "}
                              2024-05-28 / 23:42
                            </p>
                          </div>
                        </div>
                        <div className="mob_table_icon_con position-absolute">
                          <div className="col-auto position-relative">
                            <CustomDropdown
                              trigger={() => (
                                <span className="mob_table_data_icon">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path d="M10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10C19 12.3869 18.0518 14.6761 16.364 16.364C14.6761 18.0518 12.3869 19 10 19C7.61305 19 5.32387 18.0518 3.63604 16.364C1.94821 14.6761 1 12.3869 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1ZM10 4.85714C9.83676 4.857 9.67529 4.8909 9.5259 4.95668C9.3765 5.02247 9.24247 5.11869 9.13237 5.2392C9.02226 5.35971 8.9385 5.50186 8.88644 5.65657C8.83438 5.81129 8.81515 5.97515 8.83 6.13771L9.29929 11.2883C9.31748 11.4614 9.39915 11.6217 9.52854 11.7383C9.65793 11.8548 9.82588 11.9192 10 11.9192C10.1741 11.9192 10.3421 11.8548 10.4715 11.7383C10.6009 11.6217 10.6825 11.4614 10.7007 11.2883L11.1687 6.13771C11.1836 5.97526 11.1644 5.8115 11.1124 5.65688C11.0604 5.50226 10.9767 5.36017 10.8668 5.23968C10.7568 5.11919 10.6229 5.02294 10.4737 4.95707C10.3245 4.89121 10.1631 4.85718 10 4.85714ZM10 15.1429C10.2728 15.1429 10.5344 15.0345 10.7273 14.8416C10.9202 14.6487 11.0286 14.3871 11.0286 14.1143C11.0286 13.8415 10.9202 13.5799 10.7273 13.387C10.5344 13.1941 10.2728 13.0857 10 13.0857C9.72721 13.0857 9.46558 13.1941 9.27269 13.387C9.0798 13.5799 8.97143 13.8415 8.97143 14.1143C8.97143 14.3871 9.0798 14.6487 9.27269 14.8416C9.46558 15.0345 9.72721 15.1429 10 15.1429Z" />
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
                          <div className="col-12">
                            <label className="mob_table_head">Product</label>
                            <Link
                              to={"/account/help-details"}
                              className="mob_table_data">
                              Cyberpunk 2077 & Phantom Liberty Bundle Xbox Series X | S / Xbox One FULL ACCESS Account Global
                            </Link>
                          </div>
                          <div className="col-6">
                            <label className="mob_table_head">ID</label>
                            <p className="mob_table_data">#20074</p>
                          </div>
                          <div className="col-6">
                            <label className="mob_table_head">Buyer</label>
                            <p className="mob_table_data blue">The Magician</p>
                          </div>

                          <div className="col-6">
                            <label className="mob_table_head">STATUS</label>
                            <span className="acct_table_data_tag yellow">
                              Processing
                            </span>
                          </div>
                          <div className="col-6">
                            <label className="mob_table_head">Date</label>
                            <p className="mob_table_data">
                              {" "}
                              2024-05-28 / 23:42
                            </p>
                          </div>
                        </div>
                        <div className="mob_table_icon_con position-absolute">
                          <div className="col-auto position-relative">
                            <CustomDropdown
                              trigger={() => (
                                <span className="mob_table_data_icon">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path d="M10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10C19 12.3869 18.0518 14.6761 16.364 16.364C14.6761 18.0518 12.3869 19 10 19C7.61305 19 5.32387 18.0518 3.63604 16.364C1.94821 14.6761 1 12.3869 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1ZM10 4.85714C9.83676 4.857 9.67529 4.8909 9.5259 4.95668C9.3765 5.02247 9.24247 5.11869 9.13237 5.2392C9.02226 5.35971 8.9385 5.50186 8.88644 5.65657C8.83438 5.81129 8.81515 5.97515 8.83 6.13771L9.29929 11.2883C9.31748 11.4614 9.39915 11.6217 9.52854 11.7383C9.65793 11.8548 9.82588 11.9192 10 11.9192C10.1741 11.9192 10.3421 11.8548 10.4715 11.7383C10.6009 11.6217 10.6825 11.4614 10.7007 11.2883L11.1687 6.13771C11.1836 5.97526 11.1644 5.8115 11.1124 5.65688C11.0604 5.50226 10.9767 5.36017 10.8668 5.23968C10.7568 5.11919 10.6229 5.02294 10.4737 4.95707C10.3245 4.89121 10.1631 4.85718 10 4.85714ZM10 15.1429C10.2728 15.1429 10.5344 15.0345 10.7273 14.8416C10.9202 14.6487 11.0286 14.3871 11.0286 14.1143C11.0286 13.8415 10.9202 13.5799 10.7273 13.387C10.5344 13.1941 10.2728 13.0857 10 13.0857C9.72721 13.0857 9.46558 13.1941 9.27269 13.387C9.0798 13.5799 8.97143 13.8415 8.97143 14.1143C8.97143 14.3871 9.0798 14.6487 9.27269 14.8416C9.46558 15.0345 9.72721 15.1429 10 15.1429Z" />
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
                      <table className="table table-borderless acct_table mb-3">
                        <thead>
                          <tr>
                            <th className="acct_table_head">Product</th>
                            <th className="acct_table_head">ID</th>
                            <th className="acct_table_head d-flex align-items-center gap-1">
                              Issue
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
                            <th className="acct_table_head">
                              Preferred Solution
                            </th>
                            <th className="acct_table_head">Buyer</th>
                            <th className="acct_table_head">Status</th>
                            <th className="acct_table_head">Date</th>
                            <th className="acct_table_head">Updated</th>
                            <th className="acct_table_head"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="acct_table_row">
                            <td className="acct_table_data">
                              <Link
                                to={"/account/help-details"}
                                className="acct_table_data">
                               Cyberpunk 2077 & Phantom Liberty Bundle Xbox Series X | S / Xbox One FULL ACCESS Account Global
                              </Link>
                            </td>
                            <td className="acct_table_data">#20074</td>
                            <td className="acct_table_data">Other Issue</td>
                            <td className="acct_table_data">
                              Refund Key Amount{" "}
                            </td>
                            <td className="acct_table_data blue text-nowrap">
                              The Magician
                            </td>
                            <td className="acct_table_data">
                              <span className="acct_table_data_tag">
                                Processing
                              </span>
                            </td>
                            <td className="acct_table_data text-nowrap">
                              2024-05-28 <br /> / 23:42
                            </td>
                            <td className="acct_table_data text-nowrap">
                              1 month ago
                            </td>
                            <td className="acct_table_data position-relative">
                              <CustomDropdown
                                trigger={() => (
                                  <span className="acct_table_data_icon">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20"
                                      height="20"
                                      viewBox="0 0 20 20"
                                      fill="currentColor">
                                      <path d="M10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10C19 12.3869 18.0518 14.6761 16.364 16.364C14.6761 18.0518 12.3869 19 10 19C7.61305 19 5.32387 18.0518 3.63604 16.364C1.94821 14.6761 1 12.3869 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1ZM10 4.85714C9.83676 4.857 9.67529 4.8909 9.5259 4.95668C9.3765 5.02247 9.24247 5.11869 9.13237 5.2392C9.02226 5.35971 8.9385 5.50186 8.88644 5.65657C8.83438 5.81129 8.81515 5.97515 8.83 6.13771L9.29929 11.2883C9.31748 11.4614 9.39915 11.6217 9.52854 11.7383C9.65793 11.8548 9.82588 11.9192 10 11.9192C10.1741 11.9192 10.3421 11.8548 10.4715 11.7383C10.6009 11.6217 10.6825 11.4614 10.7007 11.2883L11.1687 6.13771C11.1836 5.97526 11.1644 5.8115 11.1124 5.65688C11.0604 5.50226 10.9767 5.36017 10.8668 5.23968C10.7568 5.11919 10.6229 5.02294 10.4737 4.95707C10.3245 4.89121 10.1631 4.85718 10 4.85714ZM10 15.1429C10.2728 15.1429 10.5344 15.0345 10.7273 14.8416C10.9202 14.6487 11.0286 14.3871 11.0286 14.1143C11.0286 13.8415 10.9202 13.5799 10.7273 13.387C10.5344 13.1941 10.2728 13.0857 10 13.0857C9.72721 13.0857 9.46558 13.1941 9.27269 13.387C9.0798 13.5799 8.97143 13.8415 8.97143 14.1143C8.97143 14.3871 9.0798 14.6487 9.27269 14.8416C9.46558 15.0345 9.72721 15.1429 10 15.1429Z" />
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
                          <tr className="acct_table_row active">
                            <td className="acct_table_data">
                              <Link
                                to={"/account/help-details"}
                                className="acct_table_data">
                               Cyberpunk 2077 & Phantom Liberty Bundle Xbox Series X | S / Xbox One FULL ACCESS Account Global
                              </Link>
                            </td>
                            <td className="acct_table_data">#20074</td>
                            <td className="acct_table_data">Other Issue</td>
                            <td className="acct_table_data">
                              Refund Key Amount{" "}
                            </td>
                            <td className="acct_table_data blue text-nowrap">
                              The Magician
                            </td>
                            <td className="acct_table_data">
                              <span className="acct_table_data_tag green">
                                Completed
                              </span>
                            </td>
                            <td className="acct_table_data text-nowrap">
                              2024-05-28 <br /> / 23:42
                            </td>
                            <td className="acct_table_data text-nowrap">
                              1 month ago
                            </td>
                            <td className="acct_table_data position-relative">
                              <CustomDropdown
                                trigger={() => (
                                  <span className="acct_table_data_icon">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20"
                                      height="20"
                                      viewBox="0 0 20 20"
                                      fill="currentColor">
                                      <path d="M10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10C19 12.3869 18.0518 14.6761 16.364 16.364C14.6761 18.0518 12.3869 19 10 19C7.61305 19 5.32387 18.0518 3.63604 16.364C1.94821 14.6761 1 12.3869 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1ZM10 4.85714C9.83676 4.857 9.67529 4.8909 9.5259 4.95668C9.3765 5.02247 9.24247 5.11869 9.13237 5.2392C9.02226 5.35971 8.9385 5.50186 8.88644 5.65657C8.83438 5.81129 8.81515 5.97515 8.83 6.13771L9.29929 11.2883C9.31748 11.4614 9.39915 11.6217 9.52854 11.7383C9.65793 11.8548 9.82588 11.9192 10 11.9192C10.1741 11.9192 10.3421 11.8548 10.4715 11.7383C10.6009 11.6217 10.6825 11.4614 10.7007 11.2883L11.1687 6.13771C11.1836 5.97526 11.1644 5.8115 11.1124 5.65688C11.0604 5.50226 10.9767 5.36017 10.8668 5.23968C10.7568 5.11919 10.6229 5.02294 10.4737 4.95707C10.3245 4.89121 10.1631 4.85718 10 4.85714ZM10 15.1429C10.2728 15.1429 10.5344 15.0345 10.7273 14.8416C10.9202 14.6487 11.0286 14.3871 11.0286 14.1143C11.0286 13.8415 10.9202 13.5799 10.7273 13.387C10.5344 13.1941 10.2728 13.0857 10 13.0857C9.72721 13.0857 9.46558 13.1941 9.27269 13.387C9.0798 13.5799 8.97143 13.8415 8.97143 14.1143C8.97143 14.3871 9.0798 14.6487 9.27269 14.8416C9.46558 15.0345 9.72721 15.1429 10 15.1429Z" />
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
                          <tr className="acct_table_row">
                            <td className="acct_table_data">
                              <Link
                                to={"/account/help-details"}
                                className="acct_table_data">
                               Cyberpunk 2077 & Phantom Liberty Bundle Xbox Series X | S / Xbox One FULL ACCESS Account Global
                              </Link>
                            </td>
                            <td className="acct_table_data">#20074</td>
                            <td className="acct_table_data">Other Issue</td>
                            <td className="acct_table_data">
                              Refund Key Amount{" "}
                            </td>
                            <td className="acct_table_data blue text-nowrap">
                              The Magician
                            </td>
                            <td className="acct_table_data">
                              <span className="acct_table_data_tag">
                                Processing
                              </span>
                            </td>
                            <td className="acct_table_data text-nowrap">
                              2024-05-28 <br /> / 23:42
                            </td>
                            <td className="acct_table_data text-nowrap">
                              1 month ago
                            </td>
                            <td className="acct_table_data position-relative">
                              <CustomDropdown
                                trigger={() => (
                                  <span className="acct_table_data_icon">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20"
                                      height="20"
                                      viewBox="0 0 20 20"
                                      fill="currentColor">
                                      <path d="M10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10C19 12.3869 18.0518 14.6761 16.364 16.364C14.6761 18.0518 12.3869 19 10 19C7.61305 19 5.32387 18.0518 3.63604 16.364C1.94821 14.6761 1 12.3869 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1ZM10 4.85714C9.83676 4.857 9.67529 4.8909 9.5259 4.95668C9.3765 5.02247 9.24247 5.11869 9.13237 5.2392C9.02226 5.35971 8.9385 5.50186 8.88644 5.65657C8.83438 5.81129 8.81515 5.97515 8.83 6.13771L9.29929 11.2883C9.31748 11.4614 9.39915 11.6217 9.52854 11.7383C9.65793 11.8548 9.82588 11.9192 10 11.9192C10.1741 11.9192 10.3421 11.8548 10.4715 11.7383C10.6009 11.6217 10.6825 11.4614 10.7007 11.2883L11.1687 6.13771C11.1836 5.97526 11.1644 5.8115 11.1124 5.65688C11.0604 5.50226 10.9767 5.36017 10.8668 5.23968C10.7568 5.11919 10.6229 5.02294 10.4737 4.95707C10.3245 4.89121 10.1631 4.85718 10 4.85714ZM10 15.1429C10.2728 15.1429 10.5344 15.0345 10.7273 14.8416C10.9202 14.6487 11.0286 14.3871 11.0286 14.1143C11.0286 13.8415 10.9202 13.5799 10.7273 13.387C10.5344 13.1941 10.2728 13.0857 10 13.0857C9.72721 13.0857 9.46558 13.1941 9.27269 13.387C9.0798 13.5799 8.97143 13.8415 8.97143 14.1143C8.97143 14.3871 9.0798 14.6487 9.27269 14.8416C9.46558 15.0345 9.72721 15.1429 10 15.1429Z" />
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
                  </>
                )}

                <div className="col d-flex justify-content-center">
                  <Pagination />
                </div>
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
