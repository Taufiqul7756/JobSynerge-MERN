import React, { useState } from "react";
import PageHeader from "../components/PageHeader";

const SalaryEstimate = () => {
  const [serachText, setSearchText] = useState("");

  return (
    <div className="max-w-screen-2xl container mx-auto xl:pax-24 px-4">
      <PageHeader title={"Estimate Salary"} path={"Salary"} />

      <div className="mt-5">
        <div className="search-box p-2 text-center mb-2">
          <input
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            name="search"
            id="search"
            placeholder=""
            className="py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full"
          />
          <button className="bg-blue text-white font-semibold px-8 py-2 rounded-sm mb-4">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SalaryEstimate;
