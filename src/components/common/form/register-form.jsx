import { useState } from 'react'
import { useSignupMutation } from '../../../api/authApi';
import { Link } from 'react-router-dom';
import usePasswordValidation from '../../../hooks/use-password-validation';
import { toast, Zoom } from "react-toastify";
export default function RegisterForm({ OpenModal, CloseModal, setUser }) {
    const [signup, { isLoading }] = useSignupMutation();
    
    const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
});
const [password, setPassword] = useState('');
  const { validation, validatePassword } = usePasswordValidation();

const handleChange = (e) => {
  const { name, value } = e.target;

  if (name === 'password') {
    setPassword(value);
    validatePassword(value); // Validate the password as user types
  }

   setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
  e.preventDefault();

    // Optional: Add validation logic for confirmPassword
    if (formData.password !== formData.confirmPassword) {
      toast.error("Password not match", { position: "top-right", hideProgressBar: true, transition: Zoom, style: "z-index: 100" });
      return;
    }
  try {
    const result = await signup(formData).unwrap();
    if (result?.user?.token) {
        setUser(result); // Save user info (with token) in context
        
        CloseModal(); // Close the modal on success
        toast.success("User Registered Successfully", { position: "top-right", hideProgressBar: true, transition: Zoom, style: "z-index: 100" });
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      } else {
        console.error('Token not received:', result);
      }
  } catch (error) {
    console.error('Error registering user:', error);
  }
};
  return (
    <>
         <form onSubmit={handleSubmit}>
            <div className="col">
              <div className="col mb-3">
                <label
                  htmlFor="email"
                  className="auth_label text-uppercase mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="auth_input"
                  placeholder="-"
                  value={formData.email}
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </div>

              <div className="col mb-2">
                <p className="auth_head text-uppercase">
                  Your password must have
                </p>
                <div className="col row row-cols-md-2">
                  <div className="col d-flex align-items-center gap-2 mb-2">
                    <input
                      className="col-auto auth_check"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                      checked={validation.hasUppercase}
                      readOnly
                    />
                    <label className="auth_check_text" htmlFor="defaultCheck1">
                      at least one uppercase character
                    </label>
                  </div>
                  <div className="col d-flex align-items-center gap-2 mb-2">
                    <input
                      className="col-auto auth_check"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                      checked={validation.hasLowercase}
                      readOnly
                    />
                    <label className="auth_check_text" htmlFor="defaultCheck1">
                      at least one lowercase character
                    </label>
                  </div>
                  <div className=" d-flex align-items-center gap-2 mb-2">
                    <input
                      className="col-auto auth_check"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                      checked={validation.hasSpecialChar}
                      readOnly
                    />
                    <label className="auth_check_text" htmlFor="defaultCheck1">
                      at least one special character
                    </label>
                  </div>
                  <div className=" d-flex align-items-center gap-2 mb-2">
                    <input
                      className="col-auto auth_check"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                      checked={validation.hasNumber}
                      readOnly
                    />
                    <label className="auth_check_text" htmlFor="defaultCheck1">
                      at least one number
                    </label>
                  </div>
                  <div className=" d-flex align-items-center gap-2 mb-2">
                    <input
                      className="col-auto auth_check"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                      checked={validation.hasMinLength}
                      readOnly
                    />
                    <label className="auth_check_text" htmlFor="defaultCheck1">
                      at least 8 character
                    </label>
                  </div>
                  <div className=" d-flex align-items-center gap-2 mb-2">
                    <input
                      className="col-auto auth_check"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                      checked={validation.hasMaxLength}
                      readOnly
                    />
                    <label className="auth_check_text" htmlFor="defaultCheck1">
                      maximum 38 character
                    </label>
                  </div>
                </div>
              </div>

              <div className="col mb-3">
                <label
                  htmlFor="confirmPassword"
                  className="auth_label text-uppercase mb-2">
                  Repeat Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="auth_input"
                  placeholder="-"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col d-flex align-items-center gap-2 mb-5">
              <input
                className="auth_check"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label className="register_text" htmlFor="defaultCheck1">
                I have read and agree to the <Link>Terms & Conditions</Link>
              </label>
            </div>

            <div className="col d-md-flex align-items-center gap-4">
              <button type="submit" className="col-12 col-md-auto auth_btn" disabled={isLoading}>
              {isLoading ? 'Registering...' : 'Register'}
              </button>
              <p className="register_text text-white mt-3 mt-md-0 mb-0">
                Have an account?{" "}
                <span onClick={() => OpenModal("login")}>Login</span>
              </p>
            </div>
            </form>
            
    </>
  )
}
