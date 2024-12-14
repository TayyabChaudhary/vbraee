import { Link } from 'react-router-dom';
import { useTabs } from '../../services/CustomTabs';
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import GameItem from '../../pages/componets/GameItem';

export default function TopOffer() {
    const slides = [
        "Slide 1",
        "Slide 2",
        "Slide 3",
        "Slide 4",
        "Slide 5",
        "Slide 6",
      ];
    
      const category = useTabs(1);
      const priceTab = useTabs(2);
  return (
    <>
         <div className="main_cate_con mb-5">
                <div className="d-lg-flex justify-content-between align-items-center mb-4">
                  <h3 className="main_title d-inline-block mb-3 mb-lg-0">
                    Top Offers
                  </h3>
                  <div className="d-flex overflow-auto hide_scroll">
                    <Link to={"/"} className="me-2">
                      <p
                        className={
                          "main_cate_tab_link " +
                          (category.activeTab == 1 && "active")
                        }
                        onClick={() => category.ChangeTab(1)}>
                        Psn
                      </p>
                    </Link>
                    <Link to={"/"} className="me-2">
                      <p
                        className={
                          "main_cate_tab_link " +
                          (category.activeTab == 2 && "active")
                        }
                        onClick={() => category.ChangeTab(2)}>
                        Xbox
                      </p>
                    </Link>
                    <Link to={"/"} className="me-2">
                      <p
                        className={
                          "main_cate_tab_link " +
                          (category.activeTab == 3 && "active")
                        }
                        onClick={() => category.ChangeTab(3)}>
                        Nintendo
                      </p>
                    </Link>
                    <Link to={"/"} className="me-2">
                      <p
                        className={
                          "main_cate_tab_link " +
                          (category.activeTab == 4 && "active")
                        }
                        onClick={() => category.ChangeTab(4)}>
                        PC gaming
                      </p>
                    </Link>
                    <Link to={"/"} className="me-2">
                      <p
                        className={
                          "main_cate_tab_link " +
                          (category.activeTab == 5 && "active")
                        }
                        onClick={() => category.ChangeTab(5)}>
                        gift cards
                      </p>
                    </Link>
                  </div>
                  <div className="d-none d-lg-flex">
                    <Link to={"/"} className="me-2">
                      <p
                        className={
                          "main_cate_tab_link px-0 " +
                          (priceTab.activeTab == 1 && "active")
                        }
                        onClick={() => priceTab.ChangeTab(1)}>
                        &lt;10${" "}
                      </p>
                    </Link>
                    <Link to={"/"} className="me-2">
                      <p
                        className={
                          "main_cate_tab_link px-0 " +
                          (priceTab.activeTab == 2 && "active")
                        }
                        onClick={() => priceTab.ChangeTab(2)}>
                        {" "}
                        &lt;20${" "}
                      </p>
                    </Link>
                    <Link to={"/"} className="">
                      <p
                        className={
                          "main_cate_tab_link px-0 " +
                          (priceTab.activeTab == 3 && "active")
                        }
                        onClick={() => priceTab.ChangeTab(3)}>
                        {" "}
                        &lt;100${" "}
                      </p>
                    </Link>
                  </div>
                </div>

                <Swiper
                  modules={[Pagination]}
                  spaceBetween={10}
                  slidesPerView={"auto"}
                  pagination={{
                    el: ".custom_pagination",
                    clickable: true,
                    renderBullet: function (index, className) {
                      // Customize the pagination bullets with your own HTML structure and classes
                      return `<span class="${className} custom_bullet"></span>`;
                    },
                  }}>
                  {/* Generate the slides dynamically */}
                  {slides.map((slide, index) => (
                    <SwiperSlide key={index} style={{ width: "auto" }}>
                      <GameItem />
                    </SwiperSlide>
                  ))}

                  {/* Custom Pagination */}
                  <div className="custom_pagination d-flex justify-content-center mt-4"></div>
                </Swiper>
              </div>
    </>
  )
}
