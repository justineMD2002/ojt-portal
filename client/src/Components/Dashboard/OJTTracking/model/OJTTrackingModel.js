import axios from "axios";

export const OJTTrackingModel = () => {
    const fetchOjtRecord = async (authUser, setOjtEntries) => {
      if (authUser && authUser.accessToken) {
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
          console.log("Response from API:", response.data);
          setOjtEntries(response.data);
        } catch (error) {
          console.error("Error fetching logbook:", error);
        }
      }
    };

    return fetchOjtRecord;
}