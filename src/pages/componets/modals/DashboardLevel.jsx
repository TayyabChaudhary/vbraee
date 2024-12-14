/* eslint-disable react/prop-types */
export default function DashboardLevel({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div className="modal_con d-flex justify-content-center align-items-start align-items-lg-center">
          <div className="col col-lg-11 col-xl-8 dash_level position-relative">
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
            <p className="dash_level_title text-lg-center mb-4">Level matrix</p>

            {/* Mobile Table */}
            <div className="col d-lg-none mb-4">
              <div className="mob_table_con position-relative mb-3">
                <div className="col row gx-4 gy-3">
                  <div className="col-6">
                    <label className="mob_table_head">Level</label>
                    <p className="mob_table_data">New Seller</p>
                  </div>
                  <div className="col-6">
                    <label className="mob_table_head">№ of Sales</label>
                    <p className="mob_table_data">{"<50"}</p>
                  </div>
                  <div className="col-6">
                    <label className="mob_table_head">
                      Earnings Release Days
                    </label>
                    <p className="mob_table_data bold">21</p>
                  </div>
                  <div className="col-6">
                    <label className="mob_table_head">Commission</label>
                    <p className="mob_table_data">10%</p>
                  </div>
                </div>
              </div>
              <div className="mob_table_con position-relative mb-3">
                <div className="col row gx-4 gy-3">
                  <div className="col-6">
                    <label className="mob_table_head">Level</label>
                    <p className="mob_table_data">New Seller</p>
                  </div>
                  <div className="col-6">
                    <label className="mob_table_head">№ of Sales</label>
                    <p className="mob_table_data">{"<50"}</p>
                  </div>
                  <div className="col-6">
                    <label className="mob_table_head">
                      Earnings Release Days
                    </label>
                    <p className="mob_table_data bold">21</p>
                  </div>
                  <div className="col-6">
                    <label className="mob_table_head">Commission</label>
                    <p className="mob_table_data">10%</p>
                  </div>
                </div>
              </div>
              <div className="mob_table_con position-relative mb-3">
                <div className="col row gx-4 gy-3">
                  <div className="col-6">
                    <label className="mob_table_head">Level</label>
                    <p className="mob_table_data">New Seller</p>
                  </div>
                  <div className="col-6">
                    <label className="mob_table_head">№ of Sales</label>
                    <p className="mob_table_data">{"<50"}</p>
                  </div>
                  <div className="col-6">
                    <label className="mob_table_head">
                      Earnings Release Days
                    </label>
                    <p className="mob_table_data bold">21</p>
                  </div>
                  <div className="col-6">
                    <label className="mob_table_head">Commission</label>
                    <p className="mob_table_data">10%</p>
                  </div>
                </div>
              </div>
              <div className="mob_table_con active position-relative mb-3">
                <div className="col row gx-4 gy-3">
                  <div className="col-6">
                    <label className="mob_table_head blue">Level</label>
                    <p className="mob_table_data">New Seller</p>
                  </div>
                  <div className="col-6">
                    <label className="mob_table_head">№ of Sales</label>
                    <p className="mob_table_data">{"<50"}</p>
                  </div>
                  <div className="col-6">
                    <label className="mob_table_head">
                      Earnings Release Days
                    </label>
                    <p className="mob_table_data bold">21</p>
                  </div>
                  <div className="col-6">
                    <label className="mob_table_head">Commission</label>
                    <p className="mob_table_data">10%</p>
                  </div>
                </div>
              </div>
              <div className="mob_table_con position-relative mb-3">
                <div className="col row gx-4 gy-3">
                  <div className="col-6">
                    <label className="mob_table_head">Level</label>
                    <p className="mob_table_data">New Seller</p>
                  </div>
                  <div className="col-6">
                    <label className="mob_table_head">№ of Sales</label>
                    <p className="mob_table_data">{"<50"}</p>
                  </div>
                  <div className="col-6">
                    <label className="mob_table_head">
                      Earnings Release Days
                    </label>
                    <p className="mob_table_data bold">21</p>
                  </div>
                  <div className="col-6">
                    <label className="mob_table_head">Commission</label>
                    <p className="mob_table_data">10%</p>
                  </div>
                </div>
              </div>
              <div className="mob_table_con position-relative mb-3">
                <div className="col row gx-4 gy-3">
                  <div className="col-6">
                    <label className="mob_table_head">Level</label>
                    <p className="mob_table_data">New Seller</p>
                  </div>
                  <div className="col-6">
                    <label className="mob_table_head">№ of Sales</label>
                    <p className="mob_table_data">{"<50"}</p>
                  </div>
                  <div className="col-6">
                    <label className="mob_table_head">
                      Earnings Release Days
                    </label>
                    <p className="mob_table_data bold">21</p>
                  </div>
                  <div className="col-6">
                    <label className="mob_table_head">Commission</label>
                    <p className="mob_table_data">10%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Table */}
            <div className="col d-none d-lg-flex gap-2">
              <div
                className="col d-flex flex-column dash_level_cont text-center"
                style={{
                  backgroundImage: "url(./assets/images/dash_bg4.png)",
                }}>
                <p className="col dash_level_head mb-3">Level</p>
                <p className="col dash_level_text">New Seller</p>
                <p className="col dash_level_text">1-st</p>
                <p className="col dash_level_text">2-nd</p>
                <p className="col dash_level_text active1 d-flex justify-content-center position-relative">
                  <span className="dash_level_text_sm position-absolute">
                    your <br /> level
                  </span>
                  <span className="">3-rd</span>
                </p>
                <p className="col dash_level_text">4-st</p>
                <p className="col dash_level_text">5-st</p>
              </div>
              <div
                className="col d-flex flex-column dash_level_cont text-center"
                style={{
                  backgroundImage: "url(./assets/images/dash_bg2.png)",
                }}>
                <p className="col dash_level_head mb-3">№ of Sales</p>
                <p className="col dash_level_text">{"<50"}</p>
                <p className="col dash_level_text">50-149</p>
                <p className="col dash_level_text">150-299</p>
                <p className="col dash_level_text active2">300-599</p>
                <p className="col dash_level_text">600-999</p>
                <p className="col dash_level_text">{">1000"}</p>
              </div>
              <div
                className="col d-flex flex-column dash_level_cont text-center"
                style={{
                  backgroundImage: "url(./assets/images/dash_bg1.png)",
                }}>
                <p className="col dash_level_head mb-3">
                  Earnings Release Days
                </p>
                <p className="col dash_level_text">21</p>
                <p className="col dash_level_text">17</p>
                <p className="col dash_level_text">12</p>
                <p className="col dash_level_text active2">9</p>
                <p className="col dash_level_text">7</p>
                <p className="col dash_level_text">5</p>
              </div>
              <div
                className="col d-flex flex-column dash_level_cont text-center"
                style={{
                  backgroundImage: "url(./assets/images/dash_bg3.png)",
                }}>
                <p className="col dash_level_head mb-3">Commission</p>
                <p className="col dash_level_text">10%</p>
                <p className="col dash_level_text">10%</p>
                <p className="col dash_level_text">10%</p>
                <p className="col dash_level_text active3">9%</p>
                <p className="col dash_level_text">8%</p>
                <p className="col dash_level_text">7%</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
