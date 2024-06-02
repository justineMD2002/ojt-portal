import React, { useEffect, useState } from 'react';
import { useAuth } from '../UserManagement/AuthContext';
import axios from 'axios';
import qs from 'qs';
import ReusableForm from './ReusableForm';

const Companies = () => {
  const { authUser } = useAuth();
  const [companies, setCompanies] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    company_name: '',
    contactNo: '',
    email: '',
    address: '',
  });

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get(
          "https://ojt-backend.azurewebsites.net/company/get-all-companies",
          {
            headers: {
              Authorization: `Bearer ${authUser.accessToken}`,
            },
          }
        );
        console.log(response.data);
        setCompanies(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    } 
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
    <div>
      <h1>Company List</h1>
      <button onClick={handleClick}>Add a Company</button>
      <table>
        <thead>
          <tr>
            <th>Company ID</th>
            <th>Company Name</th>
            <th>Contact Number</th>
            <th>Email</th> 
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.id}>
              <td>{company.id}</td>
              <td>{company.companyName}</td>
              <td>{company.contactNos}</td>
              <td>{company.emails}</td>
              <td>{company.locations}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <ReusableForm
        show={showModal}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        transactionType="Add New Company"
      >
        <div>
          <label htmlFor="company_name">Company Name:</label>
          <input
            type="text"
            id="company_name"
            name="company_name"
            value={formData.company_name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="contactNo">Contact Number:</label>
          <input
            type="text"
            id="contactNo"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </div>
      </ReusableForm>
    </div>
  );
};

export default Companies;
