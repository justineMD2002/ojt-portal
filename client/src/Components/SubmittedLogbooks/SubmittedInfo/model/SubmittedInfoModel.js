import axios from "axios";

export const SubmittedInfoModel = (authUser) => {
  const getLogbooksSupervisor = async () => {
    try {
      const response = await axios.get(
        "https://ojt-backend.azurewebsites.net/supervisor/get-logbooks",
        {
          params: {
            supervisorEmail: authUser.userInfo.email,
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

  return getLogbooksSupervisor();
};
