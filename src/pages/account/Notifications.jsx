import { Link } from "react-router-dom";
import AccountSideBar from "../componets/account/AccountSideBar";
import MainHeader from "../componets/MainHeader";
import { useTabs } from "../../services/CustomTabs";
import MainFooter from "../componets/MainFooter";

export default function Notifications() {
  const breadCrums = [
    {
      title: "Notification",
      url: "/account/notifications",
    },
  ];

  const breadCrumsList = breadCrums?.map((item, index) => {
    return (
      <Link to={item.url} key={index}>
        <p className="crumb_link">/ {item.title}</p>
      </Link>
    );
  });

  const {activeTab, ChangeTab} = useTabs(1);

  return (
    <>
      <div
        className="d-flex w-100 main_house_con"
        style={{
          background: "none",
        }}>
        <AccountSideBar activeLink={'notification'} />

        <div className="col housing_con d-flex flex-column">
          <MainHeader
            showHeader={true}
            isAccount={true}
            breadCrums={breadCrums}
            activeLink={'notification'}
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
              <div className="col">
                <div className="col d-flex gap-3 justify-content-between align-items-center mb-3">
                  <div className="col d-flex gap-2">
                    <p className={"dash_tab_link " + (activeTab == 1 && 'active')} onClick={() => ChangeTab(1)}>All</p>
                    <p className={"dash_tab_link " + (activeTab == 2 && 'active')} onClick={() => ChangeTab(2)}>Unread</p>
                  </div>
                </div>

                <div className="col">
                  <div className="acct_noti_cont lin_bg d-flex align-items-center gap-3 mb-2">
                    <img
                      src={"../assets/images/game1.png"}
                      alt=""
                      className="acct_noti_img"
                    />
                    <div className="col">
                      <p className="acct_noti_date mb-1">December 19, 2013</p>
                      <p className="acct_noti_title">
                        Tekken 8 Xbox Series X | S Private Account Global
                      </p>
                    </div>
                  </div>
                  <div className="acct_noti_cont lin_bg d-flex align-items-center gap-3 mb-2">
                    <img
                      src={"../assets/images/game1.png"}
                      alt=""
                      className="acct_noti_img"
                    />
                    <div className="col">
                      <p className="acct_noti_date mb-1">December 19, 2013</p>
                      <p className="acct_noti_title">
                        Tekken 8 Xbox Series X | S Private Account Global
                      </p>
                    </div>
                  </div>
                  <div className="acct_noti_cont lin_bg d-flex align-items-center gap-3 mb-2">
                    <img
                      src={"../assets/images/game1.png"}
                      alt=""
                      className="acct_noti_img"
                    />
                    <div className="col">
                      <p className="acct_noti_date mb-1">December 19, 2013</p>
                      <p className="acct_noti_title">
                        Tekken 8 Xbox Series X | S Private Account Global
                      </p>
                    </div>
                  </div>
                </div>
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
