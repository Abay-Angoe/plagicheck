import { useState } from 'react';
import logo from '../../assets/plagiarism-logo.svg';
import emailIcon from '../../assets/Plagiarism-email icon.svg';
import { useNavigate, Link } from 'react-router-dom';
import { StyledForgotPassword } from './ForgotPassword.Styles.ts';
import LoginDescription from '../../components/login-description/LoginDescription.tsx';
import arrowLeft from '../../assets/Plagiarism-arrow left.svg';
import { isEmailValid } from '../../components/validation/Validation.ts';
import { api } from '../../api-instance/Axios.tsx';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginButton from '../../components/button/LoginButton.tsx';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleSecBtnClick = () => {
    navigate('/');
  };
  const validateForm = isEmailValid(email);
  const forgotPassword = { email };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post('/auth/forget-password', forgotPassword);
      const { data } = response;
      if (data.success) {
        toast('Check gmail for reset link to reset password', {
          type: 'success',
        });
      }
    } catch (error) {
      toast('Invalid credentials', {
        type: 'error',
      });
    }
  };
  return (
    <StyledForgotPassword>
      <div className="container">
        <div className="login-box">
          <div className="login">
            <Link to="/forgotpassword">
              <img src={logo} alt="Plagiarism logo" className="logo" />
            </Link>
            <LoginDescription
              name="Forgot Password"
              description="Please enter your email to receive the reset link in your mail."
            />
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="">Email</label>
                <label htmlFor="name" className="icon-style">
                  <img
                    className="email-icon"
                    src={emailIcon}
                    alt="Email Icon"
                  />
                  <input
                    type="email"
                    className="input-field"
                    placeholder="Your email"
                    onChange={handleEmailChange}
                  />
                </label>
              </div>
              <div className="form-group">
                <LoginButton
                  validateForm={validateForm}
                  text="Send reset link"
                />
              </div>
              <div className="form-group-2" onClick={handleSecBtnClick}>
                <img src={arrowLeft} alt="Left Arrow" className="arrow-left" />
                <button
                  className="btnn btn-secondary"
                  onClick={handleSecBtnClick}
                >
                  Back to login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </StyledForgotPassword>
  );
};
export default ForgotPassword;
