/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Pagination from "../componets/utility/Pagination";
import AccountSideBar from "../componets/account/AccountSideBar";
import MainHeader from "../componets/MainHeader";
import CustomDropdown from "../componets/utility/CustomDropdown";
import MainFooter from "../componets/MainFooter";

export default function Support() {
  const breadCrums = [
    {
      title: "Support Ticket",
      url: "/account/support",
    },
  ];

  const breadCrumsList = breadCrums?.map((item, index) => {
    return (
      <Link to={item.url} key={index}>
        <p className="crumb_link">/ {item.title}</p>
      </Link>
    );
  });

  return (
    <>
      <div
        className="d-flex w-100 main_house_con"
        style={{
          background: "none",
        }}>
        <AccountSideBar activeLink={"support"} />

        <div className="col housing_con d-flex flex-column">
          <MainHeader
            showHeader={true}
            isAccount={true}
            breadCrums={breadCrums}
            activeLink={"support"}
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
                <div className="col d-flex gap-3 flex-wrap justify-content-between">
                  <div className="col-12 col-md-6 col-xl-4 acct_box ">
                    <input
                      type="text"
                      className="input_box"
                      placeholder="Search for..."
                    />
                  </div>

                  <Link to={"/submit-request"}>
                    <button
                      type="button"
                      className="acct_offer_btn3 d-flex gap-2 justify-content-center align-items-center">
                      <span className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"></path>
                        </svg>
                      </span>
                      New Ticket
                    </button>
                  </Link>
                </div>

                <hr className="acct_fil_line mb-0" />

                {/* Mobile Table */}
                <div className="col d-lg-none mb-4">
                  <div className="mob_table_con position-relative mb-3">
                    <div className="col row gx-4 gy-3">
                      <div className="col-6">
                        <label className="mob_table_head">ID</label>
                        <Link
                          to={"/account/support-details"}
                          className="mob_table_data">
                          #20074
                        </Link>
                      </div>
                      <div className="col-6">
                        <label className="mob_table_head">Subject</label>
                        <p className="mob_table_data">Testing Support Ticket</p>
                      </div>

                      <div className="col-6">
                        <label className="mob_table_head">STATUS</label>
                        <span className="acct_table_data_tag yellow">
                          Responded
                        </span>
                      </div>
                      <div className="col-6">
                        <label className="mob_table_head">Updated</label>
                        <p className="mob_table_data">3 hours ago</p>
                      </div>
                      <div className="col-6">
                        <label className="mob_table_head">Created</label>
                        <p className="mob_table_data">2024-05-28 / 23:42</p>
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
                                <Link to={"/account/support-details"}>
                                  <p className="acct_table_drop_link">View</p>
                                </Link>
                                <Link>
                                  <p className="acct_table_drop_link">Delete</p>
                                </Link>
                              </div>
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mob_table_con position-relative mb-3">
                    <div className="col row gx-4 gy-3">
                      <div className="col-6">
                        <label className="mob_table_head">ID</label>
                        <Link
                          to={"/account/support-details"}
                          className="mob_table_data">
                          #20074
                        </Link>
                      </div>
                      <div className="col-6">
                        <label className="mob_table_head">Subject</label>
                        <p className="mob_table_data">Testing Support Ticket</p>
                      </div>

                      <div className="col-6">
                        <label className="mob_table_head">STATUS</label>
                        <span className="acct_table_data_tag green">
                          Closed
                        </span>
                      </div>
                      <div className="col-6">
                        <label className="mob_table_head">Updated</label>
                        <p className="mob_table_data">3 hours ago</p>
                      </div>
                      <div className="col-6">
                        <label className="mob_table_head">Created</label>
                        <p className="mob_table_data">2024-05-28 / 23:42</p>
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
                                <Link to={"/account/support-details"}>
                                  <p className="acct_table_drop_link">View</p>
                                </Link>
                                <Link>
                                  <p className="acct_table_drop_link">Delete</p>
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
                        <th className="acct_table_head">ID</th>
                        <th className="acct_table_head">Subject</th>
                        <th className="acct_table_head">STATUS</th>
                        <th className="acct_table_head">Updated</th>
                        <th className="acct_table_head">Created</th>
                        <th className="acct_table_head"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="acct_table_row">
                        <td className="acct_table_data">
                          <Link
                            to={"/account/support-details"}
                            className="acct_table_data">
                            #20074
                          </Link>
                        </td>
                        <td className="acct_table_data">
                          Testing Support Ticket
                        </td>
                        <td className="acct_table_data col-4">
                          <span className="acct_table_data_tag yellow">
                            Responded
                          </span>
                        </td>
                        <td className="acct_table_data">3 hours ago</td>
                        <td className="acct_table_data text-nowrap">
                          2024-05-28 <br /> / 23:42
                        </td>
                        <td className="acct_table_data position-relative">
                          <CustomDropdown
                            trigger={() => (
                              <span className="acct_table_data_icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
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
                                <Link to={"/account/support-details"}>
                                  <p className="acct_table_drop_link">View</p>
                                </Link>
                                <Link>
                                  <p className="acct_table_drop_link">Delete</p>
                                </Link>
                              </div>
                            }
                          />
                        </td>
                      </tr>
                      <tr className="acct_table_row">
                        <td className="acct_table_data">
                          <Link
                            to={"/account/support-details"}
                            className="acct_table_data">
                            #20074
                          </Link>
                        </td>
                        <td className="acct_table_data">
                          Testing Support Ticket
                        </td>
                        <td className="acct_table_data col-4">
                          <span className="acct_table_data_tag green">
                            Closed
                          </span>
                        </td>
                        <td className="acct_table_data">3 hours ago</td>
                        <td className="acct_table_data text-nowrap">
                          2024-05-28 <br /> / 23:42
                        </td>
                        <td className="acct_table_data position-relative">
                          <CustomDropdown
                            trigger={() => (
                              <span className="acct_table_data_icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
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
                                <Link to={"/account/support-details"}>
                                  <p className="acct_table_drop_link">View</p>
                                </Link>
                                <Link>
                                  <p className="acct_table_drop_link">Delete</p>
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
