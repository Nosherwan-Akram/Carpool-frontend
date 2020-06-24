import React from "react";

const HeadingInfo = ({ heading, info }) => {
  return (
    <div>
      <h4 className="text-success">{heading}</h4>
      <p>{info}</p>
    </div>
  );
};

export default HeadingInfo;
