const getCurrentDate = () => {
  const date = new Date();
  return date.toISOString().split("T")[0];
};

export const LogbookFormModel = {
  currentDate: getCurrentDate(),
  formData: {
    date: getCurrentDate(),
    timeIn: "",
    timeOut: "",
    skill: "",
    domain: "",
    task: "",
    activities: "",
  },
};
