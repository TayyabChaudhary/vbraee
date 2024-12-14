import { Link } from "react-router-dom";
import Pagination from "../componets/utility/Pagination";
import GameItem from "../componets/GameItem";
import AccountSideBar from "../componets/account/AccountSideBar";
import MainHeader from "../componets/MainHeader";
import { useEffect, useState } from "react";
import EmptyGameItem from "../componets/EmptyGameItem";
import MainFooter from "../componets/MainFooter";

export default function Wishlist() {
  const breadCrums = [
    {
      title: "Wishlist",
      url: "/account/wishlist",
    },
  ];

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

  const breadCrumsList = breadCrums?.map((item, index) => {
    return (
      <Link to={item.url} key={index}>
        <p className="crumb_link">/ {item.title}</p>
      </Link>
    );
  });
  return (
    <>
      <div
        className="d-flex w-100 main_house_con"
        style={{
          background: "none",
        }}>
        <AccountSideBar activeLink={"wishlist"} />

        <div className="col housing_con d-flex flex-column">
          <MainHeader
            showHeader={true}
            isAccount={true}
            breadCrums={breadCrums}
            activeLink={"wishlist"}
          />

          <div id="scrollable-section" className="col acct_cont_con pt-lg-0">
            <div className=" d-lg-none justify-content-between align-items-center mb-3">
              <div className="d-flex align-items-center gap-2">
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
                {breadCrumsList}
              </div>
            </div>

            <div className="acct_cont ">
              <div className="col game_list_con row g-3 mb-4">
                {filledCards.map((card, index) => (
                  <>
                    {card !== null ? (
                      <GameItem key={index} />
                    ) : (
                      <EmptyGameItem />
                    )}
                  </>
                ))}
              </div>
              <div className="col d-flex justify-content-center">
                <Pagination />
              </div>
            </div>

            <div className="col d-lg-none mt-4">
              <MainFooter />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
