import { createContext, useState } from 'react';
import { AuthContextType } from './UserTypes';

const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
  auth: {},
  setAuth: () => {},
  login: () => {},
  clearUser: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [auth, setAuth] = useState({});
  // const [user, setUser] = useState({})
  const login = () => {
    localStorage.setItem('user', JSON.stringify(auth));
  };

  const clearUser = () => {
    localStorage.setItem('user', '');
  };
  console.log(auth);

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        login,
        clearUser,
        user: {
          role: 'ADMIN',
          email: null,
          profilePicture: null,
          isPasswordChanged: null,
          id: null,
          name: null,
          staffId: null,
          studentId: null,
          qualification: null,
          departmentId: null,
          phoneNumber: null,
          passwordResetToken: null,
          passwordResetTokenExpiry: null,
          createdAt: null,
          updatedAt: null,
        },
      }}
    >
      {' '}
      {children}{' '}
    </AuthContext.Provider>
  );
};

export default AuthContext;
