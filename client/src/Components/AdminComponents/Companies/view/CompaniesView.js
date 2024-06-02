import React from 'react'
import ReusableForm from '../../ReusableForm';

const CompaniesView = ({handleClick, companies, showModal, handleCloseModal, handleSubmit, formData, handleInputChange}) => {
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
}

export default CompaniesView