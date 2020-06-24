import React from "react";
import MultiColorHeading from "../../widgets/multi_color_heading";
import { driverRideRequest } from "../../services/secure/ride_service";
import RideCard from "../../sections/ride-card";
import SidePopup from "../../sections/side-popup";
import RideInfo from "../../sections/ride-info";
class OfferedRides extends React.Component {
  state = {
    rides: [],
    showRide: false,
    selectedRide: {},
  };
  componentDidMount = () => {
    console.log("sss");
    driverRideRequest()
      .then((res) => {
        console.log(res);
        this.setState({ rides: res.payload });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  showSelectedRide = (ride) => {
    console.log(ride);
    this.setState({ showRide: true, selectedRide: ride });
  };
  closePopup = () => {
    this.setState({ showRide: false });
  };
  render() {
    let rides = this.state.rides
      ? this.state.rides.map((ride, i) => (
          <RideCard
            key={i}
            {...ride}
            selectRideHandler={this.showSelectedRide}
          />
        ))
      : null;
    let selectedRide = this.state.selectedRide;
    return (
      <div className="container">
        <MultiColorHeading black="Offered" green="rides" />
        {rides}
        <SidePopup show={this.state.showRide} closePopup={this.closePopup}>
          <RideInfo {...selectedRide} />
        </SidePopup>
      </div>
    );
  }
}

export default OfferedRides;
