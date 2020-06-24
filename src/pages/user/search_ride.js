import React, { Component } from "react";
import SidePopup from "../../sections/side-popup";
import SearchBar from "../../sections/search-bar/search_bar";
import RideCard from "../../sections/ride-card";
import { searchRides } from "../../services/secure/ride_service";
import BookingRide from "../../sections/booking-ride";

class SearchRide extends Component {
  state = {
    showRide: true,
    searchedRides: [],
    selectedRide: {},
    showPopup: false,
  };
  showPopup = () => {
    this.setState({ showPopup: true });
  };
  searchRideHandler = (values) => {
    searchRides(values)
      .then((res) => {
        console.log(res);
        this.setState({ searchedRides: res.payload });
      })
      .catch((err) => {
        alert(err);
      });
  };
  showSelectedRide = (ride) => {
    console.log(ride);
    this.setState({ selectedRide: ride });
    this.showPopup();
  };
  closePopup = () => {
    this.setState({ showPopup: false });
  };
  render() {
    let rides = this.state.searchedRides
      ? this.state.searchedRides.map((ride, i) => (
          <RideCard
            key={i}
            {...ride}
            selectRideHandler={this.showSelectedRide}
          />
        ))
      : null;
    return (
      <div className="container">
        <SearchBar searchRideHandler={this.searchRideHandler} />
        <SidePopup show={this.state.showPopup} closePopup={this.closePopup}>
          <BookingRide {...this.state.selectedRide} />
        </SidePopup>
        {rides}
      </div>
    );
  }
}

export default SearchRide;
