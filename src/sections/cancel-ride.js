import React from "react";
import MultiColorHeading from "../widgets/multi_color_heading";
import UserInfo from "./user-info";
import { cancelRideRequest } from "../services/secure/ride_service";

const CancelRide = (props) => {
  let cancelRide = () => {
    cancelRideRequest(props)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <>
      <MultiColorHeading black="Cancel" green="Ride"></MultiColorHeading>
      <UserInfo {...props}></UserInfo>
      <div className="btn-wrapper d-flex justify-content-center align-items-center my-1">
        <button
          className="btn btn-success rounded-pill"
          type="button"
          onClick={() => cancelRide()}
        >
          Cancel Ride
        </button>
      </div>
    </>
  );
};

export default CancelRide;
