import axios from "axios";

export const getAllUsers = async (accessToken) => {
  try {
    const response = await axios.get(
      "https://ojt-backend.azurewebsites.net/user/get/all",
      {
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

export const userData = {
  email: "",
  password: "",
  firstname: "",
  lastname: "",
  studentID: "",
  degreeProgram: "",
};
