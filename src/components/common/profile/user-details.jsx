import { Link } from 'react-router-dom'
import { useLogoutMutation } from '../../../api/authApi'
import { useDispatch } from 'react-redux';
import { clearUser } from '../../../store/slices/authSlice';

export default function UserDetails() {
    const dispatch = useDispatch();
    const [logout, { isLoading: logoutLoading, error }] = useLogoutMutation();

    const handleLogout = async () => {
        try {
          await logout().unwrap(); // Call the logout mutation

          // Clear localStorage
          localStorage.removeItem('token');
          localStorage.removeItem('user'); // if you stored any user data here

          // Clear Redux state (if you're storing the user in Redux)
          dispatch(clearUser());

          window.location.reload(); 
        } catch (err) {
          console.error('Error logging out:', err);
        }
      };

      if (logoutLoading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error fetching user: {error.message || 'Unknown error'}</div>;
      }
    
  return (
    <div className="header_drop_cont position-absolute">
    <Link to={"/account/"}>
      <p className="header_drop_text d-flex gap-2 align-items-center position-relative">
        <span className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path d="M12.4 12.4C11.5163 12.4 10.8 13.1163 10.8 14V16.4C10.8 17.2837 11.5163 18 12.4 18H12.4192C13.4217 18 14.2819 17.9474 15.0006 17.7876C15.7286 17.6258 16.3595 17.3438 16.8517 16.8517C17.3438 16.3595 17.6258 15.7286 17.7876 15.0006C17.861 14.6706 17.9094 14.3355 17.9411 13.9983C18.0241 13.1186 17.2837 12.4 16.4 12.4H12.4Z" />
            <path d="M2 12.4192V10.8C2 9.91632 2.71634 9.2 3.6 9.2H7.6C8.48368 9.2 9.2 9.91632 9.2 10.8V16.4C9.2 17.2837 8.48368 18 7.6 18H7.5808C6.5783 18 5.7181 17.9474 4.99932 17.7876C4.27146 17.6258 3.64052 17.3438 3.14834 16.8517C2.65617 16.3595 2.37418 15.7286 2.21242 15.0006C2.05267 14.2819 2 13.4217 2 12.4192Z" />
            <path d="M18 9.2C18 10.0837 17.2837 10.8 16.4 10.8H12.4C11.5163 10.8 10.8 10.0837 10.8 9.2V3.6C10.8 2.71634 11.5163 2 12.4 2H12.4192C13.4217 2 14.2819 2.05267 15.0006 2.21242C15.7286 2.37418 16.3595 2.65617 16.8517 3.14834C17.3438 3.64052 17.6258 4.27146 17.7876 4.99932C17.9474 5.7181 18 6.5783 18 7.5808V9.2Z" />
            <path d="M9.2 3.6C9.2 2.71634 8.48368 2 7.6 2H7.5808C6.5783 2 5.7181 2.05267 4.99932 2.21242C4.27146 2.37418 3.64052 2.65617 3.14834 3.14834C2.65617 3.64052 2.37418 4.27146 2.21242 4.99932C2.13905 5.32944 2.09063 5.6645 2.05885 6.00168C1.97593 6.88144 2.71634 7.6 3.6 7.6H7.6C8.48368 7.6 9.2 6.88366 9.2 6V3.6Z" />
          </svg>
        </span>
        Dashboard
      </p>
    </Link>
    <Link to={"/account"}>
      <p className="header_drop_text d-flex gap-2 align-items-center">
        <span className="icon">
          <svg width="1em" height="1em" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"
            />
          </svg>
        </span>
        Account
      </p>
    </Link>
    <Link to={"/account/messages"}>
      <p className="header_drop_text d-flex gap-2 align-items-center">
        <span className="icon">
          <svg width="1em" height="1em" viewBox="0 0 20 20">
            <g fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884"></path>
              <path d="m18 8.118l-8 4l-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2z"></path>
            </g>
          </svg>
        </span>
        Messages
        <span className="header_drop_count d-flex justify-content-center align-items-center ms-auto">
          2
        </span>
      </p>
    </Link>
    <Link to={"/account/wishlist"}>
      <p className="header_drop_text d-flex gap-2 align-items-center">
        <span className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"></path>
          </svg>
        </span>
        Wishlist
      </p>
    </Link>
    <Link to={"/account/notifications"}>
      <p className="header_drop_text d-flex gap-2 align-items-center">
        <span className="icon">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M12.4615 16.4285C12.4615 17.1105 12.2022 17.7646 11.7406 18.2468C11.2789 18.7291 10.6528 19 10 19C9.34716 19 8.72106 18.7291 8.25943 18.2468C7.7978 17.7646 7.53846 17.1105 7.53846 16.4285H12.4615ZM16.1538 15.1428H2.73846C2.54261 15.1428 2.35478 15.0615 2.21629 14.9169C2.0778 14.7722 2 14.576 2 14.3714C2 14.1668 2.0778 13.9706 2.21629 13.8259C2.35478 13.6812 2.54261 13.6 2.73846 13.6H3.84615V8.71419C3.84615 5.60274 5.96308 3.00557 8.77538 2.41414C8.75821 2.23536 8.77709 2.05481 8.83081 1.88413C8.88453 1.71344 8.9719 1.55642 9.08729 1.42317C9.20267 1.28993 9.34351 1.18343 9.50072 1.11055C9.65792 1.03766 9.82801 1 10 1C10.172 1 10.3421 1.03766 10.4993 1.11055C10.6565 1.18343 10.7973 1.28993 10.9127 1.42317C11.0281 1.55642 11.1155 1.71344 11.1692 1.88413C11.2229 2.05481 11.2418 2.23536 11.2246 2.41414C12.6155 2.70969 13.8659 3.49824 14.7642 4.64631C15.6625 5.79438 16.1534 7.23143 16.1538 8.71419V13.6H17.2615C17.4574 13.6 17.6452 13.6812 17.7837 13.8259C17.9222 13.9706 18 14.1668 18 14.3714C18 14.576 17.9222 14.7722 17.7837 14.9169C17.6452 15.0615 17.4574 15.1428 17.2615 15.1428H16.1538Z" />
          </svg>
        </span>
        Notifications
        <span className="header_drop_count d-flex justify-content-center align-items-center ms-auto">
          2
        </span>
      </p>
    </Link>
    <Link to={"/affiliate"}>
      <p className="header_drop_text d-flex gap-2 align-items-center">
        <span className="icon">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M13.2891 12.9615C13.2891 12.9615 15.632 10.6385 16.4266 9.82056C18.9415 7.36673 17.6882 2.31184 17.6882 2.31184C17.6882 2.31184 12.6501 1.06039 10.1925 3.57148C8.27556 5.43639 7.03038 6.72874 7.03038 6.72874C7.03038 6.72874 3.88465 6.07438 2.00049 7.95565L12.0357 18C13.9198 16.0942 13.2891 12.9615 13.2891 12.9615ZM12.0603 5.59998C12.2124 5.44788 12.3931 5.32722 12.592 5.24489C12.7909 5.16257 13.0041 5.12019 13.2194 5.12019C13.4347 5.12019 13.6479 5.16257 13.8468 5.24489C14.0457 5.32722 14.2264 5.44788 14.3786 5.59998C14.6076 5.82883 14.7634 6.12032 14.8265 6.4376C14.8896 6.75488 14.857 7.08371 14.7329 7.38253C14.6089 7.68134 14.3989 7.93672 14.1295 8.1164C13.8601 8.29607 13.5434 8.39197 13.2194 8.39197C12.8955 8.39197 12.5788 8.29607 12.3094 8.1164C12.04 7.93672 11.83 7.68134 11.7059 7.38253C11.5819 7.08371 11.5493 6.75488 11.6124 6.4376C11.6754 6.12032 11.8313 5.82883 12.0603 5.59998ZM2.81969 17.1821C4.33608 17.1389 5.78777 16.5591 6.91569 15.5462L4.45809 13.0923C2.81969 13.9103 2.81969 17.1821 2.81969 17.1821Z" />
          </svg>
        </span>
        Affiliate Program
      </p>
    </Link>

    <hr className="header_drop_line my-2" />

    <Link type="button" onClick={handleLogout}>
      <p className="header_drop_text d-flex gap-2 align-items-center">
      {logoutLoading ? 'Logging out...' : 'Logout'}
      </p>
    </Link>
  </div>
  )
}
