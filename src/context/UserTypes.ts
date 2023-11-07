export interface UserTypes {
  role: 'ADMIN' | 'LECTURER' | 'STUDENT';
  email: string | null;
  profilePicture: string | null;
  isPasswordChanged: boolean | null;
  id: number | string | null;
  name: string | null;
  staffId: string | null;
  studentId: string | null;
  qualification: string | null;
  departmentId: string | null;
  phoneNumber: string | null;
  passwordResetToken: string | null;
  passwordResetTokenExpiry: string | null;
  createdAt: string | null;
  updatedAt: string | null;
}

export interface AuthContextType {
  user: UserTypes | null;
  setUser?: (user: UserTypes | null) => void;
  auth: object;
  setAuth: React.Dispatch<React.SetStateAction<object>>;
  login: () => void;
  clearUser: () => void;
}
