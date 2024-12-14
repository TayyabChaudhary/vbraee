import { Link } from "react-router-dom";

export const SearchResult = ({ isOpen }) => {
    return (
      <>
        {isOpen && (
          <div className="col-12 search_result_con d-flex flex-column position-absolute">
            <div className="search_result_cont d-flex gap-3 align-items-start mb-3">
              <img
                src={"../assets/images/game1.png"}
                alt=""
                className="col-auto search_result_img"
              />
              <div className="col-9">
                <p className="cart_item_name truncate mb-1">
                  Resident Evil 2 Xbox One / Series X|S [Digital Code] GLOBAL
                </p>
                <div className="d-flex gap-2 align-items-center">
                  <p className="cart_item_price text-white">
                    $7.<span>75</span>
                  </p>
                  <span className="cart_item_dis">-26%</span>
                </div>
                <div className="d-flex align-items-end gap-3">
                  <div className="d-flex flex-wrap">
                    <span className="game_badge type2 me-1 mb-1">
                      <svg
                        className="me-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 256 256">
                        <path
                          fill="currentColor"
                          d="M143.38 17.85a8 8 0 0 0-12.63 3.41l-22 60.41l-24.16-23.41a8 8 0 0 0-11.93.89C51 87.53 40 116.08 40 144a88 88 0 0 0 176 0c0-59.45-50.79-108-72.62-126.15m40.51 135.49a57.6 57.6 0 0 1-46.56 46.55a7.7 7.7 0 0 1-1.33.11a8 8 0 0 1-1.32-15.89c16.57-2.79 30.63-16.85 33.44-33.45a8 8 0 0 1 15.78 2.68Z"
                        />
                      </svg>
                      Hot
                    </span>
                    <span className="game_badge type3 me-1 mb-1">
                      <svg
                        className="me-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16">
                        <path
                          fill="currentColor"
                          d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"
                        />
                      </svg>
                      Instant
                    </span>
                  </div>
                  <div className="d-flex justify-content-end">
                    <span className="game_img_icon me-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M2.05 13h5.477a17.9 17.9 0 0 0 2.925 8.88A10.005 10.005 0 0 1 2.049 13m0-2a10.005 10.005 0 0 1 8.402-8.881a17.9 17.9 0 0 0-2.925 8.88zm19.9 0h-5.477a17.9 17.9 0 0 0-2.925-8.881a10.005 10.005 0 0 1 8.403 8.88m0 2a10.005 10.005 0 0 1-8.402 8.88A17.9 17.9 0 0 0 16.473 13zM9.53 13h4.94A15.9 15.9 0 0 1 12 20.592A15.9 15.9 0 0 1 9.53 13m0-2A15.9 15.9 0 0 1 12 3.408A15.9 15.9 0 0 1 14.47 11z"
                        />
                      </svg>
                    </span>
                    <span className="game_img_icon me-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24">
                        <g fill="none">
                          <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                          <path
                            fill="currentColor"
                            d="M10.438 4.368a6.5 6.5 0 1 1 2.252 10.66l-.269-.11l-.02-.004h-.61v1.578a1.25 1.25 0 0 1-1.122 1.244l-.128.006H8.963v1.578a1.25 1.25 0 0 1-1.122 1.244l-.128.006H3.73a1.01 1.01 0 0 1-1.004-.9l-.006-.11v-2.61a1.5 1.5 0 0 1 .34-.951l.1-.11l5.5-5.501l.01-.037a.3.3 0 0 0-.004-.081a6.5 6.5 0 0 1 1.772-5.902m4.242 2.828a1.5 1.5 0 1 0 2.122 2.121a1.5 1.5 0 0 0-2.122-2.12Z"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="game_img_icon me-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M8.984 2.596v17.547l3.915 1.261V6.688c0-.69.304-1.151.794-.991c.636.18.76.814.76 1.505v5.875c2.441 1.193 4.362-.002 4.362-3.152c0-3.237-1.126-4.675-4.438-5.827c-1.307-.448-3.728-1.186-5.39-1.502zm4.656 16.241l6.296-2.275c.715-.258.826-.625.246-.818c-.586-.192-1.637-.139-2.357.123l-4.205 1.5V14.98l.24-.085s1.201-.42 2.913-.615c1.696-.18 3.785.03 5.437.661c1.848.601 2.04 1.472 1.576 2.072c-.465.6-1.622 1.036-1.622 1.036l-8.544 3.107V18.86zM1.807 18.6c-1.9-.545-2.214-1.668-1.352-2.32c.801-.586 2.16-1.052 2.16-1.052l5.615-2.013v2.313L4.205 17c-.705.271-.825.632-.239.826c.586.195 1.637.15 2.343-.12L8.247 17v2.074c-.12.03-.256.044-.39.073c-1.939.331-3.996.196-6.038-.479z"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="col-auto d-flex gap-3 justify-content-center align-items-center mt-auto">
              <p className="search_result_text mb-0">122 Results Found</p>
              <Link to={"/psn"} className="search_result_text link">
                See All
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.2em"
                    height="1.2em"
                    viewBox="0 0 24 24">
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m9 5l7 7l-7 7"></path>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        )}
      </>
    );
  }