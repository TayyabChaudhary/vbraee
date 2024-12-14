import { Link } from "react-router-dom";
import Pagination from "../componets/utility/Pagination";
import AccountSideBar from "../componets/account/AccountSideBar";
import MainHeader from "../componets/MainHeader";
import CustomDropdown from "../componets/utility/CustomDropdown";
import MainFooter from "../componets/MainFooter";

export default function Reviews() {
  const breadCrums = [
    {
      title: "Reviews",
      url: "/account/reviews",
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
        <AccountSideBar activeLink={"reviews"} />

        <div className="col housing_con d-flex flex-column">
          <MainHeader
            showHeader={true}
            isAccount={true}
            breadCrums={breadCrums}
            activeLink={"reviews"}
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
                <div className="col row row-cols-2 row-cols-lg-4 g-2 justify-content-between mb-4">
                  <div className="col">
                    <div className="col acct_off_cont">
                      <p className="acct_off_num mb-2">4.9 / 5</p>
                      <p className="acct_off_head">your rating</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="col acct_off_cont">
                      <p className="acct_off_num mb-2">608</p>
                      <p className="acct_off_head">Total Reviews</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="col acct_off_cont">
                      <p className="acct_off_num mb-2">97%</p>
                      <p className="acct_off_head">Positive Feedback</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="col acct_off_cont">
                      <p className="acct_off_num mb-2">29</p>
                      <p className="acct_off_head">Followers</p>
                    </div>
                  </div>
                </div>

                <hr className="acct_fil_line mb-0" />

                {/* Mobile Table */}
                <div className="col d-lg-none mb-4">
                  <div className="mob_table_con position-relative mb-3">
                    <div className="col row gx-4 gy-3">
                      <div className="col-6">
                        <label className="mob_table_head">Id</label>
                        <Link className="mob_table_data">#20074</Link>
                      </div>
                      <div className="col-6">
                        <label className="mob_table_head">Order ID</label>
                        <p className="mob_table_data">2968</p>
                      </div>
                      <div className="col-6">
                        <label className="mob_table_head">Buyer</label>
                        <p className="mob_table_data blue">Rsf_Perkalot _</p>
                      </div>
                      <div className="col-6">
                        <label className="mob_table_head">Rating</label>
                        <p className="mob_table_data bold">
                          <span className="acct_table_data_icon blue">
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
                          4.9
                        </p>
                      </div>
                      <div className="col-12">
                        <label className="mob_table_head">Latest Reviews</label>
                        <p className="mob_table_data">
                          Game is the best and it was fast receiving it!!!!
                        </p>
                      </div>

                      <div className="col-12">
                        <label className="mob_table_head">Products</label>
                        <p className="mob_table_data blue">
                          EA Sports FC 24 Xbox Series X | S / Xbox One FULL
                          ACCESS Account Global
                        </p>
                      </div>
                      <div className="col-6">
                        <label className="mob_table_head">Date</label>
                        <p className="mob_table_data">2023-10-14 / 01:04</p>
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
                            </div>
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mob_table_con position-relative mb-3">
                    <div className="col row gx-4 gy-3">
                      <div className="col-6">
                        <label className="mob_table_head">Id</label>
                        <Link className="mob_table_data">#20074</Link>
                      </div>
                      <div className="col-6">
                        <label className="mob_table_head">Order ID</label>
                        <p className="mob_table_data">2968</p>
                      </div>
                      <div className="col-6">
                        <label className="mob_table_head">Buyer</label>
                        <p className="mob_table_data blue">Rsf_Perkalot _</p>
                      </div>
                      <div className="col-6">
                        <label className="mob_table_head">Rating</label>
                        <p className="mob_table_data bold">
                          <span className="acct_table_data_icon blue">
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
                          4.9
                        </p>
                      </div>
                      <div className="col-12">
                        <label className="mob_table_head">Latest Reviews</label>
                        <p className="mob_table_data">
                          Game is the best and it was fast receiving it!!!!
                        </p>
                      </div>

                      <div className="col-12">
                        <label className="mob_table_head">Products</label>
                        <p className="mob_table_data blue">
                          EA Sports FC 24 Xbox Series X | S / Xbox One FULL
                          ACCESS Account Global
                        </p>
                      </div>
                      <div className="col-6">
                        <label className="mob_table_head">Date</label>
                        <p className="mob_table_data">2023-10-14 / 01:04</p>
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
                        <th className="acct_table_head">Order Id</th>
                        <th className="acct_table_head">Buyer</th>
                        <th className="acct_table_head">Rating</th>
                        <th className="acct_table_head">Latest Reviews</th>
                        <th className="acct_table_head">Product</th>
                        <th className="acct_table_head">Date</th>
                        <th className="acct_table_head"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="acct_table_row">
                        <td className="acct_table_data">#20074</td>
                        <td className="acct_table_data ">2968</td>
                        <td className="acct_table_data">Rsf_Perkalot _</td>
                        <td className="acct_table_data">
                          <span className="acct_table_data_icon blue">
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
                          4.9
                        </td>
                        <td className="acct_table_data">
                          Game is the best and it was fast receiving it!!!!
                        </td>
                        <td className="acct_table_data blue">
                          EA Sports FC 24 Xbox Series X | S / Xbox One FULL
                          ACCESS Account Global
                        </td>
                        <td className="acct_table_data text-nowrap">
                          2023-10-14 <br /> / 01:04
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
