import * as Components from "../Components";

export const StudentView = ({ student, handleChange }) => (
  <div>
    <Components.Input
      type="text"
      name="studentID"
      placeholder="Student ID"
      onChange={handleChange}
      value={student.studentID}
    />
    <Components.Input
      type="text"
      name="firstname"
      placeholder="Firstname"
      onChange={handleChange}
      value={student.firstname}
    />
    <Components.Input
      type="text"
      name="lastname"
      placeholder="Lastname"
      onChange={handleChange}
      value={student.lastname}
    />
    <Components.Input
      type="text"
      name="degreeProgram"
      placeholder="Degree Program"
      onChange={handleChange}
      value={student.degreeProgram}
    />
    <Components.Input
      type="text"
      name="email"
      placeholder="Email"
      onChange={handleChange}
      value={student.email}
    />
    <Components.Input
      type="password"
      name="password"
      placeholder="Password"
      onChange={handleChange}
      value={student.password}
    />
  </div>
);

export const SupervisorView = ({ supervisor, handleChange }) => (
  <div>
    <Components.Input
      type="text"
      name="firstname"
      placeholder="Firstname"
      onChange={handleChange}
      value={supervisor.firstname}
    />
    <Components.Input
      type="text"
      name="lastname"
      placeholder="Lastname"
      onChange={handleChange}
      value={supervisor.lastname}
    />
    <Components.Input
      type="text"
      name="company_name"
      placeholder="Company Name"
      onChange={handleChange}
      value={supervisor.company_name}
    />
    <Components.Input
      type="email"
      name="company_email"
      placeholder="Company Email"
      onChange={handleChange}
      value={supervisor.company_email}
    />
    <Components.Input
      type="text"
      name="company_contactNo"
      placeholder="Company Contact Number"
      onChange={handleChange}
      value={supervisor.company_contactNo}
    />
    <Components.Input
      type="text"
      name="company_location"
      placeholder="Company Location"
      onChange={handleChange}
      value={supervisor.company_location}
    />
    <Components.Input
      type="text"
      name="position"
      placeholder="Position"
      onChange={handleChange}
      value={supervisor.position}
    />
    <Components.Input
      type="password"
      name="password"
      placeholder="Password"
      onChange={handleChange}
      value={supervisor.password}
    />
  </div>
);
