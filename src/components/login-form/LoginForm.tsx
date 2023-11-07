import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StyledLoginForm } from './LoginForm.Styles.ts';
import { emailIcon, hideIcon, unhiddenIcon, lockIcon } from '../../assets';
import {
  isEmailValid,
  isPasswordStrong,
  isStaffIdValid,
} from '../validation/Validation.ts';
import { api } from '../../api-instance/Axios.tsx';
import LoginButton from '../button/LoginButton.tsx';
import useAuth from '../../services/Api Hooks/useAuth.ts';

export interface AddLoginProps {
  name: string;
  loginPassword: string;
  remember: string;
  forgotPassword: string;
  submit: string;
  setIsloading: React.Dispatch<React.SetStateAction<boolean>>;
  userRef?: React.RefObject<HTMLInputElement>;
  errorRef?: React.RefObject<HTMLInputElement>;
}

const LoginForm: React.FC<AddLoginProps> = ({
  name,
  loginPassword,
  remember,
  forgotPassword,
  setIsloading,
}) => {
  const userRef = useRef<HTMLInputElement>(null);
  const errorRef = useRef<HTMLInputElement>(null);
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    setErrorMsg('');
  }, [email, password]);

  const [hide, setHide] = useState<boolean>(true);
  const clearForm = useRef<HTMLFormElement>(null);
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const validateForm =
    isPasswordStrong(password) &&
    (isEmailValid(email) || isStaffIdValid(email));
  const form = { email, password };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsloading(true);
    clearForm.current?.reset();
    try {
      const response = await api.post('/auth/signin', form);
      if (response.status == 200) {
        const { access_token: accessToken, user } = response.data;
        localStorage.setItem('accessToken', accessToken);

        api.defaults.headers['Authorization'] = 'Bearer ' + accessToken;
        localStorage.setItem('user', JSON.stringify(user));

        toast('Login successful', {
          type: 'success',
        });
        const { role, isPasswordChanged } = response.data.user!;
        setAuth({ email, password, user, accessToken });
        if (user?.role === 'ADMIN') {
          console.log(role);
          navigate('/admin/pages');
        }
        if (user?.role === 'LECTURER') {
          if (isPasswordChanged) {
            return navigate('/lecturer/pages');
          }
          navigate('/lecturer/settings/password');
        }
        if (user?.role === 'STUDENT') {
          if (isPasswordChanged) {
            return navigate('/student/pages');
          }
          navigate('/student/settings/password');
        }
      }
      return response.data?.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        if (!error.response) {
          setTimeout(() => {}, 5000);
          toast('No Server Response');
        } else if (error.response?.status === 400) {
          setTimeout(() => {}, 5000);
          toast('Missing Email or Passsword', {
            type: 'error',
          });
        } else if (error.response?.status === 401) {
          setTimeout(() => {}, 5000);
          toast('Unauthorized', {
            type: 'error',
          });
        }
        if (error.response?.status === 404) {
          setTimeout(() => {}, 5000);
          toast('Invalid Credentials', {
            type: 'error',
          });
          return error.response.data;
        }
      }
      setIsloading(false);
      errorRef.current?.focus();
    }
  };

  useEffect(() => {
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');
    const savedRememberMe = localStorage.getItem('rememberMe');

    if (savedEmail && savedPassword && savedRememberMe === 'true') {
      setEmail(savedEmail);
      setPassword(savedPassword);
      setRememberMe(true);
    }
  }, []);
  if (rememberMe) {
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('rememberMe', 'true');
  }
  useEffect(() => {
    localStorage.setItem('rememberMe', rememberMe.toString());
  }, [rememberMe]);
  return (
    <StyledLoginForm>
      {errorMsg && <p>{errorMsg}</p>}
      <form className="form" onSubmit={handleSubmit} ref={clearForm}>
        <div className="form-group">
          <label htmlFor="name">{name}</label>
          <label htmlFor="name" className="icon-style">
            <img className="email-icon" src={emailIcon} alt="The Email Icon" />
            <input
              type="text"
              id="name"
              ref={userRef}
              value={email}
              className="input-field"
              required
              placeholder="Your email or staff ID"
              onChange={handleEmailChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">{loginPassword}</label>
          <label htmlFor="password" className="icon-style">
            <img className="lock-icon" src={lockIcon} alt="The lock Icon" />
            <input
              id="password"
              value={password}
              type={hide ? 'password' : 'text'}
              className="input-field"
              placeholder="Type your password here"
              onChange={handlePasswordChange}
              required
            />
            {hide && (
              <img
                className="hide-icon"
                src={hideIcon}
                alt="Hide Password"
                onClick={() => setHide(!hide)}
              />
            )}
            {!hide && (
              <img
                className="hide-icon"
                src={unhiddenIcon}
                alt="Show passwod"
                onClick={() => setHide(!hide)}
              />
            )}
          </label>
        </div>
        <span className="flex-c-s">
          <label htmlFor="rememberme" className="remember">
            <input
              id="rememberme"
              type="checkbox"
              className="checkboxs option remember-me"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            {remember}
          </label>
          <span className="forgot-password">
            {' '}
            <a href="/forgotpassword">{forgotPassword}</a>{' '}
          </span>
        </span>
        <div className="form-group-1">
          <LoginButton validateForm={validateForm} text="Login" />
          <ToastContainer />
        </div>
      </form>
    </StyledLoginForm>
  );
};

export default LoginForm;
