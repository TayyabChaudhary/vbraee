/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function GameItem({ isWishlist, isCart }) {
  // List of images
  const images = [
    "../assets/images/game1.png",
    "../assets/images/game2.png",
    "../assets/images/game3.png",
    "../assets/images/game4.png",
    // Add more image URLs as needed
  ];

  // Function to get a random image from the list
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  const imageUrl = getRandomImage(); // Get a random image on render

  return (
    <>
      <div className="game_item">
        <div className="col game_item_cont ">
          {/* Game Image */}
          <div className="position-relative">
            <span className="game_badge top_left type3 position-absolute">
              DLC
            </span>
            {isWishlist ? (
              <div
                className={
                  "game_item_wishlist justify-content-center align-items-center position-absolute " +
                  (isWishlist ? "d-flex" : "")
                }
                role="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21z"
                  />
                </svg>
              </div>
            ) : (
              <div
                className="game_item_wishlist justify-content-center align-items-center position-absolute "
                role="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="m12 15.39l-3.76 2.27l.99-4.28l-3.32-2.88l4.38-.37L12 6.09l1.71 4.04l4.38.37l-3.32 2.88l.99 4.28M22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.45 4.73L5.82 21L12 17.27L18.18 21l-1.64-7.03z"
                  />
                </svg>
              </div>
            )}

            <img
              src={imageUrl}
              alt=""
              className="game_item_img"
            />
            {/* Game Image Overlay */}
            <div className="game_img_over_con d-flex justify-content-between align-items-end position-absolute bottom-0 pt-5">
              <span className="game_discount">-26%</span>
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
          {/* Game Details */}
          <div className="game_details_con d-flex flex-column">
            <Link to={"/details"} className="d-inline-block mb-2">
              <p className="game_title">
                Immortals of Aveum Steam CD Key GLOBAL
              </p>
            </Link>
            <div className="d-flex flex-wrap mb-2">
              <p className="geme_deliver text-nowrap me-2 mb-1">
                <span>24H</span>
              </p>
              <span className="game_badge type4 d-flex align-items-center me-1 mb-1">
                <svg
                  className="me-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
                  />
                </svg>
                4.9
              </span>
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

            <div className="d-flex justify-content-between align-items-end mt-auto">
              <div className="">
                <p className="gmae_item_price_sm mb-0">$64.37</p>
                <p className="gmae_item_price mb-0">
                  $47.<span>75</span>
                </p>
              </div>

              {isCart ? (
                <div className="game_item_cart active d-flex position-relative">
                  <span className="icon d-flex justify-content-center align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M14.665 2.33a.75.75 0 0 1 1.006.335l2.201 4.402c1.353.104 2.202.37 2.75 1.047c.9 1.114.541 2.79-.177 6.143l-.429 2c-.487 2.273-.73 3.409-1.555 4.076S16.474 21 14.15 21h-4.3c-2.324 0-3.486 0-4.31-.667c-.826-.667-1.07-1.803-1.556-4.076l-.429-2c-.718-3.353-1.078-5.029-.177-6.143c.548-.678 1.397-.943 2.75-1.047l2.201-4.402a.75.75 0 0 1 1.342.67l-1.835 3.67Q8.559 7 9.422 7h5.156q.863-.001 1.586.005l-1.835-3.67a.75.75 0 0 1 .336-1.006M7.25 12a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M10 14.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="check position-absolute">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
              ) : (
                <div className="game_item_cart d-flex position-relative">
                  <span className="icon d-flex  justify-content-center align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M14.665 2.33a.75.75 0 0 1 1.006.335l2.201 4.402c1.353.104 2.202.37 2.75 1.047c.9 1.114.541 2.79-.177 6.143l-.429 2c-.487 2.273-.73 3.409-1.555 4.076S16.474 21 14.15 21h-4.3c-2.324 0-3.486 0-4.31-.667c-.826-.667-1.07-1.803-1.556-4.076l-.429-2c-.718-3.353-1.078-5.029-.177-6.143c.548-.678 1.397-.943 2.75-1.047l2.201-4.402a.75.75 0 0 1 1.342.67l-1.835 3.67Q8.559 7 9.422 7h5.156q.863-.001 1.586.005l-1.835-3.67a.75.75 0 0 1 .336-1.006M7.25 12a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M10 14.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
