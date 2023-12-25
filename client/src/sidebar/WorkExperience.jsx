import React from "react";
import InputField from "../components/InputField";

const WorkExperience = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Work Experience </h4>

      <div className="grid">
        <InputField
          handleChange={handleChange}
          value="any Experience"
          title="Any Experience"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="internship"
          title="Internship"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="work Remotely"
          title="Work Remotely"
          name="test"
        />
      </div>
    </div>
  );
};

export default WorkExperience;
