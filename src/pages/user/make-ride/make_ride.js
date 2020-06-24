import React from "react";
import styled from "styled-components";
import MultiColorHeading from "../../../widgets/multi_color_heading";
import MakeRideForm from "./make_ride_form";
import { getAllCities } from "../../../services/secure/city_service";
import { makeRideRequest } from "../../../services/secure/ride_service";
class MakeRide extends React.Component {
  state = {
    cities: [],
  };
  subscription = [];
  componentDidMount() {
    getAllCities()
      .then((res) => {
        this.setState({ cities: res.payload });
      })
      .catch((err) => alert(err));
  }
  makeRideHandler = (driveData) => {
    let formData = driveData;
    makeRideRequest(formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <DriveContainer className="container shadow p-3">
        <MultiColorHeading black="Make" green="Ride" />
        <MakeRideForm
          makeRideHandler={this.makeRideHandler}
          cities={this.state.cities}
        />
      </DriveContainer>
    );
  }
}

export const DriveContainer = styled.div`
  border-radius: 20px;
`;

export default MakeRide;
