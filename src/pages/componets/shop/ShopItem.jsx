import { Link } from "react-router-dom";

export default function ShopItem() {
  return (
    <>
      <div
        className="shop_card_item">
        <div className="col shop_item">
          <div className="col shop_item_img_con d-flex position-relative gap-1">
            <img
              src={"./assets/images/game1.png"}
              alt=""
              className="col shop_item_img first"
            />
            <img
              src={"./assets/images/game1.png"}
              alt=""
              className="col shop_item_img"
            />
            <img
              src={"./assets/images/game1.png"}
              alt=""
              className="col shop_item_img last"
            />

            <div className="col shop_item_overlay_con d-flex justify-content-center position-absolute">
              <div className="shop_item_overlay d-flex justify-content-center gap-3 ">
                <span className="details_profile_tag position-relative d-flex align-items-center">
                  <svg
                    className="position-absolute"
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
                <span className="details_profile_tag seller position-relative d-flex align-items-center">
                  <svg
                    className="position-absolute"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256">
                    <path
                      fill="currentColor"
                      d="M239.75 90.81c0 .11 0 .21-.07.32L217 195a16 16 0 0 1-15.72 13H54.71A16 16 0 0 1 39 195L16.32 91.13c0-.11-.05-.21-.07-.32A16 16 0 0 1 44 77.39l33.67 36.29l35.8-80.29a1 1 0 0 0 0-.1a16 16 0 0 1 29.06 0a1 1 0 0 0 0 .1l35.8 80.29L212 77.39a16 16 0 0 1 27.71 13.42Z"
                    />
                  </svg>
                  Top seller
                </span>
              </div>
            </div>
          </div>
          {/* <div className="col shop_item_img_con position-relative">
          <img
            src={"./assets/images/shop_bg_img.png"}
            alt=""
            className="w-100 shop_item_img"
          />
          <p className="shop_item_img_text text-center position-absolute">
            NO PRODUCT YET
          </p>
        </div> */}
          <div className="col d-flex flex-column align-items-center pt-3">
            <div className="shop_item_profile position-relative mb-2">
              <span className="position-absolute"></span>
              <img src={"./assets/images/user.png"} alt="" className="" />
            </div>
            <Link to={"/shop-details"}>
              <p className="shop_item_name mb-1">Freaky</p>
            </Link>
            <p className="shop_item_text mb-3">474 ordered • since May 2023 </p>
            <Link to={"/shop-details"}>
              <button type="button" className="shop_item_btn">
                Visit shop
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
