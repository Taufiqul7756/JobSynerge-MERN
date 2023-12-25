import React from "react";
import Button from "./Button";
import InputField from "../components/InputField";

const Salary = ({ handleChange, handleClick }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Salary</h4>
      <div className="mb-4">
        <Button onClickHandler={handleChange} value="" title="Hourly" />
        <Button onClickHandler={handleChange} value="Monthly" title="Monthly" />
        <Button onClickHandler={handleChange} value="Yearly" title="Yearly" />
      </div>

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
          value={30}
          title="< 30,000k"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={50}
          title="< 50,000k"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={60}
          title="< 60,000k"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={80}
          title="< 80,000k"
          name="test"
        />
      </div>
    </div>
  );
};

export default Salary;
