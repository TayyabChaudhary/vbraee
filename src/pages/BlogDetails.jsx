import { Link } from "react-router-dom";
import MainHeader from "./componets/MainHeader";
import MenuSideBar from "./componets/MenuSideBar";
import BlogFilter from "./componets/BlogFilter";
import RightSideBar from "./componets/RightSideBar";
import MainFooter from "./componets/MainFooter";

export default function BlogDetails() {
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
                  <p className="blog_head mb-2">gaming • 18 JUNE 2024</p>
                  <p className="blog_title mb-4">
                    Top Picks for Best Xbox Games – Must-Plays!
                  </p>

                  <div className="col blog_detail_con">
                    <img
                      src={"./assets/images/blog1.png"}
                      alt=""
                      className="blog_details_img mb-4"
                    />
                    <p className="blog_details_text mb-4">
                      The <span className="bold">best Xbox games</span> are
                      known for their amazing plays in various game types like
                      action, shooting, and adventure. They are for any Xbox
                      fan, no matter the console. This list includes the top
                      picks in the Xbox world, games that everyone should play.
                    </p>
                    <p className="blog_details_head mb-3">Key Takeaways:</p>
                    <ul className="mb-4">
                      <li className="blog_details_text">
                        Discover the best Xbox games that cater to different
                        preferences and interests.
                      </li>
                      <li className="blog_details_text">
                        Xbox Series X|S consoles are fully compatible with Xbox
                        One games, providing enhanced performance.
                      </li>
                      <li className="blog_details_text">
                        Explore gripping story-driven adventures, addictive
                        multiplayer titles, and immersive racing experiences on
                        Xbox.
                      </li>
                    </ul>
                    <p className="blog_details_head mb-3">
                      Control - A Bonkers Action Game with a Unique Atmosphere
                    </p>
                    <p className="blog_details_text darker mb-3">
                      Control is a thrilling action-adventure game made by
                      Remedy Entertainment. You step into the shoes of Jessie
                      Faden, who&pos;s the top honcho at the secretive Federal
                      Bureau of Control. Her job? To deal with all things
                      paranormal. This game offers something totally new.
                      Imagine working in a building that keeps changing around
                      you. This is what Control is like, mixing exploration,
                      puzzles, and combat into an epic adventure.
                    </p>
                    <img
                      src={"./assets/images/blog4.png"}
                      alt=""
                      className="blog_details_img mb-4"
                    />

                    <p className="blog_details_head mb-3">
                      A Unique Atmosphere and Innovative Gameplay
                    </p>
                    <p className="blog_details_text darker mb-3">
                      Control is not your average game. It&pos;s set in the
                      Bureau of Control, a strange place full of mysteries. What
                      makes it stand out? The building itself keeps changing.
                      This never-ending shift keeps players like you always
                      wondering what&pos;s next. The game&pos;s unique blend of
                      action keeps players coming back for more.
                      <br />
                      <br />
                      &quot;Control offers a truly unique atmosphere that keeps
                      you hooked from start to finish. The combination of
                      mind-bending supernatural occurrences and a gripping
                      narrative makes it one of the best action-adventure games
                      on Xbox.&quot; - Xbox Game Reviews
                    </p>

                    <p className="blog_details_head mb-3">Key Takeaways:</p>
                    <p className="blog_details_text darker mb-3">
                      Discover the best Xbox games that cater to different
                      preferences and interests.
                      <br />
                      Xbox Series X|S consoles are fully compatible with Xbox
                      One games, providing enhanced performance.
                      <br />
                      Explore gripping story-driven adventures, addictive
                      multiplayer titles, and immersive racing experiences on
                      Xbox.
                      <br />
                      Control offers a unique atmosphere and gameplay experience
                      with paranormal investigations.
                      <br />
                      Forza Horizon 4 provides open-world racing excitement with
                      stunning graphics and dynamic weather.
                      <br />
                      Gears 5 stands out as one of the best shooters with
                      intense combat and engaging storytelling.
                      <br />
                      Expand your gaming collection with these must-play Xbox
                      games and elevate your gaming experience.
                    </p>

                    <div className="col d-flex flex-wrap gap-3 align-items-start">
                      <div className="col-12 col-lg d-flex flex-wrap gap-2">
                        <span className="blog_tag">Control</span>
                        <span className="blog_tag">Forza Horizon 4</span>
                        <span className="blog_tag">Gears 5</span>
                      </div>
                      <div className="col-12 col-lg d-flex justify-content-lg-end align-items-center gap-3">
                        <span className="blog_social_head">SHARE</span>
                        <span className="blog_social d-flex justify-content-center align-items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                            />
                          </svg>
                        </span>
                        <span className="blog_social d-flex justify-content-center align-items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="0.88em"
                            height="1em"
                            viewBox="0 0 448 512">
                            <path
                              fill="currentColor"
                              d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm297.1 84L257.3 234.6L379.4 396h-95.6L209 298.1L123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5l78.2-89.5zm-37.8 251.6L153.4 142.9h-28.3l171.8 224.7h26.3z"
                            />
                          </svg>
                        </span>
                        <span className="blog_social d-flex justify-content-center align-items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                            />
                          </svg>
                        </span>
                        <span className="blog_social d-flex justify-content-center align-items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M9.04 21.54c.96.29 1.93.46 2.96.46a10 10 0 0 0 10-10A10 10 0 0 0 12 2A10 10 0 0 0 2 12c0 4.25 2.67 7.9 6.44 9.34c-.09-.78-.18-2.07 0-2.96l1.15-4.94s-.29-.58-.29-1.5c0-1.38.86-2.41 1.84-2.41c.86 0 1.26.63 1.26 1.44c0 .86-.57 2.09-.86 3.27c-.17.98.52 1.84 1.52 1.84c1.78 0 3.16-1.9 3.16-4.58c0-2.4-1.72-4.04-4.19-4.04c-2.82 0-4.48 2.1-4.48 4.31c0 .86.28 1.73.74 2.3c.09.06.09.14.06.29l-.29 1.09c0 .17-.11.23-.28.11c-1.28-.56-2.02-2.38-2.02-3.85c0-3.16 2.24-6.03 6.56-6.03c3.44 0 6.12 2.47 6.12 5.75c0 3.44-2.13 6.2-5.18 6.2c-.97 0-1.92-.52-2.26-1.13l-.67 2.37c-.23.86-.86 2.01-1.29 2.7z"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>

                    <hr className="blog_line" />

                    <div className="col d-flex flex-wrap gap-4 justify-content-between">
                      <div className="col-12 col-md-5">
                        <p className="blog_social_head">Previous Article</p>
                        <Link>
                          <p className="blog_social_text">
                            <u>
                              Discovering the Unveiled Secrets of Outlast
                              Trials: How Many Are There?
                            </u>
                          </p>
                        </Link>
                      </div>
                      <div className="col-12 col-md-5 text-end">
                        <p className="blog_social_head">Next Article</p>
                        <Link>
                          <p className="blog_social_text">
                            <u>
                              Discovering the Unveiled Secrets of Outlast
                              Trials: How Many Are There?
                            </u>
                          </p>
                        </Link>
                      </div>
                    </div>
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
