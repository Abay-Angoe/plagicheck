import { Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';
import Login from './Pages/login/Login.tsx';
import ResetPassword from './Pages/reset-password/ResetPassword.tsx';
import ForgotPassword from './Pages/forgot-password/ForgotPassword.tsx';
import AdminDashboard from './Pages/Admin/AdminDashboard.tsx';
import ManageUsers from './components/Admin_dashboard/Pages/ManageUsers/ManageUsers.tsx';
import Dashboard from './components/Admin_dashboard/Pages/Dashboard/Dashboard.tsx';
import MyProfile from './components/Admin_dashboard/Pages/Account settings/components/MyProfile.tsx';
import AccountSettings from './components/Admin_dashboard/Pages/Account settings/AccountSettings.tsx';
import Password from './components/Admin_dashboard/Pages/Account settings/components/Password.tsx';
import Lecturer from './Pages/Lecturer/Lecturer.tsx';
import LecturerDashboard from './Pages/Lecturer/Dashboard/LecturerDashboard.tsx';
import PlagiarismChecker from './components/Admin_dashboard/Pages/plagiarism-check/PlagiarismChecker.tsx';
import ManageStudents from './Pages/Lecturer/ManageStudents/ManageStudents.tsx';
import Layout from './components/layout/Layout.tsx';
import RequiredAuth from './components/required-auth/RequiredAuth.tsx';

import HistoryPage from './components/Admin_dashboard/Pages/History/History.tsx';
import { ToastContainer } from 'react-toastify';
import SchedulesPage from './components/Admin_dashboard/Pages/Schedules/Schedules.tsx';
import BulkUploadPage from './components/bulk-upload/BulkUploadPage.tsx';
import AcademicUnit from './components/Admin_dashboard/Pages/AcademicUnit/AcademicUnit.tsx';
import Database from './components/Admin_dashboard/Pages/Database/Database.tsx';
import PlagiarismSettings from './components/Admin_dashboard/Pages/plagiarism-check/PlagiarismSettings.tsx';
import StudentDashboard from './Pages/Student/Dashboard/StudentDashboard.tsx';
import Student from './Pages/Student/StudentPage.tsx';
import DetailedReport from './components/Admin_dashboard/Pages/plagiarism-check/Report/DetailedReport.tsx';
import LecturerChecker from './Pages/LecturerChecker/LecturerChecker.tsx';

export {
  Route,
  Routes,
  Login,
  ResetPassword,
  ForgotPassword,
  AdminDashboard,
  ManageUsers,
  Dashboard,
  MyProfile,
  AccountSettings,
  Password,
  Lecturer,
  LecturerDashboard,
  PlagiarismChecker,
  ManageStudents,
  Layout,
  RequiredAuth,
  HistoryPage,
  ToastContainer,
  SchedulesPage,
  BulkUploadPage,
  AcademicUnit,
  Database,
  PlagiarismSettings,
  StudentDashboard,
  Student,
  DetailedReport,
  LecturerChecker,
};
