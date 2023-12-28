import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import PageHeader from "../components/PageHeader";
import { FaBriefcase } from "react-icons/fa6";

const JobsDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/all-jobs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setJob(data);
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
      <h1>{job.jobTitle}</h1>

      <div className="">
        <button className="bg-blue/70 px-8 py-2 text-white">
          {job.employmentType}
        </button>
        <button onClick={handleApply} className="bg-blue px-8 py-2 text-white">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobsDetails;
