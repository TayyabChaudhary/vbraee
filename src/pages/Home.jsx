import MenuSideBar from "./componets/MenuSideBar";
import MainHeader from "./componets/MainHeader";
import RightSideBar from "./componets/RightSideBar";
import Subscribe from "./componets/utility/Subscribe";
import MainFooter from "./componets/MainFooter";
import { BannerSection, GenreSection, LatestArticalSection, MainOfferSection, NewArrivalSection, SoftwareCategorySection, TopOfferSection } from "../components";


export default function Home() {
  return (
    <>
      <div className="d-flex main_house_con">
        <MenuSideBar activeLink={"home"} />
  
        <div
          className="col housing_con d-flex flex-column">
          <MainHeader activeLink={"home"} />

          <div className="housing d-flex gap-1 position-relative">
            <div id="scrollable-section" className="col main_section">
            <BannerSection />
             <TopOfferSection />
              <MainOfferSection />
              <Subscribe customClass={"mb-5"} />
              <SoftwareCategorySection />
              <GenreSection />
              <NewArrivalSection />
              <LatestArticalSection />
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
