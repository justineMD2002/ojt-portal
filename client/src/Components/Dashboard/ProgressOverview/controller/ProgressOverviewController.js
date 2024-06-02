import { useEffect, useState } from "react";
import { ProgressOverviewModel } from "../model/ProgressOverviewModel";
import ProgressOverview from "../view/ProgressOverview";

const ProgressOverviewController = ({ authUser }) => {
  const [approvalPercentage, setApprovalPercentage] = useState(0);
  const [pendingPercentage, setPendingPercentage] = useState(0);

  useEffect(() => {
    const fetchProgressData = async () => {
      const getLogbookCount = ProgressOverviewModel();
      const data = await getLogbookCount(authUser);
      const approvedCount = data.reduce(
        (count, entry) => (entry.status === "APPROVED" ? count + 1 : count),
        0
      );
      const pendingCount = data.reduce(
        (count, entry) => (entry.status === "PENDING" ? count + 1 : count),
        0
      );
      const totalEntries = data.length;
      const approvalPercentage = totalEntries
        ? Math.ceil((approvedCount / totalEntries) * 100)
        : 0;
      const pendingPercentage = totalEntries
        ? Math.ceil((pendingCount / totalEntries) * 100)
        : 0;
      setApprovalPercentage(approvalPercentage);
      setPendingPercentage(pendingPercentage);
    };
    fetchProgressData();
  }, [authUser]);

  return (
    <ProgressOverview
      authUser={authUser}
      approvalPercentage={approvalPercentage}
      pendingPercentage={pendingPercentage}
    />
  );
};

export default ProgressOverviewController;
