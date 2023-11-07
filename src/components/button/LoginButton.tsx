import React from 'react';
import { LoginButtonStyles } from './LoginButton.Styles';

interface FormValidation {
  validateForm: boolean;
  text: string;
  id?: string;
}
const LoginButton: React.FC<FormValidation> = ({ validateForm, text, id }) => {
  return (
    <LoginButtonStyles>
      <div className={validateForm ? 'section' : 'sectionDisabled'}>
        <button
          className="btn btn-primary"
          type="submit"
          // disabled={!validateForm ? true : false}
        >
          {text}
          {id}
        </button>
      </div>
    </LoginButtonStyles>
  );
};

export default LoginButton;
