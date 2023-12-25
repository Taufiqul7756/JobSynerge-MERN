import React from "react";
import InputField from "../components/InputField";

const Location = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Location</h4>

      <div className="grid">
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span> All
        </label>

        <InputField
          handleChange={handleChange}
          value="dhaka"
          title="Dhaka"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="chattogram"
          title="Chattogram"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="sylhet"
          title="Sylhet"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="khulna"
          title="Khulna"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="rajshahi"
          title="Rajshahi"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="barishal"
          title="Barishal"
          name="test"
        />
      </div>
    </div>
  );
};

export default Location;
