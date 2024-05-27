import React from "react";
import "./Styles/App.scss";
import Header from "./Components/Common/Header";
import Sidebar from "./Components/Common/Sidebar";
import Footer from "./Components/Common/Footer";
import Dashboard from "./Components/Dashboard/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentProgress from "./Components/StudentProgress/StudentProgress";
import LogbookForm from "./Components/LogbookSubmission/LogbookForm";
import LogbookContents from "./Components/ViewLogbook/LogbookContents";
import TaskMonitoring from "./Components/TaskMonitoring/TaskMonitoring";
import SubmittedLogbooks from "./Components/SubmittedLogbooks/SubmittedLogbooks";
import OJTAnalytics from "./Components/OJTAnalytics/OJTAnalytics";
import TraineeEvaluation from "./Components/TraineeEvaluation/TraineeEvaluation";
import InternEvalFeedbackForm from "./Components/InternEvalFeedbackForm/InternEvalFeedbackForm";
import LogbookEntries from "./Components/LogbookEntries/LogbookEntries";
import TrainingPlan from "./Components/TrainingPlan/TrainingPlan";
import { AuthProvider } from "./Components/UserManagement/AuthContext";
import ActivateAccount from "./Components/UserManagement/ActivateAccount";
import LoginSignupController from "./Components/UserManagement/controllers/LoginSignupController";
import InternMonitoringController from "./Components/InternMonitoring/controllers/InternMonitoringController";
import ProtectedRoute from "./Components/ProtectedRoutes/ProtectedRoute";

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
              <Route path="/student-info" element={<Dashboard />} />
              <Route path="/logbook" element={<LogbookForm />} />
              <Route path="/view-logbook" element={<LogbookContents />} />
              <Route path="/task-monitoring" element={<TaskMonitoring />} />
              <Route path="/logbookSubmissions" element={<StudentProgress />} />
              <Route
                path="/submitted-logbook"
                element={<SubmittedLogbooks />}
              />
              <Route path="/ojt-analytics" element={<OJTAnalytics />} />
              <Route
                path="/trainee-evaluation"
                element={<TraineeEvaluation />}
              />
              <Route
                path="/interneval-feedbackform"
                element={<InternEvalFeedbackForm />}
              />
              <Route path="/logbook-entries" element={<LogbookEntries />} />
              <Route path="/training-plan" element={<TrainingPlan />} />
              <Route path="/activate-account" element={<ActivateAccount />} />
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
