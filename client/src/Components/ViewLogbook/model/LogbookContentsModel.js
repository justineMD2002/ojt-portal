export const LogbookContentsModel = (logbookEntry, state) => {
  return {
    timeIn: logbookEntry.timeIn.split("T")[1],
    timeOut: logbookEntry.timeOut.split("T")[1],
    entryID: state.entryID,
    skills: logbookEntry.skills,
    task: logbookEntry.tasks[logbookEntry.tasks.length - 1],
    activities: logbookEntry.activities,
  };
};
