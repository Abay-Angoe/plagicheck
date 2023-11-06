import {
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
} from '../src/index';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resetpassword/:id" element={<ResetPassword />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="login" element={<Login />} />
          <Route path="resetpassword/:id" element={<ResetPassword />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />

          <Route
            path="admin"
            element={<RequiredAuth allowedRoles={['ADMIN']} />}
          >
            <Route path="pages" element={<AdminDashboard />}>
              <Route index element={<Dashboard />} />
              <Route path="checker" element={<LecturerChecker />} />
              <Route path="checker/settings" element={<PlagiarismSettings />} />
              <Route path="checker/report" element={<DetailedReport />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="schedule" element={<SchedulesPage />} />
              <Route path="unit" element={<AcademicUnit />} />
              <Route path="database" element={<Database />} />
              <Route path="manageuser" element={<ManageUsers />} />
              <Route
                path="bulkupload"
                element={
                  <BulkUploadPage
                    title="Student"
                    endpoint="/student/bulk/upload"
                  />
                }
              />{' '}
              <Route path="history" element={<HistoryPage />} />
              <Route path="settings" element={<AccountSettings />}>
                <Route index element={<Password />} />
                <Route path="profile" element={<MyProfile />} />
                <Route path="password" element={<Password />} />
              </Route>
            </Route>
          </Route>

          <Route
            path="lecturer"
            element={<RequiredAuth allowedRoles={['LECTURER']} />}
          >
            <Route path="test" element={<PlagiarismSettings />} />
            <Route path="pages" element={<Lecturer />}>
              <Route index element={<LecturerDashboard />} />
              <Route path="dashboard" element={<LecturerDashboard />} />
              <Route path="checker" element={<LecturerChecker />} />
              <Route path="checker/settings" element={<PlagiarismSettings />} />
              <Route path="checker/report" element={<DetailedReport />} />
              <Route path="manageuser" element={<ManageStudents />} />
              <Route
                path="bulkupload"
                element={
                  <BulkUploadPage
                    title="Student"
                    endpoint="/student/bulk/upload"
                  />
                }
              />{' '}
              <Route path="schedule" element={<SchedulesPage />} />
              <Route path="database" element={<Database />} />
              <Route path="history" element={<HistoryPage />} />
              <Route path="settings" element={<AccountSettings />}>
                <Route index element={<Password />} />
                <Route path="profile" element={<MyProfile />} />
                <Route path="password" element={<Password />} />
              </Route>
            </Route>

            <Route path="settings" element={<AccountSettings />}>
              <Route index element={<Password />} />
              <Route path="profile" element={<MyProfile />} />
              <Route path="password" element={<Password />} />
            </Route>
          </Route>

          <Route
            path="student"
            element={<RequiredAuth allowedRoles={['STUDENT']} />}
          >
            <Route path="pages" element={<Student />}>
              <Route index element={<StudentDashboard />} />
              <Route path="dashboard" element={<StudentDashboard />} />
              <Route path="checker" element={<PlagiarismChecker />} />
              <Route path="checker/settings" element={<PlagiarismSettings />} />
              <Route path="checker/report" element={<DetailedReport />} />
              <Route path="schedule" element={<SchedulesPage />} />
              <Route path="history" element={<HistoryPage />} />

              <Route path="settings" element={<AccountSettings />}>
                <Route index element={<Password />} />
                <Route path="profile" element={<MyProfile />} />
                <Route path="password" element={<Password />} />
              </Route>
            </Route>

            <Route path="settings" element={<AccountSettings />}>
              <Route index element={<Password />} />
              <Route path="profile" element={<MyProfile />} />
              <Route path="password" element={<Password />} />
            </Route>
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
