import React from "react";
import MultiColorHeading from "../widgets/multi_color_heading";
import UserInfo from "./user-info";
const RideInfo = (props) => {
  return (
    <>
      <MultiColorHeading black="Ride" green="Info" />
      <UserInfo {...props} />
    </>
  );
};

export default RideInfo;
