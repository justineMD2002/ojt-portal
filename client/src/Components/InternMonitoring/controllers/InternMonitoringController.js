import React, { useEffect, useState } from "react";
import { useAuth } from "../../UserManagement/AuthContext";
import InternMonitoringView from "../views/InternMonitoringView";
import axios from "axios";

const InternMonitoringController = () => {
  const { authUser } = useAuth();
  const [openModal, setOpenModal] = React.useState(false);
  const [accessToken] = useState(authUser.accessToken);
  const [OJTRecords, setOJTRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const getOJTRecords = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://ojt-portal-backend2.azurewebsites.net/get-ojt-records",
        {
          params: {
            studentEmail: "all",
          },
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log(response.data);
      if (response.data) {
        setOJTRecords(
          response.data.filter((record) => record.status === "ONGOING")
        );
      } else {
        console.log("No data found");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getOJTRecords();
  }, []);

  return (
    <InternMonitoringView
      openModal={openModal}
      handleOpenModal={handleOpenModal}
      accessToken={accessToken}
      getOJTRecords={OJTRecords}
      loading={loading}
    />
  );
};

export default InternMonitoringController;
