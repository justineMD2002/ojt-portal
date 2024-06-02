import axios from "axios";

export const companyData = {
  company_name: "",
  contactNo: "",
  email: "",
  address: "",
};

export const getAllCompanies = async (accessToken) => {
  try {
    const response = await axios.get(
      "https://ojt-backend.azurewebsites.net/company/get-all-companies",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
