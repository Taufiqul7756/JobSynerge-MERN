import React from "react";

const Jobs = ({ result }) => {
  return (
    <>
      <div>
        <h2 className=" text-lg mb-2 font-bold">{result.length} Jobs</h2>
      </div>
      <section>{result}</section>
    </>
  );
};

export default Jobs;
