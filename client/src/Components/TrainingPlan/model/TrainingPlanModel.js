import axios from "axios";

export const getTrainingPlans = async (authUser) => {
  try {
    const response = await axios.get(
      "https://ojt-backend.azurewebsites.net/get-training-plans",
      {
        params: {
          studentEmail: authUser.userInfo.email,
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
