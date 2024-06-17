import axios from "axios";

export const getAllStudents = async (authUser) => {
  try {
    const response = await axios.get(
      "https://ojt-backend.azurewebsites.net/company/get-all-students",
      {
        params: {
          companyName: authUser.company_name,
        },
        headers: {
          Authorization: `Bearer ${authUser.accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
