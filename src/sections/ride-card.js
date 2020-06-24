import React from "react";
import styled from "styled-components";
import ImgNull from "../widgets/img_null";
import HeadingInfo from "../widgets/heading_info";

const RideCard = (props) => {
  let selectRide = () => {
    props.selectRideHandler(props);
  };

  return (
    <RideContainer
      className="d-flex flex-wrap p-3 shadow-lg bg-white my-2"
      onClick={() => selectRide()}
    >
      <InfoContent className="order-lg-1 order-md-1 order-1">
        <HeadingInfo heading="Departure" info={props.departure}></HeadingInfo>
        <HeadingInfo
          heading="Destination"
          info={props.destination}
        ></HeadingInfo>
      </InfoContent>

      <InfoContent className="order-lg-2 order-md-2 order-3">
        <HeadingInfo
          heading="Departure Date"
          info={props.departureDate}
        ></HeadingInfo>
        <HeadingInfo
          heading="Est. Reaching Time(hrs)"
          info={props.estReachingTime}
        ></HeadingInfo>
      </InfoContent>

      <InfoContent className="order-lg-3 order-md-3 order-4">
        <HeadingInfo
          heading="Driver Name"
          info={props.driverId.userName}
        ></HeadingInfo>
        <HeadingInfo
          heading="Available Seats"
          info={props.availableSeats}
        ></HeadingInfo>
      </InfoContent>

      <InfoContent className="order-lg-4 order-md-3 order-2">
        <ImageWrapper className="shadow">
          <ImgNull src={props.driverId.picture} alt="/"></ImgNull>
        </ImageWrapper>
      </InfoContent>
    </RideContainer>
  );
};
export const RideContainer = styled.div`
  border-radius: 30px;
  curosr: pointer;
`;

export const InfoContent = styled.div`
  flex: 0 1 25%;
  @media (max-width: 992px) {
    flex: 0 1 33%;
  }
  @media (max-width: 768px) {
    flex: 0 1 50%;
  }
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
  max-height: 230px;
  height: 100%;
  border-radius: 20px;
  width: 100%;
  img {
    width: 100%;
  }
`;

export default RideCard;
