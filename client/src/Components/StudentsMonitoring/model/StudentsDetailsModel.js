import axios from "axios";

export const StudentsDetailsModel = (authUser) => {
  const getAllStudents = async () => {
    try {
      const response = await axios.get(
        "https://ojt-backend.azurewebsites.net/get-all-students",
        {
          headers: {
            Authorization: `Bearer ${authUser.accessToken}`,
          },
        }
      );

      let filteredStudents = response.data.filter((student) => {
        const degreeProgramRegex = /(Computer Science|Information Technology)/i;
        return degreeProgramRegex.test(student.degreeProgram);
      });

      if (authUser.email === "chair@cit.edu") {
        filteredStudents = filteredStudents.filter(
          (student) => student.user.userStatus === "Active"
        );
      }

      return filteredStudents;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return getAllStudents();
};
