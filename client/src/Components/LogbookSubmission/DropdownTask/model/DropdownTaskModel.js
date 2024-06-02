import axios from "axios";

export const DropdownDomainModel = async (authUser) => {
  try {
    const response = await axios.get(
      "https://ojt-backend.azurewebsites.net/get-student-allTasks",
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
    console.error("Error fetching ojt record:", error);
  }
};
