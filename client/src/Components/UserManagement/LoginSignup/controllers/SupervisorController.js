import React from "react";
import { SupervisorView } from "../views/UserDetailsView";

export const SupervisorController = ({ supervisor, setSupervisor }) => {

  const handleChange = (e) => {
    const updatedSupervisor = {
      ...supervisor,
      [e.target.name]: e.target.value,
    };
    setSupervisor(updatedSupervisor);
  };

  return <SupervisorView supervisor={supervisor} handleChange={handleChange} />;
};
