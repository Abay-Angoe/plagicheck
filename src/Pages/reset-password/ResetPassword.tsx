import { useState } from 'react';
import logo from '../../assets/plagiarism-logo.svg';
import { StyledResetPassword } from './ResetPassword.Styles.ts';
import LoginDescription from '../../components/login-description/LoginDescription.tsx';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { api } from '../../api-instance/Axios.tsx';
import { hideIcon, unhiddenIcon, lockIcon, arrowLeft } from '../../assets';
import { isPasswordStrong } from '../../components/validation/Validation.ts';
import LoginButton from '../../components/button/LoginButton.tsx';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [hide, setHide] = useState<boolean>(true);
  const [confirmHide, setConfirmHide] = useState<boolean>(true);
  const [password, setPassword] = useState<string>('');
  const [comfirmedPassword, setComfirmedPassword] = useState<string>('');
  const { id } = useParams();
  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleComfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setComfirmedPassword(event.target.value);
    console.log(event.target.value);
  };
  const handleSecBtnClick = () => {
    navigate('/login');
  };

  const validateForm =
    isPasswordStrong(password) && isPasswordStrong(comfirmedPassword);
  const resetPassword = { password, comfirmedPassword };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      try {
        const response = await api.post(
          `/auth/reset-password${id}`,
          resetPassword
        );
        const { data } = response;
        if (data.success) {
          toast('Password reset successfully', {
            type: 'success',
          });
          navigate('/login');
        }
      } catch (error) {
        if (password !== comfirmedPassword) {
          toast('Passwords do not match.', {
            type: 'error',
          });
          return;
        }

        if (!isPasswordStrong(password)) {
          toast('Password does not meet the criteria', {
            type: 'error',
          });
          return;
        }
      }
    }
  };
  return (
    <StyledResetPassword>
      <div className="container">
        <div className="login-box">
          <div className="login">
            <Link to="/resetpassword">
              <img src={logo} alt="Plagiarism logo" className="logo" />
            </Link>
            <LoginDescription
              name="Reset Password"
              description="Please enter your email to receive the reset link in your mail."
            />
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="">New password</label>
                <label htmlFor="name" className="icon-style">
                  <img
                    className="icon-lock"
                    src={lockIcon}
                    alt="The Lock Icon"
                  />
                  <input
                    type={!confirmHide ? 'password' : 'password'}
                    id="password"
                    className="input-field"
                    placeholder="Type your new password"
                    onChange={handleNewPasswordChange}
                  />
                  {
                    <img
                      className="unhide-icon"
                      src={confirmHide ? unhiddenIcon : hideIcon}
                      alt="The Unhidden Icon"
                      onClick={() => setConfirmHide(!confirmHide)}
                    />
                  }
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="password">Confirm password</label>
                <label htmlFor="name" className="icon-style">
                  <img
                    className="lock-icon"
                    src={lockIcon}
                    alt="The Lock Icon"
                  />
                  <input
                    type={hide ? 'password' : 'password'}
                    className="input-field"
                    placeholder="confirm your password"
                    onChange={handleComfirmPasswordChange}
                  />
                  {
                    <img
                      className="unhide-icon"
                      src={!hide ? unhiddenIcon : hideIcon}
                      alt="The Unhidden Icon"
                      onClick={() => setHide(!hide)}
                    />
                  }
                </label>
              </div>
              <div className="form-group-1">
                <LoginButton
                  validateForm={validateForm}
                  text="Save new password"
                />
              </div>
              <div className="form-group-2" onClick={handleSecBtnClick}>
                <img
                  src={arrowLeft}
                  alt="Left Arrow Icon"
                  className="arrow-left"
                />
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
    </StyledResetPassword>
  );
};
export default ResetPassword;
