import { Link } from "react-router-dom";
import AccountSideBar from "../componets/account/AccountSideBar";
import MainHeader from "../componets/MainHeader";
import MainFooter from "../componets/MainFooter";

export default function RequestProduct() {
  const breadCrums = [
    {
      title: "New Offers",
      url: "/account/new-offers",
    },
    {
      title: "Request New Product",
      url: "/account/request-product",
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
        <AccountSideBar activeLink={'new-offers'} />

        <div className="col housing_con d-flex flex-column">
          <MainHeader
            showHeader={true}
            isAccount={true}
            breadCrums={breadCrums}
            activeLink={"new-offers"}
          />

          <div id="scrollable-section" className="col acct_cont_con pt-lg-0">
            <div className="d-lg-none justify-content-between align-items-center mb-3">
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
              <div className="col col-xl-8">
                <p className="acct_offer_title mb-4">Request New Product</p>

                <div className="col mb-3">
                  <label htmlFor="amount" className="acct_offer_label mb-2">
                    Title*
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
                <div className="col mb-3">
                  <label htmlFor="amount" className="acct_offer_label mb-2">
                    Steam App ID
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
                <div className="col mb-3">
                  <label htmlFor="amount" className="acct_offer_label mb-2">
                    Additional information (notes)
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

                <div className="col mb-3">
                  <label htmlFor="amount" className="acct_offer_label mb-2">
                    Languages* (audio and subtitles)
                  </label>
                  <div className="col row row-cols-2 row-cols-lg-3 row-cols-xl-4 g-3">
                    <div className="col d-flex align-items-center gap-2">
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
                        Arabic
                      </label>
                    </div>
                    <div className="col d-flex align-items-center gap-2">
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
                        Arabic
                      </label>
                    </div>
                    <div className="col d-flex align-items-center gap-2">
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
                        Arabic
                      </label>
                    </div>
                    <div className="col d-flex align-items-center gap-2">
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
                        Arabic
                      </label>
                    </div>
                    <div className="col d-flex align-items-center gap-2">
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
                        Arabic
                      </label>
                    </div>
                    <div className="col d-flex align-items-center gap-2">
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
                        Arabic
                      </label>
                    </div>
                    <div className="col d-flex align-items-center gap-2">
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
                        Arabic
                      </label>
                    </div>
                    <div className="col d-flex align-items-center gap-2">
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
                        Arabic
                      </label>
                    </div>
                    <div className="col d-flex align-items-center gap-2">
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
                        Arabic
                      </label>
                    </div>
                  </div>
                </div>

                <div className="col mb-3">
                  <label htmlFor="amount" className="acct_offer_label mb-2">
                    Regional limitation
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
                <div className="col mb-3">
                  <label htmlFor="amount" className="acct_offer_label mb-2">
                    Platform
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
                  className="col-12 col-md-auto acct_offer_btn1">
                  Submit
                </button>
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
