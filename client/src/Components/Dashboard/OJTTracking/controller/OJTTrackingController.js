import React, { useEffect, useState } from "react";
import { OJTTrackingModel } from "../model/OJTTrackingModel";
import OJTTrackingView from "../view/OJTTrackingView";

const OJTTrackingController = ({ authUser }) => {
  const [ojtEntries, setOjtEntries] = useState([]);

  useEffect(() => {
    OJTTrackingModel()(authUser, setOjtEntries);
  }, [authUser]);

  const handleOnClick = () => {
    window.location.href = "/logbook-entries";
  };

  return (
    <OJTTrackingView
      authUser={authUser}
      ojtEntries={ojtEntries}
      handleOnClick={handleOnClick}
    />
  );
};

export default OJTTrackingController;
