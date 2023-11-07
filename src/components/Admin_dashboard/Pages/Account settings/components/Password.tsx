import React, { useEffect, useState } from 'react';
import { StyledSettings } from './Settings_styles';
import Input from '../partials/input';
import { useChangePassword } from '../../../../../services/Api Hooks/useUpdatePassword';
import inputFields from '../data/inputData';
import SecondaryButton from '../../plagiarism-check/partials/ButtonTemplate';
import PrimaryButton from '../../plagiarism-check/partials/PrimaryButton';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Password = () => {
  const [formData, setFormData] = useState({
    oldPassword: '',
    password: '',
    comfirmedPassword: '',
  });
  const navigate = useNavigate();
  const { changePassword, error, isPasswordChanged } = useChangePassword();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    title: string
  ) => {
    setFormData({
      ...formData,
      [title]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await changePassword(formData);
  };

  useEffect(() => {
    if (isPasswordChanged) {
      toast('Password change successful', {
        type: 'success',
      });
      const userRole = localStorage.getItem('userRole');
      let dashboardRoute = '';

      if (userRole === 'ADMIN') {
        dashboardRoute = '/admin/pages/dashboard';
      } else if (userRole === 'LECTURER') {
        dashboardRoute = '/lecturer/pages/dashboard';
      } else if (userRole === 'STUDENT') {
        dashboardRoute = '/student/pages/dashboard';
      }

      navigate(dashboardRoute);
    } else if (error) {
      toast(error, {
        type: 'error',
      });
    }
  }, [isPasswordChanged, error, navigate]);

  return (
    <>
      <StyledSettings>
        <section className="password">
          <div className="title">
            <h1>Password</h1>
            <p>Please enter your current password to change your password</p>
          </div>
          <form onSubmit={handleSubmit}>
            {inputFields.map((field) => (
              <Input
                key={field.title}
                label={field.label}
                title={field.title}
                type="password"
                placeholder={field.placeholder}
                onChange={(e) => handleInputChange(e, field.title)}
              />
            ))}
            {error && <p className="error">{error}</p>}
            <div className="buttons">
              <SecondaryButton
                title="Cancel"
                imgSrc=""
                handleClick={() => {}}
              />
              <PrimaryButton
                title="Save Changes"
                imgSrc=""
                handleClick={() => {}}
              />
            </div>
          </form>
        </section>
      </StyledSettings>
    </>
  );
};

export default Password;
