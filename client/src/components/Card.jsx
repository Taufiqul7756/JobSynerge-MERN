import React from "react";

const Card = ({ data }) => {
  console.log("card", data);
  return (
    <div>
      <h3>{data.jobTitle}</h3>
    </div>
  );
};

export default Card;
