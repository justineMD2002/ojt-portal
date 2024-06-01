import { ProgressOverviewModel } from "../model/ProgressOverviewModel";

const ProgressOverviewController = () => {
  const fetchProgressData = async (
    authUser,
    setApprovalPercentage,
    setPendingPercentage
  ) => {
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

  return fetchProgressData;
};

export default ProgressOverviewController;
