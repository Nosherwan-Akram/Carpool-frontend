import React from "react";
import MultiColorHeading from "../widgets/multi_color_heading";
import UserInfo from "../sections/user-info";
import { bookRideRequest } from "../services/secure/ride_service";

const BookingRide = (props) => {
  let bookRide = () => {
    console.log(props);
    bookRideRequest({ rideId: props._id }).then((res) => console.log(res));
  };
  return (
    <div>
      <MultiColorHeading black="Book" green="Ride" />
      <UserInfo {...props} />
      <div className="button-wrapper d-flex justify-content-end w-100">
        {props.availableSeats > 0 && (
          <button
            className="btn btn-success rounded-pill mt-1"
            onClick={() => bookRide()}
          >
            Book Ride
          </button>
        )}
      </div>
    </div>
  );
};

export default BookingRide;
