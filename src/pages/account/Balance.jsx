import { Link } from "react-router-dom";
import Pagination from "../componets/utility/Pagination";
import AccountSideBar from "../componets/account/AccountSideBar";
import MainHeader from "../componets/MainHeader";
import { useTabs } from "../../services/CustomTabs";
import MainFooter from "../componets/MainFooter";

export default function Balance() {
  const breadCrums = [
    {
      title: "Balance",
      url: "/account/balance",
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

  return (
    <>
      <div
        className="d-flex w-100 main_house_con"
        style={{
          background: "none",
        }}>
        <AccountSideBar activeLink={"balance"} />

        <div className="col housing_con d-flex flex-column">
          <MainHeader
            showHeader={true}
            isAccount={true}
            breadCrums={breadCrums}
            activeLink={"balance"}
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
                  <div className="col d-flex overflow-auto hide_scroll gap-2">
                    <p
                      className={
                        "dash_tab_link " + (activeTab == 1 ? "active" : "")
                      }
                      onClick={() => ChangeTab(1)}>
                      My Balance
                    </p>
                    <p
                      className={
                        "dash_tab_link " + (activeTab == 2 ? "active" : "")
                      }
                      onClick={() => ChangeTab(2)}>
                      Payout Request
                    </p>
                  </div>
                </div>
                
                <div className="col row row-cols-2 row-cols-lg-4 g-2 justify-content-between mb-4">
                  <div className="col">
                    <div className="col h-100 acct_off_cont">
                      <p className="acct_off_num mb-2">≈ €1804.40</p>
                      <p className="acct_off_head">Available withdrawable</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="col h-100 acct_off_cont">
                      <p className="acct_off_num mb-2">≈ €0.00</p>
                      <p className="acct_off_head">Available spendable</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="col h-100 acct_off_cont">
                      <p className="acct_off_num mb-2">≈ €1558.43</p>
                      <p className="acct_off_head">Pending withdrawable</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="col h-100 acct_off_cont">
                      <p className="acct_off_num mb-2">≈ €0.00</p>
                      <p className="acct_off_head">Pending spendable</p>
                    </div>
                  </div>
                </div>

                {/* Balance */}
                {activeTab == 1 && (
                  <div className="col">
                    <hr className="acct_fil_line mb-0" />

                    {/* Mobile Table */}
                    <div className="col d-lg-none mb-4">
                      <div className="mob_table_con position-relative mb-3">
                        <div className="col row gx-4 gy-3">
                          <div className="col-6">
                            <label className="mob_table_head">
                              CURRENCY NAME
                            </label>
                            <div className="mob_table_data d-flex align-items-center gap-2">
                              <img
                                src={"../assets/images/icons/flag.svg"}
                                alt=""
                                className="acct_table_data_flag"
                              />
                              EUR
                            </div>
                          </div>
                          <div className="col-6">
                            <label className="mob_table_head">Balance</label>
                            <p className="mob_table_data">€10.66</p>
                          </div>
                          <div className="col-6">
                            <label className="mob_table_head">
                              APPROX. AMOUNT IN EUR
                            </label>
                            <p className="mob_table_data">≈ €0.00</p>
                          </div>
                          <div className="col-6">
                            <label className="mob_table_head">
                              PENDING BALANCE
                            </label>
                            <p className="mob_table_data">0.00 Kč</p>
                          </div>

                          <div className="col-6">
                            <label className="mob_table_head">
                              EXCHANGE RATE
                            </label>
                            <p className="mob_table_data"> €1=25.35 Kč</p>
                          </div>
                          <div className="col-6">
                            <label className="mob_table_head"></label>
                            <span className="acct_table_data_tag gray">
                              Exchange
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="mob_table_con position-relative mb-3">
                        <div className="col row gx-4 gy-3">
                          <div className="col-6">
                            <label className="mob_table_head">
                              CURRENCY NAME
                            </label>
                            <div className="mob_table_data d-flex align-items-center gap-2">
                              <img
                                src={"../assets/images/icons/flag.svg"}
                                alt=""
                                className="acct_table_data_flag"
                              />
                              EUR
                            </div>
                          </div>
                          <div className="col-6">
                            <label className="mob_table_head">Balance</label>
                            <p className="mob_table_data">€10.66</p>
                          </div>
                          <div className="col-6">
                            <label className="mob_table_head">
                              APPROX. AMOUNT IN EUR
                            </label>
                            <p className="mob_table_data">≈ €0.00</p>
                          </div>
                          <div className="col-6">
                            <label className="mob_table_head">
                              PENDING BALANCE
                            </label>
                            <p className="mob_table_data">0.00 Kč</p>
                          </div>

                          <div className="col-6">
                            <label className="mob_table_head">
                              EXCHANGE RATE
                            </label>
                            <p className="mob_table_data"> €1=25.35 Kč</p>
                          </div>
                          <div className="col-6">
                            <label className="mob_table_head"></label>
                            <span className="acct_table_data_tag gray">
                              Exchange
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Table */}
                    <div className="table-responsive d-none d-lg-block">
                      <table className="table table-borderless acct_table mb-3">
                        <thead>
                          <tr>
                            <th className="acct_table_head">CURRENCY NAME </th>
                            <th className="acct_table_head d-flex align-items-center gap-1">
                              Balance
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
                              APPROX. AMOUNT IN EUR
                            </th>
                            <th className="acct_table_head">PENDING BALANCE</th>
                            <th className="acct_table_head">EXCHANGE RATE</th>
                            <th className="acct_table_head"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="acct_table_row">
                            <td className="acct_table_data">
                              <div className=" d-flex align-items-center gap-2">
                                <img
                                  src={"../assets/images/icons/flag.svg"}
                                  alt=""
                                  className="acct_table_data_flag"
                                />
                                EUR
                              </div>
                            </td>
                            <td className="acct_table_data">€10.66</td>
                            <td className="acct_table_data ">≈ €0.00</td>
                            <td className="acct_table_data">0.00 Kč</td>
                            <td className="acct_table_data text-nowrap">
                              €1=25.35 Kč
                            </td>
                            <td className="acct_table_data text-end">
                              <span className="acct_table_data_tag gray">
                                Exchange
                              </span>
                            </td>
                          </tr>
                          <tr className="acct_table_row">
                            <td className="acct_table_data">
                              <div className=" d-flex align-items-center gap-2">
                                <img
                                  src={"../assets/images/icons/flag.svg"}
                                  alt=""
                                  className="acct_table_data_flag"
                                />
                                EUR
                              </div>
                            </td>
                            <td className="acct_table_data">€10.66</td>
                            <td className="acct_table_data ">≈ €0.00</td>
                            <td className="acct_table_data">0.00 Kč</td>
                            <td className="acct_table_data text-nowrap">
                              €1=25.35 Kč
                            </td>
                            <td className="acct_table_data text-end">
                              <span className="acct_table_data_tag gray">
                                Exchange
                              </span>
                            </td>
                          </tr>
                          <tr className="acct_table_row">
                            <td className="acct_table_data">
                              <div className=" d-flex align-items-center gap-2">
                                <img
                                  src={"../assets/images/icons/flag.svg"}
                                  alt=""
                                  className="acct_table_data_flag"
                                />
                                EUR
                              </div>
                            </td>
                            <td className="acct_table_data">€10.66</td>
                            <td className="acct_table_data ">≈ €0.00</td>
                            <td className="acct_table_data">0.00 Kč</td>
                            <td className="acct_table_data text-nowrap">
                              €1=25.35 Kč
                            </td>
                            <td className="acct_table_data text-end">
                              <span className="acct_table_data_tag gray">
                                Exchange
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="col d-flex justify-content-center">
                      <Pagination />
                    </div>
                  </div>
                )}

                {/* Payout Request */}
                {activeTab == 2 && (
                  <div className="col">
                    <hr className="acct_fil_line my-4" />

                    <div className="col d-flex flex-wrap gap-4 mb-5">
                      <div className="col">
                        <p className="acct_offer_title">Creat a new payout</p>
                        <p className="acct_offer_text">
                          Choose your preferred payout method to display
                          details.
                        </p>
                        <div className="col row row-cols-2 row-cols-md-4 g-3 my-4">
                          <div className="col">
                            <div className="col acct_pay_img_con d-flex justify-content-center align-items-center">
                              <img
                                src={"../assets/images/icons/paypal.svg"}
                                alt=""
                                className="acct_pay_img"
                              />
                            </div>
                          </div>
                          <div className="col">
                            <div className="col acct_pay_img_con d-flex justify-content-center align-items-center">
                              <img
                                src={"../assets/images/icons/paypal.svg"}
                                alt=""
                                className="acct_pay_img"
                              />
                            </div>
                          </div>
                          <div className="col">
                            <div className="col acct_pay_img_con d-flex justify-content-center align-items-center">
                              <img
                                src={"../assets/images/icons/paypal.svg"}
                                alt=""
                                className="acct_pay_img"
                              />
                            </div>
                          </div>
                          <div className="col">
                            <div className="col acct_pay_img_con d-flex justify-content-center align-items-center">
                              <img
                                src={"../assets/images/icons/paypal.svg"}
                                alt=""
                                className="acct_pay_img"
                              />
                            </div>
                          </div>
                        </div>
                        <p className="acct_head mb-3">
                          Bitcoin Payout settings
                        </p>
                        <div className="col row row-cols-2 row-cols-md-3 g-3 mb-3">
                          <div className="col">
                            <p className="acct_head_sm mb-1">
                              Min. payout amount is
                            </p>
                            <p className="acct_head_s">€20.00</p>
                          </div>
                          <div className="col">
                            <p className="acct_head_sm mb-1">
                              Max. payout amount is
                            </p>
                            <p className="acct_head_s">€10,000.00</p>
                          </div>
                          <div className="col">
                            <p className="acct_head_sm mb-1">
                              Your remaining daily payout
                            </p>
                            <p className="acct_head_s">€8,000.00</p>
                          </div>
                        </div>

                        <p className="acct_offer_hint d-flex gap-2 align-items-center mb-3 mb-lg-2">
                          <span className="icon2">
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
                          To use this provider to make a payout request, set up
                          your address first.
                        </p>

                        <div className="col d-flex flex-wrap gap-3 align-items-end">
                          <div className="col">
                            <label
                              htmlFor="amount"
                              className="acct_offer_label mb-2">
                              Wallet address (BTC MainNet, Native SegWit Bech32
                              (P2WPKH), Legacy (P2PKH))*
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

                          <button
                            type="button"
                            className="col-12 col-md-auto acct_offer_btn2">
                            Update settings
                          </button>
                        </div>
                      </div>
                      <div className="col-12 col-xl-4">
                        <div className="col acct_offer_cont dark mb-3">
                          <p className="acct_head_smm mb-3">
                            withdrawal parameters
                          </p>
                          <div className="col mb-3">
                            <label
                              htmlFor="amount"
                              className="acct_offer_label mb-2">
                              Wallet
                            </label>
                            <select className="col-12 acct_sel ">
                              <option value="">€1797.90</option>
                            </select>
                          </div>
                          <div className="col mb-3">
                            <label
                              htmlFor="amount"
                              className="acct_offer_label mb-2">
                              Withdraw Amount
                            </label>
                            <select className="col-12 acct_sel ">
                              <option value="">800</option>
                            </select>
                          </div>
                          <div className="col d-flex align-items-center gap-2 mb-3">
                            <input
                              className="acct_offer_check"
                              type="checkbox"
                              value=""
                              name="type"
                              id="defaultCheck2"
                            />
                            <label
                              className="acct_offer_text"
                              htmlFor="defaultCheck2">
                              To daily limit
                            </label>
                          </div>
                          <div className="col d-flex justify-content-between align-items-center">
                            <p className="acct_offer_text_big">Fee</p>
                            <p className="acct_offer_text_big text-white">
                              €11.00
                            </p>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center">
                          <button
                            type="button"
                            className="col col-md-8 details_button">
                            Withdraw
                          </button>
                        </div>
                      </div>
                    </div>

                    <hr className="acct_fil_line mb-0" />

                    {/* Mobile Table */}
                    <div className="col d-lg-none mb-4">
                      <div className="mob_table_con position-relative mb-3">
                        <div className="col row gx-4 gy-3">
                          <div className="col-6">
                            <label className="mob_table_head">Method</label>
                            <p className="mob_table_data">
                              Bank Transfer Payout
                            </p>
                          </div>
                          <div className="col-6">
                            <label className="mob_table_head">Amount</label>
                            <p className="mob_table_data">€3640.00</p>
                          </div>
                          <div className="col-6">
                            <label className="mob_table_head">Fee</label>
                            <p className="mob_table_data bold">€10.56</p>
                          </div>

                          <div className="col-6">
                            <label className="mob_table_head">
                              Exchange Fee
                            </label>
                            <p className="mob_table_data bold">-</p>
                          </div>
                          <div className="col-6">
                            <label className="mob_table_head">Created On</label>
                            <p className="mob_table_data">25/06/2024</p>
                          </div>
                          <div className="col-6">
                            <label className="mob_table_head">Status</label>
                            <span className="acct_table_data_tag green">
                              Completed
                            </span>
                          </div>
                          <div className="col-6">
                            <label className="mob_table_head">Reference</label>
                            <p className="mob_table_data">9AJABJR7OVHKWM</p>
                          </div>
                        </div>
                      </div>
                      <div className="mob_table_con position-relative mb-3">
                        <div className="col row gx-4 gy-3">
                          <div className="col-6">
                            <label className="mob_table_head">Method</label>
                            <p className="mob_table_data">
                              Bank Transfer Payout
                            </p>
                          </div>
                          <div className="col-6">
                            <label className="mob_table_head">Amount</label>
                            <p className="mob_table_data">€3640.00</p>
                          </div>
                          <div className="col-6">
                            <label className="mob_table_head">Fee</label>
                            <p className="mob_table_data bold">€10.56</p>
                          </div>

                          <div className="col-6">
                            <label className="mob_table_head">
                              Exchange Fee
                            </label>
                            <p className="mob_table_data bold">-</p>
                          </div>
                          <div className="col-6">
                            <label className="mob_table_head">Created On</label>
                            <p className="mob_table_data">25/06/2024</p>
                          </div>
                          <div className="col-6">
                            <label className="mob_table_head">Status</label>
                            <span className="acct_table_data_tag green">
                              Completed
                            </span>
                          </div>
                          <div className="col-6">
                            <label className="mob_table_head">Reference</label>
                            <p className="mob_table_data">9AJABJR7OVHKWM</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Table */}
                    <div className="table-responsive d-none d-lg-block">
                      <table className="table table-borderless acct_table mb-3">
                        <thead>
                          <tr>
                            <th className="acct_table_head">Method </th>
                            <th className="acct_table_head">Amount </th>
                            <th className="acct_table_head">Fee</th>
                            <th className="acct_table_head">Exchange Fee</th>
                            <th className="acct_table_head">Created On</th>
                            <th className="acct_table_head">Status</th>
                            <th className="acct_table_head">Reference Id</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="acct_table_row">
                            <td className="acct_table_data">
                              Bank Transfer Payout
                            </td>
                            <td className="acct_table_data">€3640.00</td>
                            <td className="acct_table_data ">€10.56</td>
                            <td className="acct_table_data">-</td>
                            <td className="acct_table_data text-nowrap">
                              25/06/2024
                            </td>
                            <td className="acct_table_data ">
                              <span className="acct_table_data_tag green">
                                Completed
                              </span>
                            </td>
                            <td className="acct_table_data">9AJABJR7OVHKWM</td>
                          </tr>
                          <tr className="acct_table_row">
                            <td className="acct_table_data">
                              Bank Transfer Payout
                            </td>
                            <td className="acct_table_data">€3640.00</td>
                            <td className="acct_table_data ">€10.56</td>
                            <td className="acct_table_data">-</td>
                            <td className="acct_table_data text-nowrap">
                              25/06/2024
                            </td>
                            <td className="acct_table_data ">
                              <span className="acct_table_data_tag green">
                                Completed
                              </span>
                            </td>
                            <td className="acct_table_data">9AJABJR7OVHKWM</td>
                          </tr>
                          <tr className="acct_table_row">
                            <td className="acct_table_data">
                              Bank Transfer Payout
                            </td>
                            <td className="acct_table_data">€3640.00</td>
                            <td className="acct_table_data ">€10.56</td>
                            <td className="acct_table_data">-</td>
                            <td className="acct_table_data text-nowrap">
                              25/06/2024
                            </td>
                            <td className="acct_table_data ">
                              <span className="acct_table_data_tag green">
                                Completed
                              </span>
                            </td>
                            <td className="acct_table_data">9AJABJR7OVHKWM</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
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
