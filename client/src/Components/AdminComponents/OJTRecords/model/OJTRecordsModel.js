import axios from "axios";

export const getAllOJTRecords = async (accessToken) => {
  try {
    const response = await axios.get(
      "https://ojt-backend.azurewebsites.net/get-ojt-records",
      {
        params: {
          studentEmail: "all",
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getStudentOJTRecords = async (accessToken, email) => {
  try {
    const response = await axios.get(
      "https://ojt-backend.azurewebsites.net/student/get-all-entries",
      {
        params: {
          email: email,
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
