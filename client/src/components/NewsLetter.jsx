import React from "react";
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6";

const NewsLetter = () => {
  return (
    <div>
      <div className="mb-20">
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2 ">
          <FaEnvelopeOpenText />
          Email me for Jobs
        </h3>
        <p className="text-primary/75 text-base mb-4">
          Sent us your cv pr resume . We will forward it according to your
          expertise.
        </p>
        <div className="w-full space-y-4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@gmail.com"
            className="w-full block py-2 pl-3 border focus:outline-none"
          />
          <input
            type="submit"
            name="submit"
            id="submit"
            value={"subscribe"}
            placeholder="name@gmail.com"
            className="w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold"
          />
        </div>
      </div>
      {/* second part */}
      <div>
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2 ">
          <FaRocket />
          Get noticed faster
        </h3>
        <p className="text-primary/75 text-base mb-4 ">
          Sent us your cv pr resume . We will forward it according to your
          expertise.
        </p>
        <div className="w-full space-y-4">
          <input
            type="submit"
            name="submit"
            id="submit"
            value={"Upload your resume"}
            placeholder="Upload your resume"
            className="w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
