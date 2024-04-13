import React from "react";
import "./Styles/App.scss";
import Header from "./Components/Common/Header";
import Sidebar from "./Components/Common/Sidebar";
import Footer from "./Components/Common/Footer";
import Dashboard from "./Components/Dashboard/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentProgress from "./Components/StudentProgress/StudentProgress";
import LogbookForm from "./Components/LogbookSubmission/LogbookForm"; 
import { Login_Signup } from "./Components/UserManagement/LoginSignup";

const App = () => {
  return (
    <Router>  
      <div className="App">
        <Header />
        <Sidebar />
        <Footer />

        <main>
          <Routes>
            <Route path="/studentProgress" element={<StudentProgress />} />
            <Route path="/" element={<Login_Signup />} />
            <Route path="/studentInfo" element={<Dashboard />} />
            <Route path="/logbook" element={<LogbookForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
