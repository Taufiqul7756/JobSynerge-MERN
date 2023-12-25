import React from "react";
import InputField from "../components/InputField";

const JobPostingData = ({ handleChange }) => {
  const nowDate = new Date();
  console.log(nowDate);
  const twentyFourHoursAgo = new Date(nowDate - 24 * 60 * 60 * 1000);

  const sevenDaysAgo = new Date(nowDate - 7 * 24 * 60 * 60 * 1000);

  const thirtyDaysAgo = new Date(nowDate - 30 * 24 * 60 * 60 * 1000);

  // convert date into string
  const twentyFourHoursAgoDate = twentyFourHoursAgo.toISOString().slice(0, 10);
  const sevenDaysAgoDate = sevenDaysAgo.toISOString().slice(0, 10);
  const thirtyDaysAgoDate = thirtyDaysAgo.toISOString().slice(0, 10);

  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Date of Posting</h4>

      <div className="grid">
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span> All time
        </label>

        <InputField
          handleChange={handleChange}
          value={twentyFourHoursAgoDate}
          title="Last 24 hours"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={sevenDaysAgoDate}
          title="Last 7 days"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={thirtyDaysAgoDate}
          title="Last Month"
          name="test"
        />
      </div>
    </div>
  );
};

export default JobPostingData;
