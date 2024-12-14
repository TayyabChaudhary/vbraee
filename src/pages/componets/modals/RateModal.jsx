/* eslint-disable react/prop-types */
export default function RateModal({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div className="modal_con d-md-flex justify-content-center align-items-center">
          <div className="col col-lg-10 col-xl-6 modal_cont d-flex flex-column position-relative">
            <span
              className="dash_level_close position-absolute"
              role="button"
              onClick={onClose}>
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
            <p className="acct_head_smm">Rate Seller</p>
            {/* Rating */}
            <div className="col d-">
              <p className="acct_offer_title mb-4">
                Based on your expectations, how would you rate the quality of
                this delivery?
              </p>

              <div className="col d-flex flex-wrap gap-2 mb-4">
                <div className="col rate_star_cont active d-flex flex-column justify-content-center">
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
                  Poor
                </div>
                <div className="col rate_star_cont d-flex flex-column justify-content-center">
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
                  Fair
                </div>
                <div className="col rate_star_cont d-flex flex-column justify-content-center">
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
                  Good
                </div>
                <div className="col rate_star_cont d-flex flex-column justify-content-center">
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
                  Very good
                </div>
                <div className="col rate_star_cont d-flex flex-column justify-content-center">
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
                  Excellent
                </div>
              </div>

              {/* Poor */}
              <div className="col mb-4">
                <p className="rate_head mb-3">
                  What caused you to give a low rating?
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <div className="d-flex align-items-center gap-2">
                    <input
                      className="acct_offer_check"
                      type="checkbox"
                      value=""
                      name="type"
                      id="defaultCheck1"
                    />
                    <label className="acct_offer_text" htmlFor="defaultCheck1">
                      Professionalism of work
                    </label>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <input
                      className="acct_offer_check"
                      type="checkbox"
                      value=""
                      name="type"
                      id="defaultCheck1"
                    />
                    <label className="acct_offer_text" htmlFor="defaultCheck1">
                      Lack of innovation
                    </label>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <input
                      className="acct_offer_check"
                      type="checkbox"
                      value=""
                      name="type"
                      id="defaultCheck1"
                    />
                    <label className="acct_offer_text" htmlFor="defaultCheck1">
                      Lack of strategic thinking
                    </label>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <input
                      className="acct_offer_check"
                      type="checkbox"
                      value=""
                      name="type"
                      id="defaultCheck1"
                    />
                    <label className="acct_offer_text" htmlFor="defaultCheck1">
                      Lack of attention to details
                    </label>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <input
                      className="acct_offer_check"
                      type="checkbox"
                      value=""
                      name="type"
                      id="defaultCheck1"
                    />
                    <label className="acct_offer_text" htmlFor="defaultCheck1">
                      {"Didn't meet my expectations"}
                    </label>
                  </div>
                </div>
              </div>

              {/* Fair */}
              {/* <div className="col mb-4">
            <p className="rate_head mb-3">
              What caused you to give a low rating?
            </p>
            <div className="d-flex flex-wrap gap-3">
              <div className="d-flex align-items-center gap-2">
                <input
                  className="acct_offer_check"
                  type="checkbox"
                  value=""
                  name="type"
                  id="defaultCheck1"
                />
                <label className="acct_offer_text" htmlFor="defaultCheck1">
                  Professionalism of work
                </label>
              </div>
              <div className="d-flex align-items-center gap-2">
                <input
                  className="acct_offer_check"
                  type="checkbox"
                  value=""
                  name="type"
                  id="defaultCheck1"
                />
                <label className="acct_offer_text" htmlFor="defaultCheck1">
                  Lack of innovation
                </label>
              </div>
              <div className="d-flex align-items-center gap-2">
                <input
                  className="acct_offer_check"
                  type="checkbox"
                  value=""
                  name="type"
                  id="defaultCheck1"
                />
                <label className="acct_offer_text" htmlFor="defaultCheck1">
                  Lack of strategic thinking
                </label>
              </div>
              <div className="d-flex align-items-center gap-2">
                <input
                  className="acct_offer_check"
                  type="checkbox"
                  value=""
                  name="type"
                  id="defaultCheck1"
                />
                <label className="acct_offer_text" htmlFor="defaultCheck1">
                  Lack of attention to details
                </label>
              </div>
              <div className="d-flex align-items-center gap-2">
                <input
                  className="acct_offer_check"
                  type="checkbox"
                  value=""
                  name="type"
                  id="defaultCheck1"
                />
                <label className="acct_offer_text" htmlFor="defaultCheck1">
                  {"Didn't meet my expectations"}
                </label>
              </div>
            </div>
          </div> */}

              {/* Good */}
              {/* <div className="col mb-4">
            <p className="rate_head mb-3">What could have been Improved?</p>
            <div className="d-flex flex-wrap gap-3">
              <div className="d-flex align-items-center gap-2">
                <input
                  className="acct_offer_check"
                  type="checkbox"
                  value=""
                  name="type"
                  id="defaultCheck1"
                />
                <label className="acct_offer_text" htmlFor="defaultCheck1">
                  Professionalism of work
                </label>
              </div>
              <div className="d-flex align-items-center gap-2">
                <input
                  className="acct_offer_check"
                  type="checkbox"
                  value=""
                  name="type"
                  id="defaultCheck1"
                />
                <label className="acct_offer_text" htmlFor="defaultCheck1">
                  Lack of innovation
                </label>
              </div>
              <div className="d-flex align-items-center gap-2">
                <input
                  className="acct_offer_check"
                  type="checkbox"
                  value=""
                  name="type"
                  id="defaultCheck1"
                />
                <label className="acct_offer_text" htmlFor="defaultCheck1">
                  Lack of strategic thinking
                </label>
              </div>
              <div className="d-flex align-items-center gap-2">
                <input
                  className="acct_offer_check"
                  type="checkbox"
                  value=""
                  name="type"
                  id="defaultCheck1"
                />
                <label className="acct_offer_text" htmlFor="defaultCheck1">
                  Lack of attention to details
                </label>
              </div>
              <div className="d-flex align-items-center gap-2">
                <input
                  className="acct_offer_check"
                  type="checkbox"
                  value=""
                  name="type"
                  id="defaultCheck1"
                />
                <label className="acct_offer_text" htmlFor="defaultCheck1">
                  {"Didn't meet my expectations"}
                </label>
              </div>
            </div>
          </div> */}

              {/* Very Good */}
              {/* <div className="col mb-4">
            <p className="rate_head mb-3">
              What could the freelancer have improved to receive a 5-star
              rating?
            </p>
            <div className="d-flex flex-wrap gap-3">
              <div className="d-flex align-items-center gap-2">
                <input
                  className="acct_offer_check"
                  type="checkbox"
                  value=""
                  name="type"
                  id="defaultCheck1"
                />
                <label className="acct_offer_text" htmlFor="defaultCheck1">
                  Professionalism of work
                </label>
              </div>
              <div className="d-flex align-items-center gap-2">
                <input
                  className="acct_offer_check"
                  type="checkbox"
                  value=""
                  name="type"
                  id="defaultCheck1"
                />
                <label className="acct_offer_text" htmlFor="defaultCheck1">
                  Lack of innovation
                </label>
              </div>
              <div className="d-flex align-items-center gap-2">
                <input
                  className="acct_offer_check"
                  type="checkbox"
                  value=""
                  name="type"
                  id="defaultCheck1"
                />
                <label className="acct_offer_text" htmlFor="defaultCheck1">
                  Lack of strategic thinking
                </label>
              </div>
              <div className="d-flex align-items-center gap-2">
                <input
                  className="acct_offer_check"
                  type="checkbox"
                  value=""
                  name="type"
                  id="defaultCheck1"
                />
                <label className="acct_offer_text" htmlFor="defaultCheck1">
                  Lack of attention to details
                </label>
              </div>
              <div className="d-flex align-items-center gap-2">
                <input
                  className="acct_offer_check"
                  type="checkbox"
                  value=""
                  name="type"
                  id="defaultCheck1"
                />
                <label className="acct_offer_text" htmlFor="defaultCheck1">
                  {"Didn't meet my expectations"}
                </label>
              </div>
            </div>
          </div> */}

              {/* Excellent */}
              {/* <div className="col mb-4">
            <p className="rate_head mb-3">We love to hear that! What made It exceptional?</p>
            <div className="d-flex flex-wrap gap-3">
              <div className="d-flex align-items-center gap-2">
                <input
                  className="acct_offer_check"
                  type="checkbox"
                  value=""
                  name="type"
                  id="defaultCheck1"
                />
                <label className="acct_offer_text" htmlFor="defaultCheck1">
                  Professionalism of work
                </label>
              </div>
              <div className="d-flex align-items-center gap-2">
                <input
                  className="acct_offer_check"
                  type="checkbox"
                  value=""
                  name="type"
                  id="defaultCheck1"
                />
                <label className="acct_offer_text" htmlFor="defaultCheck1">
                  Lack of innovation
                </label>
              </div>
              <div className="d-flex align-items-center gap-2">
                <input
                  className="acct_offer_check"
                  type="checkbox"
                  value=""
                  name="type"
                  id="defaultCheck1"
                />
                <label className="acct_offer_text" htmlFor="defaultCheck1">
                  Lack of strategic thinking
                </label>
              </div>
              <div className="d-flex align-items-center gap-2">
                <input
                  className="acct_offer_check"
                  type="checkbox"
                  value=""
                  name="type"
                  id="defaultCheck1"
                />
                <label className="acct_offer_text" htmlFor="defaultCheck1">
                  Lack of attention to details
                </label>
              </div>
              <div className="d-flex align-items-center gap-2">
                <input
                  className="acct_offer_check"
                  type="checkbox"
                  value=""
                  name="type"
                  id="defaultCheck1"
                />
                <label className="acct_offer_text" htmlFor="defaultCheck1">
                  {"Didn't meet my expectations"}
                </label>
              </div>
            </div>
          </div> */}
            </div>

            {/* Public Review */}
            <div className="col d-none">
              <p className="acct_offer_title mb-4">Write your public review</p>
              <p className="acct_offer_text">
                Share as many details as you can about the freelancer and the
                final result, including topics you mentioned: Data depth,
                Strategic thinking, Level of effort, and Level of
              </p>

              <div className="col d-flex justify-content-between align-items-center mt-4">
                <div className="d-flex align-items-center gap-2">
                  <div className=" position-relative">
                    <img
                      src={"../assets/images/icons/verify.svg"}
                      alt=""
                      className="details_profile_verify position-absolute"
                    />
                    <img
                      src={"../assets/images/user.png"}
                      alt=""
                      className="details_profile_img"
                    />
                  </div>
                  <p className="acct_head_s">Rsf_Perkalot _</p>
                </div>

                <p className="acct_head_s d-flex align-items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.3em"
                    height="1.3em"
                    viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                  4.0
                </p>
              </div>

              <hr className="acct_fil_line my-3" />
              <div className="col mb-4">
                <label className="acct_offer_label mb-2">
                  Write your review here...
                </label>
                <div className="col acct_box">
                  <textarea
                    name=""
                    className="input_box"
                    placeholder="Write at least 10 characters"
                    rows={3}></textarea>
                </div>
              </div>

              <div className="col d-flex justify-content-between gap-3 align-items-center">
                <p className="col acct_offer_hint d-flex gap-2 align-items-start">
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
                  <span>
                    <strong>BETA:</strong> Get started with an Al-generated
                    review, based on your experience with this freelancer
                  </span>
                </p>
                <button type="button" className="acct_offer_btn2">
                  Generate your review
                </button>
              </div>
            </div>

            {/* Thank You */}
            <div className="col d-none">
              <p className="acct_offer_title mb-2">Thank You</p>
              <p className="acct_offer_text">
                We credit the review balance to your wallet.
              </p>
            </div>

            <div className="d-flex gap-3 mt-5">
              <button type="button" className="acct_offer_btn1">
                Next
              </button>
              <button type="button" className="acct_offer_btn3">
                Next
              </button>
            </div>
            {/* <div className="d-flex gap-3 mt-5">
            <button type="button" className="acct_offer_btn1">
              View your orders
            </button>
            <button type="button" className="acct_offer_btn3">
              Go back to catalog
            </button>
          </div> */}
          </div>
        </div>
      )}
    </>
  );
}
