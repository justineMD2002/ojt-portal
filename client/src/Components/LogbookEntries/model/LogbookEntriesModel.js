import axios from "axios";

export const LogbookEntriesModel = () => {
  const studentLogbookEntries = async (
    authUser,
    setLogbookEntries,
    setLoading
  ) => {
    try {
      setLoading(true);
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

      setLogbookEntries(response.data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return studentLogbookEntries;
};
