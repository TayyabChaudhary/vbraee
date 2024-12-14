import { useEffect, useState } from "react";

export default function CookieModal() {
  // Helper function to get a cookie
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  };

  // Helper function to set a cookie
  const setCookie = (name, value, days) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  };

  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = getCookie("cookieConsent");
    if (!cookieConsent) {
      setModalVisible(true); // Show modal if consent not given
    }
  }, []);

  const handleAccept = () => {
    setCookie("cookieConsent", "true", 365); // Set cookie to last 1 year
    setModalVisible(false); // Hide the modal
  };

  if (!isModalVisible) {
    return null; // Do not render modal if not visible
  }

  return (
    <>
      <div className="cookie_con position-fixed ">
        <div className="cookie_cont d-xl-flex align-items-center gap-5">
          <div className="col d-flex gap-2">
            <span className="cookie_icon">
              <svg
                className="cookie_icon"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12q0-1.875.725-3.675T4.75 5.112t3.125-2.275t4-.862q.525 0 1.075.05t1.125.175q-.225 1.125.15 2.125t1.125 1.662t1.788.913t2.137-.125q-.65 1.475.188 2.825T21.95 11q.025.275.038.512t.012.513q0 2.05-.788 3.862t-2.137 3.175t-3.175 2.15T12 22m-1.5-12q.625 0 1.063-.437T12 8.5t-.437-1.062T10.5 7t-1.062.438T9 8.5t.438 1.063T10.5 10m-2 5q.625 0 1.063-.437T10 13.5t-.437-1.062T8.5 12t-1.062.438T7 13.5t.438 1.063T8.5 15m6.5 1q.425 0 .713-.288T16 15t-.288-.712T15 14t-.712.288T14 15t.288.713T15 16"
                />
              </svg>
            </span>
            <div className="col">
              <h4 className="cookie_header">Our website using cookies</h4>
              <p className="cookie_text">
                We use cookies to deliver our online services. By clicking
                &apos;I accept&apos; you agree to our use of cookies according
                to Cookie policy, unless you have disabled them.
              </p>
            </div>
          </div>
          <div className="d-none d-md-flex align-items-center gap-2">
            <button
              onClick={handleAccept}
              type="button"
              className="main_button2">
              Reject additional cookies
            </button>
            <button
              onClick={handleAccept}
              type="button"
              className="main_button">
              Accept additional cookies
            </button>
          </div>
          <div className="d-flex d-md-none align-items-center gap-2">
            <button
              onClick={handleAccept}
              type="button"
              className="col main_button2">
              Reject
            </button>
            <button
              onClick={handleAccept}
              type="button"
              className="col main_button">
              Accept
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
