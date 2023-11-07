import logo from '../../assets/plagiarism-logo.svg';
import { Stylecontainer } from './Login.Styles.ts';
import LoginForm from '../../components/login-form/LoginForm.tsx';
import LoginDescription from '../../components/login-description/LoginDescription.tsx';
import LoadingState from '../../components/loading-state/LoadingState.tsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Authentication = () => {
  const [isLoading, setIsloading] = useState(false);

  return (
    <Stylecontainer>
      {isLoading && <LoadingState />}

      <div className="container">
        <div className="login-box">
          <div className="login">
            <div className="login-logo-box">
              <Link to="/">
                <img src={logo} alt="Plagiarism logo" className="logo" />
              </Link>
            </div>
            <LoginDescription
              name="Login"
              description="Please enter your login details below to access your account."
            />
            <LoginForm
              name="Email/Staff ID"
              loginPassword="Password"
              remember="Remember me"
              forgotPassword="Forgot Password?"
              submit="Login"
              setIsloading={setIsloading}
            />
          </div>
        </div>
      </div>
    </Stylecontainer>
  );
};

export default Authentication;
