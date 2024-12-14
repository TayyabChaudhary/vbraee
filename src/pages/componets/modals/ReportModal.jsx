/* eslint-disable react/prop-types */
export default function ReportModal({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div className="modal_con d-lg-flex justify-content-center align-items-start align-items-xl-center">
          <form
            method="post"
            className="col col-lg-10 col-xl-6 modal_cont position-relative">
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
            <p className="dash_level_title mb-4">Report a problem </p>

            <div className="col mb-3">
              <p className="auth_label text-uppercase mb-2">Problem Type</p>
              <div className="d-flex gap-4 flex-wrap align-items-start">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <input
                    className="acct_offer_check"
                    type="radio"
                    value=""
                    name="type"
                    id="defaultCheck1"
                    checked
                  />
                  <label className="acct_offer_text" htmlFor="defaultCheck1">
                    Revoked
                  </label>
                </div>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <input
                    className="acct_offer_check"
                    type="radio"
                    value=""
                    name="type"
                    id="defaultCheck2"
                  />
                  <label className="acct_offer_text" htmlFor="defaultCheck2">
                    Already Redeemed
                  </label>
                </div>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <input
                    className="acct_offer_check"
                    type="radio"
                    value=""
                    name="type"
                    id="defaultCheck3"
                  />
                  <label className="acct_offer_text" htmlFor="defaultCheck3">
                    Other
                  </label>
                </div>
              </div>
            </div>

            <div className="col mb-3">
              <p className="auth_label text-uppercase mb-2">
                Select Item you wish to report
              </p>
              <div className="">
                <select name="" className="acct_sel">
                  <option value="" disabled selected>
                    Select an item
                  </option>
                  <option value="">
                    Tekken 8 Xbox Series X | S Private Account Global
                  </option>
                  <option value="">
                    Sifu Xbox Series X | S / Xbox One FULL ACCESS Account Global
                  </option>
                </select>
              </div>
            </div>

            <div className="d-flex gap-3">
              <div className="col mb-3">
                <p className="auth_label text-uppercase mb-2">
                  {"Select Item's Key"}
                </p>
                <div className="">
                  <select name="" className="acct_sel">
                    <option value="" disabled selected>
                      Select key
                    </option>
                    <option value="">C9Y6P-9MQ6K-PGM93-FCC3K-3WGVZ</option>
                    <option value="">C9Y6P-9MQ6K-US44-FCC3K-3WGVZ</option>
                  </select>
                </div>
              </div>

              <div className="col mb-3">
                <p className="auth_label text-uppercase mb-2">
                  Preferred Solution
                </p>
                <div className="">
                  <select name="" className="acct_sel">
                    <option value="Refund">Refund in store balance</option>
                    <option value="New Key">Provide New Key</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="col mb-3">
                <label
                  htmlFor="comment"
                  className="auth_label text-uppercase mb-2">
                  Comment
                </label>
                <div className="col acct_box">
                  <textarea
                    name=""
                    className="input_box"
                    placeholder="Write your message"
                    rows={4}></textarea>
                </div>
              </div>
              <div className="col mb-3">
                <label
                  htmlFor="comment"
                  className="auth_label text-uppercase mb-2">
                  Attachments <span>(optional)</span>
                </label>
                <div className="col acct_offer_file_con">
                  <div className="acct_offer_file">
                    <p className="acct_offer_text text-center">
                      <span className="bold">
                        <u>Add file</u> or drop files here
                      </span>{" "}
                      <br /> Max 3 screenshots files (Only jpg, jpeg and png
                      attachments are allowed)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex gap-3 mt-3">
              <button type="reset" className="acct_offer_btn2">
                Clear
              </button>
              <button type="submit" className="acct_offer_btn3">
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
