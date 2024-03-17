import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./Styles/App.scss";
import Header from "./Components/Common/Header";
import Sidebar from "./Components/Common/Sidebar";
import Footer from "./Components/Common/Footer";
import Dashboard from "./Components/Dashboard/Dashboard";
import LogbookForm from "./Components/LogbookSubmission/LogbookForm"; 

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />  
        <Sidebar />
        <main>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/logbook" element={<LogbookForm />} />
            {/* Add more routes here */}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
