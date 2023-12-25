import React from "react";
import InputField from "../components/InputField";

const EmploymentType = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Type of Employment </h4>

      <div className="grid">
        <InputField
          handleChange={handleChange}
          value="any"
          title="Any"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="Full-time"
          title="Full-time"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="Temporary"
          title="Temporary"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="Part-time"
          title="Part-time"
          name="test"
        />
      </div>
    </div>
  );
};

export default EmploymentType;
