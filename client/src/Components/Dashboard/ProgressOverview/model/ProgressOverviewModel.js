import axios from "axios";

export const ProgressOverviewModel = () => {
  const getLogbookCount = async (authUser) => {
    if (authUser && authUser.accessToken && authUser.ojtRecord) {
      try {
        const response = await axios.get(
          "https://ojt-backend.azurewebsites.net/student/get-all-entries",
          {
            params: {
              email: authUser.userInfo.email,
            },
            headers: {
              Authorization: `Bearer ${authUser.accessToken}`,
            },
          }
        );
        return response.data;
      } catch (error) {
        console.error("Error fetching logbook:", error);
        return [];
      }
    }
    return [];
  };

  return getLogbookCount;
};
