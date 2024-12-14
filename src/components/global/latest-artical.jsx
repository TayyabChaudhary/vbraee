import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ArticleItem from "../../pages/componets/articles/ArticleItem";

export default function LatestArticalSection() {
    const articles = [
        "Slide 1",
        "Slide 2",
        "Slide 3",
        "Slide 4",
        "Slide 5",
        "Slide 6",
      ];
  return (
    <>
        <div className="main_cate_con ">
                <div className="d-flex justify-content-between align-items-center overflow-auto mb-4">
                  <h3 className="main_title">Latest Articles</h3>
                </div>
                <Swiper
                  modules={[Pagination]}
                  spaceBetween={10}
                  // slidesPerView={2}
                  pagination={{
                    el: ".custom_pagination",
                    clickable: true,
                    renderBullet: function (index, className) {
                      // Customize the pagination bullets with your own HTML structure and classes
                      return `<span class="${className} custom_bullet"></span>`;
                    },
                  }}
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 15,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    1230: {
                      slidesPerView: 4,
                      spaceBetween: 20,
                    },
                  }}>
                  {/* Generate the slides dynamically */}
                  {articles.map((item, index) => (
                    <SwiperSlide key={index}>
                      <ArticleItem customClass={"col-12"} />
                    </SwiperSlide>
                  ))}
                  {/* Custom Pagination */}
                  <div className="custom_pagination d-flex justify-content-center my-4"></div>
                </Swiper>
              </div>
    </>
  )
}
