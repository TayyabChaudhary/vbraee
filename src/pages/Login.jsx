import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ModalContext } from "../store/ModalContext";
import { useLoginMutation } from "../api/authApi";

export default function LoginModal() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { isLoading, error }] = useLoginMutation();
  const { activeModal, OpenModal, CloseModal } = useContext(ModalContext); //Modal Global State

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userData = await login({ email, password }).unwrap();
      // Store the token and user data in local storage or context
      localStorage.setItem('token', userData.token);
      // Redirect to dashboard or home
      CloseModal();
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  if (activeModal !== "login") return null;
  return (
    <>
      <div className="modal_con d-lg-flex justify-content-center align-items-center">
        <div className="col col-lg-10 col-xl-6 register_con">
          <div
            className="col d-none d-lg-block login_img"
            style={{
              backgroundImage: "url(./assets/images/login_img.png)",
            }}></div>
          <form onSubmit={handleLogin} className="col register_cont position-relative">
            <span
              onClick={() => CloseModal()}
              className="register_close position-absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
                />
              </svg>
            </span>
            <p className="register_header">Welcome to Vbrae</p>
            <div className="d-flex flex-wrap gap-3 mb-3">
              <Link className="col-12 col-md">
                <p className="register_social d-flex align-items-center gap-2 mb-0">
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
                  Connect with Facebook
                </p>
              </Link>
              <Link className="col">
                <p className="register_social d-flex align-items-center gap-2 mb-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M3.064 7.51A10 10 0 0 1 12 2c2.695 0 4.959.991 6.69 2.605l-2.867 2.868C14.786 6.482 13.468 5.977 12 5.977c-2.605 0-4.81 1.76-5.595 4.123c-.2.6-.314 1.24-.314 1.9s.114 1.3.314 1.9c.786 2.364 2.99 4.123 5.595 4.123c1.345 0 2.49-.355 3.386-.955a4.6 4.6 0 0 0 1.996-3.018H12v-3.868h9.418c.118.654.182 1.336.182 2.045c0 3.046-1.09 5.61-2.982 7.35C16.964 21.105 14.7 22 12 22A9.996 9.996 0 0 1 2 12c0-1.614.386-3.14 1.064-4.49"
                    />
                  </svg>
                  Connect with Google
                </p>
              </Link>
            </div>

            <div className="col">
              <div className="col mb-3">
                <label
                  htmlFor="email"
                  className="auth_label text-uppercase mb-2">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  className="auth_input"
                  placeholder="-"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="col mb-3">
                <label
                  htmlFor="password"
                  className="auth_label text-uppercase mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="auth_input"
                  placeholder="-"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="col d-flex justify-content-end align-items-center gap-2 mb-4">
              <Link>
                <p className="register_text">Forgot Password?</p>
              </Link>
            </div>

            <div className="col d-md-flex align-items-center gap-4">
              <button type="submit" className="col-12 col-md-auto auth_btn">
                {isLoading ? 'Logging in...' : 'Login'}
              </button>
              <p className="register_text text-white mt-3 mt-md-0 mb-0">
                Don&apos;t have an account?{" "}
                <span onClick={() => OpenModal("login")}>Register</span>
              </p>
            </div>
            {error && <p>Error: {error.message || 'Unknown error'}</p>}
          </form>
        </div>
      </div>
    </>
  );
}
