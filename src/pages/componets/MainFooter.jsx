import { Link } from "react-router-dom";
import CustomDropdown from "./utility/CustomDropdown";

export default function MainFooter() {
  return (
    <>
      <div className="main_footer_con d-flex flex-column-reverse flex-lg-row justify-content-xl-between align-items-center gap-3">
        <div className="d-flex flex-column-reverse flex-lg-row align-items-center gap-3">
          <span className="main_footer_copy">&copy; 2024 VBRAE</span>
          <div className="d-flex align-items-center gap-2">
            <Link to={"/privacy-policy"} className="main_footer_link">
              <span className="">Privacy</span>
            </Link>
            <Link to={"/"} className="main_footer_link">
              <span className="">Terms</span>
            </Link>
            <Link to={"/"} className="main_footer_link">
              <span className="">Refund</span>
            </Link>
          </div>
          <div className="d-flex order-2 order-xl-3 align-items-center">
            <img
              src={"./assets/images/footer_rate.svg"}
              alt=""
              className="main_footer_img"
            />
            <span className="main_footer_rate_text ms-1">4.3</span>
          </div>
        </div>
        <div className="d-flex flex-column-reverse flex-lg-row align-items-center">
          <img
            src={"../assets/images/footer_payment.svg"}
            alt=""
            className="main_footer_img"
          />
        </div>
        <div className="d-flex flex-column-reverse flex-lg-row align-items-center gap-3">
          <div className="d-flex gap-3">
            <span className="main_footer_icon">
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
            <span className="main_footer_icon">
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
            <span className="main_footer_icon">
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
            <span className="main_footer_icon">
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

          <div className="d-flex gap-2 position-relative">
            <CustomDropdown
              trigger={() => (
                <span className="main_footer_tag d-flex align-items-center gap-1" role="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M8.478 21.439a10.1 10.1 0 0 1-6.504-8.573h4.32a17.54 17.54 0 0 0 2.184 8.573m7.505-8.573c-.182 5.465-2.174 9.208-3.973 9.208c-1.8 0-3.791-3.743-3.974-9.208zm6.043 0a10.06 10.06 0 0 1-6.514 8.573a17.43 17.43 0 0 0 2.194-8.573zm0-1.732h-4.32c.02-3-.735-5.952-2.194-8.573a10.05 10.05 0 0 1 6.514 8.573m-6.043 0H8.036c.183-5.475 2.174-9.208 3.974-9.208c1.799 0 3.781 3.733 3.973 9.208M8.478 2.61a17.5 17.5 0 0 0-2.184 8.572h-4.32A10.07 10.07 0 0 1 8.478 2.61"
                    />
                  </svg>
                  English (US)
                </span>
              )}
              content={
                <div className="footer_drop_cont foot position-absolute">
                  <p
                    className="header_drop_cate active d-flex gap-2 align-items-center position-relative"
                    role="button">
                    <span className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"></path>
                      </svg>
                    </span>
                    English (US)
                  </p>
                  <p
                    className="header_drop_cate d-flex gap-2 align-items-center position-relative"
                    role="button">
                    Español
                  </p>
                  <p
                    className="header_drop_cate d-flex gap-2 align-items-center position-relative"
                    role="button">
                    Français
                  </p>
                  <p
                    className="header_drop_cate d-flex gap-2 align-items-center position-relative"
                    role="button">
                    Latviešu
                  </p>
                  <p
                    className="header_drop_cate d-flex gap-2 align-items-center position-relative"
                    role="button">
                    Polski
                  </p>
                </div>
              }
            />

            <CustomDropdown
              trigger={() => (
                <span className="main_footer_tag d-flex align-items-center gap-1" role="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75m.75 16v.79a.75.75 0 0 1-1.5 0v-.79a3.47 3.47 0 0 1-1.76-.81a3.5 3.5 0 0 1-1.24-2.4a.75.75 0 0 1 1.23-.638a.76.76 0 0 1 .27.508a2 2 0 0 0 .71 1.39a2.1 2.1 0 0 0 1.49.5c1.56 0 2.3-.6 2.3-1.82c0-.81-.71-1.68-2.25-1.68c-3.26 0-3.75-2-3.75-3.15a3.5 3.5 0 0 1 2.42-3.2q.285-.088.58-.13v-.78a.75.75 0 0 1 1.5 0v.81a3.61 3.61 0 0 1 3 3.22a.75.75 0 0 1-1.49.15a2.14 2.14 0 0 0-2.22-1.92h-.18a2.5 2.5 0 0 0-.72.1a2 2 0 0 0-1.18 1.03a1.9 1.9 0 0 0-.2.77c0 .82.27 1.62 2.25 1.62c2.46 0 3.75 1.6 3.75 3.18a3.11 3.11 0 0 1-3.05 3.21z"
                    />
                  </svg>
                  $USD
                </span>
              )}
              content={
                <div className="footer_drop_cont foot position-absolute end-0">
                  <p
                    className="header_drop_cate active d-flex gap-2 align-items-center position-relative"
                    role="button">
                    <span className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75m.75 16v.79a.75.75 0 0 1-1.5 0v-.79a3.47 3.47 0 0 1-1.76-.81a3.5 3.5 0 0 1-1.24-2.4a.75.75 0 0 1 1.23-.638a.76.76 0 0 1 .27.508a2 2 0 0 0 .71 1.39a2.1 2.1 0 0 0 1.49.5c1.56 0 2.3-.6 2.3-1.82c0-.81-.71-1.68-2.25-1.68c-3.26 0-3.75-2-3.75-3.15a3.5 3.5 0 0 1 2.42-3.2q.285-.088.58-.13v-.78a.75.75 0 0 1 1.5 0v.81a3.61 3.61 0 0 1 3 3.22a.75.75 0 0 1-1.49.15a2.14 2.14 0 0 0-2.22-1.92h-.18a2.5 2.5 0 0 0-.72.1a2 2 0 0 0-1.18 1.03a1.9 1.9 0 0 0-.2.77c0 .82.27 1.62 2.25 1.62c2.46 0 3.75 1.6 3.75 3.18a3.11 3.11 0 0 1-3.05 3.21z"
                        />
                      </svg>
                    </span>
                    USD
                  </p>
                  <p
                    className="header_drop_cate d-flex gap-2 align-items-center position-relative"
                    role="button">
                    <span className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24">
                        <g fill="none" fillRule="evenodd">
                          <path d="M0 0h24v24H0z"></path>
                          <path
                            fill="currentColor"
                            d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m-2.977 9.5a5.3 5.3 0 0 0 0 1H12a1 1 0 1 1 0 2H9.686c.601.945 1.52 1.5 2.432 1.5c.55 0 .917-.106 1.204-.262c.3-.162.58-.415.913-.81a1 1 0 0 1 1.53 1.287c-.41.488-.88.95-1.49 1.281c-.622.338-1.326.504-2.157.504c-2.162 0-3.867-1.495-4.65-3.5H7a1 1 0 1 1 0-2h.018a7 7 0 0 1 0-1H7a1 1 0 1 1 0-2h.468C8.251 7.495 9.956 6 12.118 6c.831 0 1.535.166 2.157.504c.61.33 1.08.793 1.49 1.281a1 1 0 1 1-1.53 1.287c-.333-.395-.614-.648-.913-.81c-.287-.156-.653-.262-1.204-.262c-.912 0-1.83.554-2.432 1.5H12a1 1 0 1 1 0 2z"></path>
                        </g>
                      </svg>
                    </span>
                    Euro
                  </p>
                  <p
                    className="header_drop_cate d-flex gap-2 align-items-center position-relative"
                    role="button">
                    <span className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24">
                        <g fill="none" fillRule="evenodd">
                          <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                          <path
                            fill="currentColor"
                            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m5 0a1 1 0 0 1 1-1h.998L9 9.604a3.604 3.604 0 0 1 6.483-2.171l.349.512a1 1 0 0 1-1.594 1.203C13.832 8.555 13.406 8 12.606 8C11.7 8 11.039 8.733 11 9.604V11h2a1 1 0 1 1 0 2h-2v2c0 .264-.023.527-.078.785c.477.04.937.128 1.394.266c.775.259 1.588.19 2.368 0a1 1 0 0 1 .632 1.898c-1.196.316-2.439.397-3.632 0c-.775-.259-1.588-.19-2.368 0c-1.178.392-1.859-1.224-.763-1.843c.207-.117.412-.532.44-.932L8.997 13H8a1 1 0 0 1-1-1"></path>
                        </g>
                      </svg>
                    </span>
                    Pound
                  </p>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
