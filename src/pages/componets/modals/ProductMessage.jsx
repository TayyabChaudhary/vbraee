/* eslint-disable react/prop-types */

export default function MessageModal({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div className="modal_con d-lg-flex justify-content-center align-items-center">
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

            {/* Public Review */}
            <div className="col">
              <p className="acct_offer_title mb-4">Send Message</p>

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
              </div>

              <hr className="acct_fil_line my-3" />
              <div className="col mb-3">
                <label
                  htmlFor="comment"
                  className="auth_label text-uppercase mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="comment"
                  className="auth_input"
                  placeholder="-"
                />
              </div>
              <div className="col mb-4">
                <label className="acct_offer_label mb-2">message</label>
                <div className="col acct_box">
                  <textarea
                    name=""
                    className="input_box"
                    placeholder="Write a message"
                    rows={3}></textarea>
                </div>
              </div>
            </div>

            <div className="d-flex gap-3 mt-2">
              <button type="button" className="col col-lg-auto acct_offer_btn1">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
