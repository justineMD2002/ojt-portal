import React, { useEffect, useState } from "react";
import { DropdownDomainModel } from "../model/DropdownDomainModel";
import DropdownDomainView from "../view/DropdownDomainView";

const DropdownDomainController = (props) => {
  const [showTextInput, setShowTextInput] = useState(false);
  const [customSkill, setCustomSkill] = useState(
    DropdownDomainModel.customSkill
  );

  useEffect(() => {
    props.value
      ? DropdownDomainModel.taskMenu.find(
          (task) =>
            task.domain === props.value[props.value.length - 1].domain &&
            task.skill === props.value[props.value.length - 1].skillName
        )
        ? setShowTextInput(false)
        : setShowTextInput(true)
      : setShowTextInput(false);

    showTextInput && props.value
      ? props.setSkill({
          domain: props.value[props.value.length - 1].domain,
          skill: props.value[props.value.length - 1].skillName,
        })
      : setCustomSkill(customSkill);
  }, []);

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
      domain={props.value}
    />
  );
};

export default DropdownDomainController;
