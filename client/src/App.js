import React from "react";
import "./Styles/App.scss";
import Header from "./Components/Common/Header";
import Sidebar from "./Components/Common/Sidebar";
import Footer from "./Components/Common/Footer";
import Dashboard from "./Components/Dashboard/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SubmittedLogbooks from "./Components/SubmittedLogbooks/SubmittedLogbooks";
import { AuthProvider } from "./Components/UserManagement/AuthContext";
import LoginSignupController from "./Components/UserManagement/LoginSignup/controllers/LoginSignupController";
import InternMonitoringController from "./Components/InternMonitoring/controllers/InternMonitoringController";
import ActivateAccountController from "./Components/UserManagement/ActivateAccount/controller/ActivateAccountController";
import ForgotPasswordController from "./Components/UserManagement/ForgotPassword/controller/ForgotPasswordController";
import LogbookEntriesController from "./Components/LogbookEntries/controller/LogbookEntriesController";
import AdminDashboard from "./Components/AdminComponents/AdminDashboard";
import StudentDataController from "./Components/InstructorComponents/controller/StudentDataController";
import CompaniesController from "./Components/AdminComponents/Companies/controller/CompaniesController";
import UsersController from "./Components/AdminComponents/Users/controller/UsersController";
import OJTRecordsController from "./Components/AdminComponents/OJTRecords/controller/OJTRecordsController";
import InternEvalFeedbackFormController from "./Components/InternEvalFeedbackForm/controller/InternEvalFeedbackFormController";
import LogbookFormController from "./Components/LogbookSubmission/LogbookForm/controller/LogbookFormController";
import StudentsDetailsController from "./Components/StudentsMonitoring/controller/StudentsDetailsController";
import TrainingPlansTableController from "./Components/AdminComponents/TrainingPlansTable/controller/TrainingPlansTableController";
import TaskMonitoringController from "./Components/TaskMonitoring/TaskMonitoring/controller/TaskMonitoringController";
import TraineeEvaluationController from "./Components/TraineeEvaluation/controller/TraineeEvaluationController";
import TrainingPlanController from "./Components/TrainingPlan/controller/TrainingPlanController";
import OJTAnalyticsController from "./Components/OJTAnalytics/Analytics/controller/OJTAnalyticsController";
import LogbookContentsController from "./Components/ViewLogbook/controller/LogbookContentsController";
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header />
          <Sidebar />
          <Footer />

          <main>
            <Routes>
              <Route path="/" element={<LoginSignupController />} />
              <Route
                path="/forgot-password"
                element={<ForgotPasswordController />}
              />
              <Route path="/student-info" element={<Dashboard />} />
              <Route path="/logbook" element={<LogbookFormController />} />
              <Route path="/view-logbook" element={<LogbookContentsController />} />
              <Route
                path="/task-monitoring"
                element={<TaskMonitoringController />}
              />
              <Route
                path="/submitted-logbook"
                element={<SubmittedLogbooks />}
              />
              <Route
                path="/tp-table"
                element={<TrainingPlansTableController />}
              />
              <Route path="/ojt-records" element={<OJTRecordsController />} />
              <Route path="/users" element={<UsersController />} />
              <Route path="/companies" element={<CompaniesController />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} />

              <Route path="/student-data" element={<StudentDataController />} />

              <Route path="/ojt-analytics" element={<OJTAnalyticsController />} />
              <Route
                path="/student-monitoring"
                element={<StudentsDetailsController />}
              />
              <Route
                path="/trainee-evaluation"
                element={<TraineeEvaluationController />}
              />
              <Route
                path="/interneval-feedbackform"
                element={<InternEvalFeedbackFormController />}
              />
              <Route
                path="/logbook-entries"
                element={<LogbookEntriesController />}
              />
              <Route
                path="/training-plan"
                element={<TrainingPlanController />}
              />
              <Route
                path="/activate-account"
                element={<ActivateAccountController />}
              />
              <Route
                path="/intern-monitoring"
                element={<InternMonitoringController />}
              />
              <Route />
              <Route
                path="*"
                element={
                  <div
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      right: "0",
                      bottom: "0",
                      zIndex: "100",
                      backgroundColor: "white",
                      padding: "20px",
                    }}
                  >
                    <h1 style={{ fontSize: "5rem" }}>404 - Page Not Found</h1>
                    <br />
                    <p style={{ fontSize: "2rem" }}>
                      Sorry, the page you are looking for does not exist.
                    </p>
                  </div>
                }
                replace
              />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
