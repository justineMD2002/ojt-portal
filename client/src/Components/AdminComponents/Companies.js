import React, { useEffect, useState } from 'react';
import { useAuth } from '../UserManagement/AuthContext';
import axios from 'axios';

const Companies = () => {
  const { authUser } = useAuth();
  const [companies, setCompanies] = useState([]);

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

        setCompanies(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchCompanies();
  }, [authUser])

  return (
    <div>
      <h1>Company List</h1>
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
    </div>
  );
};

export default Companies;