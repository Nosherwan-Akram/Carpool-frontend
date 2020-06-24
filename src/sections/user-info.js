import React from "react";
import ImgNull from "../widgets/img_null";
import HeadingInfo from "../widgets/heading_info";
import styled from "styled-components";
// import { ImageWrapper } from "./ride-card";

const UserInfo = (props) => {
  return (
    <div className="container-fluid border-bottom">
      <div className="row">
        <div className="col-8">
          <HeadingInfo heading="Driver" info={props.driverId.userName} />
          <HeadingInfo heading="Email" info={props.driverId.email} />
          <HeadingInfo heading="Departure" info={props.departure} />
          <HeadingInfo heading="Destination" info={props.destination} />
          <HeadingInfo heading="Departure Date" info={props.departureDate} />
          <HeadingInfo
            heading="Est. Reaching Time(hrs)"
            info={props.estReachingTime}
          />
          <HeadingInfo
            heading="Car Registration"
            info={props.carRegistration}
          />
          <HeadingInfo heading="Car Description" info={props.carDescription} />
          <HeadingInfo heading="Available Seats" info={props.availableSeats} />
        </div>
        <div className="col-4">
          <ImageWrapper className="Shadow">
            <ImgNull src={props.driverId.picture} alt="/"></ImgNull>
          </ImageWrapper>
        </div>
      </div>
    </div>
  );
};

export const ImageWrapper = styled.div`
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  img {
    width: 100%;
  }
`;
export default UserInfo;
