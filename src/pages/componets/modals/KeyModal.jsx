/* eslint-disable react/prop-types */
export default function KeyModal({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div className="modal_con d-lg-flex justify-content-center align-items-center">
          <div className="col col-lg-10 col-xl-6">
            <div className="col modal_cont d-flex flex-column position-relative mb-3">
              <span
                className="dash_level_close position-absolute"
                role="button"
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
              <p className="acct_head_smm">Your key for</p>
              <p className="dash_level_title mb-4">
                Super Toy Cars 2 Xbox One & series X/S Digital Code Global
              </p>

              <div className="col row row-cols-2 row-cols-md-3 g-4 mb-4">
                <div className="col">
                  <p className="acct_head_sm mb-1">Order Id</p>
                  <p className="acct_head_s">#216</p>
                </div>
                <div className="col">
                  <p className="acct_head_sm mb-1">Platform</p>
                  <p className="acct_head_s">X-BOX</p>
                </div>
                <div className="col">
                  <p className="acct_head_sm mb-1">Key </p>
                  <span className="acct_table_data_tag green">Deliverd</span>
                </div>
                <div className="col">
                  <p className="acct_head_sm mb-1">Your Rating</p>
                  <p className="acct_head_s d-flex gap-2 align-items-center">
                    <span className="acct_head_s blue">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"></path>
                      </svg>
                    </span>
                    -
                  </p>
                </div>
                <div className="col">
                  <p className="acct_head_sm mb-1">Regional Limitation</p>
                  <p className="acct_head_s">-</p>
                </div>
              </div>
              <div className="col-12">
                <p className="acct_head_sm mb-1">Your Key</p>
                <div className="col acct_copy_cont d-flex gap-3 justify-content-between align-items-center">
                  <p className="acct_copy_text text-nowrap">
                    C9Y6P-9MQ6K-PGM93-FCC3K-3WGVZ
                  </p>
                  <span className="acct_copy_icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M14 8H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V10c0-1.103-.897-2-2-2"></path>
                      <path
                        fill="currentColor"
                        d="M20 2H10a2 2 0 0 0-2 2v2h8a2 2 0 0 1 2 2v8h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2"></path>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="d-flex gap-3 mt-5">
                <button type="button" className="acct_offer_btn2 d-flex gap-2">
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                  </span>
                  Rate Seller
                </button>
                <button type="button" className="acct_offer_btn3">
                  Key Activation guide
                </button>
              </div>
            </div>

            <div className="rec_con">
              <div className="rec_cont blue position-relative">
                <img
                  src={"../assets/images/rate_bg.png"}
                  alt=""
                  className="rec_img blue position-absolute"
                />
                <p className="rec_title blue">
                  Share Your Experience & Earn €1!
                </p>
                <div className="col-10 p-3">
                  <p className="rec_text">
                    Leave a review about our service and get rewarded! Simply
                    write your feedback and{" "}
                    <span className="blue">receive €1</span> as a thank you.
                    Your opinion matters to us!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
