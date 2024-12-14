import OrderAccordion from "../utility/OrderAccordion";

/* eslint-disable react/prop-types */
export default function SetRetailPrice({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div className="modal_con d-lg-flex justify-content-center align-items-center">
          <div className="col col-lg-10 col-xl-6 modal_cont position-relative">
            <span
              className="dash_level_close position-absolute"
              onClick={() => onClose()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
                />
              </svg>
            </span>
            <p className="dash_level_title mb-4">Set the Retail Price</p>

            <div className="col-12 col-md-8 d-flex align-items-center gap-3 mb-3">
              <img
                src={"../assets/images/game1.png"}
                alt=""
                className="acct_sale_img"
              />
              <div className="col">
                <p className="acct_head_s mb-2">
                  Tekken 8 Xbox Series X | S Private Account Global
                </p>
                <div className="col">
                  <p className="acct_head_sm mb-1">Current Best Price</p>
                  <p className="acct_offer_text_big text-white">$179.8</p>
                </div>
              </div>
            </div>

            <div className="d-md-flex gap-3">
              <div className="col mb-3">
                <label
                  htmlFor="email"
                  className="auth_label text-uppercase mb-2">
                  I Want To Receive (Commission Rate: 10%)
                </label>
                <input
                  type="text"
                  name="email"
                  className="auth_input"
                  placeholder="$ 179.8"
                />
              </div>
              <div className="col mb-3">
                <label
                  htmlFor="email"
                  className="auth_label text-uppercase mb-2">
                  Customer Pay
                </label>
                <input
                  type="text"
                  name="email"
                  className="auth_input"
                  placeholder="$ 179.8"
                />
              </div>
            </div>

            <div className="col mb-4">
              <OrderAccordion
                isActive={false}
                trigger={({ isOpen, ToggleAccordion }) => (
                  <div className="col d-flex flex-wrap gap-3 justify-content-between align-items-center mb-3">
                    <p className="acct_offer_title">Other Offers</p>
                    <div
                      className="acct_offer_arrow d-flex gap-1 justify-content-center align-items-center"
                      role="button"
                      onClick={() => ToggleAccordion()}>
                      {isOpen ? "Close" : "Expand"}
                      <span className="icon">
                        {isOpen ? (
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
                        ) : (
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
                              d="m19 9l-7 7l-7-7"></path>
                          </svg>
                        )}
                      </span>
                    </div>
                  </div>
                )}
                content={
                  <>
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
                  </>
                }
              />
            </div>

            <div className="d-flex">
              <button type="button" className="col col-lg-3 main_button">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
