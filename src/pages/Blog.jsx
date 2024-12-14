import { Link } from "react-router-dom";
import Pagination from "./componets/utility/Pagination";
import Subscribe from "./componets/utility/Subscribe";
import MenuSideBar from "./componets/MenuSideBar";
import MainHeader from "./componets/MainHeader";
import BlogFilter from "./componets/BlogFilter";
import RightSideBar from "./componets/RightSideBar";
import MainFooter from "./componets/MainFooter";

export default function Blog() {
  return (
    <>
      <div className="d-flex main_house_con">
        <MenuSideBar makeShort={true} activeLink={"blogs"} />

        <div
          className="col housing_con d-flex flex-column"
          style={
            {
              // backgroundImage: " url('./assets/images/psn_bg.png')",
            }
          }>
          <MainHeader activeLink={"blogs"} />

          <div className="housing d-flex gap-1 position-relative">
            <div id="scrollable-section" className="col main_section">
              <div className="d-flex align-items-center gap-2 mb-3">
                <Link to={"/"}>
                  <span className="crumb_icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M13.45 2.533a2.25 2.25 0 0 0-2.9 0L3.8 8.228a2.25 2.25 0 0 0-.8 1.72v9.305c0 .966.784 1.75 1.75 1.75h3a1.75 1.75 0 0 0 1.75-1.75V15.25c0-.68.542-1.232 1.217-1.25h2.566a1.25 1.25 0 0 1 1.217 1.25v4.003c0 .966.784 1.75 1.75 1.75h3a1.75 1.75 0 0 0 1.75-1.75V9.947a2.25 2.25 0 0 0-.8-1.72z"
                      />
                    </svg>
                  </span>
                </Link>
                <Link>
                  <p className="crumb_link">/ Blog</p>
                </Link>
              </div>

              <div className="main_cont d-flex gap-4">
                <BlogFilter />

                <div className="col">
                  <p className="blog_head mb-2">Welcome</p>
                  <p className="blog_title">The Vbrae Blog</p>

                  <hr className="blog_line d-none d-lg-block my-4" />
                  <select className="col-12 col-md-4 cate_filter_sort_sel d-lg-none my-3">
                    <option value="">Category: All</option>
                    <option value="">Category: Gaming</option>
                    <option value="">Category: Investment</option>
                    <option value="">Category: Software</option>
                    <option value="">Category: News</option>
                  </select>

                  <div className="col d-md-flex d-lg-block d-lg-flex gap-4 mb-5">
                    <div className="col col-md-7 col-lg-6 col-xl-8 mb-3 mb-md-0">
                      <img
                        src={"./assets/images/blog1.png"}
                        alt=""
                        className="blog_img_bg"
                      />
                    </div>
                    <div className="col my-auto">
                      <p className="blog_item_head mb-2">
                        gaming • 18 JUNE 2024
                      </p>
                      <p className="blog_item_name_bg mb-2">
                        Everything we know about Path of Exile 2
                      </p>
                      <p className="blog_item_text mb-4 mb-md-5">
                        Path of Exile 2 is a highly anticipated action RPG that
                        aims to provide a rich and immersive experience for
                        dedicated gamers and genre enthusiasts.
                      </p>
                      <Link to={"/blog-details"}>
                        <span className="blog_item_link">READ MORE ›</span>
                      </Link>
                    </div>
                  </div>

                  {/* Subscribe Section */}
                  <div className="col mb-5">
                    <Subscribe />
                  </div>

                  <div className="col row g-3 mb-4">
                    <div className="col-12 col-md-6 col-xl-4 blog_item">
                      <img
                        src={"./assets/images/blog2.png"}
                        alt=""
                        className="blog_item_img mb-3"
                      />
                      <p className="blog_item_head mb-2">
                        gaming • 18 JUNE 2024
                      </p>
                      <Link to={"/blog-details"}>
                        <p className="blog_item_name mb-2">
                          Digital Game Codes Demystified: A Comprehensive
                          Overview for Gamers
                        </p>
                      </Link>
                      <p className="blog_item_text mb-3">
                        Path of Exile 2 is a highly anticipated action RPG that
                        aims to provide a rich and immersive experience for
                        dedicated gamers and genre enthusiasts.
                      </p>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4 blog_item">
                      <img
                        src={"./assets/images/blog3.png"}
                        alt=""
                        className="blog_item_img mb-3"
                      />
                      <p className="blog_item_head mb-2">
                        gaming • 18 JUNE 2024
                      </p>
                      <Link to={"/blog-details"}>
                        <p className="blog_item_name mb-2">
                          Digital Game Codes Demystified: A Comprehensive
                          Overview for Gamers
                        </p>
                      </Link>
                      <p className="blog_item_text mb-3">
                        Path of Exile 2 is a highly anticipated action RPG that
                        aims to provide a rich and immersive experience for
                        dedicated gamers and genre enthusiasts.
                      </p>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4 blog_item">
                      <img
                        src={"./assets/images/blog3.png"}
                        alt=""
                        className="blog_item_img mb-3"
                      />
                      <p className="blog_item_head mb-2">
                        gaming • 18 JUNE 2024
                      </p>
                      <Link to={"/blog-details"}>
                        <p className="blog_item_name mb-2">
                          Digital Game Codes Demystified: A Comprehensive
                          Overview for Gamers
                        </p>
                      </Link>
                      <p className="blog_item_text mb-3">
                        Path of Exile 2 is a highly anticipated action RPG that
                        aims to provide a rich and immersive experience for
                        dedicated gamers and genre enthusiasts.
                      </p>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4 blog_item">
                      <img
                        src={"./assets/images/blog3.png"}
                        alt=""
                        className="blog_item_img mb-3"
                      />
                      <p className="blog_item_head mb-2">
                        gaming • 18 JUNE 2024
                      </p>
                      <Link to={"/blog-details"}>
                        <p className="blog_item_name mb-2">
                          Digital Game Codes Demystified: A Comprehensive
                          Overview for Gamers
                        </p>
                      </Link>
                      <p className="blog_item_text mb-3">
                        Path of Exile 2 is a highly anticipated action RPG that
                        aims to provide a rich and immersive experience for
                        dedicated gamers and genre enthusiasts.
                      </p>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4 blog_item">
                      <img
                        src={"./assets/images/blog3.png"}
                        alt=""
                        className="blog_item_img mb-3"
                      />
                      <p className="blog_item_head mb-2">
                        gaming • 18 JUNE 2024
                      </p>
                      <Link to={"/blog-details"}>
                        <p className="blog_item_name mb-2">
                          Digital Game Codes Demystified: A Comprehensive
                          Overview for Gamers
                        </p>
                      </Link>
                      <p className="blog_item_text mb-3">
                        Path of Exile 2 is a highly anticipated action RPG that
                        aims to provide a rich and immersive experience for
                        dedicated gamers and genre enthusiasts.
                      </p>
                    </div>
                  </div>

                  <div className="col d-flex justify-content-center">
                    <Pagination />
                  </div>
                </div>
              </div>

              <div className="col d-lg-none">
                <MainFooter />
              </div>
            </div>

            <RightSideBar />
          </div>
        </div>
      </div>
    </>
  );
}
