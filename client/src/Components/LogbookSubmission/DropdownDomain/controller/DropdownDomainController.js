import React, { useState } from "react";
import { DropdownDomainModel } from "../model/DropdownDomainModel";
import DropdownDomainView from "../view/DropdownDomainView";

const DropdownDomainController = (props) => {
  const [showTextInput, setShowTextInput] = useState(false);
  const [customSkill, setCustomSkill] = useState(
    DropdownDomainModel.customSkill
  );

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === "Others") {
      setShowTextInput(true);
      props.setSkill({ domain: "", skill: "" });
    } else {
      const [domain, skill] = selectedValue.split(": ");
      props.setSkill({ domain, skill });
      setShowTextInput(false);
    }
  };

  const handleTextInputChange = (event) => {
    const { name, value } = event.target;
    setCustomSkill((prevState) => ({ ...prevState, [name]: value }));
    props.setSkill({ ...customSkill, [name]: value });
  };

  return (
    <DropdownDomainView
      handleChange={handleChange}
      taskMenu={DropdownDomainModel.taskMenu}
      showTextInput={showTextInput}
      handleTextInputChange={handleTextInputChange}
    />
  );
};

export default DropdownDomainController;
