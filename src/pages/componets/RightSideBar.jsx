import { useContext } from "react";
import { SideBarContext } from "../../store/SideBarContext";
import { Link } from "react-router-dom";

export default function RightSideBar() {
  const { isRightSideMenuCollaped, ToggleRightSideMenu } =
    useContext(SideBarContext);

  return (
    <>
      <div
        className={
          "right_sidebar_con d-flex flex-column sticky-top position-relative " +
          (isRightSideMenuCollaped ? "open" : "close")
        }>
        {isRightSideMenuCollaped ? (
          <span
            onClick={() => ToggleRightSideMenu()}
            className="rs_close d-flex justify-content-center align-items-center position-absolute"
            role="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M4.8 21.57L7.222 24L19.2 12L7.222 0L4.8 2.43L14.347 12z"
              />
            </svg>
          </span>
        ) : (
          <span
            onClick={() => ToggleRightSideMenu()}
            className="rs_close open d-flex justify-content-center align-items-center position-absolute"
            role="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M19.2 2.43L16.778 0L4.8 12l11.978 12l2.422-2.43L9.653 12z"></path>
            </svg>
          </span>
        )}

        <div className="rec_con">
          <div className="rec_cont position-relative">
            <img
              src={"./assets/images/game_pad.png"}
              alt=""
              className="rec_img position-absolute"
            />
            <p className="rec_title">Get 10%</p>
            <div className="col p-3">
              <p className="rec_text">
                Recommend Products <br /> and <span>earn money</span>
              </p>
            </div>
          </div>
        </div>
        <div className="right_sidebar_cont">
          <div className="col mb-4">
            <p className="rs_header">Latest Purchase</p>
            <div className="col">
              <div className="rs_item1_cont mb-3">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <p className="rs_item1_type">Psc•Dlc</p>
                  <p className="rs_item1_time">20m ago</p>
                </div>
                <p className="rs_item1_text">
                  Try To Get Destiny 2: The Final Shape + Annual Pass – Rand...
                </p>
                <div className="d-flex align-items-end mb-2">
                  <p className="banner_sm_price me-2 mb-0">
                    $47.<span>75</span>
                  </p>
                  <p className="banner_sm_price_sm mb-0">$64.37</p>
                </div>
                <Link to={"/shop-details"}>
                  <div className="d-flex gap-2">
                    <img
                      src={"./assets/images/user.png"}
                      alt=""
                      className="rs_item1_img"
                    />
                    <div className="col">
                      <p className="rs_item1_img_text_sm">Seller</p>
                      <p className="rs_item1_img_text">Instant Keyz</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="rs_item1_cont mb-3">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <p className="rs_item1_type">Psc•Dlc</p>
                  <p className="rs_item1_time">20m ago</p>
                </div>
                <p className="rs_item1_text">
                  Try To Get Destiny 2: The Final Shape + Annual Pass – Rand...
                </p>
                <div className="d-flex align-items-end mb-2">
                  <p className="banner_sm_price me-2 mb-0">
                    $47.<span>75</span>
                  </p>
                  <p className="banner_sm_price_sm mb-0">$64.37</p>
                </div>
                <Link to={"/shop-details"}>
                  <div className="d-flex gap-2">
                    <img
                      src={"./assets/images/user.png"}
                      alt=""
                      className="rs_item1_img"
                    />
                    <div className="col">
                      <p className="rs_item1_img_text_sm">Seller</p>
                      <p className="rs_item1_img_text">Instant Keyz</p>
                    </div>
                  </div>
                </Link>
              </div>
             
            </div>
          </div>
          <div className="col">
            <p className="rs_header">LATEST ARTICLES</p>
            <div className="col">
              <Link to={"/blog-details"} className="">
                <div
                  className="col rs_article_item mb-3"
                  style={{
                    backgroundImage: "url(./assets/images/article_bg.png)",
                  }}>
                  <div className="rs_article_item_details">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="rs_article_item_type">Gaming</span>
                      <span className="rs_article_item_time">11d ago</span>
                    </div>
                    <p className="rs_article_item_title">
                      How to Redeem Digital Game Codes on Microsoft Platforms
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
