import * as React from 'react';
import { Stylecontainer } from './LoginDescription.Styles';

interface AddAuthProps {
  name: string;
  description: string;
}

const Authentication: React.FC<AddAuthProps> = ({ name, description }) => {
  return (
    <Stylecontainer>
      <div className="login-description">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </Stylecontainer>
  );
};

export default Authentication;
