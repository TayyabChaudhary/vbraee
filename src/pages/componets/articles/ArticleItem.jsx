import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function ArticleItem({ customClass }) {
  return (
    <>
      <Link to={"/blog-details"}>
        <div
          className={
            "article_item " +
            (customClass ? customClass : "col-10 col-md-5 col-lg-4 col-xl-3 ")
          }
          style={{
            backgroundImage: "url(./assets/images/article_bg.png)",
          }}>
          <div className="article_item_details">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span className="article_item_type">Gaming</span>
              <span className="article_item_time">11d ago</span>
            </div>
            <p className="article_item_title">
              How to Redeem Digital Game Codes on Microsoft Platforms
            </p>
            <p className="article_item_text">
              In today’s digital age, gaming has evolved beyond physical discs
              and cartridges. Many gamers now purchase...
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}
