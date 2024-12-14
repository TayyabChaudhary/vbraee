import { Link } from "react-router-dom";
import AccountSideBar from "../componets/account/AccountSideBar";
import MainHeader from "../componets/MainHeader";
import CustomAccordion from "../componets/utility/CustomAccordion";
import CustomDropdown from "../componets/utility/CustomDropdown";

export default function OfferDetails() {
  const breadCrums = [
    {
      title: "New Offers",
      url: "/account/new-offers",
    },
    {
      title: "Product Key",
      url: "/account/offer-details",
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
        <AccountSideBar activeLink={'my-offers'} />

        <div className="col housing_con d-flex flex-column">
          <MainHeader
            showHeader={true}
            isAccount={true}
            breadCrums={breadCrums}
            activeLink={'my-offers'}
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
              <div className="col d-flex flex-wrap gap-3 gap-xl-4 align-items-center">
                <p className="acct_offer_title">Product Keys</p>
                <div className="col-12 col-xl d-flex flex-wrap gap-3">
                  <div className="d-flex align-items-center gap-2">
                    <input
                      className="acct_offer_check"
                      type="radio"
                      value=""
                      name="type"
                      id="defaultCheck1"
                      checked
                      onChange={() => {}}
                    />
                    <label className="acct_offer_text" htmlFor="defaultCheck1">
                      Sell with instant delivery
                    </label>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <input
                      className="acct_offer_check"
                      type="radio"
                      value=""
                      name="type"
                      id="defaultCheck2"
                      onChange={() => {}}
                    />
                    <label className="acct_offer_text" htmlFor="defaultCheck2">
                      Send key after purchase manually
                    </label>
                  </div>
                </div>

                <div className="col col-lg-auto offer_save_btn_con">
                  <button
                    type="button"
                    className="col-12 acct_offer_btn ms-xl-auto">
                    Save
                  </button>
                </div>
              </div>

              <hr className="acct_fil_line my-4" />

              <div className="col">
                <CustomAccordion
                  isActive={true}
                  trigger={(isOpen) => (
                    <div className="col mb-4">
                      <p className="acct_offer_title d-flex gap-3 align-items-center">
                        <span
                          className={"icon " + (isOpen ? "" : "rotate_180")}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="m5 15l7-7l7 7"></path>
                          </svg>
                        </span>
                        1. Select Products
                      </p>
                    </div>
                  )}
                  content={
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
                              <p className="col mob_table_data">
                                Xbox game pack 20 Games Loaded Xbox Series X | S
                                / Xbox One FULL ACCESS Account Global
                              </p>
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
                              <label className="mob_table_head">
                                Product type
                              </label>
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
                              <Link
                                to={"/account/offer-details"}
                                className="col-12">
                                <span className="acct_table_data_tag gray">
                                  Change
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Desktop Table */}
                      <div className="table-responsive d-none d-lg-block">
                        <table className="table table-borderless acct_table">
                          <tbody>
                            <tr className="acct_table_row mb-2">
                              <td className="acct_table_data col-1">
                                <img
                                  src={"../assets/images/game1.png"}
                                  alt=""
                                  className="acct_table_data_img"
                                />
                              </td>
                              <td className="acct_table_data col-4">
                                Xbox game pack 20 Games Loaded Xbox Series X | S
                                / Xbox One FULL ACCESS Account Global
                              </td>
                              <td className="acct_table_data text-center">
                                <span className="acct_table_data_icon text-white">
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
                              <td className="acct_table_data text-center">
                                <span className="acct_table_data_icon text-white">
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
                              <td className="acct_table_data text-center">
                                <span className="acct_table_data_icon text-white">
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
                              <td className="acct_table_data text-center">
                                24H
                              </td>
                              <td className="acct_table_data text-center">
                                $46.98
                              </td>
                              <td className="acct_table_data text-center">
                                <span className="acct_table_data_tag gray">
                                  Change
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </>
                  }
                />
              </div>

              <hr className="acct_fil_line my-4" />

              <div className="col">
                <CustomAccordion
                  isActive={true}
                  trigger={(isOpen) => (
                    <div className="col mb-4">
                      <p className="acct_offer_title d-flex gap-3 align-items-center">
                        <span
                          className={"icon " + (isOpen ? "" : "rotate_180")}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="m5 15l7-7l7 7"></path>
                          </svg>
                        </span>
                        2. Set the retail price
                      </p>
                    </div>
                  )}
                  content={
                    <div className="col d-flex flex-wrap gap-3">
                      <div className="col-12 col-xl-4 acct_offer_cont dark">
                        <div className="col mb-3">
                          <label
                            htmlFor="amount"
                            className="acct_offer_label mb-2">
                            I want to receive
                          </label>
                          <div className="acct_box">
                            <input
                              type="text"
                              name="amount"
                              className="input_box"
                              placeholder="€1"
                            />
                          </div>
                        </div>
                        <div className="col mb-3">
                          <label
                            htmlFor="amount"
                            className="acct_offer_label mb-2">
                            Customer Pays
                          </label>
                          <div className="acct_box">
                            <input
                              type="text"
                              name="amount"
                              className="input_box"
                              placeholder="€1,15"
                            />
                          </div>
                        </div>
                        <div className="col d-flex justify-content-between align-items-center">
                          <p className="acct_offer_text_big">
                            Current best price
                          </p>
                          <p className="acct_offer_text_big text-white">
                            €0.08
                          </p>
                        </div>
                      </div>
                      <div className="col acct_offer_cont">
                        <table className="table table-borderless acct_table">
                          <thead>
                            <tr>
                              <th className="acct_table_head">#</th>
                              <th className="acct_table_head">Seller Name</th>
                              <th className="acct_table_head">Price</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="acct_table_row mb-2">
                              <td className="acct_table_data">1</td>
                              <td className="acct_table_data">GG-Market</td>
                              <td className="acct_table_data">€0.08</td>
                            </tr>
                            <tr className="acct_table_row mb-2">
                              <td className="acct_table_data">2</td>
                              <td className="acct_table_data">GG-Market</td>
                              <td className="acct_table_data">€0.08</td>
                            </tr>
                            <tr className="acct_table_row mb-2">
                              <td className="acct_table_data">3</td>
                              <td className="acct_table_data">GG-Market</td>
                              <td className="acct_table_data">€0.08</td>
                            </tr>
                            <tr className="acct_table_row mb-2">
                              <td className="acct_table_data">4</td>
                              <td className="acct_table_data">GG-Market</td>
                              <td className="acct_table_data">€0.08</td>
                            </tr>
                            <tr className="acct_table_row mb-2">
                              <td className="acct_table_data">5</td>
                              <td className="acct_table_data">GG-Market</td>
                              <td className="acct_table_data">€0.08</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  }
                />
              </div>

              <hr className="acct_fil_line my-4" />

              <div className="col">
                <CustomAccordion
                  isActive={true}
                  trigger={(isOpen) => (
                    <div className="col mb-4">
                      <p className="acct_offer_title d-flex gap-3 align-items-center">
                        <span
                          className={"icon " + (isOpen ? "" : "rotate_180")}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="m5 15l7-7l7 7"></path>
                          </svg>
                        </span>
                        3. Upload stock
                      </p>
                    </div>
                  )}
                  content={
                    <div className="col">
                      <div className="d-flex flex-wrap gap-3 mb-3">
                        <div className="col-12 col-lg">
                          <p className="acct_offer_title dark">
                            Provide Serial Numbers for Your products (or
                            download links for Steam gifts)
                          </p>
                          <p className="acct_offer_hint d-flex gap-2 align-items-center">
                            <span className="icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24">
                                <path
                                  fill="currentColor"
                                  fillRule="evenodd"
                                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10M12 6.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
                                  clipRule="evenodd"></path>
                              </svg>
                            </span>
                            For over 500 keys please upload them as attached
                            images or .zip / .txt file below
                          </p>
                        </div>
                        <div className="col-6 col-lg-3 col-xl-2 acct_off_cont">
                          <p className="acct_off_num mb-2">0</p>
                          <p className="acct_off_head">Keys to upload</p>
                        </div>
                      </div>

                      <div className="col mb-4">
                        <label className="acct_offer_label mb-2">
                          1 line = 1 CD Key / Link (separated by ENTER):
                        </label>
                        <div className="col acct_box">
                          <textarea
                            name=""
                            className="input_box"
                            placeholder="1234-5678-4321-6666"
                            rows={4}></textarea>
                        </div>
                      </div>
                      <div className="col mb-4">
                        <label className="acct_offer_label mb-2">
                          Add file <span>(optional)</span>
                        </label>
                        <div className="col acct_offer_file_con">
                          <div className="acct_offer_file">
                            <p className="acct_offer_text text-center">
                              <span className="bold">Drag and drop up</span> to
                              10 000 CD Keys in .txt file (1 line = 1 key), up
                              to 10 000 image keys packed in .zip file (max. 20
                              mb; jpg, png or gif format) or up to 10 000 image
                              keys (max. 200kb per file) as separate files.{" "}
                              <br />
                              Uploading large number of keys can take several
                              minutes.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col">
                        <button type="button" className="acct_offer_btn1">
                          Upload
                        </button>
                      </div>
                    </div>
                  }
                />
              </div>

              <hr className="acct_fil_line my-4" />

              <div className="col">
                <CustomAccordion
                  isActive={true}
                  trigger={(isOpen) => (
                    <div className="col mb-4">
                      <p className="acct_offer_title d-flex gap-3 align-items-center">
                        <span
                          className={"icon " + (isOpen ? "" : "rotate_180")}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="m5 15l7-7l7 7"></path>
                          </svg>
                        </span>
                        4. Edit keys
                      </p>
                    </div>
                  )}
                  content={
                    <div className="col">
                      <div className="col row g-3 mb-3">
                        <div className="col-12 col-md-6 col-xl">
                          <label
                            htmlFor="amount"
                            className="acct_offer_label mb-2">
                            Reservation Id
                          </label>
                          <div className="acct_box">
                            <input
                              type="text"
                              name="amount"
                              className="input_box"
                              placeholder="-"
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl">
                          <label
                            htmlFor="amount"
                            className="acct_offer_label mb-2">
                            Status
                          </label>
                          <select className="col-12 col-md-6 col-xl acct_sel ">
                            <option value="">-</option>
                          </select>
                        </div>
                        <div className="col-12 col-md-6 col-xl">
                          <label
                            htmlFor="amount"
                            className="acct_offer_label mb-2">
                            Supplier
                          </label>
                          <div className="acct_box">
                            <input
                              type="text"
                              name="amount"
                              className="input_box"
                              placeholder="-"
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl">
                          <label
                            htmlFor="amount"
                            className="acct_offer_label mb-2">
                            Supplier
                          </label>
                          <div className="acct_box">
                            <input
                              type="text"
                              name="amount"
                              className="input_box"
                              placeholder="-"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col row g-3 mb-4">
                        <div className="col-12 col-md-6 col-xl">
                          <label
                            htmlFor="amount"
                            className="acct_offer_label mb-2">
                            Created from
                          </label>

                          <div className="col acct_box ">
                            <input
                              type="date"
                              className="input_box"
                              placeholder="Date"
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl">
                          <label
                            htmlFor="amount"
                            className="acct_offer_label mb-2">
                            Created to
                          </label>
                          <div className="col acct_box ">
                            <input
                              type="date"
                              className="input_box"
                              placeholder="Date"
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl">
                          <label
                            htmlFor="amount"
                            className="acct_offer_label mb-2">
                            Dispatched from
                          </label>
                          <div className="col acct_box ">
                            <input
                              type="date"
                              className="input_box"
                              placeholder="Date"
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl">
                          <label
                            htmlFor="amount"
                            className="acct_offer_label mb-2">
                            Dispatched to
                          </label>
                          <div className="col acct_box ">
                            <input
                              type="date"
                              className="input_box"
                              placeholder="Date"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col d-flex gap-3 mb-4">
                        <div className="col col-xl-6 acct_box d-flex gap-2">
                          <select className="fil_sel">
                            <option value="">Serial</option>
                          </select>
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
                      <div className="col d-flex flex-wrap gap-2 mb-4">
                        <span className="cate_filter_tag d-flex gap-2 align-items-center">
                          Available: 3
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              fillRule="evenodd"
                              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10M12 6.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
                              clipRule="evenodd"></path>
                          </svg>
                        </span>
                        <span className="cate_filter_tag d-flex gap-2 align-items-center">
                          Buyable: 3
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              fillRule="evenodd"
                              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10M12 6.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
                              clipRule="evenodd"></path>
                          </svg>
                        </span>
                        <span className="cate_filter_tag d-flex gap-2 align-items-center">
                          Reserved: 3
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              fillRule="evenodd"
                              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10M12 6.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
                              clipRule="evenodd"></path>
                          </svg>
                        </span>

                        <button
                          type="button"
                          className="col-12 col-lg-auto cate_filter_tag_btn">
                          Reveal Key
                        </button>
                      </div>

                      <hr className="acct_fil_line my-0" />
                      {/* Mobile Table */}
                      <div className="col d-lg-none overflow-auto mb-4">
                        <div className="mob_table_con position-relative mb-3">
                          <div className="col row gx-4 gy-3">
                            <div className="col-12">
                              <label className="mob_table_head">Platform</label>
                              <div className="col-12 d-flex gap-3 align-items-center">
                                <input
                                  className="acct_offer_check"
                                  type="checkbox"
                                  value=""
                                  id="defaultCheck1"
                                />
                                <p className="col mob_table_data">
                                  a5db6d9f-5027-449f-9799
                                </p>
                              </div>
                            </div>

                            <div className="col-6">
                              <label className="mob_table_head">STATUS</label>
                              <span className="acct_table_data_tag green">
                                Availiable
                              </span>
                            </div>
                            <div className="col-6">
                              <label className="mob_table_head">
                                RESERVATION ID
                              </label>
                              <p className="col mob_table_data">-</p>
                            </div>
                            <div className="col-6">
                              <label className="mob_table_head">
                                Created at
                              </label>
                              <p className="col mob_table_data">
                                02/07/2024 13:32:55
                              </p>
                            </div>
                            <div className="col-6">
                              <label className="mob_table_head">
                                Dispatched at
                              </label>
                              <p className="mob_table_data">-</p>
                            </div>

                            <div className="col-6">
                              <label className="mob_table_head">
                                Additional Info
                              </label>
                              <p className="mob_table_data bold">-</p>
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

                      {/* Deskyop Table */}
                      <div className="table-responsive d-none d-lg-block">
                        <table className="table table-borderless acct_table">
                          <thead>
                            <tr>
                              <th className="acct_table_head"></th>
                              <th className="acct_table_head">Key</th>
                              <th className="acct_table_head">STATUS</th>
                              <th className="acct_table_head">
                                Reservation Id
                              </th>
                              <th className="acct_table_head">Created at </th>
                              <th className="acct_table_head">
                                Dispatched at{" "}
                              </th>
                              <th className="acct_table_head">
                                Additional Info
                              </th>
                              <th className="acct_table_head"></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="acct_table_row">
                              <td className="acct_table_data">
                                <input
                                  className="acct_offer_check"
                                  type="checkbox"
                                  value=""
                                  id="defaultCheck1"
                                />
                              </td>
                              <td className="acct_table_data">
                                a5db6d9f-5027-449f-9799
                              </td>
                              <td className="acct_table_data">
                                <span className="acct_table_data_tag green">
                                  Availiable
                                </span>
                              </td>
                              <td className="acct_table_data">-</td>
                              <td className="acct_table_data text-nowrap">
                                02/07/2024 13:32:55
                              </td>
                              <td className="acct_table_data">-</td>
                              <td className="acct_table_data text-nowrap">-</td>
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
                            <tr className="acct_table_row">
                              <td className="acct_table_data">
                                <input
                                  className="acct_offer_check"
                                  type="checkbox"
                                  value=""
                                  id="defaultCheck1"
                                />
                              </td>
                              <td className="acct_table_data">
                                a5db6d9f-5027-449f-9799
                              </td>
                              <td className="acct_table_data">
                                <span className="acct_table_data_tag green">
                                  Availiable
                                </span>
                              </td>
                              <td className="acct_table_data">-</td>
                              <td className="acct_table_data text-nowrap">
                                02/07/2024 13:32:55
                              </td>
                              <td className="acct_table_data">-</td>
                              <td className="acct_table_data text-nowrap">-</td>
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
                            <tr className="acct_table_row">
                              <td className="acct_table_data">
                                <input
                                  className="acct_offer_check"
                                  type="checkbox"
                                  value=""
                                  id="defaultCheck1"
                                />
                              </td>
                              <td className="acct_table_data">
                                a5db6d9f-5027-449f-9799
                              </td>
                              <td className="acct_table_data">
                                <span className="acct_table_data_tag green">
                                  Availiable
                                </span>
                              </td>
                              <td className="acct_table_data">-</td>
                              <td className="acct_table_data text-nowrap">
                                02/07/2024 13:32:55
                              </td>
                              <td className="acct_table_data">-</td>
                              <td className="acct_table_data text-nowrap">-</td>
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

                      {/* Important Empty Space */}
                      <div className="col d-lg-none mb-5 pb-5"></div>
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
