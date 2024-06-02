import React, { useEffect, useState } from "react";
import { getAllCompanies, companyData } from "../model/CompaniesModel";
import axios from "axios";
import CompaniesView from "../view/CompaniesView";
import qs from "qs";
import { useAuth } from "../../../UserManagement/AuthContext";


const CompaniesController = () => {
  const { authUser } = useAuth();
  const [companies, setCompanies] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState(companyData);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await getAllCompanies(authUser.accessToken);
        setCompanies(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchCompanies();
  }, [authUser.accessToken]);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://ojt-backend.azurewebsites.net/company/add",
        qs.stringify(formData),
        {
          headers: {
            Authorization: `Bearer ${authUser.accessToken}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      window.location.reload();
      setShowModal(false);
      alert("Company added successfully");
    } catch (error) {
      console.error("Error:", error);
      setShowModal(false);
      alert("Failed to add company");
    }
  };

  return (
    <CompaniesView
      handleClick={handleClick}
      companies={companies}
      showModal={showModal}
      handleCloseModal={handleCloseModal}
      handleSubmit={handleSubmit}
      formData={formData}
      handleInputChange={handleInputChange}
    />
  );
};

export default CompaniesController;
