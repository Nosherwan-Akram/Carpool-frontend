import React, { Component } from "react";
import styled from "styled-components";
import RideCard from "../../sections/ride-card";
import MultiColorHeading from "../../widgets/multi_color_heading";
import CancelRide from "../../sections/cancel-ride";
import { bookedRideRequest } from "../../services/secure/ride_service";
import SidePopup from "../../sections/side-popup";

class BookedRides extends Component {
  state = {
    rides: [],
    showCancelRide: false,
    selectedRide: {},
  };
  componentDidMount = () => {
    bookedRideRequest()
      .then((res) => this.setState({ rides: res.payload }))
      .catch((err) => {
        console.log(err);
      });
  };
  showSelectedRide = (ride) => {
    this.setState({ selectedRide: ride, showCancelRide: true });
  };
  closePopup = () => {
    this.setState({ showCancelRide: false });
  };
  render = () => {
    let rides = this.state.rides
      ? this.state.rides.map((ride) => (
          <RideCard
            key={ride._id}
            {...ride.rideId}
            selectRideHandler={this.showSelectedRide}
          />
        ))
      : null;
    return (
      <BookesRideContainer className="container">
        <MultiColorHeading black="Booked" green="Rides" />
        {rides}
        <SidePopup
          show={this.state.showCancelRide}
          closePopup={this.closePopup}
        >
          <CancelRide {...this.state.selectedRide} />
        </SidePopup>
      </BookesRideContainer>
    );
  };
}

export const BookesRideContainer = styled.div``;
export default BookedRides;
