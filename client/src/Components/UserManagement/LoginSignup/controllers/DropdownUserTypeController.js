import React from "react";
import { DropdownUserTypeView } from "../views/DropdownUserTypeView";

export const DropdownUserTypeController = ({ setUserType }) => {

  const handleChange = (event) => {
    setUserType(event.target.value);
  };

  return (
    <DropdownUserTypeView handleChange={handleChange} />
  );
};
