import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export default function BannerSection() {

  return (
    <>
  
          <div className="banner_con d-lg-flex gap-3 mb-5">
                <Swiper
                  modules={[Pagination]}
                  pagination={{
                    // el: "",
                    clickable: true,
                    renderBullet: function (index, className) {
                      // Customize the pagination bullets with your own HTML structure and classes
                      return `<span class="${className} banner_custom_bullet mb-3 mb-lg-0"></span>`;
                    },
                  }}
                  slidesPerView={1}
                  autoplay={true}>
                  <SwiperSlide>
                    <div
                      className="col banner_item1_con mb-3 mb-lg-0"
                      style={{
                        backgroundImage: "url(./assets/images/banner1.png)",
                      }}>
                      <div className="banner_item1_cont">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="banner_timing d-flex align-items-center mb-3">
                            <p className="mb-0 me-2">
                              ends in: 12h | 23m | 33s{" "}
                            </p>
                            <svg
                              className=""
                              xmlns="http://www.w3.org/2000/svg"
                              width="20px"
                              height="20px"
                              viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M5.42 19.528A9.96 9.96 0 0 0 12 22a9.97 9.97 0 0 0 6.585-2.472c1.564-1.594-3.597-7.258-6.585-9.515c-2.985 2.257-8.15 7.921-6.582 9.515m9.3-12.005c2.083 2.467 6.236 8.594 5.063 10.76A9.95 9.95 0 0 0 22 12.002a9.96 9.96 0 0 0-2.975-7.113s-.023-.018-.068-.035a.7.7 0 0 0-.234-.038c-.494 0-1.655.362-4.005 2.706M5.045 4.855c-.048.017-.068.034-.072.035A9.96 9.96 0 0 0 2 12.003c0 2.379.832 4.561 2.217 6.278C3.051 16.11 7.201 9.988 9.285 7.523C6.935 5.178 5.772 4.818 5.28 4.818a.6.6 0 0 0-.234.039zM12 4.959S9.546 3.523 7.63 3.455c-.753-.027-1.213.246-1.268.282C8.15 2.539 10.05 2 11.988 2H12c1.945 0 3.838.538 5.638 1.737c-.056-.038-.512-.31-1.266-.282c-1.917.068-4.372 1.5-4.372 1.5z"
                              />
                            </svg>
                          </div>

                          <img
                            src={"./assets/images/ghost.png"}
                            alt=""
                            className="banner_logo d-none d-md-block"
                          />
                        </div>

                        <div className="mb-3">
                          <h5 className="banner_title">Ghost of Tsushima</h5>
                          <span className="banner_title tag">
                            Director&apos;s cut
                          </span>
                        </div>

                        <div className="col col-md-10 col-lg-8 mb-3">
                          <p className="banner_text">
                            For the very first time on PC, play through Jin
                            Sakai’s journey and discover the complete Ghost of
                            Tsushima experience in this Director’s Cut.
                          </p>
                        </div>

                        <div className="d-flex justify-content-between align-items-end">
                          <div className="d-md-flex align-items-center">
                            <div className="banner_coupon d-flex align-items-center mb-2 mb-md-0">
                              <span> 10%</span>
                              <p className="ms-1 mb-0">
                                <span>off </span>
                                with <br /> code
                              </p>
                            </div>
                            <div
                              className="banner_coupon_code d-flex align-items-center"
                              style={{
                                backgroundImage:
                                  "url(./assets/images/vouche_lg.svg)",
                              }}>
                              <p className="mb-0">SUM10VER</p>
                              <span className="d-flex justify-content-center align-items-center ms-2">
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
                            </div>
                          </div>

                          <div className="text-end">
                            <p className="banner_price_sm mb-0">$64.37</p>
                            <p className="banner_price mb-0">
                              $47.<span>75</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="col banner_item1_con mb-3 mb-lg-0"
                      style={{
                        backgroundImage: "url(./assets/images/banner1.png)",
                      }}>
                      <div className="banner_item1_cont">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="banner_timing d-flex align-items-center mb-3">
                            <p className="mb-0 me-2">
                              ends in: 12h | 23m | 33s{" "}
                            </p>
                            <svg
                              className=""
                              xmlns="http://www.w3.org/2000/svg"
                              width="20px"
                              height="20px"
                              viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M5.42 19.528A9.96 9.96 0 0 0 12 22a9.97 9.97 0 0 0 6.585-2.472c1.564-1.594-3.597-7.258-6.585-9.515c-2.985 2.257-8.15 7.921-6.582 9.515m9.3-12.005c2.083 2.467 6.236 8.594 5.063 10.76A9.95 9.95 0 0 0 22 12.002a9.96 9.96 0 0 0-2.975-7.113s-.023-.018-.068-.035a.7.7 0 0 0-.234-.038c-.494 0-1.655.362-4.005 2.706M5.045 4.855c-.048.017-.068.034-.072.035A9.96 9.96 0 0 0 2 12.003c0 2.379.832 4.561 2.217 6.278C3.051 16.11 7.201 9.988 9.285 7.523C6.935 5.178 5.772 4.818 5.28 4.818a.6.6 0 0 0-.234.039zM12 4.959S9.546 3.523 7.63 3.455c-.753-.027-1.213.246-1.268.282C8.15 2.539 10.05 2 11.988 2H12c1.945 0 3.838.538 5.638 1.737c-.056-.038-.512-.31-1.266-.282c-1.917.068-4.372 1.5-4.372 1.5z"
                              />
                            </svg>
                          </div>

                          <img
                            src={"./assets/images/ghost.png"}
                            alt=""
                            className="banner_logo d-none d-md-block"
                          />
                        </div>

                        <div className="mb-3">
                          <h5 className="banner_title">Ghost of Tsushima</h5>
                          <span className="banner_title tag">
                            Director&apos;s cut
                          </span>
                        </div>

                        <div className="col col-md-10 col-lg-8 mb-3">
                          <p className="banner_text">
                            For the very first time on PC, play through Jin
                            Sakai’s journey and discover the complete Ghost of
                            Tsushima experience in this Director’s Cut.
                          </p>
                        </div>

                        <div className="d-flex justify-content-between align-items-end">
                          <div className="d-md-flex align-items-center">
                            <div className="banner_coupon d-flex align-items-center mb-2 mb-md-0">
                              <span> 10%</span>
                              <p className="ms-1 mb-0">
                                <span>off </span>
                                with <br /> code
                              </p>
                            </div>
                            <div
                              className="banner_coupon_code d-flex align-items-center"
                              style={{
                                backgroundImage:
                                  "url(./assets/images/vouche_lg.svg)",
                              }}>
                              <p className="mb-0">SUM10VER</p>
                              <span className="d-flex justify-content-center align-items-center ms-2">
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
                            </div>
                          </div>

                          <div className="text-end">
                            <p className="banner_price_sm mb-0">$64.37</p>
                            <p className="banner_price mb-0">
                              $47.<span>75</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="col col-lg-4 d-flex flex-column gap-3">
                  <div
                    className="col banner_sm1_con"
                    style={{
                      backgroundImage: "url(./assets/images/banner2.png)",
                    }}>
                    <div className="banner_sm1_col">
                      <div className="banner_sm1_cont d-flex flex-column">
                        <div className="d-flex justify-content-between align-items-start ">
                          <p className="banner_sm_time">
                            ends iin: 12h | 23m | 33s{" "}
                          </p>
                          <span className="banner_sm_icon">
                            <svg
                              className=""
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M5.42 19.528A9.96 9.96 0 0 0 12 22a9.97 9.97 0 0 0 6.585-2.472c1.564-1.594-3.597-7.258-6.585-9.515c-2.985 2.257-8.15 7.921-6.582 9.515m9.3-12.005c2.083 2.467 6.236 8.594 5.063 10.76A9.95 9.95 0 0 0 22 12.002a9.96 9.96 0 0 0-2.975-7.113s-.023-.018-.068-.035a.7.7 0 0 0-.234-.038c-.494 0-1.655.362-4.005 2.706M5.045 4.855c-.048.017-.068.034-.072.035A9.96 9.96 0 0 0 2 12.003c0 2.379.832 4.561 2.217 6.278C3.051 16.11 7.201 9.988 9.285 7.523C6.935 5.178 5.772 4.818 5.28 4.818a.6.6 0 0 0-.234.039zM12 4.959S9.546 3.523 7.63 3.455c-.753-.027-1.213.246-1.268.282C8.15 2.539 10.05 2 11.988 2H12c1.945 0 3.838.538 5.638 1.737c-.056-.038-.512-.31-1.266-.282c-1.917.068-4.372 1.5-4.372 1.5z"
                              />
                            </svg>
                          </span>
                        </div>

                        <div className="banner_sm_coupon d-flex align-items-center mb-2">
                          <span> 10%</span>
                          <p className="ms-1 mb-0">
                            <span>off </span>
                            with <br /> code
                          </p>
                        </div>

                        <div className="banner_sm_coupon_code d-flex align-items-center mb-2">
                          <p
                            className="mb-0"
                            style={{
                              backgroundImage:
                                "url(./assets/images/vouche_sm.svg)",
                            }}>
                            SUM10VER
                          </p>
                        </div>

                        <p className="banner_sm_price mt-auto mb-0">
                          $47.<span>75</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col banner_sm2_con"
                    style={{
                      backgroundImage: "url(./assets/images/banner3.png)",
                    }}>
                    <div className="banner_sm2_col">
                      <div className="banner_sm2_cont d-flex flex-column">
                        <div className="d-flex justify-content-between align-items-start mb-3">
                          <div className="d-flex align-items-end">
                            <p className="banner_sm_timing text-center me-2 mb-0">
                              <span>OFFER</span> <br />
                              36% OFF
                            </p>
                            <p className="banner_sm_time">12h | 23m | 33s </p>
                          </div>
                          <span className="banner_sm_icon">
                            <svg
                              className=""
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M5.42 19.528A9.96 9.96 0 0 0 12 22a9.97 9.97 0 0 0 6.585-2.472c1.564-1.594-3.597-7.258-6.585-9.515c-2.985 2.257-8.15 7.921-6.582 9.515m9.3-12.005c2.083 2.467 6.236 8.594 5.063 10.76A9.95 9.95 0 0 0 22 12.002a9.96 9.96 0 0 0-2.975-7.113s-.023-.018-.068-.035a.7.7 0 0 0-.234-.038c-.494 0-1.655.362-4.005 2.706M5.045 4.855c-.048.017-.068.034-.072.035A9.96 9.96 0 0 0 2 12.003c0 2.379.832 4.561 2.217 6.278C3.051 16.11 7.201 9.988 9.285 7.523C6.935 5.178 5.772 4.818 5.28 4.818a.6.6 0 0 0-.234.039zM12 4.959S9.546 3.523 7.63 3.455c-.753-.027-1.213.246-1.268.282C8.15 2.539 10.05 2 11.988 2H12c1.945 0 3.838.538 5.638 1.737c-.056-.038-.512-.31-1.266-.282c-1.917.068-4.372 1.5-4.372 1.5z"
                              />
                            </svg>
                          </span>
                        </div>

                        <p className="banner_sm_text mb-0">
                          Monster Hunter: <br /> World Global
                        </p>

                        <div className="d-flex align-items-end mt-auto">
                          <p className="banner_sm_price me-2 mb-0">
                            $47.<span>75</span>
                          </p>
                          <p className="banner_sm_price_sm mb-0">$64.37</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

    </>
  )
}
