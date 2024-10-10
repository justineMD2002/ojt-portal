import React from "react";
import "./Styles/App.scss"; 
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthProvider, useAuth } from "./Components/UserManagement/AuthContext";
import Header from "./Components/Common/Header";
import Sidebar from "./Components/Common/Sidebar";
import Footer from "./Components/Common/Footer";
import NotFound from "./Components/Common/NotFound";

import Dashboard from "./Components/Dashboard/Dashboard";
import OJTRecordsController from "./Components/AdminComponents/OJTRecords/controller/OJTRecordsController";
import UsersController from "./Components/AdminComponents/Users/controller/UsersController";
import CompaniesController from "./Components/AdminComponents/Companies/controller/CompaniesController";
import TrainingPlansTableController from "./Components/AdminComponents/TrainingPlansTable/controller/TrainingPlansTableController";
import SubmittedLogbooks from "./Components/SubmittedLogbooks/SubmittedLogbooks";
import TaskMonitoringController from "./Components/TaskMonitoring/TaskMonitoring/controller/TaskMonitoringController";
import AdminDashboard from "./Components/AdminComponents/AdminDashboard";
import LogbookFormController from "./Components/LogbookSubmission/LogbookForm/controller/LogbookFormController";
import LogbookContentsController from "./Components/ViewLogbook/controller/LogbookContentsController";
import StudentDataController from "./Components/InstructorComponents/controller/StudentDataController";
import OJTAnalyticsController from "./Components/OJTAnalytics/Analytics/controller/OJTAnalyticsController";
import StudentsDetailsController from "./Components/StudentsMonitoring/controller/StudentsDetailsController";
import TraineeEvaluationController from "./Components/TraineeEvaluation/controller/TraineeEvaluationController";
import InternEvalFeedbackFormController from "./Components/InternEvalFeedbackForm/controller/InternEvalFeedbackFormController";
import InternMonitoringController from "./Components/InternMonitoring/controllers/InternMonitoringController";
import TrainingPlanController from "./Components/TrainingPlan/controller/TrainingPlanController";
import LoginController from "./Components/UserManagement_V2/Login/controller/LoginController";
import RegisterController from "./Components/UserManagement_V2/Register/controller/RegisterController";
import ForgotPasswordController from "./Components/UserManagement_V2/ForgotPassword/controller/ForgotPasswordController";
import ActivateAccountController from "./Components/UserManagement_V2/ActivateAccount/controller/ActivateAccountController";
import { GlobalStateProvider, useGlobalState } from "./Components/Helpers/Globals/variables";

const ProtectedRoute = ({ children }) => {
  const { authUser, isLoggedIn } = useAuth();
  const { setAllowPath } = useGlobalState();

  if (!authUser || !isLoggedIn) {
    setAllowPath(false);
    return <Navigate to="/" />;
  }

  return children ? children : <Outlet />;
};

const AdminProtectedRoute = ({ children }) => {
  const { authUser, isLoggedIn, userInfo } = useAuth();
  const { setAllowPath } = useGlobalState();

  // Check if the user is logged in and has an admin usertype
  if (!authUser || !isLoggedIn || userInfo.userType !== 'admin') {
    setAllowPath(false);
    return <Navigate to="/" />;
  }

  return children ? children : <Outlet />;
};

const ConditionalRoute = ({ children }) => {
  const { allowPath } = useGlobalState();

  if (!allowPath) {
    return <NotFound />;
  }
  return children ? children : <Outlet />;
};

const Layout = () => {
  const hideSidebarPaths = ["/", "/forgot-password", "/activate-account"];
  const { pathname } = useLocation();

  return (
    <div className="App">
      <Header />
      {!hideSidebarPaths.includes(pathname) && <Sidebar />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <GlobalStateProvider>
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LoginController />} />
            <Route path="/register" element={<RegisterController />} />
            <Route path="/forgot-password" element={<ForgotPasswordController />} />
            <Route path="/activate-account" element={<ConditionalRoute><ActivateAccountController /></ConditionalRoute>} />
            
            {/* Protected Routes */}
            <Route element={<Layout />}>
              <Route element={<ProtectedRoute />}>
                <Route path="/student-info" element={<Dashboard />} />
                <Route path="/submitted-logbook" element={<SubmittedLogbooks />} />
                <Route path="/task-monitoring" element={<TaskMonitoringController />} />

                {/* Admin Protected Routes */}
                <Route element={<AdminProtectedRoute />}>
                  <Route path="/admin-dashboard" element={<AdminDashboard />} />
                  <Route path="/users" element={<UsersController />} />
                  <Route path="/companies" element={<CompaniesController />} />
                  <Route path="/training-plans" element={<TrainingPlansTableController />} />
                  <Route path="/ojt-records" element={<OJTRecordsController />} />
                </Route>
                {/* End Admin Protected Routes */}

                <Route path="/logbook" element={<LogbookFormController />} />
                <Route path="/view-logbook" element={<LogbookContentsController />} />
                <Route path="/student-data" element={<StudentDataController />} />
                <Route path="/ojt-analytics" element={<OJTAnalyticsController />} />
                <Route path="/student-monitoring" element={<StudentsDetailsController />} />
                <Route path="/trainee-evaluation" element={<TraineeEvaluationController />} />
                <Route path="/interneval-feedbackform" element={<InternEvalFeedbackFormController />} />
                <Route path="/training-plan" element={<TrainingPlanController />} />
                <Route path="/intern-monitoring" element={<InternMonitoringController />} />
              </Route>
            </Route>

            {/* Catch All Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </GlobalStateProvider>
    </AuthProvider>
  );
};

export default App;
