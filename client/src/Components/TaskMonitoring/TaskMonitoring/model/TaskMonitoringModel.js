import axios from "axios";

export const trainingFormData = {
  title: "",
  description: "",
  startDate: "",
  endDate: "",
};


export const fetchTrainingPlans = async (studentEmail, authUser) => {
  try {
    const response = await axios.get(
      "https://ojt-backend.azurewebsites.net/get-training-plans",
      {
        params: {
          studentEmail: studentEmail,
        },
        headers: {
          Authorization: `Bearer ${authUser.accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching training plans for ${studentEmail}:`, error);
    return null;
  }
};


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
      return response.data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
}