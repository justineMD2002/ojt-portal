import React, { useState } from "react";
import { internDesignationModel } from "../models/InternDesignationModel";
import AddInternModalView from "../views/AddInternModalView";
import axios from "axios";
import qs from "qs";

const InternDesignationController = ({ handleOpenModal, accessToken }) => {
  const [designation, setDesignation] = useState(internDesignationModel);

  const handleInputChange = (e) => {
    setDesignation({
      ...designation,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddIntern = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://ojt-portal-backend2.azurewebsites.net/supervisor/add-intern",
        qs.stringify(designation),
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AddInternModalView
      designation={designation}
      handleInputChange={handleInputChange}
      handleAddIntern={handleAddIntern}
      handleOpenModal={handleOpenModal}
    />
  );
};

export default InternDesignationController;
