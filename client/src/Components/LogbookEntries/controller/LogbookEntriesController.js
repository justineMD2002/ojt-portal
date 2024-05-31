import React, { useEffect, useState } from "react";
import { useAuth } from "../../UserManagement/AuthContext";
import LogbookEntriesView from "../view/LogbookEntriesView";
import { LogbookEntriesModel } from "../model/LogbookEntriesModel";

const LogbookEntriesController = () => {
  const { authUser } = useAuth();
  const [logbookEntries, setLogbookEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    LogbookEntriesModel()(authUser, setLogbookEntries, setLoading);
  }, [authUser]);

  return (
    <LogbookEntriesView loading={loading} logbookEntries={logbookEntries} />
  );
};

export default LogbookEntriesController;
