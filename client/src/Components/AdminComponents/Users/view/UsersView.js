import React from "react";
import ReusableForm from "../../ReusableForm";

const UsersView = ({
  handleClickCreateUser,
  users,
  showModal,
  handleCloseModal,
  handleSubmit,
  userType,
  handleUserTypeChange,
  formData,
  handleInputChange,
  renderFormFields,
  handleActivate,
  handleRestrict
}) => {
  return (
    <div>
      <h1>Users List</h1>
      <button onClick={handleClickCreateUser}>Create User</button>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Account Type</th>
            <th>User Status</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.uid}>
              <td>{user.uid}</td>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.accountType}</td>
              <td>{user.userStatus}</td>                                    
              <td>{user.email}</td> 
              <td>
                <button onClick={() => handleActivate(user.email)} style={{ marginBottom: "5px" }}>Activate</button>
                <button onClick={() => handleRestrict(user.email)} style={{ marginTop: "5px" }}>Restrict</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ReusableForm
        show={showModal}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        transactionType="Create New User"
      >
        <div>
          <label htmlFor="userType">User Type:</label>
          <select
            id="userType"
            value={userType}
            onChange={handleUserTypeChange}
          >
            <option value="student">Student</option>
            <option value="admin">Admin</option>
            <option value="instructor">Instructor</option>
            <option value="chair">Chair</option>
          </select>
        </div>
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
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
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        {renderFormFields()}
      </ReusableForm>
    </div>
  );
};

export default UsersView;
