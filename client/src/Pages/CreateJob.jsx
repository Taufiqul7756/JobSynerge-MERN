import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Creatable from "react-select/creatable";

import "../App.css";

const CreateJob = () => {
  const [selectedOptions, setSelectedOptions] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.skills = selectedOptions;
    console.log(data);
  };

  const options = [
    { value: "Javascript", label: "Javascript" },
    { value: "React", label: "React" },
    { value: "Node", label: "Node" },
    { value: "Python", label: "Python" },
    { value: "HTML", label: "HTML" },
    { value: "Next", label: "Next" },
    { value: "C++", label: "C++" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "Redux", label: "Redux" },
  ];

  return (
    <div className="bg-grey max-w-screen-2xl container mx-auto xl:px-24 px-4">
      {/* form */}
      <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16 ">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* This is first row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Title</label>
              <input
                type="text"
                defaultValue={"Web Developer"}
                {...register("jobTitle")}
                className="create-job-input"
              />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Name</label>
              <input
                type="text"
                placeholder="Ex: BJIT"
                {...register("companyName")}
                className="create-job-input"
              />
            </div>
          </div>
          {/* This is Second row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Minimum Salary</label>
              <input
                type="text"
                placeholder="$10k"
                {...register("minPrice")}
                className="create-job-input"
              />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Maximum Salary</label>
              <input
                type="text"
                placeholder="$100k"
                {...register("maxPrice")}
                className="create-job-input"
              />
            </div>
          </div>
          {/* This is 3rd row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Salary Type</label>
              <select {...register("salaryType")} className="create-job-input">
                <option value="">Choose your Salary</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Location</label>
              <input
                type="text"
                placeholder="Ex: Dhaka"
                {...register("jobLocation")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* Fourth row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Posting Date</label>
              <input
                type="date"
                placeholder="Ex: 2023-12-26"
                {...register("postingDate")}
                className="create-job-input"
              />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Experience Level</label>
              <select
                {...register("experienceLevel")}
                className="create-job-input"
              >
                <option value="">Select your Experience Level</option>
                <option value="Any experience">Any experience</option>
                <option value="Internship">Yearly</option>
                <option value="Work remotely">Work remotely</option>
              </select>
            </div>
          </div>

          {/* 5th row */}

          <div>
            <label className="block mb-2 text-lg">Required Skills Sets: </label>
            <Creatable
              className="create-job-input py-4"
              onChange={setSelectedOptions}
              options={options}
              isMulti
              defaultValue={selectedOptions}
            />
          </div>

          {/* 6th row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Logo</label>
              <input
                type="url"
                placeholder="Paste your image url https://image.com/img1.jpg"
                {...register("companyLogo")}
                className="create-job-input"
              />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Employment Type</label>
              <select
                {...register("employmentType")}
                className="create-job-input"
              >
                <option value="">Select your job type</option>
                <option value="Any">Any</option>
                <option value="Temporary">Temporary</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
              </select>
            </div>
          </div>

          {/* 7th row */}
          <div className="create-job-input">
            <label className="block mb-2 text-lg">Job Description</label>
            <textarea
              className="w-full pl-3 py=1.5 focus:outline-none"
              defaultValue={"Demo text"}
              rows={6}
              placeholder="Job Description"
              {...register("description")}
            />
          </div>

          {/* last row */}

          <div className="w-full">
            <label className="block mb-2 text-lg">Job Post Date by </label>
            <input
              type="email"
              placeholder="name@gmail.com"
              {...register("postedBy")}
              className="create-job-input"
            />
          </div>

          <input
            type="submit"
            className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer "
          />
        </form>
      </div>
    </div>
  );
};

export default CreateJob;
