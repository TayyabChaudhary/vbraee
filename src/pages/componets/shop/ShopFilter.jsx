/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function ShopFilter({ isOpen, onClose }) {
  return (
    <>
      <div
        className={
          "col col-lg-3 col-xl-2 cate_filter_con flex-column " +
          (isOpen ? "d-flex" : "d-none d-lg-flex")
        }>
        <div className="col">
          <p className="col d-none d-lg-flex cate_filter_tigger align-items-center gap-2 mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24">
              <g fill="none" fillRule="evenodd">
                <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                <path
                  fill="currentColor"
                  d="M3 4.5A1.5 1.5 0 0 1 4.5 3h15A1.5 1.5 0 0 1 21 4.5v2.086A2 2 0 0 1 20.414 8L15 13.414v7.424a1.1 1.1 0 0 1-1.592.984l-3.717-1.858A1.25 1.25 0 0 1 9 18.846v-5.432L3.586 8A2 2 0 0 1 3 6.586z"
                />
              </g>
            </svg>
            Filter by
            <span className="d-flex justify-content-center align-items-center ms-auto">
              6
            </span>
          </p>

          <p className="col d-flex d-lg-none cate_filter_title align-items-center gap-2 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24">
              <g fill="none" fillRule="evenodd">
                <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                <path
                  fill="currentColor"
                  d="M3 4.5A1.5 1.5 0 0 1 4.5 3h15A1.5 1.5 0 0 1 21 4.5v2.086A2 2 0 0 1 20.414 8L15 13.414v7.424a1.1 1.1 0 0 1-1.592.984l-3.717-1.858A1.25 1.25 0 0 1 9 18.846v-5.432L3.586 8A2 2 0 0 1 3 6.586z"
                />
              </g>
            </svg>
            Filter by
            <span
              onClick={onClose}
              className="d-flex justify-content-center align-items-center ms-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"></path>
              </svg>
            </span>
          </p>

          <div className="col mb-4">
            <li className="cate_filter_head mb-2">Category</li>
            <div className="col">
              <Link className="d-block mb-2">
                <p className="cate_filter_text">Game Account</p>
              </Link>
              <Link className="d-block mb-2">
                <p className="cate_filter_text">Play Station Network</p>
              </Link>
              <Link className="d-block mb-2">
                <p className="cate_filter_text">PS3</p>
              </Link>
              <Link className="d-block mb-2">
                <p className="cate_filter_text">PS4</p>
              </Link>
              <Link className="d-block mb-2">
                <p className="cate_filter_text">PS5</p>
              </Link>
            </div>
          </div>

          <div className="col mb-4">
            <li className="cate_filter_head mb-2">Type</li>
            <div className="col">
              <div className="col d-flex align-items-start gap-2 mb-2">
                <input
                  className="col-auto cate_filter_check mt-1"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
                <label className="cate_filter_label" htmlFor="defaultCheck1">
                  Codes/Keys
                </label>
              </div>
              <div className="col d-flex align-items-center gap-2 mb-2">
                <input
                  className="col-auto cate_filter_check"
                  type="checkbox"
                  value=""
                  id="defaultCheck2"
                />
                <label className="cate_filter_label" htmlFor="defaultCheck2">
                  Accounts
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="col-auto d-flex d-lg-none gap-2 cate_filter_btn_con sticky-bottom">
          <button type="button" className="col cate_filter_btn dark">
            Clear all
          </button>
          <button type="button" className="col cate_filter_btn">
            Apply filter
          </button>
        </div>
      </div>
    </>
  );
}
