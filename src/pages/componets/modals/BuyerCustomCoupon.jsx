
/* eslint-disable react/prop-types */
export default function BuyerCustomCoupon({ isOpen, onClose }) {
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
            <p className="dash_level_title mb-4">Set Custom Coupon</p>

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

            <div className="d-md-flex gap-3">
              <div className="col mb-3">
                <label
                  htmlFor="email"
                  className="auth_label text-uppercase mb-2">
                  Original Price
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
                  Discount (%)
                </label>
                <input
                  type="text"
                  name="email"
                  className="auth_input"
                  placeholder="30"
                />
              </div>
            </div>
            <div className="d-md-flex gap-3">
              <div className="col mb-3">
                <label
                  htmlFor="email"
                  className="auth_label text-uppercase mb-2">
                  Price After Discount
                </label>
                <input
                  type="text"
                  name="email"
                  className="auth_input"
                  placeholder="$ 154.8"
                />
              </div>
              <div className="col mb-3">
                <label
                  htmlFor="email"
                  className="auth_label text-uppercase mb-2">
                  Your Earning After Added Coupon
                </label>
                <input
                  type="text"
                  name="email"
                  className="auth_input"
                  placeholder="$ 139.8"
                />
              </div>
            </div>
            <div className="d-md-flex gap-3">
              <div className="col mb-3">
                <label
                  htmlFor="email"
                  className="auth_label text-uppercase mb-2">
                  Expiry Date
                </label>
                <input
                  type="date"
                  name="email"
                  className="auth_input"
                  placeholder="$ 154.8"
                />
              </div>
              
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
