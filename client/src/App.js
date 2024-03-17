import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./Styles/App.scss";
import Header from "./Components/Common/Header";
import Sidebar from "./Components/Common/Sidebar";
import Footer from "./Components/Common/Footer";
import Dashboard from "./Components/Dashboard/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentProgress from "./Components/StudentProgress/StudentProgress";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Sidebar />
        <Footer />

        <main>
          <Routes>
            <Route path="/" element={<StudentProgress />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
