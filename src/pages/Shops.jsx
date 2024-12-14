import { Link } from "react-router-dom";
import Pagination from "./componets/utility/Pagination";
import ShopItem from "./componets/shop/ShopItem";
import MainHeader from "./componets/MainHeader";
import MenuSideBar from "./componets/MenuSideBar";
import ShopFilter from "./componets/shop/ShopFilter";
import { useEffect, useState } from "react";
import RightSideBar from "./componets/RightSideBar";
import MainFooter from "./componets/MainFooter";

export default function Shops() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [cards] = useState([...Array(10).keys()]); // Example card data (0-9)
  const [filledCards, setFilledCards] = useState([]);

  useEffect(() => {
    fillGrid();
    window.addEventListener("resize", fillGrid); // Refill on resize
    return () => window.removeEventListener("resize", fillGrid);
  }, [cards]);

  const fillGrid = () => {
    const container = document.querySelector(".game_list_con");
    const containerWidth = container.clientWidth; // Get container width
    const itemsPerRow = Math.floor(containerWidth / 250); // Calculate items that can fit

    const totalItems = Math.ceil(cards.length / itemsPerRow) * itemsPerRow; // Calculate total items needed
    const placeholders = totalItems - cards.length; // Calculate number of placeholders needed
    const filled = [...cards, ...Array(placeholders).fill(null)]; // Create filled array

    setFilledCards(filled);
  };

  function OpenFilter() {
    setIsFilterOpen(true);
  }
  function CloseFilter() {
    setIsFilterOpen(false);
  }

  return (
    <>
      <div className="d-flex main_house_con">
        <MenuSideBar makeShort={true} activeLink={"shops"} />

        <div
          className="col housing_con d-flex flex-column"
          style={
            {
              // backgroundImage: " url('./assets/images/psn_bg.png')",
            }
          }>
          <MainHeader activeLink={"shops"} />

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
                  <p className="crumb_link">/ Shops</p>
                </Link>
              </div>

              <div className="main_cont d-flex gap-4 position-relative">
                <ShopFilter isOpen={isFilterOpen} onClose={CloseFilter} />

                <div className="w-100">
                  <p className="cate_filter_head mb-2">34 ITEMS</p>

                  <h3 className="cate_header">Shops</h3>
                  <hr className="cate_hr my-4" />

                  <div className="col d-xl-flex flex-row-reverse align-items-start align-items-xl-center gap-3 gap-xl-4 mb-4">
                    <div className="col col-xl-3 d-flex gap-2 align-items-center mb-3 mb-xl-0">
                      <p
                        onClick={OpenFilter}
                        className="col d-flex d-lg-none cate_filter_tigger align-items-center gap-2">
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
                      <select className="col col-lg-6 col-xl cate_filter_sort_sel">
                        <option value="">Most recent</option>
                      </select>
                    </div>

                    <div className="col d-flex gap-2 overflow-auto hide_scroll">
                      <span className="cate_filter_tag">
                        Clear all
                        <svg
                          className="ms-1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 32 32">
                          <path
                            fill="currentColor"
                            d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"
                          />
                        </svg>
                      </span>
                      <span className="cate_filter_tag">
                        Switzerland
                        <svg
                          className="ms-1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 32 32">
                          <path
                            fill="currentColor"
                            d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"
                          />
                        </svg>
                      </span>
                      <span className="cate_filter_tag">
                        Instant
                        <svg
                          className="ms-1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 32 32">
                          <path
                            fill="currentColor"
                            d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"
                          />
                        </svg>
                      </span>
                      <span className="cate_filter_tag active">
                        24H
                        <svg
                          className="ms-1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 32 32">
                          <path
                            fill="currentColor"
                            d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"
                          />
                        </svg>
                      </span>
                      <span className="cate_filter_tag">
                        Max: $1000
                        <svg
                          className="ms-1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 32 32">
                          <path
                            fill="currentColor"
                            d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>

                  <div className="col game_list_con row justify-content-start g-3 mb-4">
                    {filledCards.map((card, index) => (
                      <>
                        {card !== null ? (
                          <ShopItem key={index} />
                        ) : (
                          <div key={index} className="shop_card_item">
                            <div
                              className="col empty_game_item_cont d-flex justify-content-center align-items-center "
                              style={{
                                backgroundImage:
                                  " url('./assets/images/empty_game.png')",
                              }}>
                              <img
                                src={"../assets/images/fade_logo.png"}
                                alt=""
                                className="col-10"
                              />
                            </div>
                          </div>
                        )}
                      </>
                    ))}
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
