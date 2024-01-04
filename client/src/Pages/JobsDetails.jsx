import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import PageHeader from "../components/PageHeader";
import { FaBriefcase } from "react-icons/fa6";

const JobsDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState([]);
  console.log("job", job);

  useEffect(() => {
    fetch(`https://job-synergy.onrender.com/all-jobs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setJob(data);
        console.log("kkkk", data);
      });
  }, []);

  const handleApply = async () => {
    const { value: email } = await Swal.fire({
      title: "Input email address",
      input: "email",
      inputLabel: "Your email address",
      inputPlaceholder: "Enter your email address",
    });
    if (email) {
      Swal.fire(`Entered email: ${email}`);
    }
  };
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <PageHeader title={"Single Job Page"} path={"Single Job"} />
      <h2>Job ID: {id}</h2>
      <h2 className="text-blue font-semibold text-lg py-1">Job Details </h2>
      <p className="text-black font-sm py-2">{job.description}</p>
      <div className="flex gap-2">
        <FaBriefcase />
        <h3>Job Type</h3>
      </div>

      <div className="">
        <button className="bg-blue/70 px-8 py-2 text-white">
          {job.employmentType}
        </button>
        <button onClick={handleApply} className="bg-blue px-8 py-2 text-white">
          Apply Now
        </button>
      </div>

      {/* Job Details one by one  bg-[#fbf9f9]*/}

      <div className=" md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-1 ">
        <div className="p-4 rounded">
          <h1 className="font-bold py-3 text-blue/70">Benefits</h1>
          <p className="py-2">Pulled from full job description</p>
          <div>
            {job.benefits && job.benefits.length > 0 && (
              <div>
                <ul>
                  {job.benefits.map((benefit, index) => (
                    <li key={index}>{`${index + 1}. ${benefit.label}`}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="col-span-2 p-4 rounded">
          <h1 className="font-bold text-blue/70">Company OutLine</h1>
          <h4>{job.outline}</h4>
        </div>
        <div className=" p-4 rounded">
          <h1 className="font-bold text-blue/70">Future Growth</h1>
          <h4>{job.futureGrowth}</h4>
        </div>
      </div>
    </div>
  );
};

export default JobsDetails;
